---
tags:
URL: https://www.crockford.com/ec/devil.html
Abstract: |-
  A virtual die is a software device which produces a uniform stream
  of random numbers in the range of 1 through 6. A virtual die can be
  used in games of chance.
Extracted_On: 25.1409
Web_Title: Dicing with the Devil
set:
  - code
---

An Introduction to Secure Protocol Design Using E Examples

�1996 Electric Communities  
All Rights Reserved Worldwide and Beyond

## Prologue

A virtual die is a software device which produces a uniform stream of random numbers in the range of 1 through 6. A virtual die can be used in games of chance.

The formula for rolling a virtual die is pretty simple:

          (randomGenerator.nextLong() % 6) + 1

Depending on the quality of the source of random numbers, you can get a good, unpredictable stream of numbers.

Suppose we want to have a game in which two players play together using two computers connected via the Internet. One way of doing that is to have one of the computers have a special role. In addition to representing one of the players, it is also the Game Master (or Dealer, or Bank, or House), which is the keeper of privileged knowledge about the state of the game.

Just to make this scenario a little more interesting, imagine that you are one of the players, and that Satan is the other, and you are playing a dice game for your immortal soul. When Satan suggests that his PC (a 666-GHz Pentium Pro running Windows 95) run the Game Master, you become concerned about the fairness of the game. You don't want Satan telling you what you rolled.

Satan suggests that a trusted third party's computer run the Game Master and roll the die, but you are pretty sure that Satan would try to corrupt or intimidate the third party and hack his computer.

You insist, in the interest of fairness, that the Game Master be distributed, that it run in both computers, so that you can roll your die on your machine. Now Satan objects. He doesn't trust your computer to roll your die honestly, not when your immortal soul is at stake.

You both agree that you need a fully distributed Game Master that would have both computers cooperate in every roll of the die in order to keep the results fair. You further agree that the new Game Master will be implemented using E, because E is well suited to the development of secure, distributed applications.

## Act I

Satan proposes that two _eobjects_ cooperate in the rolling of the die. Eobjects are objects which communicate by _message passing_. Message passing is a very effective communications and concurrency model for network programming.

The protocol is very simple. The two eobjects both do the following:

> ---
> 
> Select a random number X.
> 
> Send X to the other.
> 
> Receive the other's X.
> 
> Combine the Xs to form the random number that is used to determine the final result.
> 
> ---

It appears that neither player can force the result of the roll.

The program has two parts: main, which sets up the eobjects and starts the protocol, and DieRoller, which actually implements the die rolling protocol. `main` contains the minimum structure necessary to test DieRoller. We will test DieRoller on a single machine now, and later replace main with the Game Master framework that will instantiate the eobjects on different machines.

          /* Dicing with the Devil: Act I */

          import java.util.Random;

          public class DieRolling
          {
/_1_/ public static void main(String argv[ ])
			{
			  DieRoller first = new DieRoller();
			  DieRoller second = new DieRoller();

/_2_/ first <- dieRollStart (second);
				second <- dieRollStart (first);
			}
		  }
		  eclass DieRoller
		  {
			Random randomGenerator = new Random();

/_3_/ long X = randomGenerator.nextLong();

/_4 6_/ emethod dieRollStart (DieRoller otherRoller)
			{
/_5 7_/ otherRoller <- dieRollFinish (X);
			}

/_10 8_/ emethod dieRollFinish (long otherX)
			{
/_11 9_/ long finalResult = combine(otherX, X);

              System.out.println("Roll result = " + finalResult);
            }

            long combine(long a, long b)
            {
              return (((a ^ b) % 6) + 1); /*1..6*/
            }
          }

The Walkthrough:

