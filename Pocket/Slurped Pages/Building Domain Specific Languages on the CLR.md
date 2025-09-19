---
URL: https://www.infoq.com/articles/dsl-on-the-clr/
Author: Ayende Rahien, Oren Eini
Site: InfoQ
published: 8.2004
Abstract: Ayende Rahien gives an introduction to internal DSLs on the CLR. He takes a look at a variety of .NET languages as possible candidates for DSL host languages and presents Boo as &quot;Language of Choice&quot;.
webTags:
  - slp/dsl-on-the-clr
  - slp/Development
  - slp/Architecture-and-Design
  - slp/NET
  - slp/Domain-Specific-Languages
  - slp/Microsoft
  - slp/Boo
  - slp/
Extracted_On: 25.1409
Web_Title: Building Domain Specific Languages on the CLR
set:
  - code
---

Domain Specific Languages is a topic that has grown significantly in popularity recently. This can probably be tracked to the Rails phenomenon. The popularity of Rails, and the extensive use of Domain Specific Languages (DSL from now) in Rails, has sparked wide spread interest in DSLs.

Up until recently, developers had the impression that in order to build a DSL you need to have expertise in Compiler Theory, understand the inner workings of Lex and Yacc and in general be ready to invest a significant amount of time in building the DSL. As a result, very few people ever made an attempt, and when they did, they went the build-your-own-language-from-scratch route.

That tends to be _costly_.

At the same time, advocates of dynamic languages were able to utilize the dynamic nature of their favorite language in order to build Domain Specific Languages without much trouble at all. In fact, for many of them, this approach is the norm for developing any application of significant complexity.

