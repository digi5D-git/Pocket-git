---
tags: 
references:
index:
note: Time in Decimal Calculations
generated: 1Q25 - Feb 14th || 045
last modified: 1Q25 - Feb 14th || 045
---

## Minute, Second & Hour

|        | hour | second | minute |
| ------ | ---- | ------ | ------ |
| second | 3600 | 1      | 60     |
| minute | 60   | 60     | 1      |
| hour   | 1    | .0003  | .02    |

#### Calculations of an Hour

> HOUR

$$

1 \, hr + 0 \, min \times \frac{1 \, hr}{60 \, min} + 0 \, s \times \frac{1 \, hr}{3600 \, s}

$$

---

> MINUTE

$$

\,1 hr \times \frac{60 \, min}{1 \, hr} + 0 \, min + 0 \, s \times \frac{1 \, min}{60 \, s}

$$

---

> SECOND

$$

1 \, hr \times \frac{3600 \, s}{1 \, hr} + 0 \, min \times \frac{60 \, s}{1 \, min} + 0 \, s


$$

#### Time to Decimal

For the default time of 2:45:45 in the converter, let's convert to just hours, then just minutes, and then just seconds. We will need to convert each part into the unit of time we want.

2:45:45 is 2 hours, 45 minutes, 45 seconds. And we know that 1 hour = 60 minutes and 1 minute = 60 seconds so 60 minutes/ hour * 60 seconds/ minute = 3600 seconds/ hour or 1 hour = 3600 seconds.

> [!tip] Time to Hours
> - 2 hours is 2 hours * (1 hour/ 1 hour) = 2 hours
> - 45 minutes is 45 minutes * (1 hour / 60 minutes) = 45/60 hours = 0.75 hours
> - 45 seconds is 45 seconds * (1 hour / 3600 seconds) = 45/3600 hours = 0.0125 hours
> 
> Adding them all together we have 2 hours + 0.75 hours + 0.0125 hours = 2.7625 hours

>[!example] Time to Minutes
> - 2 hours is 2 hours * (60 minutes / 1 hour) = 2 * 60 minutes = 120 minutes
> - 45 minutes is 45 minutes * (1 minute / 1 minute) = 45 * 1 minutes = 45 minutes
> - 45 seconds is 45 seconds * (1 minute / 60 seconds) = 45/60 minutes = 0.75 minutes
> - Adding them all together we have 120 minutes + 45 minutes + 0.75 minutes = 165.75 minutes

>[!faq] Time to Seconds
> - 2 hours is 2 hours * (3600 seconds / 1 hour) = 2 * 3600 seconds = 7200 seconds
> - 45 minutes is 45 minutes * (60 seconds / 1 minute) = 45 * 60 seconds = 2700 seconds
> - 45 seconds is 45 seconds * (1 second / 1 second) = 45 * 1 seconds = 45 seconds
> - Adding them all together we have 7200 seconds + 2700 seconds + 45 seconds = 9945 seconds