1. `main` declares and initializes first and second, both of eclass `DieRoller`.
2. `main` sends the message `dieRollStart` to first, passing it a reference to second, and sends the same message to second, passing it a reference to first. This informs each of the rollers about the other. These messages sends are immediate: `main` doesn't wait for the first message to be delivered before sending the second one. It just keeps going. `main` is complete.
3. The initialization of first and second will select random values for `X`.
4. The order of the delivery of the messages sent in step 2 is not guaranteed. We will assume that first receives the message first. Suddenly, first executes the emethod `dieRollStart` in response to receiving the message.
5. First sends the message `dieRollFinish` to second, passing `X`. `dieRollStart` is complete.
6. Suddenly, second executes the emethod `dieRollStart` in response to receiving the message sent in step 2.
7. Second sends the message `dieRollFinish` to first, passing `X`. `dieRollStart` is complete.
8. Suddenly, second executes the emethod `dieRollFinish` in response to receiving the message sent in step 5.
9. Second combines the two `X`s and produces the final result. In a real system this would get sent to another eobject which would use the result. But this just a sample program, so it gets printed instead. `dieRollFinish` is complete.
10. Suddenly, first executes the emethod `dieRollFinish` in response to receiving the message sent in step 7.
11. First combines the two `X`s and produces the final result. This will be the same result that second produced in step 9. `dieRollFinish` is complete.

The emethods very closely resemble the protocol, so you are confident that DieRoller accurately implements the protocol. The protocol itself is very simple and effective. Also, the E security model gives you confidence that Satan cannot use E to hack your computer over the network.

Unfortunately, it is not possible to guarantee that Satan is running this code on his computer. Because his computer is under his infernal control, he can hack it. There is no way to prevent someone from hacking his own machine, and there is no way to prove absolutely that a machine has not been hacked. Therefore, it is bad practice to place too much trust in any computer.

If Satan does hack his machine, then he could corrupt the protocol. An evil version of DieRoller might look like this:

          evilclass DieRoller
          {
            DieRoller other;

            evilmethod dieRollStart (DieRoller otherRoller)
            {
              other = otherRoller;
            }

            evilmethod dieRollFinish (long otherX)
            {
              other <- dieRollFinish (cheat(X, desiredResult));
            }
          }

(Note: `evilclass` and `evilmethod` are not legal keywords in E or Java. Satan has his own custom programming tools.)

In the evilmethod `dieRollStart`, Satan doesn't send his `X`. Instead, he just remembers the other's reference. When `dieRollFinish` arrives, he knows your random number and you don't know his. He now has enough information to compute an `X` that will force the result to be what he desires.

If you choose to hack your machine in the same way, then the game will stall because both machines will be waiting for the other to send its `X` first. Only the player going last can benefit from cheating.

## Act II

Satan is offended when you ask for design changes in DieRoller to correct the potential insecurity found in Act I, but he very quickly produces a new version with a tighter protocol. The new version of DieRoller makes use of two additional features of E: channels and ewhen.

A _channel_ is a special eobject which stores and forwards messages. Every channel has a distributor associated with it. Forwarding a distributor to an eobject will cause all of the messages sent to the associated channel to be forwarded to that eobject. Channels make it possible to send a message to an eobject that doesn't exist yet. Uninitialized eobjects are channels by default.

_ewhen_ is an E statement which creates a new object (called a closure) which will execute a block of code when a particular eobject has a value.

Satan's new protocol uses a one-way hash which will prevent the changing of `X`. A one-way hash is a function that is extremely difficult to reverse. The protocol can be divided into two halves: The half that first runs, and the half that second runs. This is first's half:

> ---
> 
> Select a random number X.
> 
> Send the one-way function of X to second.
> 
> After receiving the second's X, reveal X.
> 
> The X s are combined to produce the final result.
> 
> ---

This is second's half:

> ---
> 
> Select a random number X.
> 
> After receiving the hash of first's X, reveal X.
> 
> The Xs are combined to produce the final result.
> 
> Recompute the one-way hash of first's X to verify that first did not change its X when it learned second's X.
> 
> ---

Shuffling the halves together, we can see the complete protocol:

> ---
> 
> The two eobjects, first and second, each select a random number X.
> 
> first reveals a one-way hash of its X.
> 
> Then second reveals its X.
> 
> Then first reveals its X.
> 
> The Xs are combined to produce the finalResult.
> 
> Second recomputes the one-way hash of first's X to verify that first did not change its X after it learned second's X. That would be cheating.
> 
> ---

