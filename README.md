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

## Follow Along: Investigating the Router

-   Go through home and about routes, and how they work
-   Create a Cats Route

## Lab: Adding your own route

-   Create "Book" route
-   Populate page with handlebars template

## Demo: Connecting an API

-   Connect Cats template to route
-   Change template to handle API payload

## Lab: Connecting an API

-   Connect Books template to route
-   Change template to handle API payload

## Additional Resources

-   Stuff
-   Goes
-   Here

## [License](LICENSE)

Source code distributed under the MIT license. Text and other assets copyright
General Assembly, Inc., all rights reserved.
