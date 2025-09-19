---
cssclass:
cat:
tags:
URL: https://www.crockford.com/ec/factorial.html
Abstract: |-
  The factorial function is a special case of Pochhammer's
  polynomial and of the gamma function (aka Euler's integral of the
  second kind). The conventional mathematical notation for the
  factorial of n is
Extracted_On: 25.1409
Web_Title: The Factorial Tutorial
uID:: The Factorial Tutorial
generated:: 250914 // 06.01
mod:: 250914 // 06.01
---

©1996 Electric Communities  
All Rights Reserved Worldwide

## Prologue

The factorial function is a special case of Pochhammer's polynomial and of the gamma function (aka Euler's integral of the second kind). The conventional mathematical notation for the factorial of _n_ is

_n_!

so statements containing a factorial expression always look surprising or important.

The factorial function is used in the study of permutations. For example, the number of possible sequences of a deck of 52 cards is 52! which is 80658175170943878571660636856403766975289505440883277824000000000000. To graph the factorial function, start with your pencil at (1,1) moving northeast, then real sudden-like, go north. The factorial function is explosive: the largest factorial that can fit in a Java int is 12!.

The most important application of the factorial function is a pedagogical one: it is one of the classic exercises in first semester programming. It is often one of the first examples presented of iteration or recursion. It produces precise results, so it is easy to verify. It is an integer function, so most number theory issues can be avoided.

Part of mastery of E is knowing when to use the optimistic computation features of E, and when to use the pessimistic computation features of Java. The factorial function does not benefit from an optimistic implementation, and so should not be written in E. It can be implemented more efficiently in Java. There are many applications that benefit significantly from E's optimistic computation features. The factorial function is not one of them.

We will now present six implementations of the factorial function, all written in E.

All of the implementations of `Factorial` below can be called with this sequence:

  EInteger result;
  new Factorial <- factorial(n, &result);
  ewhen result (int fac) {
	  /* fac contains n! */
  }

`result` is an EInteger that receives the result. The distributor of `result` is sent to the `Factorial` eobject. When the result has been computed, its value is assigned to `fac`.

The examples are presented in order of decreasing practicality.

## Act One

We will first examine three mostly-Java implementations. The first one is very efficient, the remaining two are instructive. All three are Java functions in E wrappers. This use of E can be beneficial in the case where there is a math server available that could compute the function while the requestor goes on doing other useful work.

If the goal is to compute the factorial function quickly, then the best method is a table look up. The table doesn't even need to be very large. This form of the factorial function is rarely seen in programming texts, because the purpose of the factorial function in general is didactic, not mathematical.

eclass Factorial { /* Act 1a: E wrapper table look up */
	final static int factorialTable[ ] = {
		1, 1, 2, 6, 24, 120, 720, 5040, 40320,
		362880, 3628800, 39916800, 479001600
	};
 
	emethod factorial(int n, EDistributor result) {
		result <- forward(new EInteger(factorialTable[n]));
	}
}

The next example uses iteration to produce the product of all of the counting numbers up to `n`. This is textbook stuff.

eclass Factorial { /* Act 1b: E wrapper iteration */
	emethod factorial(int n, EDistributor result) {
		int product = 1;
		while (n > 1) {
			product *= n;
			n -= 1;
		}
		result <- forward(new EInteger(product));
	}
}

The other classic textbook implementation of the factorial function demonstrates recursion, defining a function in terms of itself. This version makes use of a private Java method within an E class.

