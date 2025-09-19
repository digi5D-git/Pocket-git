---
URL: https://www.infoworld.com/article/4050993/jdk-26-the-new-features-in-java-26.html
Author: |-
  by									Paul Krill
  							
  		
  					
  									Editor at Large
Site: InfoWorld
Abstract: Next year’s Java release is slated to include a performance boost for the G1 garbage collector and opt-in support for HTTP/3. The Applets API is on the chopping block.
Extracted_On: 25.1409
Web_Title: "JDK 26: The new features in Java 26"
set:
  - code
---

## Next year’s Java release is slated to include a performance boost for the G1 garbage collector and opt-in support for HTTP/3. The Applets API is on the chopping block.

Java Development Kit (JDK) 26, a planned update to standard Java due in March 2026, now has its first three features slated for it, with the latest being increased application throughput when using the G1 garbage collector (GC).

Proposed September 8, this JEP ([JDK Enhancement Proposal](https://www.infoworld.com/article/2335544/better-java-jdk-enhancement-proposals-jep-explained.html)), [G1 GC: Improve throughput by reducing synchronization](https://openjdk.org/jeps/522), joins two previously slotted features, [HTTP/3 for the Client API](https://openjdk.org/jeps/517) and [Removal of the Java Applet API](https://openjdk.org/jeps/504).

The G1 GC proposal is intended to improve application throughput and latency when using the G1 garbage collector by reducing the amount of synchronization required between application threads and GC threads. Goals include reducing the G1 garbage collector’s synchronization overhead, reducing the size of the injected code for G1’s write barriers, and maintaining the overall architecture of G1, with no changes to user interaction.

The G1 GC proposal notes that although G1, which is the default garbage collector of the HotSpot JVM, is designed to balance latency and throughput, achieving this balance sometimes impacts application performance adversely compared to throughput-oriented garbage collectors such as the Parallel and Serial collectors:

> Relative to Parallel, G1 performs more of its work concurrently with the application, reducing the duration of GC pauses and thus improving latency. Unavoidably, this means that application threads must share the CPU with GC threads, and coordinate with them. This synchronization both lowers throughput and increases latency.
> 
> A short-term release of Java backed by six months of Premier-level support, JDK 26 will follow the September 16 release of [JDK 25](https://www.infoworld.com/article/3846172/jdk-25-the-new-features-in-java-25.html), which is a Long-Term Support (LTS) release backed by several years of Premier-level support.

The HTTP/3 proposal calls for allowing Java libraries and applications to interact with HTTP/3 servers with minimal code changes. Goals include updating the HTTP Client API to send and receive HTTP/3 requests and responses; requiring only minor changes to the HTTP Client API and Java application code; and allowing developers to opt in to HTTP/3 as opposed to changing the default protocol version from HTTP/2 to HTTP/3.

[HTTP/3](https://www.infoworld.com/article/3497016/what-is-http-3-the-next-generation-web-protocol.html) is considered a major version of the HTTP (Hypertext Transfer Protocol) data communications protocol for the web. Version 3 was built on the IETF [QUIC](https://datatracker.ietf.org/doc/rfc9000/) (Quick UDP Internet Connections) transport protocol, which emphasizes flow-controlled streams, low-latency connection establishment, network path migration, and security among its capabilities.