The difference between the two approaches is significant. The first approach, building your own language, is called an external DSL. This is an expensive project to undertake, as you need to build everything from scratch, taking into account operator precedence rules, the runtime library, executing the code, error handling, and I/O. The second approach, using a host language and modifying it, is called an internal DSL. Those are much easier to build and maintain. You merely have to worry about your own modifications. All the other stuff (which you generally don't really care about) is already handled by the host language.

Another approach is to build a fluent interface and call it a DSL. I do not consider this a DSL, but some others do. This approach is often taken on languages where the syntactic freedom is severely limited. Java and C# are good examples of such languages, and I include Java 6 and C# 3). You can make some inroads into more language oriented APIs, but not nearly as far as to allow me to consider this a DSL.

My preference, in almost all cases, is to go with an internal DSL based on a language with high syntactic flexibility. Since I tend to work on the CLR almost exclusively, I want to use a host language that runs on this platform. It allows me to reuse most of my hard earned knowledge of the CLR. Do not underestimate this benefit. Having a familiar environment at your hands is of tremendous importance.

Before delving into the language, what exactly is a "high syntactic flexibility language", anyway? What features does a language need in order to provide a good hosting environment for an internal DSL?

I need to have suitable means to express my intention. This can be accomplished by intent revealing names, expressing domain specific concepts, and in general, moving away from the generic programming language approach. You want to be able to create a 4th generation language, and do it easily. Let us take a simple DSL that we use to script working with spread sheets, shall we?

Your task, if you please, will be to create the multiplication grid.

for x in range(100):  
     for y in range(100):  
          cell[ x+1 , y+1 ]  = x * y  
      formula x, 100, sum( x1, x100 )

This is not really impressive, is it? It looks almost exactly like a programming language, and the code is trivial. Except that trying to do _the same_ using the excel automation API is going to be anything but simple and trivial.

Notice that the code that we have here is all the code there is. We don't need a class definition, or a main method. It is a DSL script that can be directly executed without any syntactic baggage.

If the previous example didn't impress you much, how about defining business rules for discounts on orders:

apply_discount_of 5.percent:  
         when order.Total > 1000 and customer.IsPreferred  
         when order.Total > 10000

suggest_registered_to_preferred:  
         when order.Total  > 100 and not customer.IsPreferred

This looks a lot less like a programming language, it looks like the way a business analyst would define the rules in a word document.

From my point of view, both examples are Domain Specific Languages. They simply have different styles and approaches for expressing their domain. In both, we have actually _removed_ from the language everything that is not directly related to our domain. This allows us to stick with the domain, and hopefully have good tools to deal with it.

The removal of anything but the domain concepts is as important as having a syntax that matches the domain.

When we start to look at languages with high syntactic flexibility on the CLR, we have a wide variety of options; let us evaluate a few of them. We will start with those that come from Microsoft.

**C#** - This is a very rigid language, type definition, no standalone methods / code, inflexible syntax. All those traits conspire to make C# a bad choice for a DSL host language. Oh, it can be done, but it wouldn't be as good as the other approaches.

**VB.Net** - VB.Net is actually far more appropriate for language oriented programming, because it uses many English words as keywords and operators. Unfortunately, it is also a very verbose language, and we want to reduce verbosity to just our domain concepts.

**JScript** - This may cause a laugh, but JScript is a very flexible language, which offers a fairly good syntax for many things. Just take a look at all the JavaScript libraries out there. JScript offers the same facilities as JavaScript, after all. And one only has to look at things like JQuery or Prototype to understand how flexible you can make it. However, it is no longer developed, so I am not sure what kind of a future it has. And while it has flexible syntax for many things, it still has that programming language feeling to it, which I find distracting in a DSL.

**F#** - This is a functional language, developed by Microsoft, which is supposed to ship in the future. F# supports language oriented programming. I have skimmed over that language very briefly. Although the power of F# is impressive, from my point of view, it rather looks like BNF definitions than anything else. Unquestionably this is a problem with the author's lack of experience with functional programming languages, but I just do not consider it readable.

We are done with the languages developed by Microsoft. Let us look a bit further afield. At last count the CLR boasted over a hundred languages, so I am going to pick just two, which I deem to be valuable candidates for DSL host languages.

[Nemerle](http://nemerle.org/Main_Page) is a multi paradigm language (OO and Functional), with full support for compiler macros (of the Lisp variety, not the C++ ones; more on that later), and a host of other things that makes it a good target for a host language for a DSL. Not the least for the simple reason that I can actually read Nemerle code (well, most of the time).

[Boo](http://boo.codehaus.org/) is a statically typed OO language with a Python based syntax. It supports Macros (again, of the Lisp variety), an open compiler pipeline and has specific features that were explicitly designed to make DSL building easier. Boo is my preferred language for building DSLs, but in order to preserve at least a semblance of objectivity, we need to review the next subject before I could prove to you how powerful Boo is.

What about the DLR?

So far, I have skipped talking about the Dynamic Language Runtime, which is a Microsoft project to get dynamic languages (such as Ruby, Python and EcmaScript, to mention a few) on the CLR.

More specifically, when people are thinking about the DLR, they are thinking about IronRuby and IronPython.

Ruby is a language that has proven to be well suited for writing an internal DSL, and running it on the CLR will ensure that we are working in a familiar environment.

Using the DLR as a platform for a DSL is certainly possible, but I would avoid it, at least for the time being. The DLR, and IronRuby itself, are still work in progress. I don't think that there is any commitment for a release date, yet. Furthermore, I haven't found much that I could do in Ruby that I couldn't do in Boo, and I find Boo's meta programming facilities both very natural and extremely powerful.

What do I mean by "natural and extremely powerful"?

Let us examine Boo in a little more depth. I said that it has an open compiler. I didn't mean that it is Open Source (it is, but that is not relevant), I meant that you have a way to reach into the compiler and start messing around with the compiler's internal object model _during compilation_. This means that we can change the way the compiler behaves in an interesting fashion.

The two code samples above are both Boo DSL code.

Getting into the full details of Boo's meta programming facilities is out of scope, but I think that I can show off a simple sample that will demonstrate its power.

The CLR has the notion of IDisposable, and the using statement to go with it. Right now I am going to define an ITransactionable, and define a transaction statement that will go with it.

public interface ITransactionable:  
     def Dispose():  
         pass  
     def Commit():  
         pass  
     def Rollback():  
         pass

macro transaction:  
     return [|  
         tx as ITransactionable = $(transaction.Arguments[0])  
         try:  
              $(transaction.Body)  
              tx.Commit()  
         except:  
              tx.Rollback()  
              raise  
         finally:  
              tx.Dispse()  
     |]

With just this code, we can start using the transaction statement, as a first class language element (in fact, this is exactly how the using statement is implemented in Boo).

transaction GetNewDatabaseTransaction():  
         DoSomethingWithTheDatabase()

Now, if the code inside the transaction will raise an exception, the transaction will be rolled back automatically. If it is successful, it will be committed automatically.

But that is just a demonstration of what you can do with the language. And note that the only new concept that I am introducing here is macro, and the funny [| |] symbols. Without getting too deep into it, this instructs the compiler to do a syntactic replacement of the code inside a transaction block with the content of the macro.

It is important to note that this goes beyond text substitution, we are modifying the AST (Abstract Syntax Tree - the compiler object model). This is a trivial (but powerful) example. We will explore a more complex scenario in a short while, which will show us why this distinction is important.

For building a DSL, even this level is not often needed. You can get by without using any of the meta programming options by just using the language syntax. Boo, akin to Ruby, has a lot of optional syntax, which is very useful in many scenarios. For example, we could create the same syntax without resorting to meta programming, but utilizing a feature of Boo's syntax, which allows us to pass a block of code to a method, if the last parameter is a delegate (closure, block, etc).

For instance:

def transaction(tx as ITransactionable, transactionalAction as ActionDelegate):  
          try:  
               transactionalAction()  
               tx.Commit()  
          except:  
               tx.Rollback()  
               raise  
          finally:  
               tx.Dispse()

And we can still use this code, just as we did before:

transaction GetNewDatabaseTransaction():  
         DoSomethingWithTheDatabase()

From the point of view of the syntax, there is no difference. There is a subtle difference between the two versions, however. The CLR _ensures_ that if the instruction preceding a 'try' block succeeds, then the 'try' block will be entered. This is critical for the correct work of using() statements, as well as many other scenarios.

The first version could take advantage of this capability. But the second cannot. (The reason for that is that the second version involves a method call at runtime, while the first one will simply replace the transaction block with the modified results).

What else can we do with Boo's meta programming? Quite a lot, you could write a book about it (and in fact, I do write a book about it :-) ). As a simple example, and not necessarily the best example of good design, you can modify the semantics of the 'if' statement in the language.

I had to do that once, when I changed 'if' statements in the following pattern:

if foo == null:  
     # do something

To this pattern:

if foo == null or foo isa NullObject:  
    # do something

Now, whenever we ask for null, we also check if the object is an instance of NullObject, which is a custom type in my application. This allows me to use the NullObject pattern in a natural manner, through the application. This means that the following code sample will print "Value is null":

val = NullObject() # set val to a new instance of NullObject  
if val == null: # will be compiled as val == null or val isa NullObject  
     print "Value is null"  
else:  
     print "Value is not null"

We have extended the language to consider all objects inheriting from NullObject as null.

The ability to go in and change such a fundamental part of the language made my work (and the usage of the language) much easier in the long run.

One last example, before we move on. I want to show you how you can add a (simplistic) 'design by contract' (class invariant) to Boo application, in about 20 lines of code. Here it is:

[AttributeUsage(AttributeTargets.Class)]  
class EnsureAttribute(AbstractAstAttribute):

 	expr as Expression

def constructor(expr as Expression):  
 		self.expr = exprdef Apply(target as Node):  
 		type as ClassDefinition = target  
 		for member in type.Members:  
 			method = member as Method  
 			continue if method is null  
 			block = method.Body  
 			method.Body = [|  
 				block:  
 					try:  
 						$block  
 					ensure:  
 						assert $expr  
 			|].Block

And the usage:

[ensure(name is not null)]  
class Customer:  
 	name as stringdef constructor(name as string):  
 		self.name = namedef SetName(newName as string):  
 		name = newName

Now, any attempt to set the name to null will cause an assertion exception. This technique is _quite_ powerful, and very easy to use. I'll leave writing the precondition attribute as an exercise for the reader.

This sample also demonstrates the power of working directly with the compiler object model (AST). We aren't limited, as in C++ macros, to text substitution. We can query the object model and modify it in a very natural manner. Well, by now I think that I ought to have convinced you that Boo is an awesome language, and that it is very suitable for building your DSL. I have literally just skimmed the very surface of its potential. There is a lot more to find out.

A few other advantages: Boo is a statically compiled language, which means that your DSL will have all the advantages of standard CLR code (JIT, GC, debugging, etc). From a performance perspective, there isn't any difference between your DSL code and your application code.

Thus Boo based DSLs are ideal candidates for code sections that both need to be changed often and require high performance. The common requirement of having to change things in production often pushes people towards XML based systems, rule engines, etc. Even without considering the whole "let us program in XML" debate, those choices suffer from poor performance.  

Building a system that makes use of a set of DSL scripts is easy, offers high performance, and remains highly maintainable in the long run. It also meshes well with the idea of Domain Driven Design, since having a Domain Specific Language make it easy to express the concepts of the domain naturally.

There are several publicly available Boo DSLs.

My personal favorite is Binsor. Binsor is a configuration DSL for the Castle Windsor IoC container, which makes working with advance IoC concepts a breeze. You can learn more about Binsor by visiting the [Binsor 2.0](http://www.ayende.com/Blog/archive/2007/10/25/Binsor-2.0.aspx) announcement. Other interesting DSLs in Boo are:

[Specter](http://specter.sourceforge.net/) is a behavior driven development (BDD) framework that provides a very natural syntax for writing the specification, and translates the specification to a standard NUnit test.

[Brail](http://castleproject.org/monorail/documentation/trunk/viewengines/brail/index.html) is a text templating language.

There are a few others, but they are targeting a much smaller niche, and are not widely known.

Writing a DSL requires some initial knowledge, but that knowledge is straightforward and quickly acquired. Once you have this base knowledge, you can get to the point where writing a DSL is about as hard as writing a form.

In fact, I have written a back-end processing system which was composed mostly of DSLs to process messages from various sources. In that system, I was writing DSLs about as often as I would have written forms in a presentation layer.

In conclusion, Boo is a really nice language to build a DSL in. Using Boo for writing a DSL tends to reduce the cost of writing a DSL significantly, without compromising on flexibility or performance. In addition it offers the syntactic freedom and ability to express your domain concepts in a "natural" way.

And as a parting shot, [Boo runs on Java](http://docs.codehaus.org/display/BOO/Boo+And+Java) as well.

## About the author

Oren Eini, better known as Ayende Rahien, is an experienced .NET developer and architect. He is a well known contributor of several open source projects, such as NHibernate and Castle. In addition Ayende is the founder of Rhino Mocks, Rhino Commons, and NHibernate Query Analyzer. Regarding Boo Ayende has created Brail, a templating language for Castle MonoRail, Binsor, a DSL for configuring the Castle Windsor IoC container, and he is writing a book titled [Building Domain Specific Languages in Boo"](http://www.manning.com/affiliate/idevaffiliate.php?id=854_111).