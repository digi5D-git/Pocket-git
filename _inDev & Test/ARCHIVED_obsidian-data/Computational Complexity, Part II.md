---
link: https://www.topcoder.com/thrive/articles/Computational%20Complexity%20part%20two
tags: 
registry: Informatics
token: "[[4-Data Registries/Informatics/Computation Complexity|Computation Complexity]]"
source: https://www.topcoder.com/thrive/articles/Computational%20Complexity%20part%20two
Data Id: Computational Complexity, Part II
Data Generated: 3Q04, Sep 17th - 04.00
Modified: 3Q24, Sep 17th - 04.06
---

# Computational Complexity, Part II

First we will consider a simpler case – programs without recursion.

Nested loops

First of all let’s consider simple programs that contain no function calls. The rule of thumb to find an upper bound on the time complexity of such a program is:

* estimate the maximum number of times each loop can be executed,

* add these bounds for cycles following each other.

* multiply these bounds for nested cycles/parts of code,

**Example 1.** Estimating the time complexity of a random piece of code.  

```
1
2
3
4
5
6
7
8
9
10
11
12
13
int result = 0; //  1for (int i = 0; i < N; i++) //  2for (int j = i; j < N; j++) { //  3for (int k = 0; k < M; k++) { //  4int x = 0; //  5while (x < N) {
        result++;
        x += 3;
      } //  6
    } //  7for (int k = 0; k < 2 * M; k++) //  8if (k % 7 == 4) result++; //  9
  } // 10
```

The time complexity of the while-cycle in line 6 is clearly O(N) – it is executed no more than N/3 + 1 times.  

Now consider the for-cycle in lines 4-7. The variable k is clearly incremented O(M) times. Each time the whole while-cycle in line 6 is executed. Thus the total time complexity of the lines 4-7 can be bounded by O(MN).

The time complexity of the for-cycle in lines 8-9 is O(M). Thus the execution time of lines 4-9 is O(MN + M) = O(MN).

This inner part is executed O(N

<sub>2</sub>) times – once for each possible combination of i and j. (Note that there are only N(N + 1)/2 possible values for [i, j]. Still, O(N<sub>2</sub>) is a correct upper bound.)  

From the facts above follows that the total time complexity of the algorithm in Example 1 is O(N

<sub>2</sub>.MN) = O(MN<sub>3</sub>).  

From now on we will assume that the reader is able to estimate the time complexity of simple parts of code using the method demonstrated above. We will now consider programs using recursion (i.e. a function occasionally calling itself with different parameters) and try to analyze the impact of these recursive calls on their time complexity.

Using recursion to generate combinatorial objects

One common use of recursion is to implement a backtracking algorithm to generate all possible solutions of a problem. The general idea is to generate the solution incrementally and to step back and try another way once all solutions for the current branch have been exhausted.

This approach is not absolutely universal, there may be problems where it is impossible to generate the solution incrementally. However, very often the set of all possible solutions of a problem corresponds to the set of all combinatorial objects of some kind. Most often it is the set of all permutations (of a given size), but other objects (combinations, partitions, etc.) can be seen from time to time.

As a side note, it is always possible to generate all strings of zeroes and ones, check each of them (i.e. check whether it corresponds to a valid solution) and keep the best found so far. If we can find an upper bound on the size of the best solution, this approach is finite. However, this approach is everything but fast. Don’t use it if there is

**any** other way.  

**Example 2.** A trivial algorithm to generate all permutations of numbers 0 to N – 1.  

```
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
vector permutation(N);
vector used(N, 0);

voidtry (int which, int what) {
  // try taking the number “what” as the “which”-th element
  permutation[which] = what;
  used[what] = 1;

  if (which == N - 1)
    outputPermutation();
  else// try all possibilities for the next elementfor (int next = 0; next < N; next++)
      if (!used[next])
        try (which + 1, next);

  used[what] = 0;
}

int main() {
  // try all possibilities for the first elementfor (int first = 0; first < N; first++)
    try (0, first);
}

```