Satan assures you that if he attempts to cheat, you will be able to detect it. Once again, you are invited to observe that the emethods closely resemble the protocol.

          /* Dicing with the Devil: Act II */

          import java.util.Random;
          import ec.e.lang.ELong;

          public class DieRolling
          {
/_1_/ public static void main(String argv[ ])
			{
			  DieRoller first = new DieRoller();
			  DieRoller second = new DieRoller();

/_2_/ first <- dieRollFirst (second);
			}
		  }

          eclass DieRoller
          {
            Random randomGenerator = new Random();

/_3_/ emethod dieRollFirst (DieRoller otherRoller)
			{
/_4_/ long X = randomGenerator.nextLong();

/_5_/ ELong concealedX, hisX;

              otherRoller <- dieRollSecond (oneWayHash(X),
                concealedX, &hisX);

/_6_/ ewhen hisX (long otherX)
/_11_/ {
/_12_/ &concealedX <- forward (new ELong(X));

/_13_/ long finalResult = combine(X, otherX);

                System.out.println("Roll result = " + finalResult);
              }
            }

/_7_/ emethod dieRollSecond (long otherHash,
			  ELong firstX, EDistributor myX)
			{
/_8_/ long X = randomGenerator.nextLong();

/_9_/ myX <- forward (new ELong(X));

/_10_/ ewhen firstX (long otherX)
/_14_/ {
/_15_/ long finalResult = combine(otherX, X);

                System.out.println("Roll result = " + finalResult);

/_16_/ if (oneWayHash(otherX) != otherHash) {
				  System.out.println("There was cheating.");
				}
			  }
			}

            long oneWayHash(long a)
            {
              long h = a >>> 32;
              return ((a*a) ^ ((a ^ 0xDEADBEAD) * 
                (h ^ 0xFADBEBAD)) ^ (h*h) ^ a);
            }

            long combine(long a, long b)
            {
              return (((a ^ b) % 6) + 1); /*1..6*/
            }
          }

The Walkthrough:

1. `main` declares and initializes first and second, both of eclass `DieRoller`.
2. `main` sends the message `dieRollFirst` to first, passing it a reference to second. `main` is complete.
3. Suddenly, first executes the emethod `dieRollFirst` in response to receiving the message sent in step 2.
4. First chooses a random number `X`.
5. First sends the message `dieRollSecond` to second, passing a hashed `X`, the uninitialized ELong `concealedX`, and the distributor for the channel representing the uninitialized ELong `hisX`.
6. First executes an ewhen statement that says, "When `hisX` gets a value, assign its value to `otherX` and execute the following code block." `dieRollFirst` is complete.
7. Suddenly, second executes the emethod `dieRollSecond` in response to receiving the message sent in step 5.
8. Second chooses a random number `X`.
9. Second reveals its `X` by forwarding `myX`.
10. Second executes an ewhen statement that says, "When `firstX` gets a value, assign its value to `otherX` and execute the following code block." `dieRollSecond` is complete.
11. Suddenly, `hisX` has a value (as a result of step 9), so first begins execution of the code in the ewhen (as a result of line 6).
12. First forwards the value of its `X` to `concealedX`, completing its half of the protocol. The ewhen is complete.
13. First computes the `finalResult` by combining its `X` and second's `X`.
14. Suddenly, `firstX` has a value (as a result of step 12), so second begins execution of the code in the ewhen block (as a result of step 10).
15. Second computes the `finalResult` by combining its `X` and first's `X`.
16. Second verifies the `otherHash` value it received from first in step 7. If it doesn't match, then do something about it. If this were a real program, ethrow a `cheatingDetected` eexception. But this is only a sample program, so just print a message. The ewhen is complete. The protocol is complete.

One nice feature of this version is that second can't cheat. Unfortunately, first can still cheat in a number of ways.

First knows the result before second does, and if first is unhappy about the result it could cause a network failure to prevent the conclusion of the protocol. This attack doesn't help him to win, but it does allow him to avoid losing.

            evilmethod dieRollFirst (DieRoller otherRoller)
            {
              long X = randomGenerator.nextLong();
 
			  ELong concealedX, hisX;
			  otherRoller <- dieRollSecond (oneWayHash(X),
				concealedX, &hisX);
 
			  ewhen hisX (long otherX)
			  {
				if (combine(X, otherX) == desiredResult) {
				  &concealedX <- forward (new ELong(X));
				} else {
				  simulate_network_failure;
				}
			  }
			}
 