eclass Factorial { /* Act 1c: E wrapper recursion */
	private int factorialStep(int n) {
		if (n > 1) {
			return (n * factorialStep(n - 1));
		} else {
			return (1);
		}
	}

    emethod factorial(int n, EDistributor result) {
        this <- forward(new EInteger(factorialStep (n));
    }
}

## Act Two

The three remaining implementations of the factorial function make more extensive (if inappropriate) use of E's messaging semantics.

The first implementation uses the message sending semantics of E to perform iteration without using a loop. It iterates by sending `factorialStep` messages (containing a decreasing `n` and an increasing `product`) to itself. When `n` goes down to one, the `product` is forwarded to the `result`.

eclass Factorial { /* Act 2a: message iteration (eteration) */
	emethod factorialStep(int n, int product, EDistributor result) {
		if (n > 1) {
			this <- factorialStep(n - 1, n * product, result);
		} else {
			result <- forward(new EInteger (product));
		}
	}

    emethod factorial(int n, EDistributor result) {
        this <- factorialStep (n, 1, result);
    }
}

This next implementation performs recursion without using a stack. A chain of linked intermediate results will trigger a cascade of ewhens which will produce the `result`.

eclass Factorial { /* Act 2b: message recursion (ecursion) */
	emethod factorial(int n, EDistributor result) {
		if (n > 1) {
			EInteger intermediate;
			this <- factorial(n - 1, &intermediate);
			ewhen intermediate(int product) {
				result <- forward(new EInteger(n * product));
			}
		} else {
		   result <- forward(new EInteger(1));
		}
	}
}

Finally, we show a factorial function implementation using a pure data flow computation model. All of the computation is expressed in the form of messages.

eclass Factorial { /* Act 2c: dataflow */
	final static EInteger EOne = new EInteger(1);

    emethod factorialStep(EInteger n, EInteger product, EDistributor result) {
        EBoolean nGreaterThanOne;
        n <- gt(EOne, &nGreaterThanOne);
        eif (nGreaterThanOne) {
			EInteger nMinusOne;
			EInteger nTimesProduct;

            n <- sub(EOne, &nMinusOne);
            n <- mul(product, &nTimesProduct);

            this <- factorialStep(nMinusOne, nTimesProduct, result);
        } else {
            result <- forward(product);
        }
    }

    emethod factorial(int n, EDistributor result) {
        this <- factorialStep(new EInteger(n), EOne, result);
    }
}

This implements the same algorthm as the message iteration (2a) example above. The difference is that every statement is an E statement and every object is an EObject. So, for example, instead of sending `(n - 1)` in `factorialStep`, it sends a channel (`nMinusOne`) that will eventually point an EObject having that value. This style of dataflow programming can be quite effective in highly distributed or massively parallel environments.

## Act Three

We'll now look again at the very first version of `Factorial` and add exception handling. Specifically, we'll throw an E exception if `n` is out of range. One of the nice things about E exceptions is that they will transparently travel back across the network to where there is interest.

First, we will define an exception:

package outOfBounds; /* Act 3a: exception definition */
import ec.e.run.RtEException;
class outOfBoundsEException extends RtEException {
	public outOfBoundsEException(String message) {
		super(message);
	}
}

Next, we will add an etry environment to the calling sequence:

import outOfBounds; /* Act 3b: factorialTester _/
import Factorial;
 
eclass factorialTester {
	emethod testFactorial(int n) {
		etry {
			EInteger result;
			new Factorial <- factorial(n, &result);
			ewhen result (int fac) {
				/_ fac contains n! */
				System.out.println (n + "! = " + fac);
			}
		} ecatch (outOfBoundsEException e) {
			System.out.println("Exception on " + n + ":" + e.getMessage());
		}
	}
}

The ecatch creates a closure object similar to those created by ewhen or eif. It will be triggered at such time that the exception is thrown. Finally, we modify `Factorial` to throw an E expection when `n` is out of bounds. We will let the Java array do the bounds checking, and then throw the E exception if `n` is out of range.

package Factorial; /* Act 3c: E wrapper table look up with exception */
import outOfBounds;
 
eclass Factorial {
	int factorialTable[ ] = {
		1, 1, 2, 6, 24, 120, 720, 5040, 40320,
		362880, 3628800, 39916800, 479001600
	};

    emethod factorial(int n, EDistributor result) {
        try {
            result <- forward(new EInteger(factorialTable[n]));
        } catch (ArrayIndexOutOfBoundsException e) {
            ethrow new outOfBoundsEException("Factorial: n out of bounds");
        }
    }
}
