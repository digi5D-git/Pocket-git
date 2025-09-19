---
cssclass:
cat:
tags:
URL: https://www.crockford.com/ec/dining.html
Abstract: |-
  A solution to Dijkstra's Dining Philosophers Problem that provides for 
    deadlock avoidance and fairness. It does not require that the philosopher 
    classes be trusted. Satan is invited to supply a class. An example of 
    the failure of class-signing. The classes are written in E, 
    an extended Java subset that provides 
    message passing, orthogonal persistence, and capability-based security.
Extracted_On: 25.1409
Web_Title: Satan Comes to Dinner
uID:: Satan Comes to Dinner
generated:: 250914 // 06.04
mod:: 250914 // 06.08
---

in E

Douglas Crockford

## Abstract

A solution to Dijkstra's Dining Philosophers Problem that provides for deadlock avoidance and fairness. It does not require that the philosopher classes be trusted. Satan is invited to supply a class. An example of the failure of class-signing. The classes are written in [E](https://www.crockford.com/ec/e_white_paper.html), an extended [Java](http://www.javasoft.com/) subset that provides message passing, orthogonal persistence, and capability-based security.

## The Dining Philosophers Problem

The Dining Philosophers Problem is one of the standard exercises in the teaching of concurrent programming. It is instructive in the design of things like operating systems and distributed systems. It is an interesting problem because it introduces management of scarce, shared resources. It is tricky because most naive implementations will result in deadlock. The statement of the problem usually goes like this:

> There is a group of philosophers (usually 5) who eat together at a round table. There are forks placed between the philosophers. Philosophers spend their time either thinking or eating. In order to eat, a philosopher must pick up exactly two forks, one on his immediate left, and the other on his immediate right. When he is done eating, he will put his forks down so that his neighbors may use them, and he thinks again.

The Dining Philosophers Problem (aka The Dining Quintuple Problem) was designed in 1965 by Edsger W. Dijkstra to demonstrate the horror that is deadlock. In some versions of the problem, the forks are replaced with chopsticks. This change does not substantively alter the problem, although it can simplify the graphics. Some versions have the philosophers eating spaghetti or rice. In this version, they are dining on shrimp.

The programming problem is to construct a simulation that will allow philosophers to move between their eating and thinking states while properly controlling the forks.

A typical solution has each philosopher doing something like this:

    forever {
        busy thinking
        wait for left fork
        wait for right fork
        busy eating
        drop left fork
        drop right fork
    }

The busy statements consume time. The length of time is often random. The wait statements are often implemented using semaphores or other mutual exclusion gadgets, causing the program to block until the fork becomes available.

If every philosopher picks up his left fork and then waits for the right fork to become available, then the system will deadlock. Computation cannot go forward because the philosophers will never get their second forks. The fact that the busy periods are of random duration may reduce the occurrence of deadlock, but it does not prevent it. Occasional deadlock is actually a bigger problem, because it is much more difficult to replicate, diagnose, and fix. Deadlock is one of the greatest programming hazards in concurrent systems.

Some solutions modify some of the philosophers, so that they always pick up their right forks first. This does avoid deadlock, but it is a special solution. It cannot be generalized to avoid deadlock in other situations. Other implementations introduce waiters, rooms, chairs, tokens, and other objects to help manage the deadlock problem. These solutions are complex, and also not sufficiently generalizable.

Most solutions depend on the philosophers behaving correctly. For example, if a philosopher picks up his forks and never puts them down, the philosophers sitting beside him will die of starvation. If either happens to be holding a fork (which is likely), then all of the other philosophers will starve, too.

So we will redefine the problem. We still want to avoid deadlock, but we also want to be able to invite anyone to code their own philosopher class, and to have it run fairly with others.

## An Example of the Failure of Class Signing

Suppose that you invite Satan to contribute one of the philosopher classes. How can you be confident that his code will not contaminate the shared environment, will not cause starvation among the other philosophers, and will not spoil everyone else's fun? Even more important, how can you be sure that Satan's code will not run amok and drain your bank account, reveal your private key, and trash your hard disk?

