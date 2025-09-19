---
URL: https://docs.racket-lang.org/more/index.html
Author: Matthew Flatt
Abstract: >-
  In contrast to the impression that Quick: An Introduction to Racket with
  Pictures may give, Racket is

  not just another pretty face. Underneath the graphical facade of

  DrRacket lies a sophisticated toolbox for managing threads and

  processes, which is the subject of this tutorial.
Extracted_On: 25.1409
Web_Title: "More: Systems Programming with Racket"
---

In contrast to the impression that [Quick: An Introduction to Racket with Pictures](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?tag=%28part._%28.%27%28lib._scribblings%2Fquick%2Fquick..scrbl%29.%27._.%27top.%27%29%29&version=8.18) may give, Racket is not just another pretty face. Underneath the graphical facade of DrRacket lies a sophisticated toolbox for managing threads and processes, which is the subject of this tutorial.

Specifically, we show how to build a secure, multi-threaded, servlet-extensible, continuation-based web server. We use much more of the language than in [Quick: An Introduction to Racket with Pictures](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?tag=%28part._%28.%27%28lib._scribblings%2Fquick%2Fquick..scrbl%29.%27._.%27top.%27%29%29&version=8.18), and we expect you to click on syntax or function names that you don’t recognize (which will take you to the relevant documentation). Beware that the last couple of sections present material that is normally considered difficult. If you’re still new to Racket and have relatively little programming experience, you may want to skip to [The Racket Guide](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=guide&rel=index.html&version=8.18).

