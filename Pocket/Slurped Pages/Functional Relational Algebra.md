---
URL: https://docs.racket-lang.org/fra/index.html
Author: Jay McCarthy <jay@racket-lang.org>
Abstract: "8.18"
Extracted_On: 25.1409
Web_Title: Functional Relational Algebra
set:
  - code
---

8.18

This package provides a purely functional implementation of [Relational Algebra](https://en.wikipedia.org/wiki/Relational_algebra) in Racket.

## 1 Examples[🔗](https://docs.racket-lang.org/fra/index.html#\(part._.Examples\) "Link to here")ℹ

In this example, we will build a relational database for a university grade book. First, we define a database with a few relations:

> |   |
> |---|
> |([define](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=define.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._define%2529%2529&version=8.18) GradebookDB|
> |([Database](https://docs.racket-lang.org/fra/index.html#%28form._%28%28lib._fra%2Fmain..rkt%29._.Database%29%29)|
> |[Students|
> |[StudentId Name Course]|
> |(0 "Jonah" 'CS330)|
> |(1 "Aidan" 'CS142)|
> |(2 "Sarah" 'CS630)]|
> |[Projects|
> |[ProjectId Course Title]|
> |(0 'CS330 "Garbage Collectors")|
> |(1 'CS330 "Prolog")|
> |(2 'CS142 "UFO")|
> |(3 'CS630 "Theorem Prover")]|
> |[Grades|
> |[StudentId ProjectId Grade]|
> |[0 0 2/3]|
> |[1 2 99]|
> |[2 3 -inf.0]]))|

At this point GradebookDB is bound to a value obeying [database/c](https://docs.racket-lang.org/fra/index.html#%28def._%28%28lib._fra%2Fmain..rkt%29._database%2Fc%29%29) that contains three relations: 'Students, 'Projects, and 'Grades. The first S-expression after each relation identifier is the [schema/c](https://docs.racket-lang.org/fra/index.html#%28def._%28%28lib._fra%2Fmain..rkt%29._schema%2Fc%29%29) for that relation. Each S-expression after that is a [Tuple](https://docs.racket-lang.org/fra/index.html#%28form._%28%28lib._fra%2Fmain..rkt%29._.Tuple%29%29) that is in the relation. As you can see, any Scheme value can be included in a tuple.

Let’s do some queries!

> |   |
> |---|
> ||
> ||
> |\|   \|<br>\|---\|<br>\|<br>\|\\|   \\|<br>\\|---\\|<br>\\|StudentId Name Course\\|<br>\\|0 Jonah CS330\\|<br>\\|1 Aidan CS142\\|<br>\\|2 Sarah CS630\\||

As you can see from this interaction, a relation is just a set of tuples, which are a vector-like abstraction. Now for some more interesting queries:

> |   |
> |---|
> ||
> ||
> |\|   \|<br>\|---\|<br>\|<br>\|\\|   \\|<br>\\|---\\|<br>\\|StudentId ProjectId Grade\\|<br>\\|0 0 2/3\\|<br>\\|2 3 -inf.0\\||

Proposition can be any Scheme value that may be applied.

Suppose that we attempted to use that proposition on a relation that did not have 'Grade in its schema?

> |   |
> |---|
> ||
> |query-selection: Proposition must refer to subset of query's|
> |attributes: >30((Grade))|

As you can see, the error is detected before the query is ever run.

Now, let’s have some joins:

Finally, some functional database modification:

> |   |
> |---|
> ||
> |\|   \|<br>\|---\|<br>\|StudentId Name Course\|<br>\|0 Jonah CS330\|<br>\|1 Aidan CS142\|<br>\|2 Sarah CS630\||
> ||
> ||
> |\|   \|<br>\|---\|<br>\|StudentId Name Course\|<br>\|0 Jonah CS330\|<br>\|1 Aidan CS142\|<br>\|2 Sarah CS630\|<br>\|3 Omega #<procedure>\||
> ||
> ||
> |\|   \|<br>\|---\|<br>\|StudentId Name Course\|<br>\|1 Aidan CS142\|<br>\|2 Sarah CS630\|<br>\|3 Omega #<procedure>\||

## 2 API[🔗](https://docs.racket-lang.org/fra/index.html#\(part._.A.P.I\) "Link to here")ℹ

This section documents the APIs of the package.

### 2.1 Schemas[🔗](https://docs.racket-lang.org/fra/index.html#\(part._.Schemas\) "Link to here")ℹ

Schemas are defined as lists of symbols.

Equivalent to (listof [symbol?](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=symbols.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._symbol%7E3f%2529%2529&version=8.18)).

### 2.2 Propositions[🔗](https://docs.racket-lang.org/fra/index.html#\(part._.Propositions\) "Link to here")ℹ

Propositions are used by [query-selection](https://docs.racket-lang.org/fra/index.html#%28def._%28%28lib._fra%2Fmain..rkt%29._query-selection%29%29) to compute sub-relations.

Returns #t if v is a proposition, #f otherwise.

Propositions constructors.

Returns a proposition. The interpretation of [not](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=booleans.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._not%2529%2529&version=8.18), [and](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=if.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fletstx-scheme..rkt%2529._and%2529%2529&version=8.18), and [or](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=if.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fletstx-scheme..rkt%2529._or%2529%2529&version=8.18) is standard. When a procedure is included in a proposition, the values of the named attributes are extracted from the tuple and applied to the procedure value; if it returns #t, then the tuple is selected, otherwise it is rejected.

### 2.3 Queries[🔗](https://docs.racket-lang.org/fra/index.html#\(part._.Queries\) "Link to here")ℹ

Queries are used by [execute-query](https://docs.racket-lang.org/fra/index.html#%28def._%28%28lib._fra%2Fmain..rkt%29._execute-query%29%29) to run relational queries.

Returns #t if v is a query, #f otherwise.

Returns the schema of the relation q computes.

Query of the relation rid.

These construct queries represent the basic operations of [relational algebra](https://en.wikipedia.org/wiki/Relational_algebra).

[query-rename*](https://docs.racket-lang.org/fra/index.html#%28def._%28%28lib._fra%2Fmain..rkt%29._query-rename%2A%29%29) applies multiple renamings at once using the dictionary to map old names to new names.

[query-natural-join](https://docs.racket-lang.org/fra/index.html#%28def._%28%28lib._fra%2Fmain..rkt%29._query-natural-join%29%29) takes an optional equal? argument to compare attribute values for equality.

### 2.4 Tuples[🔗](https://docs.racket-lang.org/fra/index.html#\(part._.Tuples\) "Link to here")ℹ

Tuples are the contents of relations.

Returns #t if v is a tuple, #f otherwise.

Returns the length of t.

Returns the ith element of t.

Returns a tuple that contains all the elems.

> |   |
> |---|
> |> ([Tuple](https://docs.racket-lang.org/fra/index.html#%28form._%28%28lib._fra%2Fmain..rkt%29._.Tuple%29%29) elem ...)|
> ||
> |\|   \|   \|   \|   \|   \|   \|<br>\|---\|---\|---\|---\|---\|---\|<br>\|elem\|:\|any/c\||

Returns a tuple that contains all the elems.

### 2.5 Relations[🔗](https://docs.racket-lang.org/fra/index.html#\(part._.Relations\) "Link to here")ℹ

Relations are the contents of databases and the results of queries.

Returns #t if v is a relation, #f otherwise.

Returns r’s schema.

Returns the set of tuples comprising the relation r.

Returns a relation with '(attribute ...) as its schema that contains each ([Tuple](https://docs.racket-lang.org/fra/index.html#%28form._%28%28lib._fra%2Fmain..rkt%29._.Tuple%29%29) elem [...](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=stx-patterns.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fstxcase-scheme..rkt%2529._......%2529%2529&version=8.18)) as its tuples.

### 2.6 Database[🔗](https://docs.racket-lang.org/fra/index.html#\(part._.Database\) "Link to here")ℹ

Returns a database that is identical to db, except t is in the relation rid.

Returns a database that is identical to db, except t is not in the relation rid.

Executes (thnk) with db as the current database.

Executes ([begin](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=begin.html%23%2528form._%2528%2528quote._%7E23%7E25kernel%2529._begin%2529%2529&version=8.18) e [...](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=stx-patterns.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fstxcase-scheme..rkt%2529._......%2529%2529&version=8.18)) with db as the current database.

Computes the relation specified by q using the current database (chosen by [with-database](https://docs.racket-lang.org/fra/index.html#%28form._%28%28lib._fra%2Fmain..rkt%29._with-database%29%29)).

Returns a database with each 'relation specified as

## 3 Implementation Notes[🔗](https://docs.racket-lang.org/fra/index.html#\(part._.Implementation_.Notes\) "Link to here")ℹ

The current implementation uses immutable hashes as relations, vectors as tuples (except that they can be efficient appended), and lists as schemas. Propositions are structures, but are compiled to procedures (with attribute identifiers resolved to tuple positions) prior to query execution.

[execute-query](https://docs.racket-lang.org/fra/index.html#%28def._%28%28lib._fra%2Fmain..rkt%29._execute-query%29%29) uses a [simple query optimizer](https://en.wikipedia.org/wiki/Relational_algebra#Use_of_algebraic__properties_for_query_optimization). It has two passes: first it tries to push selection operations to the leaves of the query to reduce relation sizes prior to products, then it pulls selection operations towards the root (but not passed products) to reduce the number of iterations over all the elements of a tuple. During both passes, some simplifications are performed, such as merging adjacent renamings, projections, and identical (or trivial) selections. This optimization happens independent of any statistics about relation sizes, etc.