In this case a trivial **lower** bound on the time complexity is the number of possible solutions. Backtracking algorithms are usually used to solve hard problems – i.e. such that we don’t know whether a significantly more efficient solution exists. Usually the solution space is quite large and uniform and the algorithm can be implemented so that its time complexity is close to the theoretical lower bound. To get an upper bound it should be enough to check how much additional (i.e. unnecessary) work the algorithm does.  

The number of possible solutions, and thus the time complexity of such algorithms, is usually exponential – or worse.

Divide&conquer using recursion

From the previous example we could get the feeling that recursion is evil and leads to horribly slow programs. The contrary is true. Recursion can be a very powerful tool in the design of effective algorithms. The usual way to create an effective recursive algorithm is to apply the divide & conquer paradigm – try to split the problem into several parts, solve each part separately and in the end combine the results to obtain the result for the original problem. Needless to say, the “solve each part separately” is usually implemented using recursion – and thus applying the same method again and again, until the problem is sufficiently small to be solved by brute force.

**Example 3.** The sorting algorithm MergeSort described in pseudocode.  

```
1
2
3
4
5
6
7
8
MergeSort(sequence S) {
  if (size of S <= 1) return S;
  split S into S_1 and S_2 of roughly the same size;
  MergeSort(S_1);
  MergeSort(S_2);
  combine sorted S_1 and sorted S_2 to obtain sorted S;
  return sorted S;
}

```

Clearly O(N) time is enough to split a sequence with N elements into two parts (Depending on the implementation this may be even possible in constant time.) Combining the shorter sorted sequences can be done in <img src="http://images.ctfassets.net/piwi0eufbb2g/6Z5qzbtqiR7YD5Q8YEAC3U/c61f8064de574235e0c2dc43a3afea98/complexity4.png" height="14" width="15" align="bottom" />(N): Start with an empty S. At each moment the smallest element not yet in S is either at the beginning of S<sub>1</sub> or at the beginning of S<sub>2</sub>. Move this element to the end of S and continue.  

Thus the total time to MergeSort a sequence with N elements is

<img src="http://images.ctfassets.net/piwi0eufbb2g/6Z5qzbtqiR7YD5Q8YEAC3U/c61f8064de574235e0c2dc43a3afea98/complexity4.png" height="14" width="15" align="bottom" />(N) plus the time needed to make the two recursive calls.  

Let f (N) be the time complexity of MergeSort as defined in the previous part of our article. The discussion above leads us to the following equation:

where p is a linear function representing the amount of work spent on splitting the sequence and merging the results.  

Basically, this is just a recurrence equation. If you don’t know this term, please don’t be afraid. The word “recurrence” stems from the latin phrase for “to run back”. Thus the name just says that the next values of f are defined using the previous (i.e. smaller) values of f.

Well, to be really formal, for the equation to be complete we should specify some initial values – in this case, f (1). This (and knowing the implementation-specific function p) would enable us to compute the exact values of f.

But as you hopefully understand by now, this is not necessarily our goal. While it is theoretically possible to compute a closed-form formula for f (N), this formula would most probably be really ugly… and we don’t really need it. We only want to find a

<img src="http://images.ctfassets.net/piwi0eufbb2g/6Z5qzbtqiR7YD5Q8YEAC3U/c61f8064de574235e0c2dc43a3afea98/complexity4.png" height="14" width="15" align="bottom" />-bound (and sometimes only an O-bound) on the growth of f. Luckily, this can often be done quite easily, if you know some tricks of the trade.  

As a consequence, we won’t be interested in the exact form of p, all we need to know is that p(N) =

<img src="http://images.ctfassets.net/piwi0eufbb2g/6Z5qzbtqiR7YD5Q8YEAC3U/c61f8064de574235e0c2dc43a3afea98/complexity4.png" height="14" width="15" align="bottom" />(N). Also, we don’t need to specify the initial values for the equation. We simply assume that all problem instances with small N can be solved in constant time.  