To get into the spirit of this tutorial, we suggest that you set DrRacket aside for a moment, and switch to raw racket in a terminal. If you’re already spoiled, you can keep using DrRacket. In that case, skip [Ready...](https://docs.racket-lang.org/more/index.html#%28part._ready%29), build the program in DrRacket’s definitions window instead of a "serve.rkt" file as described in [Set...](https://docs.racket-lang.org/more/index.html#%28part._set%29), and click the Run button instead of using [enter!](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=interactive.html%23%2528form._%2528%2528lib._racket%252Fenter..rkt%2529._enter%2521%2529%2529&version=8.18) as shown in [Go!](https://docs.racket-lang.org/more/index.html#%28part._go%29). You’ll also need a text editor, such as Emacs, vi, or even Notepad—any editor will do, but one that supports parenthesis matching would be helpful. Finally, you’ll need a web client, perhaps Lynx or Firefox.

## 1 Ready...[🔗](https://docs.racket-lang.org/more/index.html#\(part._ready\) "Link to here")ℹ

[Download Racket](http://download.racket-lang.org/), install, and then start racket with no command-line arguments:

|   |
|---|
|$ racket|
|Welcome to Racket v8.18 [cs].|
|>|

> > > Set your PATH environment variable so you can use raco and other Racket command-line functions. On Mac OS: sudo sh -c 'echo "/Applications/Racket v8.18/bin" >> /etc/paths.d/racket' (assuming that you have installed Racket in the "Applications" folder). On Windows: add the Racket installation path to Path in Environment Variables (under System Properties, Advanced tab).

Assuming that you have Editline installed,To use GNU Readline instead of Editline, set the PLT_READLINE_LIB environment variable or install the "readline-gpl" package. racket by default supports line editing and comma-prefixed meta-commands that support exploration and development. See [xrepl](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?tag=%28mod-path._.%27xrepl.%27%29&version=8.18) for more information.

## 2 Set...[🔗](https://docs.racket-lang.org/more/index.html#\(part._set\) "Link to here")ℹ

In the same directory where you started racket, create a text file "serve.rkt", and start it like this:

> > > Here’s the whole program so far in plain text: [step 0](https://docs.racket-lang.org/more/step0.txt).

## 3 Go![🔗](https://docs.racket-lang.org/more/index.html#\(part._go\) "Link to here")ℹ

Back in racket, try loading the file and running go:

> > > If you use [xrepl](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=xrepl&rel=index.html&version=8.18), you can use [,enter serve.rkt](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=xrepl&rel=index.html%23%2528xrepl._enter%2529&version=8.18).

> |   |
> |---|
> |> ([enter!](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=interactive.html%23%2528form._%2528%2528lib._racket%252Fenter..rkt%2529._enter%2521%2529%2529&version=8.18) "serve.rkt")|
> |[loading serve.rkt]|
> |> (go)|
> |'yep-it-works|

Try modifying "serve.rkt", and then run ([enter!](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=interactive.html%23%2528form._%2528%2528lib._racket%252Fenter..rkt%2529._enter%2521%2529%2529&version=8.18) "serve.rkt") again to re-load the module, and then check your changes.

## 4 “Hello World” Server[🔗](https://docs.racket-lang.org/more/index.html#\(part.__.Hello_.World__.Server\) "Link to here")ℹ

We’ll implement the web server through a serve function that takes an IP port number for client connections:

The server accepts TCP connections through a listener, which we create with [tcp-listen](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=tcp.html%23%2528def._%2528%2528lib._racket%252Ftcp..rkt%2529._tcp-listen%2529%2529&version=8.18). To make interactive development easier, we supply #t as the third argument to [tcp-listen](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=tcp.html%23%2528def._%2528%2528lib._racket%252Ftcp..rkt%2529._tcp-listen%2529%2529&version=8.18), which lets us re-use the port number immediately, without waiting for a TCP timeout.

The server must loop to accept connections from the listener:

Our accept-and-handle function accepts a connection using [tcp-accept](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=tcp.html%23%2528def._%2528%2528lib._racket%252Ftcp..rkt%2529._tcp-accept%2529%2529&version=8.18), which returns two values: a stream for input from the client, and a stream for output to the client.

To handle a connection, for now, we’ll read and discard the request header, and then write a “Hello, world!” web page as the result:

> |   |
> |---|
> |([define](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=define.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._define%2529%2529&version=8.18) (handle in out)|
> |; Discard the request header (up to blank line):|
> |([regexp-match](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=regexp.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._regexp-match%2529%2529&version=8.18) #rx"(\r\n\|^)\r\n" in)|
> |; Send reply:|
> |([display](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=Writing.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._display%2529%2529&version=8.18) "HTTP/1.0 200 Okay\r\n" out)|
> |([display](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=Writing.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._display%2529%2529&version=8.18) "Server: k\r\nContent-Type: text/html\r\n\r\n" out)|
> |([display](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=Writing.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._display%2529%2529&version=8.18) "<html><body>Hello, world!</body></html>" out))|

Note that [regexp-match](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=regexp.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._regexp-match%2529%2529&version=8.18) operates directly on the input stream, which is easier than bothering with individual lines.

> > > Here’s the whole program so far in plain text: [step 1](https://docs.racket-lang.org/more/step1.txt).

Copy the above three definitions—serve, accept-and-handle, and handle—into "serve.rkt" and re-load:

> |   |
> |---|
> |> ([enter!](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=interactive.html%23%2528form._%2528%2528lib._racket%252Fenter..rkt%2529._enter%2521%2529%2529&version=8.18) "serve.rkt")|
> |[re-loading serve.rkt]|
> |> (serve 8080)|

Now point your browser to http://localhost:8080 (assuming that you used 8080 as the port number, and that the browser is running on the same machine) to receive a friendly greeting from your web server.

## 5 Server Thread[🔗](https://docs.racket-lang.org/more/index.html#\(part._.Server_.Thread\) "Link to here")ℹ

Before we can make the web server respond in more interesting ways, we need to get a Racket prompt back. Typing Ctl-C in your terminal window interrupts the server loop:

> > > In DrRacket, instead of typing Ctl-C, click the Stop button once.

> |   |
> |---|
> |> (serve 8080)|
> |^Cuser break|
> |>|

Unfortunately, we cannot now re-start the server with the same port number:

> |   |
> |---|
> |> (serve 8080)|
> |tcp-listen: listen on 8080 failed (address already in use)|

The problem is that the listener that we created with serve is still listening on the original port number.

To avoid this problem, let’s put the listener loop in its own thread, and have serve return immediately. Furthermore, we’ll have serve return a function that can be used to shut down the server thread and TCP listener:

> > > Here’s the whole program so far in plain text: [step 2](https://docs.racket-lang.org/more/step2.txt).

Try the new one:

> |   |
> |---|
> |> ([enter!](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=interactive.html%23%2528form._%2528%2528lib._racket%252Fenter..rkt%2529._enter%2521%2529%2529&version=8.18) "serve.rkt")|
> |[re-loading serve.rkt]|
> |> ([define](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=define.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._define%2529%2529&version=8.18) stop (serve 8081))|

Your server should now respond to http://localhost:8081, but you can shut down and restart the server on the same port number as often as you like:

> |   |
> |---|
> |> (stop)|
> |> ([define](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=define.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._define%2529%2529&version=8.18) stop (serve 8081))|
> |> (stop)|
> |> ([define](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=define.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._define%2529%2529&version=8.18) stop (serve 8081))|
> |> (stop)|

## 6 Connection Threads[🔗](https://docs.racket-lang.org/more/index.html#\(part._.Connection_.Threads\) "Link to here")ℹ

In the same way that we put the main server loop into a background thread, we can put each individual connection into its own thread:

> > > Here’s the whole program so far in plain text: [step 3](https://docs.racket-lang.org/more/step3.txt).

With this change, our server can now handle multiple threads at once. The handler is so fast that this fact will be difficult to detect, however, so try inserting ([sleep](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=threads.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._sleep%2529%2529&version=8.18) ([random](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=generic-numbers.html%23%2528def._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._random%2529%2529&version=8.18) 10)) before the handle call above. If you make multiple connections from the web browser at roughly the same time, some will return soon, and some will take up to 10 seconds. The random delays will be independent of the order in which you started the connections.

## 7 Terminating Connections[🔗](https://docs.racket-lang.org/more/index.html#\(part._.Terminating_.Connections\) "Link to here")ℹ

A malicious client could connect to our web server and not send the HTTP header, in which case a connection thread will idle forever, waiting for the end of the header. To avoid this possibility, we’d like to implement a timeout for each connection thread.

One way to implement the timeout is to create a second thread that waits for 10 seconds, and then kills the thread that calls handle. Threads are lightweight enough in Racket that this watcher-thread strategy works well:

> |   |
> |---|
> |([define](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=define.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._define%2529%2529&version=8.18) (accept-and-handle listener)|
> |([define-values](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=define.html%23%2528form._%2528%2528quote._%7E23%7E25kernel%2529._define-values%2529%2529&version=8.18) (in out) ([tcp-accept](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=tcp.html%23%2528def._%2528%2528lib._racket%252Ftcp..rkt%2529._tcp-accept%2529%2529&version=8.18) listener))|
> |([define](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=define.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._define%2529%2529&version=8.18) t ([thread](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=threads.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._thread%2529%2529&version=8.18)|
> |([lambda](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=lambda.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._lambda%2529%2529&version=8.18) ()|
> |(handle in out)|
> |([close-input-port](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=port-ops.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._close-input-port%2529%2529&version=8.18) in)|
> |([close-output-port](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=port-ops.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._close-output-port%2529%2529&version=8.18) out))))|
> |; Watcher thread:|
> |([thread](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=threads.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._thread%2529%2529&version=8.18) ([lambda](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=lambda.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._lambda%2529%2529&version=8.18) ()|
> |([sleep](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=threads.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._sleep%2529%2529&version=8.18) 10)|
> |([kill-thread](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=threads.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._kill-thread%2529%2529&version=8.18) t))))|

This first attempt isn’t quite right, because when the thread is killed, its in and out streams remain open. We could add code to the watcher thread to close the streams as well as kill the thread, but Racket offers a more general shutdown mechanism: custodians. A custodian is a kind of container for all resources other than memory, and it supports a [custodian-shutdown-all](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=custodians.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._custodian-shutdown-all%2529%2529&version=8.18) operation that terminates and closes all resources within the container, whether they’re threads, streams, or other kinds of limited resources.

Whenever a thread or stream is created, it is placed into the current custodian as determined by the [current-custodian](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=custodians.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._current-custodian%2529%2529&version=8.18) parameter. To place everything about a connection into a custodian, we [parameterize](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=parameters.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fmore-scheme..rkt%2529._parameterize%2529%2529&version=8.18) all the resource creations to go into a new custodian:

> > > See [Dynamic Binding: parameterize](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=guide&rel=parameterize.html&version=8.18) for an introduction to parameters.

> |   |
> |---|
> |([define](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=define.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._define%2529%2529&version=8.18) (accept-and-handle listener)|
> |([define](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=define.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._define%2529%2529&version=8.18) cust ([make-custodian](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=custodians.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._make-custodian%2529%2529&version=8.18)))|
> |([parameterize](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=parameters.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fmore-scheme..rkt%2529._parameterize%2529%2529&version=8.18) ([[current-custodian](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=custodians.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._current-custodian%2529%2529&version=8.18) cust])|
> |([define-values](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=define.html%23%2528form._%2528%2528quote._%7E23%7E25kernel%2529._define-values%2529%2529&version=8.18) (in out) ([tcp-accept](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=tcp.html%23%2528def._%2528%2528lib._racket%252Ftcp..rkt%2529._tcp-accept%2529%2529&version=8.18) listener))|
> |([thread](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=threads.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._thread%2529%2529&version=8.18) ([lambda](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=lambda.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._lambda%2529%2529&version=8.18) ()|
> |(handle in out)|
> |([close-input-port](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=port-ops.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._close-input-port%2529%2529&version=8.18) in)|
> |([close-output-port](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=port-ops.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._close-output-port%2529%2529&version=8.18) out))))|
> |; Watcher thread:|
> |([thread](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=threads.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._thread%2529%2529&version=8.18) ([lambda](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=lambda.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._lambda%2529%2529&version=8.18) ()|
> |([sleep](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=threads.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._sleep%2529%2529&version=8.18) 10)|
> |([custodian-shutdown-all](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=custodians.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._custodian-shutdown-all%2529%2529&version=8.18) cust))))|

With this implementation, in, out, and the thread that calls handle all belong to cust. In addition, if we later change handle so that it, say, opens a file, then the file handles will also belong to cust, so they will be reliably closed when cust is shut down.

In fact, it’s a good idea to change serve so that it uses a custodian, too:

> |   |
> |---|
> |([define](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=define.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._define%2529%2529&version=8.18) (serve port-no)|
> |([define](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=define.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._define%2529%2529&version=8.18) main-cust ([make-custodian](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=custodians.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._make-custodian%2529%2529&version=8.18)))|
> |([parameterize](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=parameters.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fmore-scheme..rkt%2529._parameterize%2529%2529&version=8.18) ([[current-custodian](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=custodians.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._current-custodian%2529%2529&version=8.18) main-cust])|
> |([define](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=define.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._define%2529%2529&version=8.18) listener ([tcp-listen](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=tcp.html%23%2528def._%2528%2528lib._racket%252Ftcp..rkt%2529._tcp-listen%2529%2529&version=8.18) port-no 5 #t))|
> |([define](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=define.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._define%2529%2529&version=8.18) (loop)|
> |(accept-and-handle listener)|
> |(loop))|
> |([thread](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=threads.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._thread%2529%2529&version=8.18) loop))|
> |([lambda](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=lambda.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._lambda%2529%2529&version=8.18) ()|
> |([custodian-shutdown-all](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=custodians.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._custodian-shutdown-all%2529%2529&version=8.18) main-cust)))|

That way, the main-cust created in serve not only owns the TCP listener and the main server thread, it also owns every custodian created for a connection. Consequently, the revised shutdown procedure for the server immediately terminates all active connections, in addition to the main server loop.

> > > Here’s the whole program so far in plain text: [step 4](https://docs.racket-lang.org/more/step4.txt).

After updating the serve and accept-and-handle functions as above, here’s how you can simulate a malicious client:

Now wait 10 seconds. If you try reading from cin, which is the stream that sends data from the server back to the client, you’ll find that the server has shut down the connection:

Alternatively, you don’t have to wait 10 seconds if you explicitly shut down the server:

## 8 Dispatching[🔗](https://docs.racket-lang.org/more/index.html#\(part._.Dispatching\) "Link to here")ℹ

It’s finally time to generalize our server’s “Hello, World!” response to something more useful. Let’s adjust the server so that we can plug in dispatching functions to handle requests to different URLs.

To parse the incoming URL and to more easily format HTML output, we’ll require two extra libraries:

> ([require](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=require.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._require%2529%2529&version=8.18) xml net/url)

The [xml](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=xml&rel=index.html&version=8.18) library gives us [xexpr->string](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=xml&rel=index.html%23%2528def._%2528%2528lib._xml%252Fmain..rkt%2529._xexpr-%7E3estring%2529%2529&version=8.18), which takes a Racket value that looks like HTML and turns it into actual HTML:

> |   |
> |---|
> |> ([xexpr->string](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=xml&rel=index.html%23%2528def._%2528%2528lib._xml%252Fmain..rkt%2529._xexpr-%7E3estring%2529%2529&version=8.18) '(html (head (title "Hello")) (body "Hi!")))|
> |"<html><head><title>Hello</title></head><body>Hi!</body></html>"|

We’ll assume that our new dispatch function (to be written) takes a requested URL and produces a result value suitable to use with [xexpr->string](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=xml&rel=index.html%23%2528def._%2528%2528lib._xml%252Fmain..rkt%2529._xexpr-%7E3estring%2529%2529&version=8.18) to send back to the client:

> |   |
> |---|
> |([define](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=define.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._define%2529%2529&version=8.18) (handle in out)|
> |([define](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=define.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._define%2529%2529&version=8.18) req|
> |; Match the first line to extract the request:|
> |([regexp-match](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=regexp.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._regexp-match%2529%2529&version=8.18) #rx"^GET (.+) HTTP/[0-9]+\\.[0-9]+"|
> |([read-line](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=Byte_and_String_Input.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._read-line%2529%2529&version=8.18) in)))|
> |([when](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=when_unless.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fletstx-scheme..rkt%2529._when%2529%2529&version=8.18) req|
> |; Discard the rest of the header (up to blank line):|
> |([regexp-match](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=regexp.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._regexp-match%2529%2529&version=8.18) #rx"(\r\n\|^)\r\n" in)|
> |; Dispatch:|
> |([let](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=let.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fletstx-scheme..rkt%2529._let%2529%2529&version=8.18) ([xexpr (dispatch ([list-ref](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=pairs.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._list-ref%2529%2529&version=8.18) req 1))])|
> |; Send reply:|
> |([display](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=Writing.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._display%2529%2529&version=8.18) "HTTP/1.0 200 Okay\r\n" out)|
> |([display](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=Writing.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._display%2529%2529&version=8.18) "Server: k\r\nContent-Type: text/html\r\n\r\n" out)|
> |([display](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=Writing.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._display%2529%2529&version=8.18) ([xexpr->string](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=xml&rel=index.html%23%2528def._%2528%2528lib._xml%252Fmain..rkt%2529._xexpr-%7E3estring%2529%2529&version=8.18) xexpr) out))))|

The [net/url](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=net&rel=url.html&version=8.18) library gives us [string->url](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=net&rel=url.html%23%2528def._%2528%2528lib._net%252Furl..rkt%2529._string-%7E3eurl%2529%2529&version=8.18), [url-path](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=net&rel=url.html%23%2528def._%2528%2528lib._net%252Furl-structs..rkt%2529._url-path%2529%2529&version=8.18), [path/param-path](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=net&rel=url.html%23%2528def._%2528%2528lib._net%252Furl-structs..rkt%2529._path%252Fparam-path%2529%2529&version=8.18), and [url-query](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=net&rel=url.html%23%2528def._%2528%2528lib._net%252Furl-structs..rkt%2529._url-query%2529%2529&version=8.18) for getting from a string to parts of the URL that it represents:

We use these pieces to implement dispatch. The dispatch function consults a hash table that maps an initial path element, like "foo", to a handler function:

> |   |
> |---|
> |([define](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=define.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._define%2529%2529&version=8.18) (dispatch str-path)|
> |; Parse the request as a URL:|
> |([define](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=define.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._define%2529%2529&version=8.18) [url](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=net&rel=url.html%23%2528def._%2528%2528lib._net%252Furl-structs..rkt%2529._url%2529%2529&version=8.18) ([string->url](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=net&rel=url.html%23%2528def._%2528%2528lib._net%252Furl..rkt%2529._string-%7E3eurl%2529%2529&version=8.18) str-path))|
> |; Extract the path part:|
> |([define](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=define.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._define%2529%2529&version=8.18) path ([map](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=pairs.html%23%2528def._%2528%2528lib._racket%252Fprivate%252Fmap..rkt%2529._map%2529%2529&version=8.18) [path/param-path](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=net&rel=url.html%23%2528def._%2528%2528lib._net%252Furl-structs..rkt%2529._path%252Fparam-path%2529%2529&version=8.18) ([url-path](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=net&rel=url.html%23%2528def._%2528%2528lib._net%252Furl-structs..rkt%2529._url-path%2529%2529&version=8.18) [url](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=net&rel=url.html%23%2528def._%2528%2528lib._net%252Furl-structs..rkt%2529._url%2529%2529&version=8.18))))|
> |; Find a handler based on the path's first element:|
> |([define](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=define.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._define%2529%2529&version=8.18) h ([hash-ref](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=hashtables.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._hash-ref%2529%2529&version=8.18) dispatch-table ([car](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=pairs.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._car%2529%2529&version=8.18) path) #f))|
> |([if](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=if.html%23%2528form._%2528%2528quote._%7E23%7E25kernel%2529._if%2529%2529&version=8.18) h|
> |; Call a handler:|
> |(h ([url-query](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=net&rel=url.html%23%2528def._%2528%2528lib._net%252Furl-structs..rkt%2529._url-query%2529%2529&version=8.18) [url](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=net&rel=url.html%23%2528def._%2528%2528lib._net%252Furl-structs..rkt%2529._url%2529%2529&version=8.18)))|
> |; No handler found:|
> |`(html (head (title "Error"))|
> |(body|
> |(font ((color "red"))|
> |"Unknown page: "|
> |,str-path)))))|
> ||
> |([define](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=define.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._define%2529%2529&version=8.18) dispatch-table ([make-hash](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=hashtables.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._make-hash%2529%2529&version=8.18)))|

With the new [require](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=require.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._require%2529%2529&version=8.18) import and new handle, dispatch, and dispatch-table definitions, our “Hello World!” server has turned into an error server. You don’t have to stop the server to try it out. After modifying "serve.rkt" with the new pieces, evaluate ([enter!](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=interactive.html%23%2528form._%2528%2528lib._racket%252Fenter..rkt%2529._enter%2521%2529%2529&version=8.18) "serve.rkt") and then try again to connect to the server. The web browser should show an “Unknown page” error in red.

We can register a handler for the "hello" path like this:

> |   |
> |---|
> |([hash-set!](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=hashtables.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._hash-set%2521%2529%2529&version=8.18) dispatch-table "hello"|
> |([lambda](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=lambda.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._lambda%2529%2529&version=8.18) (query)|
> |`(html (body "Hello, World!"))))|

> > > Here’s the whole program so far in plain text: [step 5](https://docs.racket-lang.org/more/step5.txt).

After adding these lines and evaluating ([enter!](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=interactive.html%23%2528form._%2528%2528lib._racket%252Fenter..rkt%2529._enter%2521%2529%2529&version=8.18) "serve.rkt"), opening http://localhost:8081/hello should produce the old greeting.

## 9 Servlets and Sessions[🔗](https://docs.racket-lang.org/more/index.html#\(part._.Servlets_and_.Sessions\) "Link to here")ℹ

Using the query argument that is passed to a handler by dispatch, a handler can respond to values that a user supplies through a form.

The following helper function constructs an HTML form. The label argument is a string to show the user. The next-url argument is a destination for the form results. The hidden argument is a value to propagate through the form as a hidden field. When the user responds, the "number" field in the form holds the user’s value:

> |   |
> |---|
> |([define](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=define.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._define%2529%2529&version=8.18) (build-request-page label next-url hidden)|
> |`(html|
> |(head (title "Enter a Number to Add"))|
> |(body ([bgcolor "white"])|
> |(form ([action ,next-url] [method "get"])|
> |,label|
> |(input ([type "text"] [name "number"]|
> |[value ""]))|
> |(input ([type "hidden"] [name "hidden"]|
> |[value ,hidden]))|
> |(input ([type "submit"] [name "enter"]|
> |[value "Enter"]))))))|

Using this helper function, we can create a servlet that generates as many “hello”s as a user wants:

> > > See [Iterations and Comprehensions](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=guide&rel=for.html&version=8.18) for an introduction to forms like [for/list](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=for.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._for%252Flist%2529%2529&version=8.18).

> |   |
> |---|
> |([define](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=define.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._define%2529%2529&version=8.18) (many query)|
> |(build-request-page "Number of greetings:" "/reply" ""))|
> ||
> |([define](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=define.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._define%2529%2529&version=8.18) (reply query)|
> |([define](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=define.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._define%2529%2529&version=8.18) n ([string->number](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=generic-numbers.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._string-%7E3enumber%2529%2529&version=8.18) ([cdr](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=pairs.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._cdr%2529%2529&version=8.18) ([assq](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=pairs.html%23%2528def._%2528%2528lib._racket%252Fprivate%252Flist..rkt%2529._assq%2529%2529&version=8.18) 'number query))))|
> |`(html (body ,@([for/list](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=for.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._for%252Flist%2529%2529&version=8.18) ([i ([in-range](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=sequences.html%23%2528def._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._in-range%2529%2529&version=8.18) n)])|
> |" hello"))))|
> ||
> |([hash-set!](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=hashtables.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._hash-set%2521%2529%2529&version=8.18) dispatch-table "many" many)|
> |([hash-set!](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=hashtables.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._hash-set%2521%2529%2529&version=8.18) dispatch-table "reply" reply)|

> > > Here’s the whole program so far in plain text: [step 6](https://docs.racket-lang.org/more/step6.txt).

As usual, once you have added these to your program, update with ([enter!](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=interactive.html%23%2528form._%2528%2528lib._racket%252Fenter..rkt%2529._enter%2521%2529%2529&version=8.18) "serve.rkt"), and then visit http://localhost:8081/many. Provide a number, and you’ll receive a new page with that many “hello”s.

## 10 Limiting Memory Use[🔗](https://docs.racket-lang.org/more/index.html#\(part._.Limiting_.Memory_.Use\) "Link to here")ℹ

With our latest "many" servlet, we seem to have a new problem: a malicious client could request so many “hello”s that the server runs out of memory. Actually, a malicious client could also supply an HTTP request whose first line is arbitrarily long.

The solution to this class of problems is to limit the memory use of a connection. Inside accept-and-handle, after the definition of cust, add the line

> ([custodian-limit-memory](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=custodians.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._custodian-limit-memory%2529%2529&version=8.18) cust ([*](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=generic-numbers.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._%252A%2529%2529&version=8.18) 50 1024 1024))

> > > Here’s the whole program so far in plain text: [step 7](https://docs.racket-lang.org/more/step7.txt).

We’re assuming that 50MB should be plenty for any servlet. Garbage-collector overhead means that the actual memory use of the system can be some small multiple of 50 MB. An important guarantee, however, is that different connections will not be charged for each other’s memory use, so one misbehaving connection will not interfere with a different one.

So, with the new line above, and assuming that you have a couple of hundred megabytes available for the racket process to use, you shouldn’t be able to crash the web server by requesting a ridiculously large number of “hello”s.

Given the "many" example, it’s a small step to a web server that accepts arbitrary Racket code to execute on the server. In that case, there are many additional security issues besides limiting processor time and memory consumption. The [racket/sandbox](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=Sandboxed_Evaluation.html&version=8.18) library provides support to managing all those other issues.

## 11 Continuations[🔗](https://docs.racket-lang.org/more/index.html#\(part._.Continuations\) "Link to here")ℹ

As a systems example, the problem of implementing a web server exposes many system and security issues where a programming language can help. The web-server example also leads to a classic, advanced Racket topic: continuations. In fact, this facet of a web server needs delimited continuations, which Racket provides.

The problem solved by continuations is related to servlet sessions and user input, where a computation spans multiple client connections [[Queinnec00](https://docs.racket-lang.org/more/index.html#%28cite._.Queinnec00%29)]. Often, client-side computation (as in AJAX) is the right solution to the problem, but many problems are best solved with a mixture of techniques (e.g., to take advantage of the browser’s “back” button).

As the multi-connection computation becomes more complex, propagating arguments through query becomes increasingly tedious. For example, we can implement a servlet that takes two numbers to add by using the hidden field in the form to remember the first number:

> |   |
> |---|
> |([define](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=define.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._define%2529%2529&version=8.18) (sum query)|
> |(build-request-page "First number:" "/one" ""))|
> ||
> |([define](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=define.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._define%2529%2529&version=8.18) (one query)|
> |(build-request-page "Second number:"|
> |"/two"|
> |([cdr](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=pairs.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._cdr%2529%2529&version=8.18) ([assq](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=pairs.html%23%2528def._%2528%2528lib._racket%252Fprivate%252Flist..rkt%2529._assq%2529%2529&version=8.18) 'number query))))|
> ||
> |([define](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=define.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._define%2529%2529&version=8.18) (two query)|
> |([let](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=let.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fletstx-scheme..rkt%2529._let%2529%2529&version=8.18) ([n ([string->number](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=generic-numbers.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._string-%7E3enumber%2529%2529&version=8.18) ([cdr](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=pairs.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._cdr%2529%2529&version=8.18) ([assq](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=pairs.html%23%2528def._%2528%2528lib._racket%252Fprivate%252Flist..rkt%2529._assq%2529%2529&version=8.18) 'hidden query)))]|
> |[m ([string->number](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=generic-numbers.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._string-%7E3enumber%2529%2529&version=8.18) ([cdr](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=pairs.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._cdr%2529%2529&version=8.18) ([assq](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=pairs.html%23%2528def._%2528%2528lib._racket%252Fprivate%252Flist..rkt%2529._assq%2529%2529&version=8.18) 'number query)))])|
> |`(html (body "The sum is " ,([number->string](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=generic-numbers.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._number-%7E3estring%2529%2529&version=8.18) ([+](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=generic-numbers.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._%252B%2529%2529&version=8.18) m n))))))|
> ||
> |([hash-set!](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=hashtables.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._hash-set%2521%2529%2529&version=8.18) dispatch-table "sum" sum)|
> |([hash-set!](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=hashtables.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._hash-set%2521%2529%2529&version=8.18) dispatch-table "one" one)|
> |([hash-set!](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=hashtables.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._hash-set%2521%2529%2529&version=8.18) dispatch-table "two" two)|

> > > Here’s the whole program so far in plain text: [step 8](https://docs.racket-lang.org/more/step8.txt).

While the above works, we would much rather write such computations in a direct style:

The problem is that get-number needs to send an HTML response back for the current connection, and then it must obtain a response through a new connection. That is, somehow it needs to convert the page generated by build-request-page into a query result:

Continuations let us implement a send/suspend operation that performs exactly that operation. The send/suspend procedure generates a URL that represents the current connection’s computation, capturing it as a continuation. It passes the generated URL to a procedure that creates the query page; this query page is used as the result of the current connection, and the surrounding computation (i.e., the continuation) is aborted. Finally, send/suspend arranges for a request to the generated URL (in a new connection) to restore the aborted computation.

Thus, get-number is implemented as follows:

> |   |
> |---|
> |([define](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=define.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._define%2529%2529&version=8.18) (get-number label)|
> |([define](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=define.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._define%2529%2529&version=8.18) query|
> |; Generate a URL for the current computation:|
> |(send/suspend|
> |; Receive the computation-as-URL here:|
> |([lambda](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=lambda.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._lambda%2529%2529&version=8.18) (k-url)|
> |; Generate the query-page result for this connection.|
> |; Send the query result to the saved-computation URL:|
> |(build-request-page label k-url ""))))|
> |; We arrive here later, in a new connection|
> |([string->number](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=generic-numbers.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._string-%7E3enumber%2529%2529&version=8.18) ([cdr](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=pairs.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._cdr%2529%2529&version=8.18) ([assq](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=pairs.html%23%2528def._%2528%2528lib._racket%252Fprivate%252Flist..rkt%2529._assq%2529%2529&version=8.18) 'number query))))|

We still have to implement send/suspend. For that task, we import a library of control operators:

> ([require](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=require.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._require%2529%2529&version=8.18) racket/control)

Specifically, we need [prompt](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=cont.html%23%2528form._%2528%2528lib._racket%252Fcontrol..rkt%2529._prompt%2529%2529&version=8.18) and [abort](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=cont.html%23%2528def._%2528%2528lib._racket%252Fcontrol..rkt%2529._abort%2529%2529&version=8.18) from [racket/control](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=cont.html%23%2528mod-path._racket%252Fcontrol%2529&version=8.18). We use [prompt](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=cont.html%23%2528form._%2528%2528lib._racket%252Fcontrol..rkt%2529._prompt%2529%2529&version=8.18) to mark the place where a servlet is started, so that we can abort a computation to that point. Change handle by wrapping a [prompt](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=cont.html%23%2528form._%2528%2528lib._racket%252Fcontrol..rkt%2529._prompt%2529%2529&version=8.18) around the call to dispatch:

Now, we can implement send/suspend. We use [call/cc](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=cont.html%23%2528def._%2528%2528lib._racket%252Fprivate%252Fmore-scheme..rkt%2529._call%252Fcc%2529%2529&version=8.18) in the guise of [let/cc](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=cont.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fmore-scheme..rkt%2529._let%252Fcc%2529%2529&version=8.18), which captures the current computation up to an enclosing [prompt](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=cont.html%23%2528form._%2528%2528lib._racket%252Fcontrol..rkt%2529._prompt%2529%2529&version=8.18) and binds that computation to an identifier—k, in this case:

Next, we generate a new dispatch tag, and we record the mapping from the tag to k:

Finally, we abort the current computation, supplying instead the page that is built by applying the given mk-page to a URL for the generated tag:

When the user submits the form, the handler associated with the form’s URL is the old computation, stored as a continuation in the dispatch table. Calling the continuation (like a function) restores the old computation, passing the query argument back to that computation.

> > > Here’s the final program in plain text: [step 9](https://docs.racket-lang.org/more/step9.txt).

In summary, the new pieces are: ([require](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=require.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._require%2529%2529&version=8.18) racket/control), adding [prompt](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=cont.html%23%2528form._%2528%2528lib._racket%252Fcontrol..rkt%2529._prompt%2529%2529&version=8.18) inside handle, the definitions of send/suspend, get-number, and sum2, and ([hash-set!](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=hashtables.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._hash-set%2521%2529%2529&version=8.18) dispatch-table "sum2" sum2). Once you have the server updated, visit http://localhost:8081/sum2.

## 12 Where to Go From Here[🔗](https://docs.racket-lang.org/more/index.html#\(part._.Where_to_.Go_.From_.Here\) "Link to here")ℹ

The Racket distribution includes a production-quality web server that addresses all of the design points mentioned here and more. To learn more, see the tutorial [Continue: Web Applications in Racket](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?tag=%28part._%28.%27%28lib._web-server%2Fscribblings%2Ftutorial%2Fcontinue..scrbl%29.%27._.%27top.%27%29%29&version=8.18), [the Web Applications in Racket documentation](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?tag=%28part._%28.%27%28lib._web-server%2Fscribblings%2Fweb-server..scrbl%29.%27._.%27top.%27%29%29&version=8.18), or the research paper [[Krishnamurthi07](https://docs.racket-lang.org/more/index.html#%28cite._.Krishnamurthi07%29)].

Otherwise, if you arrived here as part of an introduction to Racket, then your next stop is probably [The Racket Guide](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=guide&rel=index.html&version=8.18).

If the topics covered here are the kind that interest you, see also [Concurrency and Parallelism](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=concurrency.html&version=8.18) and [Reflection and Security](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=security.html&version=8.18) in [The Racket Reference](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=index.html&version=8.18).

Some of this material is based on relatively recent research, and more information can be found in papers written by the authors of Racket, including papers on GRacket (formerly “MrEd”) [[Flatt99](https://docs.racket-lang.org/more/index.html#%28cite._.Flatt99%29)], memory accounting [[Wick04](https://docs.racket-lang.org/more/index.html#%28cite._.Wick04%29)], kill-safe abstractions [[Flatt04](https://docs.racket-lang.org/more/index.html#%28cite._.Flatt04%29)], and delimited continuations [[Flatt07](https://docs.racket-lang.org/more/index.html#%28cite._.Flatt07%29)].

## Bibliography[🔗](https://docs.racket-lang.org/more/index.html#\(part._doc-bibliography\) "Link to here")ℹ

|   |   |   |
|---|---|---|
|[Flatt99]||Matthew Flatt, Robert Bruce Findler, Shriram Krishnamurthi, and Matthias Felleisen, “Programming Languages as Operating Systems (or Revenge of the Son of the Lisp Machine),” International Conference on Functional Programming, 1999. [http://www.ccs.neu.edu/scheme/pubs/icfp99-ffkf.pdf](http://www.ccs.neu.edu/scheme/pubs/icfp99-ffkf.pdf)|
|[Flatt04]||Matthew Flatt and Robert Bruce Findler, “Kill-Safe Synchronization Abstractions,” Programming Language Design and Implementation, 2004. [http://www.cs.utah.edu/plt/publications/pldi04-ff.pdf](http://www.cs.utah.edu/plt/publications/pldi04-ff.pdf)|
|[Flatt07]||Matthew Flatt, Gang Yu, Robert Bruce Findler, and Matthias Felleisen, “Adding Delimited and Composable Control to a Production Programming Environment,” International Conference on Functional Programming, 2007. [http://www.cs.utah.edu/plt/publications/icfp07-fyff.pdf](http://www.cs.utah.edu/plt/publications/icfp07-fyff.pdf)|
|[Krishnamurthi07]||Shriram Krishnamurthi, Peter Hopkins, Jay McCarthy, Paul T. Graunke, Greg Pettyjohn, and Matthias Felleisen, “Implementation and Use of the PLT Scheme Web Server,” Higher-Order and Symbolic Computation, 2007. [http://www.cs.brown.edu/~sk/Publications/Papers/Published/khmgpf-impl-use-plt-web-server-journal/paper.pdf](http://www.cs.brown.edu/~sk/Publications/Papers/Published/khmgpf-impl-use-plt-web-server-journal/paper.pdf)|
|[Queinnec00]||Christian Queinnec, “The Influence of Browsers on Evaluators or, Continuations to Program Web Servers,” International Conference on Functional Programming, 2000. [http://pagesperso-systeme.lip6.fr/Christian.Queinnec/PDF/webcont.pdf](http://pagesperso-systeme.lip6.fr/Christian.Queinnec/PDF/webcont.pdf)|
|[Wick04]||Adam Wick and Matthew Flatt, “Memory Accounting without Partitions,” International Symposium on Memory Management, 2004. [http://www.cs.utah.edu/plt/publications/ismm04-wf.pdf](http://www.cs.utah.edu/plt/publications/ismm04-wf.pdf)|