This sort of attack is difficult to avoid without the use of a trusted intermediary. You might want to deal with this contractually: If there is a network failure during the final die roll of the game, then you win. This way you won't be risking your immortal soul on a bug in a socket manager.

There may also be a more serious attack on the one-way hash. There may be two or more inputs that will produce the same output. These are called collisions. If Satan has a set of candidate `X`s that all produce the same hash, then he can freely select among them, defeating the cheating-detection feature. In preparation, Satan may have done an exhaustive search for collisions. He can then use this knowledge to change his choice of `X` without detection:

                &concealedX <- forward (new ELong(cheat
                  (desiredResult, otherX)));
 

This is similar to having Satan write his `X` on a piece of paper. When he sees your guess, he reveals the paper. If he would have lost on 666, he turns it over and says it's 999.

## Act III

"The third time's the charm," says Satan as he whips out his latest protocol, intended to fix the weakness discovered in Act II.

Both sides use this protocol:

> ---
> 
> Select two random numbers, X and R. R will be used to prevent a precomputed attack on the one-way function.
> 
> Reveal R.
> 
> After learning the other's R, reveal the one-way hash of X mixed with R. The R mixture defeats the hash collision attack from Act II.
> 
> After learning the other's hash, reveal X.
> 
> After learning the other's X, combine the Xs to produce the finalResult.
> 
> Verify that there was no cheating.
> 
> ---

This version uses nested ewhen statements. Using ewhen with channels allows for an interactive protocol without having to have many emethods. It also prevents attacks which alter the proper sequencing of messages.

          /* Dicing with the Devil: Act III */
 
		  import ec.e.lang.ELong;
		  import java.util.Random;
 
		  public class DieRolling
		  {
/_1_/ public static void main(String argv[ ])
			{
			  DieRoller first = new DieRoller();
			  DieRoller second = new DieRoller();
 
			  ELong firstHash, firstX, firstR;
			  ELong secondHash, secondX, secondR;
 
/_2_/ first <- doDieRoll (&firstHash, &firstX, &firstR,
				secondHash, secondX, secondR);
 
			  second <- doDieRoll (&secondHash, &secondX, &secondR,
				firstHash, firstX, firstR);
			}
		  }
 
		  eclass DieRoller
		  {
			Random randomGenerator = new Random();
 
/_3 7_/ emethod doDieRoll (EDistributor myHash,
			  EDistributor myX, EDistributor myR,
			  ELong hisHash, ELong hisX, ELong hisR) {
 
/_4 8_/ long X = randomGenerator.nextLong();
			  long R = randomGenerator.nextLong();
 
/_5 9_/ myR <- forward (new ELong(R));
 
/_6 10_/ ewhen hisR (long otherR) {
 
/_13 11_/ myHash <- forward (new
				  ELong(oneWayHash(otherR^X)));
 
/_14 12_/ ewhen hisHash (long otherHash) {
/_15 17_/ myX <- forward(new ELong(X));
 
/_16 18_/ ewhen hisX (long otherX) {
/_21 19_/ long finalResult = combine(X, otherX);
 
					System.out.println("Roll result = " +
					  finalResult);
 
/_22 20_/ if (oneWayHash(R^otherX) != otherHash) {
					  System.out.println("There was cheating.");
					}
				  }
				}
			  }
			}
 
			long oneWayHash(long a)
			{
			  long h = a >>> 32;
			  return ((a_a) ^ ((a ^ 0xDEADBEAD) * 
				(h ^ 0xFADBEBAD)) ^ (h_h) ^ a);
			}
 
			long combine(long a, long b)
			{
			  return (((a ^ b) % 6) + 1);
			}
		  }
 

The Walkthrough:

