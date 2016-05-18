[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Router.js

Why a router?  Shouldn't this go on the back end?

Before the advent of the SPA, the job of serving pages was left to the server
side of the equation (think rails views).  You would make a request and the
server would handle populating and delivering a view to the client.

Fast forward a number of years where browsers are more advnaced, the internet is
faster and users expect quick results.  A front end router lets us handle state
changes more efficently.  Instead of having to rerender and entire page we can
only chose to change what we need. We can also serve more information faster so
instead of having to send entire pages from the server to the client we can send
smaller bits of data (like JSON) and let the client side handle the job of
rendering.

## Prerequisites

-   Javascript
-   jQuery
-   Handlebars

## Objectives

By the end of this, developers should be able to:

-   Create a router using Router.js
-   Properly map routes
-   Create click events that navigate between view states
-   Render data retrived from an API based on a route
-   Render handlebars templates based on routes populated with API payload.

## Preparation

1.  [Fork and clone](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.
1.  Install dependencies with `npm install`.

Better preparation instructions may be found as
[snippets](https://github.com/ga-wdi-boston/instructors/tree/master/snippets).

It's a good idea to have students do these steps while you're writing objectives
on the whiteboard.

## Leading Topic Heading

Here is where the talk begins. If you have not already included framing above,
it's appropriate to put it here. Link to introductory articles or documentation.
Motivate the next section.

Demos, exercises, and labs are labelled as such, followed by a colon and a
description of the activity starting with an [imperative
verb](https://en.wikipedia.org/wiki/Imperative_mood).

## Demo: Write a Demo

Demos are demonstrations, and developers should give their full attention to
them. It's a great time for them to take notes about important concepts before
applying them in an exercise.

Demos correspond to the "I do" portion of scaffolding from consultant trainging.

## Exercise: Write an Exercise

During exercises, developers should apply concepts covered in the previous demo.
This is their first chance to generalize concepts introduced. Exercises should
be very focused, and flow natural into a lab.

Exercises correspond to the "We do" portion of scaffolding from consultant
trainging.

## Lab: Write a Lab

During labs, developers get to demonstrate their understanding of concepts from
demos and applied knowledge from exercises. Labs are an opportunity for
developers to build confidence, and also serve as a diagnostic tool for
consultants to evaluate developer understanding.

Labs should be timed explicitly using a timer. When estimating the time it will
take to complete a lab, it is better to overestimate. During labs, consultants
should circle the room and interact with developers, noting patterns and
prompting with hints on how to complete the lab. If developers end early, a
consultant may stop the lab timer. If developers do not finish in time, a
consultant may give more time at her discretion based on current talk pace, the
current estimate for the talk, and the importance of completing the lab while
consultant support is available.

Labs correspond to the "You do" portion of scaffolding from consultant
trainging.

## Additional Resources

-   Any useful links should be included in the talk material where the link is
    first referenced.
-   Additional links for further study or exploration are appropriate in this
    section.
-   Links to important parts of documentation not covered during the talk, or
    tools tangentially used but not part of the focus of the talk, are also
    appropriate.

## [License](LICENSE)

Source code distributed under the MIT license. Text and other assets copyright
General Assembly, Inc., all rights reserved.
