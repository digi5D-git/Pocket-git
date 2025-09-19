---
cssclass:
cat:
tags:
vID:: Interesting
generated:: 250913 // 18.34
mod:: 250914 // 06.11
uID:: Interesting
---

> [!info] 20 Sayings that originated in Medieval times
> <https://www.medievalists.net/2025/09/20-phrases-middle-ages/>

---

## Tidbits from Douglas Crockford


> [!bug] Elec. Communities, Factorial Tutorial paper
> <https://www.crockford.com/ec/factorial.html>


#### Towers of Hanoi
Knowledge of the Towers of Hanoi puzzle is useful for managing the stacks, moving cards from one stack to another to increase storage efficiency. The Towers of Hanoi is a complicated puzzle with a trivial recursive solution.

```
function hanoi(disc, source, aux, destination) {
    if (disc > 0) {
        hanoi(disc - 1, source, destination, aux);
        console.log("Move disc " + disc + " from " + source + " to " + destination);
        hanoi(disc - 1, aux, source, destination);
    }
}
```


#### The Philosophers Problem
> There is a group of philosophers (usually 5) who eat together at a round table. There are forks placed between the philosophers. Philosophers spend their time either thinking or eating. In order to eat, a philosopher must pick up exactly two forks, one on his immediate left, and the other on his immediate right. When he is done eating, he will put his forks down so that his neighbors may use them, and he thinks again.
> 

---
### Aptera, solar powered EV
<https://aptera.us/>