The rationale behind the last simplification: While changing the initial values does change the solution to the recurrence equation, it usually doesn’t change its asymptotic order of growth. (If your intuition fails you here, try playing with the equation above. For example fix p and try to compute f (8), f (16) and f (32) for different values of f (1).)

If this would be a formal textbook, at this point we would probably have to develop some theory that would allow us to deal with the floor and ceiling functions in our equations. Instead we will simply neglect them from now on. (E.g. we can assume that each division will be integer division, rounded down.)

A reader skilled in math is encouraged to prove that if p is a polynomial (with non-negative values on N) and q(n) = p(n + 1) then q(n) =

<img src="http://images.ctfassets.net/piwi0eufbb2g/6Z5qzbtqiR7YD5Q8YEAC3U/c61f8064de574235e0c2dc43a3afea98/complexity4.png" height="14" width="15" align="bottom" />(p(n)). Using this observation we may formally prove that (assuming the f we seek is polynomially-bounded) the right side of each such equation remains asymptotically the same if we replace each ceiling function by a floor function.  

The observations we made allow us to rewrite our example equation in a more simple way:

![Computational_Complexity_3](https://images.ctfassets.net/b5f1djy59z3a/1PYsoE2tQMq6IIAIokIwyk/f12615b10713f1a5bb3f2c5e3228fe8c/Computational_Complexity_3.png)  

(1)

Note that this is not an equation in the classical sense. As in the examples in the first part of this article, the equals sign now reads “is asymptotically equal to”. Usually there are lots of different functions that satisfy such an equation. But usually all of them will have the same order of growth – and this is exactly what we want to determine. Or, more generally, we want to find the smallest upper bound on the growth of **all possible** functions that satisfy the given equation.  

In the last sections of this article we will discuss various methods of solving these “equations”. But before we can do that, we need to know a bit more about logarithms.

Notes on logarithms

By now, you may have already asked one of the following questions: If the author writes that some complexity is e.g. O(N log N), what is the base of the logarithm? In some cases, wouldn’t O(N log

<sub>2</sub>N) be a better bound?  

The answer: The base of the logarithm does not matter, all logarithmic functions (with base > 1) are asymptotically equal. This is due to the well-known equation:

![Computational_Complexity_4](https://images.ctfassets.net/b5f1djy59z3a/4MgqQ4AXx6wEUE6Iy6QE2i/f23cf25e2c3da6b8ad786f00feedcf7d/Computational_Complexity_4.png)

(2)

Note that given two bases a, b, the number 1/log<sub>b</sub>a is just a constant, and thus the function logaN is just a constant multiple of log<sub>b</sub>N.  

To obtain more clean and readable expressions, we always use the notation log N inside big-Oh expressions, even if logarithms with a different base were used in the computation of the bound.

By the way, sadly the meaning of log N differs from country to country. To avoid ambiguity where it may occur: I use log N to denote the decadic (i.e. base-10) logarithm, ln N for the natural (i.e. base-e) logarithm, lg N for the binary logarithm and log

<sub>b</sub>N for the general case.  

Now we will show some useful tricks involving logarithms, we will need them later. Suppose a, b are given constants such that a, b > 1.

(3)

The substitution method  

This method can be summarized in one sentence: Guess an asymptotic upper bound on f and (try to) prove it by induction.

As an example, we will prove that if f satisfies the equation (1) then f (N) = O(N log N).

From (1) we know that:

for some c. Now we will prove that if we take a large enough (but constant) d then for almost all N we have f (N) ![](https://images.ctfassets.net/piwi0eufbb2g/16tRqsa8M41CNzRCIJYy8V/6bae96234bdb0983401a97d62a180e59/img15.png) dN lg N. We will start by proving the induction step.  

Assume that f (N/2)

![](https://images.ctfassets.net/piwi0eufbb2g/16tRqsa8M41CNzRCIJYy8V/6bae96234bdb0983401a97d62a180e59/img15.png) d (N/2)lg(N/2). Then  

In other words, the induction step will hold as long as d > c. We are always able to choose such d.  

We are only left with proving the inequality for some initial value N. This gets quite ugly when done formally. The general idea is that if the d we found so far is not large enough, we can always increase it to cover the initial cases.

Note that for our example equation we won’t be able to prove it for N = 1, because lg 1 = 0. However, by taking f (N)

![](https://images.ctfassets.net/piwi0eufbb2g/16tRqsa8M41CNzRCIJYy8V/6bae96234bdb0983401a97d62a180e59/img15.png) dN lg N, where d is some fixed constant. Conclusion: from (1) it follows that f (N) = O(N lg N).  

The recursion tree

To a beginner, the previous method won’t be very useful. To use it successfully we need to make a good guess – and to make a good guess we need some insight. The question is, how to gain this insight? Let’s take a closer look at what’s happening, when we try to evaluate the recurrence (or equivalently, when we run the corresponding recursive program).

We may describe the execution of a recursive program on a given input by a rooted tree. Each node will correspond to some instance of the problem the program solves. Consider an arbitrary vertex in our tree. If solving its instance requires recursive calls, this vertex will have children corresponding to the smaller subproblems we solve recursively. The root node of the tree is the input of the program, leaves represent small problems that are solved by brute force.

Now suppose we label each vertex by the amount of work spent solving the corresponding problem (excluding the recursive calls). Clearly the runtime is exactly the sum of all labels.

As always, we only want an asymptotic bound. To achieve this, we may “round” the labels to make the summation easier. Again, we will demonstrate this method on examples.

**Example 4.** The recursion tree for MergeSort on 5 elements.  

The recursion tree for the corresponding recurrence equation. This time, the number inside each vertex represents the number of steps the algorithm makes there.  

Note that in a similar way we may sketch the general form of the recursion tree for any recurrence. Consider our old friend, the equation (1). Here we know that there is a number c such that the number of operations in each node can be bound by (c times the current value of N). Thus the tree in the example below is indeed the worst possible case.  

**Example 5.** A worst-case tree for the general case of the recurrence equation (1).  

Now, the classical trick from combinatorics is to sum the elements in an order different from the order in which they were created. In this case, consider an arbitrary level of the tree (i.e. a set of vertices with the same depth). It is not hard to see that the total work on each of the levels is cN.  

Now comes the second question: What is the number of levels? Clearly, the leaves correspond to the trivial cases of the algorithm. Note that the size of the problem is halved in each step. Clearly after lg N steps we are left with a trivial problem of size 1, thus the number of levels is

<img src="http://images.ctfassets.net/piwi0eufbb2g/6Z5qzbtqiR7YD5Q8YEAC3U/c61f8064de574235e0c2dc43a3afea98/complexity4.png" height="14" width="15" align="bottom" />(log N).  

Combining both observations we get the final result: The total amount of work done here is

<img src="http://images.ctfassets.net/piwi0eufbb2g/6Z5qzbtqiR7YD5Q8YEAC3U/c61f8064de574235e0c2dc43a3afea98/complexity4.png" height="14" width="15" align="bottom" />(cN x log N) = <img src="http://images.ctfassets.net/piwi0eufbb2g/6Z5qzbtqiR7YD5Q8YEAC3U/c61f8064de574235e0c2dc43a3afea98/complexity4.png" height="14" width="15" align="bottom" />(N log N).  

A side note. If the reader doesn’t trust the simplifications we made when using this method, he is invited to treat this method as a “way of making a good guess” and then to prove the result using the substitution method. However, with a little effort the application of this method could also be upgraded to a full formal proof.

More recursion trees

By now you should be asking: Was it really only a coincidence that the total amount of work on each of the levels in Example 5 was the same?

The answer: No and yes. No, there’s a simple reason why this happened, we’ll discover it later. Yes, because this is not always the case – as we’ll see in the following two examples.

**Example 6.** Let’s try to apply our new “recursion tree” method to solve the following recurrence equation:  

The recursion tree will look as follows:

Let’s try computing the total work for each of the first few levels. Our results:  

Clearly as we go deeper in the tree, the total amount of work on the current level decreases. The question is, how fast does it decrease? As we move one level lower, there will be three times that many subproblems. However, their size gets divided by 2, and thus the time to process each of them decreases to one eighth of the original time. Thus the amount of work is decreased by the factor 3/8.

But this means that the entries in the table above form a geometric progression. For a while assume that this progression is infinite. Then its sum would be

Thus the total amount of work in our tree is <img src="http://images.ctfassets.net/piwi0eufbb2g/SM9V0Z14CXpOrBMRd5084/7947f888cde28f1bdc873af13513fc52/complexity3.png" height="14" width="15" align="bottom" />(N<sub>3</sub>) (summing the infinite sequence gives us an upper bound). But already the first element of our progression is <img src="http://images.ctfassets.net/piwi0eufbb2g/6Z5qzbtqiR7YD5Q8YEAC3U/c61f8064de574235e0c2dc43a3afea98/complexity4.png" height="14" width="15" align="bottom" />(N<sub>3</sub>). It follows that the total amount of work in our tree is <img src="http://images.ctfassets.net/piwi0eufbb2g/6Z5qzbtqiR7YD5Q8YEAC3U/c61f8064de574235e0c2dc43a3afea98/complexity4.png" height="14" width="15" align="bottom" />(N<sub>3</sub>) and we are done.  

The important generalization of this example: If the amounts of work at subsequent levels of the recursion tree form a

**decreasing geometric progression**, the total amount of work is asymptotically the same as the amount of work done in the root node.  

From this result we can deduce an interesting fact about the (hypothetical) algorithm behind this recurrence equation: The recursive calls didn’t take much time in this case, the most time consuming part was preparing the recursive calls and/or processing the results. (I.e. this is the part that should be improved if we need a faster algorithm.)

**Example 7.** Now let’s try to apply our new “recursion tree” method to solve the following recurrence equation:  

The recursion tree will look as follows:  

Again, let’s try computing the total work for each of the first few levels. We get:  

This time we have the opposite situation: As we go deeper in the tree, the total amount of work on the current level increases. As we move one level lower, there will be five times that many subproblems, each of them one third of the previous size, the processing time is linear in problem size. Thus the amount of work increased by the factor 5/3.

Again, we want to compute the total amount of work. This time it won’t be that easy, because the most work is done on the lowest level of the tree. We need to know its depth.

The lowest level corresponds to problems of size 1. The size of a problem on level k is N/3

<sub>k</sub>. Solving the equation 1 = N/3<sub>k</sub> we get k = log<sub>3</sub>N. Note that this time we explicitly state the base of the logarithm, as this time it will be important.  

Our recursion tree has log

<sub>3</sub>N levels. Each of the levels has five times more vertices than the previous one, thus the last level has levels. The total work done on this level is then.  

Now we want to sum the work done on all levels of the tree. Again, this is a geometric progression. But instead of explicitly computing the sum, we now **reverse** it. Now we have a **decreasing** geometric progression…and we are already in the same situation as in the previous example. Using the same reasoning we can show that the sum is asymptotically equal to the largest element.  

Note that the base-3 logarithm ends in the exponent, that’s why the base is important. If the base was different, also the result would be asymptotically different.

The Master Theorem

We already started to see a pattern here. Given a recurrence equation, take the corresponding recurrence tree and compute the amounts of work done on each level of the tree. You will get a geometric sequence. If it decreases, the total work is proportional to work done in the root node. If it increases, the total work is proportional to the number of leaves. If it remains the same, the total work is (the work done on one level) times (the number of levels).

Actually, there are a few ugly cases, but almost often one of these three cases occurs. Moreover, it is possible to prove the statements from the previous paragraph formally. The formal version of this theorem is known under the name Master Theorem.