1. `main` declares and initializes first and second, both of eclass `DieRoller`. `main` also declares, but does not initialize, the ELongs which are exchanged in the execution of the protocol.
2. `main` sends the message `doDieRoll` to first and second. The first three parameters are used to reveal information to the other. The last three parameters will reveal the other's information. `main` is complete.
3. Suddenly, first executes the emethod `doDieRoll` in response a message sent in step 2.
4. First chooses random numbers `X` and `R`.
5. First reveals `R` by forwarding `myR`.
6. First executes an ewhen statement that says, "When `hisR` gets a value, assign its value to `otherHash` and execute the following code block." first's execution of `doDieRoll` is complete.
7. Suddenly, second executes the emethod `doDieRoll` in response to a message from step 2.
8. Second chooses random numbers `X` and `R`.
9. Second reveals `R` by forwarding `myR`.
10. Second executes an ewhen statement that says, "When `hisR` gets a value, assign its value to `otherR` and execute the following code block." `doDieRoll` is complete.
11. Suddenly, second's `hisR` has a value (as a result of step 5). That value is assigned to `otherR` and execution of the code in the ewhen block begins (as a result of step 10). second reveals the hash of `otherR` xor `X` by forwarding `myHash`.
12. Second executes an ewhen statement that says, "When `hisHash` gets a value, assign its value to `otherHash` and execute the following code block." The `hisR` ewhen is complete.
13. Suddenly, first's `hisR` has a value (as a result of step 9). That value is assigned to `otherR` and execution of the code in the ewhen block begins (as a result of step 6). first reveals the hash of its `X` by forwarding `myHash`.
14. First executes an ewhen statement that says "When `hisHash` gets a value, assign its value to `otherHash` and execute the following code block.: The `hisR` ewhen is complete.
15. Suddenly, first's `hisHash` has a value (as a result of step 11). That value is assigned to `otherHash` and execution of the code in the ewhen block begins (as a result of step 14). first reveals its `X` by forwarding `myX`.
16. First executes an ewhen statements that says "When `hisX` gets a value, assign its value to `otherX` and execute the following code block." The `hisHash` ewhen is complete.
17. Suddenly, second's `hisHash` has a value (as a result of step 13). That value is assigned to `otherHash` and execution of the code in the ewhen block begins (as a result of step 12). second reveals its `X` by forwarding `myX`.
18. Second executes an ewhen statement that says "When `hisX` gets a value, assign its value to `otherX` and execute the following code block." The `hisHash` ewhen is complete.
19. Suddenly, second's `hisX` has a value (as a result of step 15). That value is assigned to `otherX` and execution of the code in the ewhen block begins (as a result of step 18). second computes the final result.
20. Second verifies `hisHash` with `R` xor `hisX` to determine that there was no cheating. The protocol is complete.
21. Suddenly, first's `hisX` has a value (as a result of step 17). That value is assigned to `otherX` and execution of the code in the ewhen block begins (as a result of step 16). first computes the final result.
22. First verifies `hisHash` with `R` xor `hisX` to determine that there was no cheating. The protocol is complete.

This version is much stronger than Act II, but it is also more expensive. The program passes many more messages, so it is measurably, if not noticeably, slower. Is it safe? It is certainly safer. Is it safe enough? Would you bet your immortal soul on it?

One possible attack is on the Java `random` function. The protocol requires that each side draw two random numbers, `X` and `R`, immediately revealing `R`. If knowledge of weakness in the design and implementation of Java `random` makes it possible to predict `X` from `R`, then it may still be insecure.

## Epilogue

You might be wondering, "How far must we go in order to prevent an extremely unlikely attack?" These attacks are difficult and time consuming. In fact, the attack suggested in Act I has never occurred, but we believe that it is possible. The situations to watch for are the ones in which it might be worth the trouble. As the Internet grows in size and importance, there will be more and more situations which are worth the trouble.

One benefit of E is that it can make the attacks more difficult and time consuming, but E cannot by itself repel all possible attacks. Nothing can. E makes it possible to write secure, distributed applications, for some practical definition of the word "secure." Use of E does not automatically assure that programs will be secure.

For some purposes, the solution in Act I may be completely adequate, but with this caution:

> It is not unusual for the purpose or use or scope of software to change over its life. Rarely are the security properties of software systems reexamined in the context of new or evolving missions. This leads to insecure systems.

If you design systems as though your immortal soul depended on them, then you will tend to build more reliable systems.