It is not sufficient to simply stuff Satan's code into a sandbox. He is not giving you an applet. He is giving you a class that needs to work cooperatively, even under the cloud of mutual suspicion, with other objects.

The goal is not to keep Satan out. You want to invite Satan in, but without compromising your security. You don't want to choose between safety and the benefits of openness. You want both.

Satan offers to prove to you that his class is safe by presenting an Authenticode certificate that will certify that Satan signed the class. You could verify that the signature is truly Satan's, but proof that it came from Satan is not proof that it is safe.

Satan, pretending to be offended by your skepticism, asks "Whose signature do you trust? Just say the name, and I will have them sign my class. Would you like Microsoft to sign it? There's a guy over there who owes me a favor."

You come to the conclusion that a signature cannot by itself transform a suspect class into a fully trusted class, so you decide that you need a more credible security mechanism.

## Capabilities

That mechanism is _capabilities_. A capability is the unforgable, transferable, non-revocable right to communicate with an object. We will create a framework that will support anyone's Philosopher code, certified or not. By relying on good capability-based design, rather than certification, we have less overhead and a better system.

![](https://www.crockford.com/ec/fig1.gif)

(fig. 1)

In fig. 1 we see an example of a capability relationship. The ovals represent objects. The arrow indicates an object reference. Object C has a reference to Object A, and therefore Object C has the capability to communicate with Object A. An object can receive a reference to an object by having the reference passed to it, or by instantiating a new object.

Assuming that Object C is not trusted, we cannot be certain that it will destroy its reference to Object A when requested to. Capabilities are not directly revokable. But they can be indirectly revocable, as can be seen in fig. 2:

![](https://www.crockford.com/ec/fig2.gif)

(fig. 2)

Object C is given a reference to Object T. Normally, Object T passes Object C's messages on to Object A. Object B can send a message to Object T that causes Object T to destroy its own reference to Object A. Object C is left with a reference to the now useless Object T. Object C's capability to communicate with Object A has been revoked. Object B doesn't need to trust Object C if it can trust Object T.

## The Cast

We will now introduce a new object to the Dining Philosophers: The Fork Dispenser. It is not safe to share forks, so the Fork Dispenser dispenses new disposable forks. As fig. 3 shows, each philosopher must interact with two fork dispensers in order to interact with the plate of shrimp. Each fork dispenser is shared by two philosophers.

![](https://www.crockford.com/ec/fig3.gif)

(fig. 3)

Each philosopher is assigned two fork dispensers. Philosophers do not have the capabilities necessary to interact directly with the other philosophers, the plates of shrimp, or with the system in general.

A philosopher sends requests to its fork dispensers, which respond by sending fork capabilities. The forks contain capabilities to the plate of shrimp, which the fork dispenser can revoke.

![](https://www.crockford.com/ec/fig4.gif)

(fig. 4)

Joining the fork dispensers in the cast are forks, plates, and philosophers, using these interfaces:

```java

public einterface ForkDispenser {
	emethod service (Object, Philosopher, Plate);
	emethod forkPlease (Philosopher);
	emethod forkReturn (Philosopher);
}
 
public einterface Fork {
	emethod shrimpPlease (int);
	emethod hereIsYourShrimp (int);
	emethod revoke ();
}
 
public einterface Plate {
	emethod shrimpPlease (Fork theFork, int serialNr);
}
 
public einterface Philosopher {
	emethod hereIsYourForkDispenser (ForkDispenser);
	emethod hereIsYourFork (Fork);
	emethod hereIsYourShrimp (int);
}

## Fork Dispenser

public eclass OurForkDispenser implements ForkDispenser {
	private Object trusted = null;
	private Philosopher nowServing = null;
	private Philosopher firstPhilosopher = null;
	private Philosopher secondPhilosopher = null;
	private Plate firstPlate = null;
	private Plate secondPlate = null;
	private Fork theFork = null;
	private Timer theTimer = new Timer();
	private int timerSerialNr;
	private boolean otherIsWaiting = false;
	
    public ForkDispenser (eobject trusted) {
        this.trusted = trusted;
    }
```

The service message transmits a philosopher and plate pair. The philosopher must never get a direct capability to the plate. This information allows the fork dispenser to determine which plate to use. The service message should only come from the trusted source that created the fork dispenser. Checking this prevents Satan from trying to confuse the fork dispenser by sending his own service messages.

The fork dispenser sends its own reference to the philosopher. This gives the philosopher the capability to interact with the fork dispenser.

```java
    emethod service (Object theSource, Philosopher thePhilosopher, 
            Plate thePlate) {
        if (theSource == trusted) {
            thePhilosopher <- hereIsYourForkDispenser (this);
            if (firstPhilosopher == null) {
                firstPhilosopher = thePhilosopher;
                firstPlate = thePlate;
            } else {
                secondPhilosopher = thePhilosopher;
                secondPlate = thePlate;
            }
        }
    }
```

A philosopher requests a fork. Determine which plate he uses. If the requester is not associated with either plate, then ignore the request. (This prevents Satan from pretending that he is both philosophers.)

If a fork is not in use, then dispense one. If the requester is the same as current fork holder, then remind him that he already has a fork. (This can occur in some recovery strategies.)

Otherwise, the situation is that a request was made for a fork while a fork is in use by another philosopher. Make a note that the other philosopher is waiting and set a watchdog timer that will start the revocation of the current fork in 10,000 milliseconds.

```java
    emethod forkPlease (Philosopher who) {
        int thePlate;
        if (who == firstPhilosopher) {
            thePlate = firstPlate;
        } else if (who == secondPhilosopher) {
            thePlate = secondPlate;
        } else {
            return;
        }
        
        if (nowServing == null) {
            nowServing = who;
            theFork = new OurFork (nowServing, thePlate);
            nowServing <- hereIsYourFork (theFork);
        } else if (nowServing == who) {
            nowServing <- hereIsYourFork (theFork);
        } else {
            otherIsWaiting = true;
            timerSerialNr += 1;
            theTimer.in (10000, (invocation 
                    (this <- timeOut (theTimer, timerSerialNr)));
        }
    }
```

A philosopher returns a fork, allowing someone else to eat. The protocol does not require this kind of politeness, but it is nice, isn't it?

First, check that the person returning the fork is the recorded holder of the fork. (This prevents Satan from pretending to be the other philosopher.) Then revoke the fork. (This prevents Satan from holding on to the capability.) If the other philosopher was waiting, then issue him a new fork and cancel the timer.

```java
    emethod forkReturn (Philosopher thePhilosopher) {
        if (nowServing == thePhilosopher) {
            theFork <- revoke ();
            if (otherIsWaiting) {
                timerSerialNr += 1;
                serveOther();
            } else {
                nowServing = null;
                theFork = null;
            }
        }
    }
```

The watchdog timer has expired. If the event was not canceled, then revoke the fork and issue a new one to the other philosopher. (All timer messages except the one with a serial number matching timerSerialNr have been canceled.)

    emethod timeOut (Timer theSource, int messageSerialNr) {
        if (theSource == theTimer &&
                messageSerialNr == timerSerialNr) {
            theFork <- revoke ();
            serveOther();
        }
    }    

Issue a fork to the other philosopher. Because a fork dispenser serves two philosophers, each with its own plate, figure out which plate to use.

    private void serveOther () {
        if (nowServing == firstPhilosopher) {
            nowServing = secondPhilosopher;
            thePlate = secondPlate;
        } else {
            nowServing = firstPhilosopher;
            thePlate = firstPlate;
        }
        theFork = new OurFork(nowServing, thePlate);
        nowServing <- hereIsYourFork (theFork);
        otherIsWaiting = false;
    }
}

The ForkDispenser has three facets, or sets of interfaces:

|Sender|E Methods|
|---|---|
|The trusted source|service|
|Timer|timeOut|
|Philosopher|forkPlease  <br>forkReturn|

In particular, OurForkDispenser does not want a Philosopher to be able to send the service or timeOut messages. This is accomplished by having the senders of these messages include the sender's reference as the first parameter, which OurForkDispenser can easily validate.

## Fork

Forks are disposable objects that give a philosopher indirect access to a plate of shrimp.

public eclass OurFork implements Fork {
	private int previousSerialNr = Integer.MIN_VALUE;
	private Philosopher thePhilosopher = null;
	private Plate thePlate = null;
 
	public Fork (Philosopher thePhilosopher, Plate thePlate) {
		this.thePhilosopher = thePhilosopher;
		this.thePlate = thePlate;
	}

The philosopher requested a shrimp. To assist the plate in pairing the messages, the fork verifies that the message contains a serial number that is larger than the previous serial number. If the number is ok, then a message is sent to the plate. If not, disconnect from the plate. (This prevents the sending of consecutive messages with the same serial number.)

The fork will be unable to forward the message if its reference to the plate has been revoked.

(The serial number test will fail after 4 billion shrimp requests to a fork due to an int rollover. That could fixed by adding a rollover test here, or by changing serial numbers to long. A well formed philosopher will easily recover. It seems that this warning is requiring more effort than the fix. It is unlikely that the fix would ever be needed.)

    emethod shrimpPlease (int serialNr) {
        if (previousSerialNr < serialNr) {
            previousSerialNr = serialNr;
            if (thePlate != null) {
                thePlate <- shrimpPlease (this, serialNr);
            } else {
                thePhilosopher <- noShrimp();
            }
        } else {
            thePlate = null;
            thePhilosopher <- noShrimp();
        }
    }

A shrimp is delivered successfully from the plate of shrimp. If this fork has not been revoked, pass the message on to the philosopher. This indirection assures that the philosopher was holding two valid forks at the same time.

    emethod hereIsYourShrimp (int serialNr) {
        if (thePlate != null) {
            thePhilosopher <- hereIsYourShrimp (serialNr);
        } else {
            thePhilosopher <- noShrimp ();
        }
    }

Revoke the fork by making it useless. By erasing the fork's reference to the plate, it is no longer able to send the messages that make shrimp for the philosopher. This emethod is intended to be used by the fork dispenser.

    emethod revoke () {
        thePlate = null;
    }
}

## Plate

public eclass OurPlate implements Plate {
	private int firstSerialNr = Integer.MIN_VALUE;
	private Fork firstFork = null;

Respond to a request for a shrimp. The philosopher sends a message through each of his forks.

An E object receives one message at a time. After the plate has seen two matching serial numbers, it sends a piece of shrimp. Because a fork is unable to send the same serial number twice in succession, the plate can determine that two forks were used. Further, by confirming that the ForkDispenser references do not match, forks from two different fork dispensers were used. We prove that the first fork is still valid by using it to return the shrimp.

    emethod shrimpPlease (Fork theFork, int serialNr) {
        if (firstSerialNr != serialNr) {
            firstSerialNr = serialNr;
            firstFork = theFork;
        } else {
            firstFork <- hereIsYourShrimp (serialNr);
            firstFork = null;
            firstSerialNr = Integer.MIN_VALUE;
        }
    }
}

It might seem that a hereIsYourShrimp message is not a suitable payoff. A better payoff would be to have the plate send a reference to a shrimp object.

## Nice Philosopher

The Nice Philosopher puts down his forks and spends at least part of his time thinking.

public eclass NicePhilosopher implements Philosopher {
	private ForkDispenser firstForkDispenser = null;
	private ForkDispenser secondForkDispenser = null;
	private Fork firstFork = null;
	private Fork secondFork = null;
	private int serialNr = Integer.MIN_VALUE;
	private int timerSerialNr = 0;
	private Timer theTimer = new Timer;
	private boolean eatingMode = false;  

A philosopher is not necessarily made by a fork dispenser, but it is initialized by a fork dispenser. (This avoids a race condition on starting up.) Once the fork dispensers arrive, leap into action and begin to think.

    emethod hereIsYourForkDispenser (ForkDispenser theForkDispenser) {
        if (firstForkDispenser == null) {
            firstForkDispenser = theForkDispenser;
        } else {
            secondForkDispenser = theForkDispenser;
            busyThinking();
        }
    }

To think, set up a timer to send startEating in 10 seconds.

    private void busyThinking() {
        eatingMode = false;
        timerSerialNr += 1;
        theTimer.in (10 * 1000, (invocation 
                (this <- startEating (timerSerialNr)));
    }  

Request a fork from each of the fork dispensers. Set up a timer to stop eating in 20 seconds.

    emethod startEating () {
        firstFork  = null;
        secondFork = null;
        firstForkDispenser  <- forkPlease (this);
        secondForkDispenser <- forkPlease (this);
        serialNr = Integer.MIN_VALUE;
        timerSerialNr += 1;
        theTimer.in (20 * 1000, (invocation 
                (this <- stopEating (timerSerialNr)));
    }

Receive the forks. After both have arrived, serious eating can begin.

    emethod hereIsYourFork (Fork theFork) {
        if (firstFork == null) {
            firstFork = theFork;
        } else {
            secondFork = theFork;
            eatingMode = true;
            eat();
        }
    }

Eat by requesting shrimp from the forks. Dijkstra requires that two forks be used. A serial number is added to the request to help the plate pair up the messages.

    void eat() {
        serialNr += 1;
        firstFork  <- shrimpPlease (serialNr);
        secondFork <- shrimpPlease (serialNr);
    }

A shrimp is delivered successfully from the plate of shrimp. What to do next? Get more shrimp!

    emethod hereIsYourShrimp (int serialNr);
        if (eatingMode) {
            eat();
        }
    }

A noShrimp message will can occur if a fork was revoked. If that happens, cancel the timer and stop eating.

    emethod noShrimp () {
        timerSerialNr += 1;
        this <- stopEating();
    }   

The time has come to put down the forks and stop eating. It isn't really necessary to put down the forks, because the fork dispenser will revoke them anyway. But returning the forks allows the other philosophers to begin eating a little sooner, so it is a polite thing to do. Revocation may already have occurred. That's ok.

    emethod stopEating () {
        firstForkDispenser  <- forkReturn (this);
        secondForkDispenser <- forkReturn (this);
        busyThinking();
    }            
}

## Evil Philosopher

This is Satan's own implementation of Philosopher. It is so constrained by capability security that it is not really very evil. About the worst you can say about it is that it is very impolite. It is an infernal eating machine. It never rests. It never sets down its forks. Even so, the fork dispensers can guarantee fairness (starvation avoidance). As nasty as Satan is, he cannot prevent the other philosophers from getting their turns.

public eclass EvilPhilosopher implements Philosopher {
	private ForkDispenser firstForkDispenser = null;
	private ForkDispenser secondForkDispenser = null;
	private Fork firstFork = null;
	private Fork secondFork = null;
	private int serialNr = Integer.MIN_VALUE;

First collect two fork dispensers. Then begin to eat. Without the fork dispensers, he can't get plate-aware forks, and without those forks, he cannot get shrimp.

    emethod hereIsYourForkDispenser (ForkDispenser theForkDispenser) {
        if (firstForkDispenser == null) {
            firstForkDispenser = theForkDispenser;
        } else {
            secondForkDispenser = theForkDispenser;
            startEating();
        }
    }

Request a fork from each of the fork dispensers. It does no good to request two forks from a single dispenser, because the plate of shrimp can tell the difference.

    void startEating() {
        firstFork  = null;
        secondFork = null;
        firstForkDispenser  <- forkPlease (this);
        secondForkDispenser <- forkPlease (this);
        serialNr = Integer.MIN_VALUE;
    }

Receive the forks. After both have arrived, serious eating can begin.

    emethod hereIsYourFork (Fork theFork) {
        if (firstFork == null) {
            firstFork = theFork;
        } else {
            secondFork = theFork;
            eat();
        }
    }

Eat by requesting shrimp from the forks.

    void eat () {
        serialNr += 1;
        firstFork  <- shrimpPlease (serialNr);
        secondFork <- shrimpPlease (serialNr);
    }

This philosopher has no thinking mode, so eventually the noShrimp message will arrive when one of the fork dispensers revokes a fork. When that happens, startEating again.

    emethod noShrimp () {
        startEating();
    }

A shrimp is delivered successfully from the plate of shrimp. What to do next? More shrimp!

    emethod hereIsYourShrimp (int serialNr);
        eat();
    }
}

## Main

This Main is sufficient to get everything running on a single machine. In the next chapter, we will distribute this over a number of machines.

public class Main {
	public final static int NR_DINERS = 5;
	public final static int NR_FORKS = NR_DINERS;
 
    public static void main (String argv[ ]) {
        ForkDispenser  forkDispensers[ ] = new ForkDispenser[NR_FORKS];
        Philosopher    thePhilosopher = null;
        Plate          thePlate = null;
 
		for (int i = 0; i < NR_FORKS; i += 1) {
			forkDispensers [i] = new OurForkDispenser(this);
		}
 
        for (int i = 0; i < NR_DINERS; i += 1) {
            if (i == 0) {
                thePhilosopher = new EvilPhilosopher();
            } else {
                thePhilosopher = new NicePhilosopher();
            }
            thePlate = new OurPlate();
            forkDispensers [i]
                    <-  service (this, thePhilosopher, thePlate);
            forkDispensers [(i + 1) % NR_FORKS] 
                    <-  service (this, thePhilosopher, thePlate);
        }
    }
}

## Flow

Fig. 5 shows the flow of messages as a philosopher engages in the main part of the dining protocol.

![](https://www.crockford.com/ec/fig5.gif)

(fig. 5)

1. The philosopher sends [forkPlease](https://www.crockford.com/ec/dining.html#1) requests to both fork dispensers.
2. The fork dispenser creates a [new fork](https://www.crockford.com/ec/dining.html#2) object with capabilities to the philosopher and the plate of shrimp.
3. The fork dispenser sends a capability to the fork in a [hereIsYourFork](https://www.crockford.com/ec/dining.html#3) message to the philosopher.
4. The philosopher sends a [shrimpPlease](https://www.crockford.com/ec/dining.html#4) message to each fork.
5. The fork determines that it has not been revoked, and that it has never seen the current serial number. If all is ok, it sends a [shrimpPlease](https://www.crockford.com/ec/dining.html#5) message containing a capability to itself to the plate of shrimp.
6. The plate of shrimp will receive two messages. If the serial numbers on the messages match, then it knows that two different forks were used. It sends a [hereIsYourShrimp](https://www.crockford.com/ec/dining.html#6) message to the fork that sent the first of the two messages to prove that the first fork is still valid.
7. If the fork has not been revoked, then send a [hereIsYourShrimp](https://www.crockford.com/ec/dining.html#7) message to the philosopher.

The fork dispenser is able to revoke a fork at any time by sending a revoke message. In this way, the fork dispenser can impose a scheduling policy that resembles time slicing. This assures fairness, in that all philosophers will get chances to eat.

The only capabilities granted to a philosopher are the fork dispensers and forks. This prevents Satan's philosopher class from doing anything harmful.

## Consumption of Resources Attack

Java is vulnerable to Consumption of Resources Attacks, in which Satan's class attempts to consume all of the available memory or compute time. This can degrade performance, and in many cases cause your machine crash. This can be minimized if Satan is required to host this philosopher on his own machine. Then the worst thing he can do is attempt to flood the network with messages.

A later version of E will provide a remedy to Consumption of Resources Attacks.

## Collusion

Suppose that Satan is allowed to provide two philosophers. Can they collude to prevent the nice philosophers from eating?

If the philosophers are run in a machine that is not under Satan's control, then the answer is no. E's containment mechanism assures that the philosophers cannot communicate directly with each other. They can only communicate with fork dispensers (and the forks they dispense), which do not support collusion.

The answer is less clear if Satan is allowed to execute his philosopher code remotely. Because Satan can hack his own machine, he can locally break containment, allowing the evil philosophers to communicate with each other. Suppose there is a nice philosopher sitting between the two evil philosophers. By sharing information about the condition of their forks, they can play a synchronized game in which the one on the left puts his fork down then immediately requests another when the one on the right gets a fork. When it is issued, the one on the right puts down his fork and immediately requests another. In this way, they can prevent the philosopher in the middle from getting two forks at the same time.

A similar kind of collusion can be found in an online poker game. While we can have confidence that the cards are dealt fairly, we cannot be confident that some of the players will not collude. The cheaters may be communicating by telephone, or may even be a single person pretending to be multiple people. By colluding, they have more information about the distribution of cards and the state of the deck, and so may be able to shave the odds in their favor. This kind of collusion could occur without the hacking of software.

Similarly, collusion in the Dining Philosopher example could occur without the hacking of software. The conspirators are able to speak to each other, and so can say things like "I just received my fork. Put down yours and request a new one."

ForkDispenser can be modified to make such collusion less effective. If every dispenser used a different time out value, or random time out values, then the attack will fail at least occasionally, and starvation will be prevented.

## References

Campione, Mary and Walrath, Kathy. [Deadlock and the Dining Philosophers. <URL: http://www.javasoft.com/docs/books/tutorial/java/threads/deadlock.html >](http://www.javasoft.com/docs/books/tutorial/java/threads/deadlock.html) from _[The Java Tutorial: Object-Oriented Programming for the Internet](http://www.javasoft.com/docs/books/tutorial/)_. Addison-Wesley.

Englin, Jessica. [Edsger W. Dijkstra. <URL: http://cda.mrs.umn.edu/~englinjm/EWD.html >](http://cda.mrs.umn.edu/%7Eenglinjm/EWD.html)

Electric Communities. [Dicing with the Devil. <URL: http://www.communities.com/products/tools/e/devil.html>](http://www.communities.com/products/tools/e/devil.html)

Electric Communities. [The E Programmer's Manual. <URL: http://www.communities.com/products/tools/e/programmers/>](http://www.communities.com/products/tools/e/programmers/)

Electric Communities. [Introduction To Capability Based Security. <URL: http://www.communities.com/company/papers/security/index.html>](http://www.communities.com/company/papers/security/index.html)

Falk, Bennett. [Table Manners. <URL: http://www.dnai.com/~bfalk/dining.html>](http://www.dnai.com/%7Ebfalk/dining.html)

Feldman, M.B. [Introduction to Concurrent Programming <URL: http://www.seas.gwu.edu/faculty/mfeldman/cs2-book/chap15.html>](http://www.seas.gwu.edu/faculty/mfeldman/cs2-book/chap15.html) from _[Software Construction and Data Structures with Ada 95](http://www.seas.gwu.edu/faculty/mfeldman/concurrency)_. Addison-Wesley.

Gloyer, Brian. [The Dining Philosophers. <URL: http://www.javasoft.com/applets/contest/DiningPhilosophers/>](http://www.javasoft.com/applets/contest/DiningPhilosophers/)

Hardy, Norm. [Capability Theory. <URL: http://www.MediaCity.com/~norm/CapTheory/>](http://www.mediacity.com/%7Enorm/CapTheory/)

Herring, Charles. [Implementing Discrete-Event Simulation in Java. <URL: http://csl.ncsa.uiuc.edu/~herring/java.html>](http://csl.ncsa.uiuc.edu/%7Eherring/java.html)

Holdsworth, D. [Dijkstra's Dining Philosophers. <URL: http://www.leeds.ac.uk/ucs/people/DHoldsworth/diners/diners.html>](http://www.leeds.ac.uk/ucs/people/DHoldsworth/diners/diners.html)

Miller, Mark. [Taxonomy of Computer Security Problems. <URL: http://www.caplet.com/security/taxonomy/index.html >](http://www.caplet.com/security/taxonomy/index.html)

McGregor, Tony. [The Dining Philosophers Problem <URL: http://byerley.cs.waikato.ac.nz/~tonym/201/sync/node15.html>](http://byerley.cs.waikato.ac.nz/%7Etonym/201/sync/node15.html) from [201 - Computer Systems](http://www.cs.waikato.ac.nz/cs/studies/0657.201/).
