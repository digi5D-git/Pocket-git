---
URL: https://en.m.wikipedia.org/wiki/Relational_algebra
Author: Contributors to Wikimedia projects
Site: Wikimedia Foundation, Inc.
published: 3.2701
Abstract: In database theory, relational algebra is a theory that uses algebraic
  structures for modeling data and defining queries on it with well founded
  semantics. The theory was introduced by Edgar F. Codd.[1]
Extracted_On: 25.1409
Web_Title: Relational algebra
---

In [database theory](https://en.m.wikipedia.org/wiki/Database_theory "Database theory"), **relational algebra** is a theory that uses [algebraic structures](https://en.m.wikipedia.org/wiki/Algebraic_structure "Algebraic structure") for modeling data and defining queries on it with well founded [semantics](https://en.m.wikipedia.org/wiki/Semantics_\(computer_science\) "Semantics (computer science)"). The theory was introduced by [Edgar F. Codd](https://en.m.wikipedia.org/wiki/Edgar_F._Codd "Edgar F. Codd").[[1]](https://en.m.wikipedia.org/wiki/Relational_algebra#cite_note-Codd1970-1)

The main application of relational algebra is to provide a theoretical foundation for [relational databases](https://en.m.wikipedia.org/wiki/Relational_database "Relational database"), particularly [query languages](https://en.m.wikipedia.org/wiki/Query_language "Query language") for such databases, chief among which is [SQL](https://en.m.wikipedia.org/wiki/SQL "SQL"). Relational databases store tabular data represented as [relations](https://en.m.wikipedia.org/wiki/Relation_\(database\) "Relation (database)"). Queries over relational databases often likewise return tabular data represented as relations.

The main purpose of relational algebra is to define [operators](https://en.m.wikipedia.org/wiki/Operator_\(mathematics\) "Operator (mathematics)") that transform one or more input relations to an output relation. Given that these operators accept relations as input and produce relations as output, they can be combined and used to express complex queries that transform multiple input relations (whose data are stored in the database) into a single output relation (the query results).

[Unary operators](https://en.m.wikipedia.org/wiki/Unary_operator "Unary operator") accept a single relation as input. Examples include operators to filter certain attributes (columns) or [tuples](https://en.m.wikipedia.org/wiki/Tuple "Tuple") (rows) from an input relation. [Binary operators](https://en.m.wikipedia.org/wiki/Binary_operator "Binary operator") accept two relations as input and combine them into a single output relation. For example, taking all tuples found in either relation ([union](https://en.m.wikipedia.org/wiki/Union_\(set_theory\) "Union (set theory)")), removing tuples from the first relation found in the second relation ([difference](https://en.m.wikipedia.org/wiki/Difference_\(set_theory\) "Difference (set theory)")), extending the tuples of the first relation with tuples in the second relation matching certain conditions, and so forth.

Relational algebra received little attention outside of pure mathematics until the publication of [E.F. Codd](https://en.m.wikipedia.org/wiki/Edgar_F._Codd "Edgar F. Codd")'s [relational model of data](https://en.m.wikipedia.org/wiki/Relational_model "Relational model") in 1970.[[2]](https://en.m.wikipedia.org/wiki/Relational_algebra#cite_note-2) Codd proposed such an algebra as a basis for database query languages.

Relational algebra operates on homogeneous sets of tuples   where we commonly interpret _m_ to be the number of rows of tuples in a table and _n_ to be the number of columns. All entries in each column have the same [type](https://en.m.wikipedia.org/wiki/Data_domain "Data domain").

A relation also has a unique tuple called the **header** which gives each column a unique name or **attribute** inside the relation. Attributes are used in projections and selections.

The relational algebra uses [set union](https://en.m.wikipedia.org/wiki/Set_union "Set union"), [set difference](https://en.m.wikipedia.org/wiki/Set_difference "Set difference"), and [Cartesian product](https://en.m.wikipedia.org/wiki/Cartesian_product "Cartesian product") from set theory, and adds additional constraints to these operators to create new ones.

For set union and set difference, the two [relations](https://en.m.wikipedia.org/wiki/Relation_\(database\) "Relation (database)") involved must be _union-compatible_—that is, the two relations must have the same set of attributes. Because [set intersection](https://en.m.wikipedia.org/wiki/Set_intersection "Set intersection") is defined in terms of set union and set difference, the two relations involved in set intersection must also be union-compatible.

For the Cartesian product to be defined, the two relations involved must have disjoint headers—that is, they must not have a common attribute name.

In addition, the Cartesian product is defined differently from the one in [set](https://en.m.wikipedia.org/wiki/Set_\(mathematics\) "Set (mathematics)") theory in the sense that tuples are considered to be "shallow" for the purposes of the operation. That is, the Cartesian product of a set of _n_-tuples with a set of _m_-tuples yields a set of "flattened" (_n_ + _m_)-tuples (whereas basic set theory would have prescribed a set of 2-tuples, each containing an _n_-tuple and an _m_-tuple). More formally, _R_ × _S_ is defined as follows:

The cardinality of the Cartesian product is the product of the cardinalities of its factors, that is, |_R_ × _S_| = |_R_| × |_S_|.

A **projection** (Π) is a [unary operation](https://en.m.wikipedia.org/wiki/Unary_operation "Unary operation") written as   where   is a set of attribute names. The result of such projection is defined as the [set](https://en.m.wikipedia.org/wiki/Set_\(mathematics\) "Set (mathematics)") that is obtained when all [tuples](https://en.m.wikipedia.org/wiki/Tuple "Tuple") in _R_ are restricted to the set  .

Note: when implemented in [SQL](https://en.m.wikipedia.org/wiki/SQL "SQL") standard the "default projection" returns a [multiset](https://en.m.wikipedia.org/wiki/Multiset "Multiset") instead of a set, and the Π projection to eliminate duplicate data is obtained by the addition of the [`DISTINCT` keyword](https://en.m.wikipedia.org/wiki/Select_\(SQL\) "Select (SQL)").

A **generalized selection** (σ) is a [unary operation](https://en.m.wikipedia.org/wiki/Unary_operation "Unary operation") written as   where _φ_ is a [propositional formula](https://en.m.wikipedia.org/wiki/Propositional_formula "Propositional formula") that consists of [atoms](https://en.m.wikipedia.org/wiki/Atomic_formula "Atomic formula") as allowed in the [normal selection](https://en.m.wikipedia.org/wiki/Selection_\(relational_algebra\) "Selection (relational algebra)") and the logical operators   ([and](https://en.m.wikipedia.org/wiki/Logical_conjunction "Logical conjunction")),   ([or](https://en.m.wikipedia.org/wiki/Logical_disjunction "Logical disjunction")) and   ([negation](https://en.m.wikipedia.org/wiki/Negation "Negation")). This selection selects all those [tuples](https://en.m.wikipedia.org/wiki/Tuple "Tuple") in _R_ for which _φ_ holds.

To obtain a listing of all friends or business associates in an address book, the selection might be written as  . The result would be a relation containing every attribute of every unique record where isFriend is true or where isBusinessContact is true.

A **rename** (_ρ_) is a [unary operation](https://en.m.wikipedia.org/wiki/Unary_operation "Unary operation") written as   where the result is identical to _R_ except that the _b_ attribute in all tuples is renamed to an _a_ attribute. This is commonly used to rename the attribute of a [relation](https://en.m.wikipedia.org/wiki/Relation_\(database\) "Relation (database)") for the purpose of a join.

To rename the "isFriend" attribute to "isBusinessContact" in a relation,   might be used.

There is also the   notation, where _R_ is renamed to _x_ and the attributes   are renamed to  .[[3]](https://en.m.wikipedia.org/wiki/Relational_algebra#cite_note-3)

## Joins and join-like operators

[edit](https://en.m.wikipedia.org/w/index.php?title=Relational_algebra&action=edit&section=6 "Edit section: Joins and join-like operators")

In practice the classical relational algebra described above is extended with various operations such as outer joins, aggregate functions and even transitive closure.[[4]](https://en.m.wikipedia.org/wiki/Relational_algebra#cite_note-%C3%96zsuValduriez2011-4)

Whereas the result of a join (or inner join) consists of tuples formed by combining matching tuples in the two operands, an outer join contains those tuples and additionally some tuples formed by extending an unmatched tuple in one of the operands by "fill" values for each of the attributes of the other operand. Outer joins are not considered part of the classical relational algebra discussed so far.[[5]](https://en.m.wikipedia.org/wiki/Relational_algebra#cite_note-O'NeilO'Neil2001-5)

The operators defined in this section assume the existence of a _null_ value, _ω_, which we do not define, to be used for the fill values; in practice this corresponds to the [NULL](https://en.m.wikipedia.org/wiki/Null_\(SQL\) "Null (SQL)") in SQL. In order to make subsequent selection operations on the resulting table meaningful, a semantic meaning needs to be assigned to nulls; in Codd's approach the propositional logic used by the selection is [extended to a three-valued logic](https://en.m.wikipedia.org/wiki/Null_\(SQL\)#Comparisons_with_NULL_and_the_three-valued_logic_.283VL.29 "Null (SQL)"), although we elide those details in this article.

Three outer join operators are defined: left outer join, right outer join, and full outer join. (The word "outer" is sometimes omitted.)

The left outer join (⟕) is written as _R_ ⟕ _S_ where _R_ and _S_ are [relations](https://en.m.wikipedia.org/wiki/Relation_\(database\) "Relation (database)").[[a]](https://en.m.wikipedia.org/wiki/Relational_algebra#cite_note-6) The result of the left outer join is the set of all combinations of tuples in _R_ and _S_ that are equal on their common attribute names, in addition (loosely speaking) to tuples in _R_ that have no matching tuples in _S_.[_[citation needed](https://en.m.wikipedia.org/wiki/Wikipedia:Citation_needed "Wikipedia:Citation needed")_]

For an example consider the tables _Employee_ and _Dept_ and their left outer join:

|   |   |   |
|---|---|---|
|\|   \|   \|   \|<br>\|---\|---\|---\|<br>_Employee_<br>\|Name\|EmpId\|DeptName\|<br>\|Harry\|3415\|Finance\|<br>\|Sally\|2241\|Sales\|<br>\|George\|3401\|Finance\|<br>\|Harriet\|2202\|Sales\|<br>\|Tim\|1123\|Executive\||\|   \|   \|<br>\|---\|---\|<br>_Dept_<br>\|DeptName\|Manager\|<br>\|Sales\|Harriet\|<br>\|Production\|Charles\||\|   \|   \|   \|   \|<br>\|---\|---\|---\|---\|<br>_Employee_ ⟕ _Dept_<br>\|Name\|EmpId\|DeptName\|Manager\|<br>\|Harry\|3415\|Finance\|ω\|<br>\|Sally\|2241\|Sales\|Harriet\|<br>\|George\|3401\|Finance\|ω\|<br>\|Harriet\|2202\|Sales\|Harriet\|<br>\|Tim\|1123\|Executive\|ω\||

In the resulting relation, tuples in _S_ which have no common values in common attribute names with tuples in _R_ take a _null_ value, _ω_.

Since there are no tuples in _Dept_ with a _DeptName_ of _Finance_ or _Executive_, _ω_s occur in the resulting relation where tuples in _Employee_ have a _DeptName_ of _Finance_ or _Executive_.

Let _r_1, _r_2, ..., _r__n_ be the attributes of the relation _R_ and let {(_ω_, ..., _ω_)} be the singleton relation on the attributes that are _unique_ to the relation _S_ (those that are not attributes of _R_). Then the left outer join can be described in terms of the natural join (and hence using basic operators) as follows:

The right outer join (⟖) behaves almost identically to the left outer join, but the roles of the tables are switched.

The right outer join of [relations](https://en.m.wikipedia.org/wiki/Relation_\(database\) "Relation (database)") _R_ and _S_ is written as _R_ ⟖ _S_.[[b]](https://en.m.wikipedia.org/wiki/Relational_algebra#cite_note-7) The result of the right outer join is the set of all combinations of tuples in _R_ and _S_ that are equal on their common attribute names, in addition to tuples in _S_ that have no matching tuples in _R_.[_[citation needed](https://en.m.wikipedia.org/wiki/Wikipedia:Citation_needed "Wikipedia:Citation needed")_]

For example, consider the tables _Employee_ and _Dept_ and their right outer join:

|   |   |   |
|---|---|---|
|\|   \|   \|   \|<br>\|---\|---\|---\|<br>_Employee_<br>\|Name\|EmpId\|DeptName\|<br>\|Harry\|3415\|Finance\|<br>\|Sally\|2241\|Sales\|<br>\|George\|3401\|Finance\|<br>\|Harriet\|2202\|Sales\|<br>\|Tim\|1123\|Executive\||\|   \|   \|<br>\|---\|---\|<br>_Dept_<br>\|DeptName\|Manager\|<br>\|Sales\|Harriet\|<br>\|Production\|Charles\||\|   \|   \|   \|   \|<br>\|---\|---\|---\|---\|<br>_Employee_ ⟖ _Dept_<br>\|Name\|EmpId\|DeptName\|Manager\|<br>\|Sally\|2241\|Sales\|Harriet\|<br>\|Harriet\|2202\|Sales\|Harriet\|<br>\|ω\|ω\|Production\|Charles\||

In the resulting relation, tuples in _R_ which have no common values in common attribute names with tuples in _S_ take a _null_ value, _ω_.

Since there are no tuples in _Employee_ with a _DeptName_ of _Production_, _ω_s occur in the Name and EmpId attributes of the resulting relation where tuples in _Dept_ had _DeptName_ of _Production_.

Let _s_1, _s_2, ..., _s__n_ be the attributes of the relation _S_ and let {(_ω_, ..., _ω_)} be the singleton relation on the attributes that are _unique_ to the relation _R_ (those that are not attributes of _S_). Then, as with the left outer join, the right outer join can be simulated using the natural join as follows:

The **outer join** (⟗) or **full outer join** in effect combines the results of the left and right outer joins.

The full outer join is written as _R_ ⟗ _S_ where _R_ and _S_ are [relations](https://en.m.wikipedia.org/wiki/Relation_\(database\) "Relation (database)").[[c]](https://en.m.wikipedia.org/wiki/Relational_algebra#cite_note-8) The result of the full outer join is the set of all combinations of tuples in _R_ and _S_ that are equal on their common attribute names, in addition to tuples in _S_ that have no matching tuples in _R_ and tuples in _R_ that have no matching tuples in _S_ in their common attribute names.[_[citation needed](https://en.m.wikipedia.org/wiki/Wikipedia:Citation_needed "Wikipedia:Citation needed")_]

For an example consider the tables _Employee_ and _Dept_ and their full outer join:

|   |   |   |
|---|---|---|
|\|   \|   \|   \|<br>\|---\|---\|---\|<br>_Employee_<br>\|Name\|EmpId\|DeptName\|<br>\|Harry\|3415\|Finance\|<br>\|Sally\|2241\|Sales\|<br>\|George\|3401\|Finance\|<br>\|Harriet\|2202\|Sales\|<br>\|Tim\|1123\|Executive\||\|   \|   \|<br>\|---\|---\|<br>_Dept_<br>\|DeptName\|Manager\|<br>\|Sales\|Harriet\|<br>\|Production\|Charles\||\|   \|   \|   \|   \|<br>\|---\|---\|---\|---\|<br>_Employee_ ⟗ _Dept_<br>\|Name\|EmpId\|DeptName\|Manager\|<br>\|Harry\|3415\|Finance\|ω\|<br>\|Sally\|2241\|Sales\|Harriet\|<br>\|George\|3401\|Finance\|ω\|<br>\|Harriet\|2202\|Sales\|Harriet\|<br>\|Tim\|1123\|Executive\|ω\|<br>\|ω\|ω\|Production\|Charles\||

In the resulting relation, tuples in _R_ which have no common values in common attribute names with tuples in _S_ take a _null_ value, _ω_. Tuples in _S_ which have no common values in common attribute names with tuples in _R_ also take a _null_ value, _ω_.

The full outer join can be simulated using the left and right outer joins (and hence the natural join and set union) as follows:

_R_ ⟗ _S_ = (_R_ ⟕ _S_) ∪ (_R_ ⟖ _S_)

### Operations for domain computations

[edit](https://en.m.wikipedia.org/w/index.php?title=Relational_algebra&action=edit&section=12 "Edit section: Operations for domain computations")

There is nothing in relational algebra introduced so far that would allow computations on the data domains (other than evaluation of propositional expressions involving equality). For example, it is not possible using only the algebra introduced so far to write an expression that would multiply the numbers from two columns, e.g. a unit price with a quantity to obtain a total price. Practical query languages have such facilities, e.g. the SQL SELECT allows arithmetic operations to define new columns in the result `SELECT unit_price * quantity AS total_price FROM t`, and a similar facility is provided more explicitly by Tutorial D's `EXTEND` keyword.[[6]](https://en.m.wikipedia.org/wiki/Relational_algebra#cite_note-Date2011-9) In database theory, this is called **extended projection**.[[7]](https://en.m.wikipedia.org/wiki/Relational_algebra#cite_note-Garcia-MolinaUllman2009-10): 213 

Furthermore, computing various functions on a column, like the summing up of its elements, is also not possible using the relational algebra introduced so far. There are five [aggregate functions](https://en.m.wikipedia.org/wiki/Aggregate_function "Aggregate function") that are included with most relational database systems. These operations are Sum, Count, Average, Maximum and Minimum. In relational algebra the aggregation operation over a schema (_A_1, _A_2, ... _A__n_) is written as follows:

where each _A__j_', 1 ≤ _j_ ≤ _k_, is one of the original attributes _A__i_, 1 ≤ _i_ ≤ _n_.

The attributes preceding the _g_ are grouping attributes, which function like a "group by" clause in SQL. Then there are an arbitrary number of aggregation functions applied to individual attributes. The operation is applied to an arbitrary relation _r_. The grouping attributes are optional, and if they are not supplied, the aggregation functions are applied across the entire relation to which the operation is applied.

Let's assume that we have a table named Account with three columns, namely Account_Number, Branch_Name and Balance. We wish to find the maximum balance of each branch. This is accomplished by Branch_Name_G_Max(Balance)(Account). To find the highest balance of all accounts regardless of branch, we could simply write _G_Max(Balance)(Account).

Grouping is often written as Branch_Name_ɣ_Max(Balance)(Account) instead.[[7]](https://en.m.wikipedia.org/wiki/Relational_algebra#cite_note-Garcia-MolinaUllman2009-10)

Although relational algebra seems powerful enough for most practical purposes, there are some simple and natural operators on [relations](https://en.m.wikipedia.org/wiki/Relation_\(database\) "Relation (database)") that cannot be expressed by relational algebra. One of them is the [transitive closure](https://en.m.wikipedia.org/wiki/Transitive_closure "Transitive closure") of a binary relation. Given a domain _D_, let binary relation _R_ be a subset of _D_×_D_. The transitive closure _R+_ of _R_ is the smallest subset of _D_×_D_ that contains _R_ and satisfies the following condition:

It can be proved using the fact that there is no relational algebra expression _E_(_R_) taking _R_ as a variable argument that produces _R_+.[[8]](https://en.m.wikipedia.org/wiki/Relational_algebra#cite_note-11)

SQL however officially supports such [fixpoint queries](https://en.m.wikipedia.org/wiki/Hierarchical_and_recursive_queries_in_SQL "Hierarchical and recursive queries in SQL") since 1999, and it had vendor-specific extensions in this direction well before that.

## Use of algebraic properties for query optimization

[edit](https://en.m.wikipedia.org/w/index.php?title=Relational_algebra&action=edit&section=15 "Edit section: Use of algebraic properties for query optimization")

Two possible [query plans](https://en.m.wikipedia.org/wiki/Query_plan "Query plan") for the _triangle query_ R(A, B) ⋈ S(B, C) ⋈ T(A, C); the first joins S and T first and joins the result with R, the second joins R and S first and joins the result with T

[Relational database management systems](https://en.m.wikipedia.org/wiki/Relational_database_management_systems "Relational database management systems") often include a [query optimizer](https://en.m.wikipedia.org/wiki/Query_optimizer "Query optimizer") which attempts to determine the most efficient way to execute a given query. Query optimizers enumerate possible [query plans](https://en.m.wikipedia.org/wiki/Query_plan "Query plan"), estimate their cost, and pick the plan with the lowest estimated cost. If queries are represented by operators from relational algebra, the query optimizer can enumerate possible query plans by rewriting the initial query using the algebraic properties of these operators.

[Queries](https://en.m.wikipedia.org/wiki/Relational_query "Relational query") can be represented as a [tree](https://en.m.wikipedia.org/wiki/Tree_\(data_structure\) "Tree (data structure)"), where

- the internal nodes are operators,
- leaves are [relations](https://en.m.wikipedia.org/wiki/Relation_\(database\) "Relation (database)"),
- subtrees are subexpressions.

The primary goal of the query optimizer is to transform [expression trees](https://en.m.wikipedia.org/wiki/Binary_expression_tree "Binary expression tree") into equivalent expression trees, where the average size of the relations yielded by subexpressions in the tree is smaller than it was before the [optimization](https://en.m.wikipedia.org/wiki/Query_optimization "Query optimization"). The secondary goal is to try to form common subexpressions within a single query, or if there is more than one query being evaluated at the same time, in all of those queries. The rationale behind the second goal is that it is enough to compute common subexpressions once, and the results can be used in all queries that contain that subexpression.

Here are a set of rules that can be used in such transformations.

Rules about selection operators play the most important role in query optimization. Selection is an operator that very effectively decreases the number of rows in its operand, so if the selections in an expression tree are moved towards the leaves, the internal [relations](https://en.m.wikipedia.org/wiki/Relation_\(database\) "Relation (database)") (yielded by subexpressions) will likely shrink.

#### Basic selection properties

[edit](https://en.m.wikipedia.org/w/index.php?title=Relational_algebra&action=edit&section=17 "Edit section: Basic selection properties")

Selection is [idempotent](https://en.m.wikipedia.org/wiki/Idempotent "Idempotent") (multiple applications of the same selection have no additional effect beyond the first one), and [commutative](https://en.m.wikipedia.org/wiki/Commutative "Commutative") (the order selections are applied in has no effect on the eventual result).

#### Breaking up selections with complex conditions

[edit](https://en.m.wikipedia.org/w/index.php?title=Relational_algebra&action=edit&section=18 "Edit section: Breaking up selections with complex conditions")

A selection whose condition is a [conjunction](https://en.m.wikipedia.org/wiki/Logical_conjunction "Logical conjunction") of simpler conditions is equivalent to a sequence of selections with those same individual conditions, and selection whose condition is a [disjunction](https://en.m.wikipedia.org/wiki/Logical_disjunction "Logical disjunction") is equivalent to a union of selections. These identities can be used to merge selections so that fewer selections need to be evaluated, or to split them so that the component selections may be moved or optimized separately.

#### Selection and cross product

[edit](https://en.m.wikipedia.org/w/index.php?title=Relational_algebra&action=edit&section=19 "Edit section: Selection and cross product")

Cross product is the costliest operator to evaluate. If the input [relations](https://en.m.wikipedia.org/wiki/Relation_\(database\) "Relation (database)") have _N_ and _M_ rows, the result will contain   rows. Therefore, it is important to decrease the size of both operands before applying the cross product operator.

This can be effectively done if the cross product is followed by a selection operator, e.g.  . Considering the definition of join, this is the most likely case. If the cross product is not followed by a selection operator, we can try to push down a selection from higher levels of the expression tree using the other selection rules.

In the above case the condition _A_ is broken up in to conditions _B_, _C_ and _D_ using the split rules about complex selection conditions, so that   and _B_ contains attributes only from _R_, _C_ contains attributes only from _P_, and _D_ contains the part of _A_ that contains attributes from both _R_ and _P_. Note, that _B_, _C_ or _D_ are possibly empty. Then the following holds:

#### Selection and set operators

[edit](https://en.m.wikipedia.org/w/index.php?title=Relational_algebra&action=edit&section=20 "Edit section: Selection and set operators")

Selection is [distributive](https://en.m.wikipedia.org/wiki/Distributive_property "Distributive property") over the set difference, intersection, and union operators. The following three rules are used to push selection below set operations in the expression tree. For the set difference and the intersection operators, it is possible to apply the selection operator to just one of the operands following the transformation. This can be beneficial where one of the operands is small, and the overhead of evaluating the selection operator outweighs the benefits of using a smaller [relation](https://en.m.wikipedia.org/wiki/Relation_\(database\) "Relation (database)") as an operand.

#### Selection and projection

[edit](https://en.m.wikipedia.org/w/index.php?title=Relational_algebra&action=edit&section=21 "Edit section: Selection and projection")

Selection commutes with projection if and only if the fields referenced in the selection condition are a subset of the fields in the projection. Performing selection before projection may be useful if the operand is a cross product or join. In other cases, if the selection condition is relatively expensive to compute, moving selection outside the projection may reduce the number of tuples which must be tested (since projection may produce fewer tuples due to the elimination of duplicates resulting from omitted fields).

#### Basic projection properties

[edit](https://en.m.wikipedia.org/w/index.php?title=Relational_algebra&action=edit&section=23 "Edit section: Basic projection properties")

Projection is idempotent, so that a series of (valid) projections is equivalent to the outermost projection.

#### Projection and set operators

[edit](https://en.m.wikipedia.org/w/index.php?title=Relational_algebra&action=edit&section=24 "Edit section: Projection and set operators")

Projection is [distributive](https://en.m.wikipedia.org/wiki/Distributive_property "Distributive property") over set union.

Projection does not distribute over intersection and set difference. Counterexamples are given by:

and

where _b_ is assumed to be distinct from b'.

#### Basic rename properties

[edit](https://en.m.wikipedia.org/w/index.php?title=Relational_algebra&action=edit&section=26 "Edit section: Basic rename properties")

Successive renames of a variable can be collapsed into a single rename. Rename operations which have no variables in common can be arbitrarily reordered with respect to one another, which can be exploited to make successive renames adjacent so that they can be collapsed.

#### Rename and set operators

[edit](https://en.m.wikipedia.org/w/index.php?title=Relational_algebra&action=edit&section=27 "Edit section: Rename and set operators")

Rename is distributive over set difference, union, and intersection.

Cartesian product is distributive over union.

The first query language to be based on Codd's algebra was Alpha, developed by Dr. Codd himself. Subsequently, [ISBL](https://en.m.wikipedia.org/wiki/ISBL "ISBL") was created, and this pioneering work has been acclaimed by many authorities[[9]](https://en.m.wikipedia.org/wiki/Relational_algebra#cite_note-12) as having shown the way to make Codd's idea into a useful language. [Business System 12](https://en.m.wikipedia.org/wiki/Business_System_12 "Business System 12") was a short-lived industry-strength relational DBMS that followed the ISBL example.

In 1998 [Chris Date](https://en.m.wikipedia.org/wiki/Christopher_J._Date "Christopher J. Date") and [Hugh Darwen](https://en.m.wikipedia.org/wiki/Hugh_Darwen "Hugh Darwen") proposed a language called **Tutorial D** intended for use in teaching relational database theory, and its query language also draws on ISBL's ideas.[[10]](https://en.m.wikipedia.org/wiki/Relational_algebra#cite_note-13) Rel is an implementation of **Tutorial D**. Bmg is an implementation of relational algebra in Ruby which closely follows the principles of **Tutorial D** and _The Third Manifesto_.[[11]](https://en.m.wikipedia.org/wiki/Relational_algebra#cite_note-14)

Even the query language of [SQL](https://en.m.wikipedia.org/wiki/SQL "SQL") is loosely based on a relational algebra, though the operands in SQL ([tables](https://en.m.wikipedia.org/wiki/Table_\(database\) "Table (database)")) are not exactly [relations](https://en.m.wikipedia.org/wiki/Relation_\(database\) "Relation (database)") and several useful theorems about the relational algebra do not hold in the SQL counterpart (arguably to the detriment of optimisers and/or users). The SQL table model is a bag ([multiset](https://en.m.wikipedia.org/wiki/Multiset "Multiset")), rather than a set. For example, the expression   is a theorem for relational algebra on sets, but not for relational algebra on bags.[[7]](https://en.m.wikipedia.org/wiki/Relational_algebra#cite_note-Garcia-MolinaUllman2009-10)

- [Cartesian product](https://en.m.wikipedia.org/wiki/Cartesian_product "Cartesian product")
- [Codd's theorem](https://en.m.wikipedia.org/wiki/Codd%27s_theorem "Codd's theorem")
- [D4 (programming language)](https://en.m.wikipedia.org/wiki/D4_\(programming_language\) "D4 (programming language)") (an implementation of D)
- [Data modeling](https://en.m.wikipedia.org/wiki/Data_modeling "Data modeling")
- [Database](https://en.m.wikipedia.org/wiki/Database "Database")
- [Datalog](https://en.m.wikipedia.org/wiki/Datalog "Datalog")
- [Logic of relatives](https://en.m.wikipedia.org/wiki/Logic_of_relatives "Logic of relatives")
- [Object-role modeling](https://en.m.wikipedia.org/wiki/Object-role_modeling "Object-role modeling")
- [Projection (mathematics)](https://en.m.wikipedia.org/wiki/Projection_\(mathematics\) "Projection (mathematics)")
- [Projection (relational algebra)](https://en.m.wikipedia.org/wiki/Projection_\(relational_algebra\) "Projection (relational algebra)")
- [Projection (set theory)](https://en.m.wikipedia.org/wiki/Projection_\(set_theory\) "Projection (set theory)")
- [Relation](https://en.m.wikipedia.org/wiki/Relation_\(mathematics\) "Relation (mathematics)")
- [Relation (database)](https://en.m.wikipedia.org/wiki/Relation_\(database\) "Relation (database)")
- [Relation algebra](https://en.m.wikipedia.org/wiki/Relation_algebra "Relation algebra")
- [Relation composition](https://en.m.wikipedia.org/wiki/Relation_composition "Relation composition")
- [Relation construction](https://en.m.wikipedia.org/wiki/Relation_construction "Relation construction")
- [Relational calculus](https://en.m.wikipedia.org/wiki/Relational_calculus "Relational calculus")
- [Relational database](https://en.m.wikipedia.org/wiki/Relational_database "Relational database")
- [Relational model](https://en.m.wikipedia.org/wiki/Relational_model "Relational model")
- [SQL](https://en.m.wikipedia.org/wiki/SQL "SQL")
- [Theory of relations](https://en.m.wikipedia.org/wiki/Theory_of_relations "Theory of relations")
- [Triadic relation](https://en.m.wikipedia.org/wiki/Triadic_relation "Triadic relation")
- [Tuple relational calculus](https://en.m.wikipedia.org/wiki/Tuple_relational_calculus "Tuple relational calculus")

1. **[^](https://en.m.wikipedia.org/wiki/Relational_algebra#cite_ref-6)** In [Unicode](https://en.m.wikipedia.org/wiki/Unicode "Unicode"), the Left outer join symbol is ⟕ (U+27D5).
2. **[^](https://en.m.wikipedia.org/wiki/Relational_algebra#cite_ref-7)** In [Unicode](https://en.m.wikipedia.org/wiki/Unicode "Unicode"), the Right outer join symbol is ⟖ (U+27D6).
3. **[^](https://en.m.wikipedia.org/wiki/Relational_algebra#cite_ref-8)** In [Unicode](https://en.m.wikipedia.org/wiki/Unicode "Unicode"), the Full Outer join symbol is ⟗ (U+27D7).

1. **[^](https://en.m.wikipedia.org/wiki/Relational_algebra#cite_ref-Codd1970_1-0)** [Codd, E.F.](https://en.m.wikipedia.org/wiki/E.F._Codd "E.F. Codd") (1970). ["A Relational Model of Data for Large Shared Data Banks"](https://doi.org/10.1145%2F362384.362685). _[Communications of the ACM](https://en.m.wikipedia.org/wiki/Communications_of_the_ACM "Communications of the ACM")_. **13** (6): 377–387. [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1145/362384.362685](https://doi.org/10.1145%2F362384.362685). [S2CID](https://en.m.wikipedia.org/wiki/S2CID_\(identifier\) "S2CID (identifier)") [207549016](https://api.semanticscholar.org/CorpusID:207549016).
2. **[^](https://en.m.wikipedia.org/wiki/Relational_algebra#cite_ref-2)** Maddux, Roger D. (1991-09-01). ["The origin of relation algebras in the development and axiomatization of the calculus of relations"](https://link.springer.com/article/10.1007/BF00370681). _Studia Logica_. **50** (3): 421–455. [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1007/BF00370681](https://doi.org/10.1007%2FBF00370681). [ISSN](https://en.m.wikipedia.org/wiki/ISSN_\(identifier\) "ISSN (identifier)") [1572-8730](https://search.worldcat.org/issn/1572-8730).
3. **[^](https://en.m.wikipedia.org/wiki/Relational_algebra#cite_ref-3)** Silberschatz, Abraham; Henry F. Korth; S. Sudarshan (2020). _Database system concepts_ (Seventh ed.). New York. p. 56. [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-07-802215-9](https://en.m.wikipedia.org/wiki/Special:BookSources/978-0-07-802215-9 "Special:BookSources/978-0-07-802215-9"). [OCLC](https://en.m.wikipedia.org/wiki/OCLC_\(identifier\) "OCLC (identifier)") [1080554130](https://search.worldcat.org/oclc/1080554130).`{{[cite book](https://en.m.wikipedia.org/wiki/Template:Cite_book "Template:Cite book")}}`: CS1 maint: location missing publisher ([link](https://en.m.wikipedia.org/wiki/Category:CS1_maint:_location_missing_publisher "Category:CS1 maint: location missing publisher"))
4. **[^](https://en.m.wikipedia.org/wiki/Relational_algebra#cite_ref-%C3%96zsuValduriez2011_4-0)** M. Tamer Özsu; Patrick Valduriez (2011). [_Principles of Distributed Database Systems_](https://books.google.com/books?id=TOBaLQMuNV4C&pg=PA46) (3rd ed.). Springer. p. 46. [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1-4419-8833-1](https://en.m.wikipedia.org/wiki/Special:BookSources/978-1-4419-8833-1 "Special:BookSources/978-1-4419-8833-1").
5. **[^](https://en.m.wikipedia.org/wiki/Relational_algebra#cite_ref-O'NeilO'Neil2001_5-0)** Patrick O'Neil; [Elizabeth O'Neil](https://en.m.wikipedia.org/wiki/Elizabeth_O%27Neil "Elizabeth O'Neil") (2001). [_Database: Principles, Programming, and Performance, Second Edition_](https://books.google.com/books?id=UXh4qTpmO8QC&pg=PA120). Morgan Kaufmann. p. 120. [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1-55860-438-4](https://en.m.wikipedia.org/wiki/Special:BookSources/978-1-55860-438-4 "Special:BookSources/978-1-55860-438-4").
6. **[^](https://en.m.wikipedia.org/wiki/Relational_algebra#cite_ref-Date2011_9-0)** C. J. Date (2011). [_SQL and Relational Theory: How to Write Accurate SQL Code_](https://books.google.com/books?id=WuZGD5tBfMwC&pg=PA133). O'Reilly Media, Inc. pp. 133–135. [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1-4493-1974-8](https://en.m.wikipedia.org/wiki/Special:BookSources/978-1-4493-1974-8 "Special:BookSources/978-1-4493-1974-8").
7. ^ [_**a**_](https://en.m.wikipedia.org/wiki/Relational_algebra#cite_ref-Garcia-MolinaUllman2009_10-0) [_**b**_](https://en.m.wikipedia.org/wiki/Relational_algebra#cite_ref-Garcia-MolinaUllman2009_10-1) [_**c**_](https://en.m.wikipedia.org/wiki/Relational_algebra#cite_ref-Garcia-MolinaUllman2009_10-2) [Hector Garcia-Molina](https://en.m.wikipedia.org/wiki/Hector_Garcia-Molina "Hector Garcia-Molina"); [Jeffrey D. Ullman](https://en.m.wikipedia.org/wiki/Jeffrey_Ullman "Jeffrey Ullman"); [Jennifer Widom](https://en.m.wikipedia.org/wiki/Jennifer_Widom "Jennifer Widom") (2009). _Database systems: the complete book_ (2nd ed.). Pearson Prentice Hall. [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-13-187325-4](https://en.m.wikipedia.org/wiki/Special:BookSources/978-0-13-187325-4 "Special:BookSources/978-0-13-187325-4").
8. **[^](https://en.m.wikipedia.org/wiki/Relational_algebra#cite_ref-11)** Aho, Alfred V.; Jeffrey D. Ullman (1979). "Universality of data retrieval languages". _Proceedings of the 6th ACM SIGACT-SIGPLAN symposium on Principles of programming languages - POPL '79_. pp. 110–119. [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1145/567752.567763](https://doi.org/10.1145%2F567752.567763). [S2CID](https://en.m.wikipedia.org/wiki/S2CID_\(identifier\) "S2CID (identifier)") [3242505](https://api.semanticscholar.org/CorpusID:3242505).
9. **[^](https://en.m.wikipedia.org/wiki/Relational_algebra#cite_ref-12)** C. J. Date. ["Edgar F. Codd - A.M. Turing Award Laureate"](https://amturing.acm.org/award_winners/codd_1000892.cfm). _amturing.acm.org_. Retrieved 2020-12-27.
10. **[^](https://en.m.wikipedia.org/wiki/Relational_algebra#cite_ref-13)** C. J. Date and Hugh Darwen. ["Databases, Types, and the Relational model: The Third Manifesto"](https://www.dcs.warwick.ac.uk/~hugh/TTM/DTATRM.pdf) (PDF). Retrieved 2024-07-04.
11. **[^](https://en.m.wikipedia.org/wiki/Relational_algebra#cite_ref-14)** ["Bmg documentation"](https://www.relational-algebra.dev/). Retrieved 2024-07-04.

- [Imieliński, T.](https://en.m.wikipedia.org/wiki/Tomasz_Imieli%C5%84ski "Tomasz Imieliński"); Lipski, W. (1984). ["The relational model of data and cylindric algebras"](https://doi.org/10.1016%2F0022-0000%2884%2990077-1). _[Journal of Computer and System Sciences](https://en.m.wikipedia.org/wiki/Journal_of_Computer_and_System_Sciences "Journal of Computer and System Sciences")_. **28**: 80–102. [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1016/0022-0000(84)90077-1](https://doi.org/10.1016%2F0022-0000%2884%2990077-1). (For relationship with [cylindric algebras](https://en.m.wikipedia.org/wiki/Cylindric_algebra "Cylindric algebra")).

- [RAT Relational Algebra Translator](https://web.archive.org/web/20220330063834/https://www.slinfo.una.ac.cr/rat/rat.html) Free software to convert relational algebra to SQL
- [Lecture Videos: Relational Algebra Processing](http://www.databaselecture.com/processing.html) - An introduction to how database systems process relational algebra