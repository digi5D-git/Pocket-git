---
URL: https://tc39.es/proposal-temporal/docs/cookbook.html
Abstract: "Running cookbook files: see instructions in ../polyfill/README.md"
Extracted_On: 25.1409
Web_Title: Temporal documentation
---

## [](https://tc39.es/proposal-temporal/docs/cookbook.html#temporal-cookbook)`Temporal` Cookbook

## [](https://tc39.es/proposal-temporal/docs/cookbook.html#overview)Overview

- [Overview](https://tc39.es/proposal-temporal/docs/cookbook.html#overview)
- [Running the cookbook files](https://tc39.es/proposal-temporal/docs/cookbook.html#running-the-cookbook-files)
- [Frequently Asked Questions](https://tc39.es/proposal-temporal/docs/cookbook.html#frequently-asked-questions)
    - [Current date and time](https://tc39.es/proposal-temporal/docs/cookbook.html#current-date-and-time)
    - [Unix timestamp](https://tc39.es/proposal-temporal/docs/cookbook.html#unix-timestamp)
- [Converting between Temporal types and legacy Date](https://tc39.es/proposal-temporal/docs/cookbook.html#converting-between-temporal-types-and-legacy-date)
    - [Legacy Date = Temporal.Instant and/or Temporal.ZonedDateTime](https://tc39.es/proposal-temporal/docs/cookbook.html#legacy-date--temporalinstant-andor-temporalzoneddatetime)
    - [Date-only values: legacy Date = Temporal.PlainDate](https://tc39.es/proposal-temporal/docs/cookbook.html#date-only-values-legacy-date--temporalplaindate)
    - [Temporal types = legacy Date](https://tc39.es/proposal-temporal/docs/cookbook.html#temporal-types--legacy-date)
- [Construction](https://tc39.es/proposal-temporal/docs/cookbook.html#construction)
    - [Calendar input element](https://tc39.es/proposal-temporal/docs/cookbook.html#calendar-input-element)
- [Converting between types](https://tc39.es/proposal-temporal/docs/cookbook.html#converting-between-types)
    - [Noon on a particular date](https://tc39.es/proposal-temporal/docs/cookbook.html#noon-on-a-particular-date)
    - [Birthday in 2030](https://tc39.es/proposal-temporal/docs/cookbook.html#birthday-in-2030)
- [Serialization](https://tc39.es/proposal-temporal/docs/cookbook.html#serialization)
    - [Zoned instant from instant and time zone](https://tc39.es/proposal-temporal/docs/cookbook.html#zoned-instant-from-instant-and-time-zone)
- [Sorting](https://tc39.es/proposal-temporal/docs/cookbook.html#sorting)
    - [Sort PlainDateTime values](https://tc39.es/proposal-temporal/docs/cookbook.html#sort-plaindatetime-values)
    - [Sort ISO date/time strings](https://tc39.es/proposal-temporal/docs/cookbook.html#sort-iso-datetime-strings)
- [Rounding](https://tc39.es/proposal-temporal/docs/cookbook.html#rounding)
    - [Round a time down to whole hours](https://tc39.es/proposal-temporal/docs/cookbook.html#round-a-time-down-to-whole-hours)
    - [Round a date to the nearest start of the month](https://tc39.es/proposal-temporal/docs/cookbook.html#round-a-date-to-the-nearest-start-of-the-month)
- [Time zone conversion](https://tc39.es/proposal-temporal/docs/cookbook.html#time-zone-conversion)
    - [Preserving local time](https://tc39.es/proposal-temporal/docs/cookbook.html#preserving-local-time)
    - [Preserving exact time](https://tc39.es/proposal-temporal/docs/cookbook.html#preserving-exact-time)
    - [Daily occurrence in local time](https://tc39.es/proposal-temporal/docs/cookbook.html#daily-occurrence-in-local-time)
    - [UTC offset for a zoned event, as a string](https://tc39.es/proposal-temporal/docs/cookbook.html#utc-offset-for-a-zoned-event-as-a-string)
    - [UTC offset for a zoned event, as a number of seconds](https://tc39.es/proposal-temporal/docs/cookbook.html#utc-offset-for-a-zoned-event-as-a-number-of-seconds)
    - [Offset between two time zones at an exact time](https://tc39.es/proposal-temporal/docs/cookbook.html#offset-between-two-time-zones-at-an-exact-time)
    - [Dealing with dates and times in a fixed location](https://tc39.es/proposal-temporal/docs/cookbook.html#dealing-with-dates-and-times-in-a-fixed-location)
    - [Book a meeting across time zones](https://tc39.es/proposal-temporal/docs/cookbook.html#book-a-meeting-across-time-zones)
- [Arithmetic](https://tc39.es/proposal-temporal/docs/cookbook.html#arithmetic)
    - [How many days until a future date](https://tc39.es/proposal-temporal/docs/cookbook.html#how-many-days-until-a-future-date)
    - [Unit-constrained duration between now and a past/future zoned event](https://tc39.es/proposal-temporal/docs/cookbook.html#unit-constrained-duration-between-now-and-a-pastfuture-zoned-event)
    - [Next offset transition in a time zone](https://tc39.es/proposal-temporal/docs/cookbook.html#next-offset-transition-in-a-time-zone)
    - [Comparison of an exact time to business hours](https://tc39.es/proposal-temporal/docs/cookbook.html#comparison-of-an-exact-time-to-business-hours)
    - [Flight arrival/departure/duration](https://tc39.es/proposal-temporal/docs/cookbook.html#flight-arrivaldepartureduration)
    - [Push back a launch date](https://tc39.es/proposal-temporal/docs/cookbook.html#push-back-a-launch-date)
    - [Schedule a reminder ahead of matching a record-setting duration](https://tc39.es/proposal-temporal/docs/cookbook.html#schedule-a-reminder-ahead-of-matching-a-record-setting-duration)
    - [Nth weekday of the month](https://tc39.es/proposal-temporal/docs/cookbook.html#nth-weekday-of-the-month)
    - [Manipulating the day of the month](https://tc39.es/proposal-temporal/docs/cookbook.html#manipulating-the-day-of-the-month)
    - [Same date in another month](https://tc39.es/proposal-temporal/docs/cookbook.html#same-date-in-another-month)
    - [Next weekly occurrence](https://tc39.es/proposal-temporal/docs/cookbook.html#next-weekly-occurrence)
    - [Weekday of yearly occurrence](https://tc39.es/proposal-temporal/docs/cookbook.html#weekday-of-yearly-occurrence)
- [Advanced use cases](https://tc39.es/proposal-temporal/docs/cookbook.html#advanced-use-cases)
    - [Extra-expanded years](https://tc39.es/proposal-temporal/docs/cookbook.html#extra-expanded-years)
    - [Adjustable Hijri calendar](https://tc39.es/proposal-temporal/docs/cookbook.html#adjustable-hijri-calendar)
    - [Nepali calendar](https://tc39.es/proposal-temporal/docs/cookbook.html#nepali-calendar)

## [](https://tc39.es/proposal-temporal/docs/cookbook.html#running-the-cookbook-files)Running the cookbook files

Running cookbook files: see instructions in [../polyfill/README.md](https://github.com/tc39/proposal-temporal/tree/main/polyfill#running-cookbook-files)

## [](https://tc39.es/proposal-temporal/docs/cookbook.html#frequently-asked-questions)Frequently Asked Questions

These are some of the most common tasks that people ask questions about on StackOverflow with legacy `Date`. Here's how they would look using `Temporal`.

### [](https://tc39.es/proposal-temporal/docs/cookbook.html#current-date-and-time)Current date and time

How to get the current date and time in the local time zone?

```
/**
 * Get the current date in JavaScript
 * This is a popular question on Stack Overflow for dates in JS
 * https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
 *
 */

const date = Temporal.Now.plainDateISO(); // Gets the current date
date.toString(); // returns the date in ISO 8601 date format

// If you additionally want the time:
Temporal.Now.plainDateTimeISO().toString(); // date and time in ISO 8601 format
```

Note that if you just want the date and not the time, you should use `Temporal.PlainDate`. If you want both, use `Temporal.PlainDateTime`.

### [](https://tc39.es/proposal-temporal/docs/cookbook.html#unix-timestamp)Unix timestamp

How to get a Unix timestamp?

```
/**
 * Get a (Unix) timestamp in JavaScript
 * This is the No.1 voted question on Stack Overflow for dates in JS
 * https://stackoverflow.com/questions/221294/how-do-you-get-a-timestamp-in-javascript
 *
 */

const timeStamp = Temporal.Now.instant();

// Timestamp in Milliseconds
timeStamp.epochMilliseconds;

// Timestamp in Seconds
Math.floor(timeStamp.epochMilliseconds / 1000);
```

## [](https://tc39.es/proposal-temporal/docs/cookbook.html#converting-between-temporal-types-and-legacy-date)Converting between `Temporal` types and legacy `Date`

### [](https://tc39.es/proposal-temporal/docs/cookbook.html#legacy-date--temporalinstant-andor-temporalzoneddatetime)Legacy `Date` => `Temporal.Instant` and/or `Temporal.ZonedDateTime`

Here's how to convert legacy ECMAScript `Date` into a `Temporal.Instant` or `Temporal.ZonedDateTime` instance corresponding to the same instant in exact time.

```
const legacyDate = new Date('1970-01-01T00:00:01Z');
const instant = legacyDate.toTemporalInstant();

assert.equal(instant.epochMilliseconds, legacyDate.getTime());
assert.equal(instant.toString(), '1970-01-01T00:00:01Z');

// If you need a ZonedDateTime, use the toZonedDateTimeISO()
// method of the resulting Instant.
// You will need to specify a time zone, because legacy Date only
// stores an exact time, and does not store a time zone.

// When calling methods on a legacy Date instance, you must decide
// whether you want that exact time interpreted as a UTC value
// (using methods containing "UTC" in their names) or in the
// current system time zone (using other methods). This is
// confusing, so Temporal has a more explicit way to do this.

// To use the system's local time zone, which corresponds to using
// legacy Date's getFullYear(), getMonth(), etc. methods, pass
// Temporal.Now.timeZoneId() as the time zone. In a browser, this
// will be the user's time zone, but on a server the value may not
// be what you expect, so avoid doing this in a server context.

const zoned = instant.toZonedDateTimeISO(Temporal.Now.timeZoneId());

assert.equal(zoned.epochMilliseconds, legacyDate.getTime());

// Here's an example of using a particular time zone. Especially
// in a server context, you would be getting this time zone from
// elsewhere in the data that you are processing.

const zoned2 = instant.toZonedDateTimeISO('Asia/Shanghai');

assert.equal(zoned2.epochMilliseconds, legacyDate.getTime());
assert.equal(zoned2.timeZoneId, 'Asia/Shanghai');

// (And if the legacy Date instance was accessed using the
// getUTCFullYear(), getUTCMonth(), etc. methods, consider just
// using Instant. If you have to use ZonedDateTime, the specific
// time zone may need to be 'UTC'.)
```

### [](https://tc39.es/proposal-temporal/docs/cookbook.html#date-only-values-legacy-date--temporalplaindate)Date-only values: legacy `Date` => `Temporal.PlainDate`

A common bug arises from a simple question: what date (year, month, and day) is represented by this `Date`? The problem: the answer depends on the time zone. The same `Date` can be December 31 in San Francisco but January 1 in London or Tokyo.

Therefore, it's critical to interpret the `Date` in context of the correct time zone _before_ trying to extract the year, month, or day, or before doing calculations like "did this happen yesterday?" involving date units. For this reason, `Temporal.Instant` (which is the `Temporal` equivalent of `Date`) does not have `year`, `month`, `day` properties. To access date or time units in `Temporal`, a time zone must be provided, as described in the code example above.

Another bug-prone case is when `Date` is (ab)used to store a date-only value, like a user's date of birth. With `Date` these values are typically stored with midnight times, but to read back the date correctly you need to know which time zone's midnight was used to create the `Date`. For example, `new Date(2000, 0, 1)` uses the caller's time zone, while `new Date('2000-01-01')` uses UTC.

To correctly convert a date-only `Date` to a `Temporal.PlainDate` without being vulnerable to off-by-one-day bugs, you must determine which time zone's midnight was used to construct the `Date`, and then use that same time zone when converting from `Temporal.Instant` to `Temporal.PlainDate`.

```
// Convert a year/month/day `Date` to a `Temporal.PlainDate`. Uses the caller's time zone.
let date = new Date(2000, 0, 1); // => Sat Jan 01 2000 00:00:00 GMT-0800 (Pacific Standard Time)
let plainDate = date
  .toTemporalInstant()                           // => 2000-01-01T08:00:00Z
  .toZonedDateTimeISO(Temporal.Now.timeZoneId()) // => 2000-01-01T00:00:00-08:00[America/Los_Angeles]
  .toPlainDate();                                // => 2000-01-01

assert.equal(plainDate.toString(), '2000-01-01');

// Convert a year/month/day `Date` to a `Temporal.PlainDate`. Uses UTC.
date = new Date(Date.UTC(2000, 0, 1)); // => Fri Dec 31 1999 16:00:00 GMT-0800 (Pacific Standard Time)
date = new Date('2000-01-01T00:00Z');  // => Fri Dec 31 1999 16:00:00 GMT-0800 (Pacific Standard Time)
plainDate = date
  .toTemporalInstant()       // => 2000-01-01T00:00:00Z
  .toZonedDateTimeISO('UTC') // => 2000-01-01T00:00:00+00:00[UTC]
  .toPlainDate();            // => 2000-01-01

assert.equal(plainDate.toString(), '2000-01-01');
```

### [](https://tc39.es/proposal-temporal/docs/cookbook.html#temporal-types--legacy-date)`Temporal` types => legacy `Date`

Legacy `Date` represents an exact time, so it's straightforward to convert a `Temporal.Instant` or `Temporal.ZonedDateTime` instance into a legacy `Date` instance that corresponds to it.

```
// To convert Instant to legacy Date, use the epochMilliseconds property.

const instant = Temporal.Instant.from('2020-01-01T00:00:01.000999Z');
const result = new Date(instant.epochMilliseconds);

assert.equal(result.getTime(), 1577836801000); // ms since Unix epoch
assert.equal(result.toISOString(), '2020-01-01T00:00:01.000Z');

// Same thing for ZonedDateTime.
// Note that legacy Date will not preserve the ZonedDateTime's time zone.

const zoned = Temporal.ZonedDateTime.from('2020-01-01T00:00:01.001[Asia/Tokyo]');
const result2 = new Date(zoned.epochMilliseconds);

assert.equal(result2.getTime(), 1577804401001); // note, different time
assert.equal(result2.toISOString(), '2019-12-31T15:00:01.001Z');

// For most use cases, new Date(x.epochMilliseconds) is fine.
// You may need to add an extra round() step if you want other
// rounding behaviour than truncation. For example, here the 999
// microseconds is rounded to 1 millisecond.

const result3 = new Date(instant.round({ smallestUnit: 'millisecond' }).epochMilliseconds);

assert.equal(result3.getTime(), 1577836801001);
assert.equal(result3.toISOString(), '2020-01-01T00:00:01.001Z');
```

## [](https://tc39.es/proposal-temporal/docs/cookbook.html#construction)Construction

### [](https://tc39.es/proposal-temporal/docs/cookbook.html#calendar-input-element)Calendar input element

You can use `Temporal` objects to set properties on a calendar control. Here is an example using an HTML `<input type="date">` element with any day beyond “today” disabled and not selectable.

(To get a `Temporal` object back out of the calendar control, see the [Future Date](https://tc39.es/proposal-temporal/docs/cookbook.html#how-many-days-until-a-future-date) example.)

```
const datePicker = document.getElementById('calendar-input');
const today = Temporal.Now.plainDateISO();
datePicker.max = today;
datePicker.value = today;
```

## [](https://tc39.es/proposal-temporal/docs/cookbook.html#converting-between-types)Converting between types

### [](https://tc39.es/proposal-temporal/docs/cookbook.html#noon-on-a-particular-date)Noon on a particular date

An example of combining a calendar date (`Temporal.PlainDate`) and a wall-clock time (`Temporal.PlainTime`) into a `Temporal.PlainDateTime`.

```
const date = Temporal.PlainDate.from('2020-05-14');

const noonOnDate = date.toPlainDateTime(Temporal.PlainTime.from({ hour: 12 }));

assert(noonOnDate instanceof Temporal.PlainDateTime);
assert.equal(noonOnDate.toString(), '2020-05-14T12:00:00');
```

### [](https://tc39.es/proposal-temporal/docs/cookbook.html#birthday-in-2030)Birthday in 2030

An example of combining a day on the calendar (`Temporal.PlainMonthDay`) and a year into a `Temporal.PlainDate`.

```
const birthday = Temporal.PlainMonthDay.from('12-15');

const birthdayIn2030 = birthday.toPlainDate({ year: 2030 });
birthdayIn2030.dayOfWeek; // => 7

assert(birthdayIn2030 instanceof Temporal.PlainDate);
assert.equal(birthdayIn2030.toString(), '2030-12-15');
```

## [](https://tc39.es/proposal-temporal/docs/cookbook.html#serialization)Serialization

### [](https://tc39.es/proposal-temporal/docs/cookbook.html#zoned-instant-from-instant-and-time-zone)Zoned instant from instant and time zone

To serialize an exact-time `Temporal.Instant` into a string, use `toString()`. Without any arguments, this gives you a string in UTC time.

If you need your string to include a UTC offset, then use the `timeZone` option of `Temporal.Instant.prototype.toString()` which will return a string serialization of the wall-clock time in that time zone corresponding to the exact time.

This loses the information about which time zone the string was in, because it only preserves the UTC offset from the time zone at that particular exact time. If you need your string to include the time zone name, use `Temporal.ZonedDateTime` instead, which retains this information.

```
const instant = Temporal.Instant.from('2020-01-03T10:41:51Z');

const result = instant.toString();

assert.equal(result, '2020-01-03T10:41:51Z');
assert(instant.equals(Temporal.Instant.from(result)));

// Include the UTC offset of a particular time zone:

const result2 = instant.toString({ timeZone: 'America/Yellowknife' });

assert.equal(result2, '2020-01-03T03:41:51-07:00');
assert(instant.equals(Temporal.Instant.from(result2)));

// Include the UTC offset as well as preserving the time zone name:

const zoned = instant.toZonedDateTimeISO('Asia/Seoul');
const result3 = zoned.toString();

assert.equal(result3, '2020-01-03T19:41:51+09:00[Asia/Seoul]');
assert(instant.equals(Temporal.Instant.from(result3)));
assert(zoned.equals(Temporal.ZonedDateTime.from(result3)));
```

## [](https://tc39.es/proposal-temporal/docs/cookbook.html#sorting)Sorting

Each `Temporal` type has a `compare()` static method, which can be passed to `Array.prototype.sort()` as the compare function in order to sort an array of `Temporal` types.

### [](https://tc39.es/proposal-temporal/docs/cookbook.html#sort-plaindatetime-values)Sort PlainDateTime values

Sort a list of `Temporal.PlainDateTime`s, for example in order to get a conference schedule in the correct order. Sorting other `Temporal` types would work exactly the same way.

```
/**
 * getSortedLocalDateTimes will sort an array of zoneless Temporal.PlainDateTime instances by the
 * corresponding local date and time of day (e.g., for building a conference schedule).
 *
 *
 * @param {Temporal.PlainDateTime[]} dateTimes - This is a DateTime instance
 * @param {boolean} [reverse=false] - Return in reversed order
 * @returns {Temporal.PlainDateTime[]} the array from dateTimes, sorted
 */
function getSortedLocalDateTimes(dateTimes, reverse = false) {
  let newDateTimes = Array.from(dateTimes).sort(Temporal.PlainDateTime.compare);

  return reverse ? newDateTimes.reverse() : newDateTimes;
}

// Sorting some conferences without timezones for example vue.js Amsterdam 2020
let a = Temporal.PlainDateTime.from({
  year: 2020,
  day: 20,
  month: 2,
  hour: 8,
  minute: 45
}); // Introduction
let b = Temporal.PlainDateTime.from({
  year: 2020,
  day: 21,
  month: 2,
  hour: 13,
  minute: 10
}); // Lunch Break
let c = Temporal.PlainDateTime.from({
  year: 2020,
  day: 20,
  month: 2,
  hour: 15,
  minute: 30
}); // Coffee Break
const results = getSortedLocalDateTimes([a, b, c]);
assert.deepEqual(
  results.map((x) => x.toString()),
  ['2020-02-20T08:45:00', '2020-02-20T15:30:00', '2020-02-21T13:10:00']
);
```

### [](https://tc39.es/proposal-temporal/docs/cookbook.html#sort-iso-datetime-strings)Sort ISO date/time strings

Sort a list of ISO 8601 or RFC 9557 date/time strings, for example to place log entries in order.

```
/**
 * sortInstantStrings will sort an array of strings (each of which is
 * parseable as a Temporal.Instant and may or may not include an IANA time
 * zone name) by the corresponding exact time (e.g., for presenting global
 * log events sequentially).
 *
 * @param {string[]} strings - an array of ISO strings
 * @param {boolean} [reverse=false] - ascending or descending order
 * @returns {string[]} the array from strings, sorted
 */
function sortInstantStrings(strings, reverse = false) {
  const sortedInstants = strings
    .map((v) => [v, Temporal.Instant.from(v)])
    .sort(([, i1], [, i2]) => Temporal.Instant.compare(i1, i2))
    .map(([str]) => str);

  return reverse ? sortedInstants.reverse() : sortedInstants;
}

// simple string comparison order would not be correct here:
const a = '2020-01-23T17:04:36.491865121-08:00';
const b = '2020-02-10T17:04:36.491865121-08:00';
const c = '2020-04-01T05:01:00-04:00[America/New_York]';
const d = '2020-04-01T10:00:00+01:00[Europe/London]';
const e = '2020-04-01T11:02:00+02:00[Europe/Berlin]';

const results = sortInstantStrings([a, b, c, d, e]);

// results will have correct order
assert.deepEqual(results, [
  '2020-01-23T17:04:36.491865121-08:00',
  '2020-02-10T17:04:36.491865121-08:00',
  '2020-04-01T10:00:00+01:00[Europe/London]',
  '2020-04-01T05:01:00-04:00[America/New_York]',
  '2020-04-01T11:02:00+02:00[Europe/Berlin]'
]);
```

## [](https://tc39.es/proposal-temporal/docs/cookbook.html#rounding)Rounding

### [](https://tc39.es/proposal-temporal/docs/cookbook.html#round-a-time-down-to-whole-hours)Round a time down to whole hours

Use the `round()` method of each `Temporal` type if you want to round the time fields. Here's an example of rounding a time _down_ to the previously occurring whole hour:

```
const time = Temporal.PlainTime.from('12:38:28.138818731');

const wholeHour = time.round({ smallestUnit: 'hour', roundingMode: 'floor' });

assert.equal(wholeHour.toString(), '12:00:00');
```

### [](https://tc39.es/proposal-temporal/docs/cookbook.html#round-a-date-to-the-nearest-start-of-the-month)Round a date to the nearest start of the month

Rounding is only defined for time fields. Rounding a date field can be ambiguous, so date-only types such as `Temporal.PlainDate` don't have a `round()` method. If you need to round a date to the nearest month, for example, then you must explicitly pick what kind of rounding you want. Here is an example of rounding to the nearest start of a month, rounding up in case of a tie:

```
const date = Temporal.PlainDate.from('2018-09-16');

const firstOfCurrentMonth = date.with({ day: 1 });
const firstOfNextMonth = firstOfCurrentMonth.add({ months: 1 });

const sinceCurrent = date.since(firstOfCurrentMonth);
const untilNext = date.until(firstOfNextMonth);

const isCloserToNextMonth = Temporal.Duration.compare(sinceCurrent, untilNext) >= 0;
const nearestMonth = isCloserToNextMonth ? firstOfNextMonth : firstOfCurrentMonth;

assert.equal(nearestMonth.toString(), '2018-10-01');
```

See also [Push back a launch date](https://tc39.es/proposal-temporal/docs/cookbook.html#push-back-a-launch-date) for an easier way to round up unconditionally to the _next_ start of a month.

## [](https://tc39.es/proposal-temporal/docs/cookbook.html#time-zone-conversion)Time zone conversion

### [](https://tc39.es/proposal-temporal/docs/cookbook.html#preserving-local-time)Preserving local time

Map a zoneless date and time of day into a `Temporal.Instant` instance at which the local date and time of day in a specified time zone matches it. This is easily done with `dateTime.toZonedDateTime(timeZone).toInstant()`, but here is an example of implementing different disambiguation behaviors than the `'compatible'`, `'earlier'`, `'later'`, and `'reject'` ones built in to `Temporal`.

```
/**
 * Get an exact time corresponding with a calendar date / wall-clock time in a
 * particular time zone, the same as
 * Temporal.PlainDateTime.toZonedDateTimeISO(), but with more disambiguation
 * options.
 *
 * As well as the default Temporal disambiguation options 'compatible',
 * 'earlier', 'later', and 'reject', there are additional options possible:
 *
 * - 'clipEarlier': Equivalent to 'earlier' when turning the clock back, and
 *   when setting the clock forward returns the time just before the clock
 *   changes.
 * - 'clipLater': Equivalent to 'later' when turning the clock back, and when
 *   setting the clock forward returns the exact time of the clock change.
 *
 * @param {Temporal.PlainDateTime} dateTime - Calendar date and wall-clock time to
 *   convert
 * @param {string} timeZone - IANA identifier of time zone in which to consider the
 *   wall-clock time
 * @param {string} [disambiguation='earlier'] - Disambiguation mode, see description.
 * @returns {Temporal.Instant} Absolute time in timeZone at the time of the
 *   calendar date and wall-clock time from dateTime
 */
function getInstantWithLocalTimeInZone(dateTime, timeZone, disambiguation = 'earlier') {
  // Handle the built-in modes first
  if (['compatible', 'earlier', 'later', 'reject'].includes(disambiguation)) {
    return dateTime.toZonedDateTime(timeZone, { disambiguation }).toInstant();
  }

  const zdts = ['earlier', 'later'].map((disambiguation) => dateTime.toZonedDateTime(timeZone, { disambiguation }));
  const instants = zdts.map((zdt) => zdt.toInstant()).reduce((a, b) => (a.equals(b) ? [a] : [a, b]));

  // Return only possibility if no disambiguation needed
  if (instants.length === 1) return instants[0];

  switch (disambiguation) {
    case 'clipEarlier':
      if (zdts[0].toPlainDateTime().equals(dateTime)) {
        return instants[0];
      }
      return zdts[0].getTimeZoneTransition('next').subtract({ nanoseconds: 1 }).toInstant();
    case 'clipLater':
      if (zdts[1].toPlainDateTime().equals(dateTime)) {
        return instants[1];
      }
      return zdts[0].getTimeZoneTransition('next').toInstant();
  }
  throw new RangeError(`invalid disambiguation ${disambiguation}`);
}

const nonexistentGermanWallTime = Temporal.PlainDateTime.from('2019-03-31T02:45');

const germanResults = {
  earlier: /*     */ '2019-03-31T01:45:00+01:00',
  later: /*       */ '2019-03-31T03:45:00+02:00',
  compatible: /*  */ '2019-03-31T03:45:00+02:00',
  clipEarlier: /* */ '2019-03-31T01:59:59.999999999+01:00',
  clipLater: /*   */ '2019-03-31T03:00:00+02:00'
};
for (const [disambiguation, result] of Object.entries(germanResults)) {
  assert.equal(
    getInstantWithLocalTimeInZone(nonexistentGermanWallTime, 'Europe/Berlin', disambiguation).toString({
      timeZone: 'Europe/Berlin'
    }),
    result
  );
}

const doubleEasternBrazilianWallTime = Temporal.PlainDateTime.from('2019-02-16T23:45');

const brazilianResults = {
  earlier: /*     */ '2019-02-16T23:45:00-02:00',
  later: /*       */ '2019-02-16T23:45:00-03:00',
  compatible: /*  */ '2019-02-16T23:45:00-02:00',
  clipEarlier: /* */ '2019-02-16T23:45:00-02:00',
  clipLater: /*   */ '2019-02-16T23:45:00-03:00'
};
for (const [disambiguation, result] of Object.entries(brazilianResults)) {
  assert.equal(
    getInstantWithLocalTimeInZone(doubleEasternBrazilianWallTime, 'America/Sao_Paulo', disambiguation).toString({
      timeZone: 'America/Sao_Paulo'
    }),
    result
  );
}
```

### [](https://tc39.es/proposal-temporal/docs/cookbook.html#preserving-exact-time)Preserving exact time

Map a zoned date and time of day into another zoned date and time of day in a target time zone at the corresponding exact time. This could be used when converting user-input date-time values between time zones.

```
const source = Temporal.ZonedDateTime.from('2020-01-09T00:00[America/Chicago]');

const result = source.withTimeZone('America/Los_Angeles');

// On this date, when it's midnight in Chicago, it's 10 PM the previous night in LA
assert.equal(result.toString(), '2020-01-08T22:00:00-08:00[America/Los_Angeles]');
```

Here is another example similar to the previous one, using the time zone for future events. The times and locations of a series of future meetings are stored as a pair of strings: one for the calendar date and wall-clock time, and one for the time zone. They cannot be stored as an exact time because between now and the time when the event happens, the time zone rules for daylight saving time could change — for example, Brazil abolished daylight saving time in 2019 — but the meeting would still be held at the same wall-clock time on that date. So if the time zone rules changed, the event's exact time would change.

This example calculates the starting times of all the Ecma TC39 meetings in 2019, in local time in Tokyo.

```
// Dates of the 2019 TC39 meetings:
const tc39meetings = [
  {
    dateTime: '2019-01-28T10:00',
    timeZone: 'America/Phoenix'
  },
  {
    dateTime: '2019-03-26T10:00',
    timeZone: 'America/New_York'
  },
  {
    dateTime: '2019-06-04T10:00',
    timeZone: 'Europe/Berlin'
  },
  {
    dateTime: '2019-07-23T10:00',
    timeZone: 'America/Los_Angeles'
  },
  {
    dateTime: '2019-10-01T10:00',
    timeZone: 'America/New_York'
  },
  {
    dateTime: '2019-12-03T10:00',
    timeZone: 'America/Los_Angeles'
  }
];

// To follow the meetings remotely from Tokyo, calculate the times you would
// need to join:
const localTimeZone = 'Asia/Tokyo';
const localTimes = tc39meetings.map(({ dateTime, timeZone }) => {
  return Temporal.PlainDateTime.from(dateTime)
    .toZonedDateTime(timeZone, { disambiguation: 'reject' })
    .withTimeZone(localTimeZone)
    .toPlainDateTime();
});

assert.deepEqual(
  localTimes.map((dt) => dt.toString()),
  [
    '2019-01-29T02:00:00',
    '2019-03-26T23:00:00',
    '2019-06-04T17:00:00',
    '2019-07-24T02:00:00',
    '2019-10-01T23:00:00',
    '2019-12-04T03:00:00'
  ]
);
```

### [](https://tc39.es/proposal-temporal/docs/cookbook.html#daily-occurrence-in-local-time)Daily occurrence in local time

Similar to the previous recipe, calculate the exact times of a daily occurrence that happens at a particular local time in a particular time zone.

```
/**
 * Returns an iterator of the exact times corresponding to a daily occurrence
 * starting on a particular date, and happening at a particular local time in a
 * particular time zone.
 *
 * @param {Temporal.PlainDate} startDate - Starting date
 * @param {Temporal.PlainTime} plainTime - Local time that event occurs at
 * @param {string} timeZone - Time zone in which event is defined
 */
function* calculateDailyOccurrence(startDate, plainTime, timeZone) {
  for (let date = startDate; ; date = date.add({ days: 1 })) {
    yield date.toZonedDateTime({ plainTime, timeZone }).toInstant();
  }
}

// Daily meeting at 8 AM California time
const startDate = Temporal.PlainDate.from('2017-03-10');
const time = Temporal.PlainTime.from('08:00');
const timeZone = 'America/Los_Angeles';
const iter = calculateDailyOccurrence(startDate, time, timeZone);

assert.equal(iter.next().value.toString(), '2017-03-10T16:00:00Z');
assert.equal(iter.next().value.toString(), '2017-03-11T16:00:00Z');
// DST change:
assert.equal(iter.next().value.toString(), '2017-03-12T15:00:00Z');
assert.equal(iter.next().value.toString(), '2017-03-13T15:00:00Z');
```

### [](https://tc39.es/proposal-temporal/docs/cookbook.html#utc-offset-for-a-zoned-event-as-a-string)UTC offset for a zoned event, as a string

Use `Temporal.Instant.toZonedDateTimeISO()` and `Temporal.ZonedDateTime.offset` to map a `Temporal.Instant` instance and a time zone into the UTC offset at that exact time in that time zone, as a string.

```
const instant = Temporal.Instant.from('2020-01-09T00:00Z');

const source = instant.toZonedDateTimeISO('America/New_York');
source.offset; // => '-05:00'
```

### [](https://tc39.es/proposal-temporal/docs/cookbook.html#utc-offset-for-a-zoned-event-as-a-number-of-seconds)UTC offset for a zoned event, as a number of seconds

Similarly, use `Temporal.Instant.toZonedDateTimeISO()` and `Temporal.ZonedDateTime.offsetNanoseconds` to do the same thing for the offset as a number of seconds. (Remember to divide by 109 to convert nanoseconds to seconds.)

```
const instant = Temporal.Instant.from('2020-01-09T00:00Z');

instant.toZonedDateTimeISO('America/New_York').offsetNanoseconds / 1e9; // => -18000
```

### [](https://tc39.es/proposal-temporal/docs/cookbook.html#offset-between-two-time-zones-at-an-exact-time)Offset between two time zones at an exact time

Also using `Temporal.Instant.toZonedDateTimeISO()` and `Temporal.ZonedDateTime.offsetNanoseconds`, we can map a `Temporal.Instant` instance and two time zones into the signed difference of UTC offsets between those time zones at that exact time, as a number of seconds.

```
/**
 * Returns the number of seconds' difference between the UTC offsets of two
 * time zones, at an exact time
 *
 * @param {Temporal.Instant} instant - An exact time
 * @param {string} sourceTimeZone - IANA ID of a time zone to examine
 * @param {string} targetTimeZone - IANA ID of a second time zone to examine
 * @returns {number} The number of seconds difference between the time zones'
 *   UTC offsets
 */
function getUtcOffsetDifferenceSecondsAtInstant(instant, sourceTimeZone, targetTimeZone) {
  const sourceOffsetNs = instant.toZonedDateTimeISO(sourceTimeZone).offsetNanoseconds;
  const targetOffsetNs = instant.toZonedDateTimeISO(targetTimeZone).offsetNanoseconds;
  return (targetOffsetNs - sourceOffsetNs) / 1e9;
}

const instant = Temporal.Instant.from('2020-01-09T00:00Z');

// At this exact time, Chicago is 3600 seconds earlier than New York
assert.equal(getUtcOffsetDifferenceSecondsAtInstant(instant, 'America/New_York', 'America/Chicago'), -3600);
```

### [](https://tc39.es/proposal-temporal/docs/cookbook.html#dealing-with-dates-and-times-in-a-fixed-location)Dealing with dates and times in a fixed location

Here is an example of `Temporal` used in a graph, showing fictitious activity for a storage tank in a fixed location (Stockholm, Sweden). The graph always starts at midnight in the tank's location, but the graph labels are in the viewer's time zone.

```
// tankDataX and tankDataY are X and Y-axis data for the last 24 hours,
// obtained from elsewhere, e.g. const [tankDataX, tankDataY] = fetchData();
// tankDataX is an array of Temporal.Instant, and tankDataY is an array of numbers.

// Show data starting from the most recent midnight in the tank's location (Stockholm)
const tankTimeZone = 'Europe/Stockholm';
const labelFormatter = new Intl.DateTimeFormat(undefined, {
  weekday: 'short',
  hour: 'numeric',
  minute: 'numeric',
  timeZone: Temporal.Now.timeZoneId()
});
const browserCalendar = labelFormatter.resolvedOptions().calendar;
const tankMidnight = Temporal.Now.zonedDateTimeISO()
  .withCalendar(browserCalendar)
  .withTimeZone(tankTimeZone)
  .startOfDay()
  .toInstant();
const atOrAfterMidnight = (x) => Temporal.Instant.compare(x, tankMidnight) >= 0;
const dataStartIndex = tankDataX.findIndex(atOrAfterMidnight);
const graphLabels = tankDataX.slice(dataStartIndex).map((x) => labelFormatter.format(x));
const graphPoints = tankDataY.slice(dataStartIndex);

const ctx = document.getElementById('storage-tank').getContext('2d');
// The graph is made with Chart.js (https://www.chartjs.org/)
new Chart(ctx, {
  type: 'line',
  data: {
    labels: graphLabels,
    datasets: [
      {
        label: 'Fill level',
        data: graphPoints
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Stockholm storage tank'
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
});
```

### [](https://tc39.es/proposal-temporal/docs/cookbook.html#book-a-meeting-across-time-zones)Book a meeting across time zones

Across the web there are several tools for finding meeting times that are appropriate for all the participants' time zones, such as [World Time Buddy](https://www.worldtimebuddy.com/), [World Clock Meeting Planner](https://www.timeanddate.com/worldclock/meeting.html), and built into various calendar software.

```
// Display local time zone and three others
const browserCalendar = new Intl.DateTimeFormat().resolvedOptions().calendar;
const now = Temporal.Now.zonedDateTimeISO().withCalendar(browserCalendar);
const timeZones = [
  { name: 'Here', tz: now.timeZoneId },
  { name: 'New York', tz: 'America/New_York' },
  { name: 'London', tz: 'Europe/London' },
  { name: 'Tokyo', tz: 'Asia/Tokyo' }
];

// Start the table at midnight local time
const startTime = now.startOfDay();

// Build the table
const table = document.getElementById('meeting-planner');
timeZones.forEach(({ name, tz }) => {
  const row = document.createElement('tr');

  const title = document.createElement('td');
  const startTimeHere = startTime.withTimeZone(tz);
  title.textContent = `${name} (UTC${startTimeHere.offset})`;
  row.appendChild(title);

  for (let hours = 0; hours < 24; hours++) {
    const cell = document.createElement('td');

    const columnTime = startTimeHere.add({ hours });
    cell.className = `time-${columnTime.hour}`;

    // Highlight the current hour in each row
    if (hours === now.hour) cell.className += ' time-current';

    // Show the date in midnight cells
    let formatOptions;
    if (columnTime.hour === columnTime.startOfDay().hour) {
      formatOptions = { month: 'short', day: 'numeric' };
    } else {
      formatOptions = { hour: 'numeric' };
    }
    cell.textContent = columnTime.toLocaleString(undefined, formatOptions);
    row.appendChild(cell);
  }

  table.appendChild(row);
});
```

## [](https://tc39.es/proposal-temporal/docs/cookbook.html#arithmetic)Arithmetic

### [](https://tc39.es/proposal-temporal/docs/cookbook.html#how-many-days-until-a-future-date)How many days until a future date

An example HTML form inspired by [Days Calculator](https://www.timeanddate.com/date/durationresult.html) on timeanddate.com:

```
// Form parameters
const params = new URL(document.location).searchParams;
const futuredateParam = params.get('futuredate');

// Workaround to generate the string if the browser does not have
// Intl.DurationFormat. The workaround works only in English.
function englishPlural(n, singular, plural) {
  return `${n} ${n === 1 ? singular : plural}`;
}
function formatDays(duration) {
  if (typeof Intl.DurationFormat === 'undefined') {
    return englishPlural(duration.days, 'day', 'days');
  }
  return duration.toLocaleString();
}
function formatMonths(duration) {
  if (typeof Intl.DurationFormat === 'undefined') {
    return (
      `${englishPlural(duration.months, 'month', 'months')}` +
      (duration.days !== 0 ? `, ${englishPlural(duration.days, 'day', 'days')}` : '')
    );
  }
  return duration.toLocaleString();
}

// When form data posted:
if (futuredateParam !== null) {
  const browserCalendar = new Intl.DateTimeFormat().resolvedOptions().calendar;
  const futureDate = Temporal.PlainDate.from(futuredateParam).withCalendar(browserCalendar);
  const today = Temporal.Now.plainDateISO().withCalendar(browserCalendar);
  const until = today.until(futureDate, { largestUnit: 'day' });
  const untilMonths = until.round({ largestUnit: 'month', relativeTo: today });

  const dayString = formatDays(until);
  const results = document.getElementById('futuredate-results');
  results.innerHTML = `
    <p>From and including: <strong>${today.toLocaleString()}</strong></p>
    <p>To but not including: <strong>${futureDate.toLocaleString()}</strong></p>
    <h4>Result: ${dayString}</h4>
    <p>It is ${dayString} from the start date to the end date, but not
    including the end date.</p>
    <p>Or ${formatMonths(untilMonths)} excluding the end date.</p>
  `;
}
```

### [](https://tc39.es/proposal-temporal/docs/cookbook.html#unit-constrained-duration-between-now-and-a-pastfuture-zoned-event)Unit-constrained duration between now and a past/future zoned event

Take the difference between two `Temporal.Instant` instances as a `Temporal.Duration` instance (positive or negative), representing the duration between the two instants without using units coarser than specified (e.g., for presenting a meaningful countdown with vs. without using months or days).

```
const result = Temporal.Instant.from('2020-01-09T04:00Z').since(Temporal.Instant.from('2020-01-09T00:00Z'), {
  largestUnit: 'hour'
});
assert.equal(`${result}`, 'PT4H');

const result2 = Temporal.Instant.from('2020-01-09T00:00Z').until(Temporal.Instant.from('2020-01-09T04:00Z'), {
  largestUnit: 'minute'
});
assert.equal(`${result2}`, 'PT240M');

// Example of using it in a countdown:

const duration = Temporal.Now.instant().until(Temporal.Instant.from('2020-04-01T13:00-07:00[America/Los_Angeles]'));
`It's ${duration.toLocaleString()} ${duration.sign < 0 ? 'until' : 'since'} the TC39 Temporal presentation`;
```

### [](https://tc39.es/proposal-temporal/docs/cookbook.html#next-offset-transition-in-a-time-zone)Next offset transition in a time zone

Map a `Temporal.ZonedDateTime` instance into another `Temporal.ZonedDateTime` instance representing the nearest following exact time at which there is an offset transition in the time zone (e.g., for setting reminders).

```
/**
 * Get the nearest following exact time that the given time zone transitions
 * to another UTC offset, inclusive or exclusive.
 *
 * @param {Temporal.ZonedDateTime} zonedDateTime - Starting exact time and time
 *   zone to consider
 * @param {boolean} inclusive - Include the start time, or not
 * @returns {(Temporal.ZonedDateTime|null)} - Next UTC offset transition, or
 *   null if none known at this time
 */
function getNextOffsetTransitionFromExactTime(zonedDateTime, inclusive) {
  let nearest;
  if (inclusive) {
    // In case instant itself is the exact time of a transition:
    nearest = zonedDateTime.subtract({ nanoseconds: 1 }).getTimeZoneTransition('next');
  } else {
    nearest = zonedDateTime.getTimeZoneTransition('next');
  }
  return nearest;
}

const nycTime = Temporal.ZonedDateTime.from('2019-04-16T21:01Z[America/New_York]');

const nextTransition = getNextOffsetTransitionFromExactTime(nycTime, false);
assert.equal(nextTransition.toString(), '2019-11-03T01:00:00-05:00[America/New_York]');

// Inclusive
const sameTransition = getNextOffsetTransitionFromExactTime(nextTransition, true);
assert.equal(sameTransition.toString(), nextTransition.toString());

// No known future DST transitions in a time zone
const reginaTime = Temporal.ZonedDateTime.from('2019-04-16T21:01Z[America/Regina]');
assert.equal(getNextOffsetTransitionFromExactTime(reginaTime), null);
```

### [](https://tc39.es/proposal-temporal/docs/cookbook.html#comparison-of-an-exact-time-to-business-hours)Comparison of an exact time to business hours

This example takes a roster of wall-clock opening and closing times for a business, and maps an exact time into a time-sensitive state indicator ("opening soon" vs. "open" vs. "closing soon" vs. "closed").

```
/**
 * Compare the given exact time to the business hours of a business located in
 * a particular time zone, and return a string indicating whether the business
 * is open, closed, opening soon, or closing soon. The length of "soon" can be
 * controlled using the `soonWindow` parameter.
 *
 * @param {Temporal.ZonedDateTime} now - Date and Time at which to consider
 *  whether the business is open
 * @param {(Object|null)[]} businessHours - Array of length 7 indicating
 *  business hours during the week
 * @param {Temporal.PlainTime} businessHours[].open - Time at which the business
 *  opens
 * @param {Temporal.PlainTime} businessHours[].close - Time at which the business
 *  closes
 * @param {Temporal.Duration} soonWindow - Length of time before the opening
 *  or closing time during which the business should be considered "opening
 *  soon" or "closing soon"
 * @returns {string} "open", "closed", "opening soon", or "closing soon"
 */
function getBusinessOpenStateText(now, businessHours, soonWindow) {
  const compare = Temporal.ZonedDateTime.compare;
  function inRange(zdt, start, end) {
    return compare(zdt, start) >= 0 && compare(zdt, end) < 0;
  }

  // Because of times wrapping around at midnight, we may need to consider
  // yesterday's and tomorrow's hours as well
  for (const delta of [-1, 0]) {
    const openDate = now.toPlainDate().add({ days: delta });
    // convert weekday (1..7) to 0-based index, for array:
    const index = (openDate.dayOfWeek + 7) % 7;
    if (!businessHours[index]) continue;

    const timeZone = now.timeZoneId;
    const { open: openTime, close: closeTime } = businessHours[index];
    const open = openDate.toZonedDateTime({ plainTime: openTime, timeZone });
    const isWrap = Temporal.PlainTime.compare(closeTime, openTime) < 0;
    const closeDate = isWrap ? openDate.add({ days: 1 }) : openDate;
    const close = closeDate.toZonedDateTime({ plainTime: closeTime, timeZone });

    if (inRange(now, open, close)) {
      return compare(now, close.subtract(soonWindow)) >= 0 ? 'closing soon' : 'open';
    }
    if (inRange(now.add(soonWindow), open, close)) return 'opening soon';
  }
  return 'closed';
}

// For example, a restaurant or bar might have opening hours that go past
// midnight; make sure this is handled correctly
const businessHours = [
  /* Sun */ { open: Temporal.PlainTime.from('13:00'), close: Temporal.PlainTime.from('20:30') },
  /* Mon */ null, // closed Mondays
  /* Tue */ { open: Temporal.PlainTime.from('11:00'), close: Temporal.PlainTime.from('20:30') },
  /* Wed */ { open: Temporal.PlainTime.from('11:00'), close: Temporal.PlainTime.from('20:30') },
  /* Thu */ { open: Temporal.PlainTime.from('11:00'), close: Temporal.PlainTime.from('22:00') },
  /* Fri */ { open: Temporal.PlainTime.from('11:00'), close: Temporal.PlainTime.from('00:00') },
  /* Sat */ { open: Temporal.PlainTime.from('11:00'), close: Temporal.PlainTime.from('02:00') }
];

const now = Temporal.ZonedDateTime.from('2019-04-07T00:00+02:00[Europe/Berlin]');
const soonWindow = Temporal.Duration.from({ minutes: 30 });
const saturdayNightState = getBusinessOpenStateText(now, businessHours, soonWindow);
assert.equal(saturdayNightState, 'open');

const lastCall = now.add({ hours: 1, minutes: 50 });
assert.equal(lastCall.toString(), '2019-04-07T01:50:00+02:00[Europe/Berlin]');
const lastCallState = getBusinessOpenStateText(lastCall, businessHours, soonWindow);
assert.equal(lastCallState, 'closing soon');

const tuesdayEarly = now.add({ days: 2, hours: 6 });
const tuesdayEarlyState = getBusinessOpenStateText(tuesdayEarly, businessHours, soonWindow);
assert.equal(tuesdayEarlyState, 'closed');
```

### [](https://tc39.es/proposal-temporal/docs/cookbook.html#flight-arrivaldepartureduration)Flight arrival/departure/duration

Map localized trip departure and arrival times into trip duration in units no larger than hours. (By default, differences between ZonedDateTime instances are exact differences in time units.)

```
const departure = Temporal.ZonedDateTime.from('2020-03-08T11:55:00+08:00[Asia/Hong_Kong]');
const arrival = Temporal.ZonedDateTime.from('2020-03-08T09:50:00-07:00[America/Los_Angeles]');

const flightTime = departure.until(arrival);

assert.equal(flightTime.toString(), 'PT12H55M');
```

Given a departure time with time zone and a flight duration, get an arrival time in the destination time zone, using time zone-aware math.

```
const departure = Temporal.ZonedDateTime.from('2020-03-08T11:55:00+08:00[Asia/Hong_Kong]');
const flightTime = Temporal.Duration.from({ minutes: 775 });

const arrival = departure.add(flightTime).withTimeZone('America/Los_Angeles');

assert.equal(arrival.toString(), '2020-03-08T09:50:00-07:00[America/Los_Angeles]');
```

### [](https://tc39.es/proposal-temporal/docs/cookbook.html#push-back-a-launch-date)Push back a launch date

Add the number of days it took to get an approval, and advance to the start of the following month.

```
/**
 * Take a date, add a number of days' delay, and round to the start of the next
 * month.
 *
 * @param {Temporal.PlainDate} date - Original date
 * @param {number} delayDays - Number of days' delay
 * @returns {Temporal.PlainDate} - Beginning of the next month after the delay
 */
function plusAndRoundToMonthStart(date, delayDays) {
  return date
    .add({ days: delayDays })
    .add({ months: 1 }) // constrains to end of month if needed, e.g. Jan 31 -> Feb 28
    .with({ day: 1 });
}

const oldLaunchDate = Temporal.PlainDate.from('2019-06-01');

const fifteenDaysDelay = plusAndRoundToMonthStart(oldLaunchDate, 15);
assert.equal(fifteenDaysDelay.toString(), '2019-07-01');

const sixtyDaysDelay = plusAndRoundToMonthStart(oldLaunchDate, 60);
assert.equal(sixtyDaysDelay.toString(), '2019-08-01');
```

### [](https://tc39.es/proposal-temporal/docs/cookbook.html#schedule-a-reminder-ahead-of-matching-a-record-setting-duration)Schedule a reminder ahead of matching a record-setting duration

When considering a record (for example, a personal-best time in a sport), you might want to receive an alert just before the record is about to be broken. This example takes a record as a `Temporal.Duration`, the starting exact time of the current attempt as a `Temporal.Instant`, and another `Temporal.Duration` indicating how long before the potentially record-setting exact time you would like to receive an alert. It returns the exact time at which a notification could be sent, for example "Keep going! 5 more minutes and it will be your personal best!"

This could be used for workout tracking, racing (including _long_ and potentially time-zone-crossing races like the Bullrun Rally, Iditarod, Self-Transcendence 3100, and Clipper Round The World), or even open-ended analogs like event-every-day "streaks".

```
/**
 * Retrieve an exact time at which to give advance notice of a record that
 * is potentially about to be broken.
 *
 * @param {Temporal.Instant} start - Starting exact time of the event
 * @param {Temporal.Duration} previousRecord - Existing record to be broken
 * @param {Temporal.Duration} noticeWindow - Advance notice time
 * @returns {Temporal.Instant} Exact time at which to give advance notice of
 *  breaking the record
 */
function getInstantBeforeOldRecord(start, previousRecord, noticeWindow) {
  return start.add(previousRecord).subtract(noticeWindow);
}

// Start of the men's 10000 meters at the Rio de Janeiro 2016 Olympic Games
const raceStart = Temporal.Instant.from('2016-08-13T21:27-03:00[America/Sao_Paulo]');
// Kenenisa Bekele's world record set in 2005
const record = Temporal.Duration.from({ minutes: 26, seconds: 17, milliseconds: 530 });
const noticeWindow = Temporal.Duration.from({ minutes: 1 });
// Time to send a "hurry up, can you finish the race in 1 minute?" push
// notification to all the runners
const reminderAt = getInstantBeforeOldRecord(raceStart, record, noticeWindow);

assert.equal(reminderAt.toString(), '2016-08-14T00:52:17.53Z');
```

### [](https://tc39.es/proposal-temporal/docs/cookbook.html#nth-weekday-of-the-month)Nth weekday of the month

Example of getting a `Temporal.PlainDate` representing the first Tuesday of the given `Temporal.PlainYearMonth`, adaptable to other weekdays.

```
/**
 * Gets the first Tuesday of the month and returns its date
 *
 * @param {Temporal.PlainYearMonth} queriedMonth - YearMonth instance to query
 * @returns {Temporal.PlainDate} Temporal.PlainDate Instance which gives first tuesday
 */
function getFirstTuesday(queriedMonth) {
  // We first need to convert to a date
  const firstOfMonth = queriedMonth.toPlainDate({ day: 1 });

  // We have Monday = 1, Sunday = 7, and we want to add a positive number
  // smaller than 7 to get to the first Tuesday.
  // If we're already on a Tuesday (2) then we want to add 0.
  // So for the first of the month being a Monday through Sunday the additions are:
  //    1, 0, 6, 5, 4, 3, 2 which is given by that formula.
  // This lookup table makes this example easier to read, but you can also
  // calculate the answer: (7 + desiredWeekday - firstOfMonth.dayOfWeek) % 7
  return firstOfMonth.add({ days: [1, 0, 6, 5, 4, 3, 2][firstOfMonth.dayOfWeek - 1] });
}

const myMonth = Temporal.PlainYearMonth.from('2020-02');
const firstTuesdayOfMonth = getFirstTuesday(myMonth);
assert.equal(firstTuesdayOfMonth.toString(), '2020-02-04');
assert.equal(firstTuesdayOfMonth.dayOfWeek, 2);

// Similarly, to get the second Tuesday:
const secondWeek = myMonth.toPlainDate({ day: 8 });
const secondTuesday = secondWeek.add({ days: [1, 0, 6, 5, 4, 3, 2][secondWeek.dayOfWeek - 1] });
assert.equal(secondTuesday.day, firstTuesdayOfMonth.day + 7);

// And the last Tuesday:
const lastOfMonth = myMonth.toPlainDate({ day: myMonth.daysInMonth });
const lastTuesday = lastOfMonth.subtract({ days: [6, 0, 1, 2, 3, 4, 5][lastOfMonth.dayOfWeek - 1] });
assert.equal(lastTuesday.toString(), '2020-02-25');
assert.equal(lastTuesday.dayOfWeek, 2);
// or:
const lastTuesday2 = lastOfMonth.subtract({ days: (7 + lastOfMonth.dayOfWeek - 2) % 7 });
assert.equal(Temporal.PlainDate.compare(lastTuesday, lastTuesday2), 0);
```

Given a `Temporal.PlainYearMonth` instance and an ISO 8601 ordinal calendar day of the week ranging from 1 (Monday) to 7 (Sunday), return a chronologically ordered array of `Temporal.PlainDate` instances corresponding with every day in the month that is the specified day of the week (of which there will always be either four or five).

```
/**
 * Gets an array of Temporal.PlainDates of every day in the given month, that falls
 * on the given day of the week.
 *
 * @param {Temporal.PlainYearMonth} yearMonth - Year and month to query
 * @param {number} dayNumberOfTheWeek - Day of the week, Monday=1, Sunday=7
 * @returns {Temporal.PlainDate[]} Array of dates
 */
function getWeeklyDaysInMonth(yearMonth, dayNumberOfTheWeek) {
  const firstOfMonth = yearMonth.toPlainDate({ day: 1 });
  let nextWeekday = firstOfMonth.add({ days: (7 + dayNumberOfTheWeek - firstOfMonth.dayOfWeek) % 7 });
  const result = [];
  while (nextWeekday.month === yearMonth.month) {
    result.push(nextWeekday);
    nextWeekday = nextWeekday.add({ days: 7 });
  }
  return result;
}

assert.equal(
  getWeeklyDaysInMonth(Temporal.PlainYearMonth.from('2020-02'), 1).join(' '),
  '2020-02-03 2020-02-10 2020-02-17 2020-02-24'
);
assert.equal(
  getWeeklyDaysInMonth(Temporal.PlainYearMonth.from('2020-02'), 6).join(' '),
  '2020-02-01 2020-02-08 2020-02-15 2020-02-22 2020-02-29'
);
```

Given a `Temporal.PlainDate` instance, return the count of preceding days in its month that share its day of the week.

```
/**
 * Gets the number of preceding days in the same month as `date` that fall on
 * the same day of the week as `date`.
 *
 * @param {Temporal.PlainDate} date - Starting date
 * @returns {number} Number of days
 */
function countPrecedingWeeklyDaysInMonth(date) {
  // This doesn't actually require Temporal
  return Math.floor((date.day - 1) / 7);
}

assert.equal(countPrecedingWeeklyDaysInMonth(Temporal.PlainDate.from('2020-02-28')), 3);
assert.equal(countPrecedingWeeklyDaysInMonth(Temporal.PlainDate.from('2020-02-29')), 4);
```

### [](https://tc39.es/proposal-temporal/docs/cookbook.html#manipulating-the-day-of-the-month)Manipulating the day of the month

Here are some examples of taking an existing date, and adjusting the day of the month.

```
const date = Temporal.PlainDate.from('2020-04-14');

// Third day of next month:

const thirdOfNextMonth = date.add({ months: 1 }).with({ day: 3 });

assert.equal(thirdOfNextMonth.toString(), '2020-05-03');

// Last day of this month:

const lastOfThisMonth = date.with({ day: date.daysInMonth });

assert.equal(lastOfThisMonth.toString(), '2020-04-30');

// On the 18th of this month at 8 PM:

const thisMonth18thAt8PM = date.with({ day: 18 }).toPlainDateTime(Temporal.PlainTime.from('20:00'));

assert.equal(thisMonth18thAt8PM.toString(), '2020-04-18T20:00:00');
```

### [](https://tc39.es/proposal-temporal/docs/cookbook.html#same-date-in-another-month)Same date in another month

Likewise, here are some examples of taking an existing date and adjusting the month, but keeping the day and year the same.

Depending on the behavior you want, you will need to pick the right `overflow` option, but the default of `'constrain'` should be correct for most cases.

```
const date = Temporal.PlainDate.from('2020-05-31');

// Same date and time, but in February
// (and use the last day if the date doesn't exist in February):

const feb = date.with({ month: 2 });

assert.equal(feb.toString(), '2020-02-29');

// Same date and time, but in April
// (and throw an exception if the date doesn't exist in April):

assert.throws(() => {
  date.with({ month: 4 }, { overflow: 'reject' });
});
```

### [](https://tc39.es/proposal-temporal/docs/cookbook.html#next-weekly-occurrence)Next weekly occurrence

From a `Temporal.ZonedDateTime` instance, get a `Temporal.ZonedDateTime` representing the next occurrence of a weekly event that is scheduled on a particular weekday and time in a particular time zone. (For example, "weekly on Thursdays at 08:45 California time").

```
/**
 * Returns the local date and time for the next occurrence of a weekly occurring
 * event.
 *
 * @param {Temporal.ZonedDateTime} now - Starting point
 * @param {number} weekday - Weekday event occurs on (Monday=1, Sunday=7)
 * @param {Temporal.PlainTime} eventTime - Time event occurs at
 * @param {string} eventTimeZone - Time zone where event is planned
 * @returns {Temporal.ZonedDateTime} Local date and time of next occurrence
 */
function nextWeeklyOccurrence(now, weekday, eventTime, eventTimeZone) {
  const nowInEventTimeZone = now.withTimeZone(eventTimeZone);
  const nextDate = nowInEventTimeZone.toPlainDate().add({ days: (weekday + 7 - nowInEventTimeZone.dayOfWeek) % 7 });
  let nextOccurrence = nextDate.toZonedDateTime({ plainTime: eventTime, timeZone: eventTimeZone });

  // Handle the case where the event is today but already happened
  if (Temporal.ZonedDateTime.compare(now, nextOccurrence) > 0) {
    nextOccurrence = nextOccurrence.add({ weeks: 1 });
  }

  return nextOccurrence.withTimeZone(now.timeZoneId);
}

// "Weekly on Thursdays at 08:45 California time":
const weekday = 4;
const eventTime = Temporal.PlainTime.from('08:45');
const eventTimeZone = 'America/Los_Angeles';

const rightBefore = Temporal.ZonedDateTime.from('2020-03-26T15:30+00:00[Europe/London]');
let next = nextWeeklyOccurrence(rightBefore, weekday, eventTime, eventTimeZone);
assert.equal(next.toString(), '2020-03-26T15:45:00+00:00[Europe/London]');

const rightAfter = Temporal.ZonedDateTime.from('2020-03-26T16:00+00:00[Europe/London]');
next = nextWeeklyOccurrence(rightAfter, weekday, eventTime, eventTimeZone);
assert.equal(next.toString(), '2020-04-02T16:45:00+01:00[Europe/London]');
```

### [](https://tc39.es/proposal-temporal/docs/cookbook.html#weekday-of-yearly-occurrence)Weekday of yearly occurrence

In some countries, when a public holiday falls on a Tuesday or Thursday, an extra "bridge" public holiday is observed on Monday or Friday in order to give workers a long weekend off. The following example calculates this.

```
/**
 * Calculates the days that need to be taken off work in order to have a long
 * weekend around a public holiday, "bridging" the holiday if it falls on a
 * Tuesday or Thursday.
 *
 * @param {Temporal.PlainMonthDay} holiday - Yearly date on the calendar
 * @param {number} year - Year in which to calculate the bridge days
 * @returns {Temporal.PlainDate[]} List of dates to be taken off work
 */
function bridgePublicHolidays(holiday, year) {
  const date = holiday.toPlainDate({ year });
  switch (date.dayOfWeek) {
    case 1: // Mon
    case 3: // Wed
    case 5: // Fri
      return [date];
    case 2: // Tue; take Monday off
      return [date.subtract({ days: 1 }), date];
    case 4: // Thu; take Friday off
      return [date, date.add({ days: 1 })];
    case 6: // Sat
    case 7: // Sun
      return [];
  }
}

const labourDay = Temporal.PlainMonthDay.from('05-01');

// No bridge day
assert.deepEqual(
  bridgePublicHolidays(labourDay, 2020).map((d) => d.toString()),
  ['2020-05-01']
);

// Bridge day
assert.deepEqual(
  bridgePublicHolidays(labourDay, 2018).map((d) => d.toString()),
  ['2018-04-30', '2018-05-01']
);

// Bad luck, the holiday is already on a weekend
assert.deepEqual(
  bridgePublicHolidays(labourDay, 2021).map((d) => d.toString()),
  []
);
```

## [](https://tc39.es/proposal-temporal/docs/cookbook.html#advanced-use-cases)Advanced use cases

These are not expected to be part of the normal usage of `Temporal`, but show some unusual things that can be done with `Temporal`. Since they are generally larger than these cookbook recipes, they're on their own pages.

### [](https://tc39.es/proposal-temporal/docs/cookbook.html#extra-expanded-years)Extra-expanded years

Extend `Temporal` to support arbitrarily-large years (e.g., **+635427810-02-02**) for astronomical purposes.

→ [Extra-expanded years](https://tc39.es/proposal-temporal/docs/cookbook-expandedyears.html)

### [](https://tc39.es/proposal-temporal/docs/cookbook.html#adjustable-hijri-calendar)Adjustable Hijri calendar

Extend `Temporal` to support adjustment days for the Hijri calendars, which are sometimes required when the start of the month is based on astronomical observations.

→ [Adjustable Hijri calendar](https://tc39.es/proposal-temporal/docs/hijri-days-adjustments.html)

### [](https://tc39.es/proposal-temporal/docs/cookbook.html#nepali-calendar)Nepali calendar

Implementation of the Nepali calendar in userspace. This calendar is currently not built in to JS environments. This serves as an example of how to build support for calendars that are not widespread in browsers.

→ [Nepali calendar](https://tc39.es/proposal-temporal/docs/cookbook-nepali-calendar.html)