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

Router.js is a lightweight router that is used in ember. We have included the
router in this template for your use.

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

## Lab: Exploring Router.js

-   Take some time groups of two or three and explore all of the files and
    folders in the scripts directory.

-   After looking through the files run `grunt serve` in the root of the
    directory to fire up your grunt server and navigate to `localhost:8080`. If
    there were parts of the code you didn't understand use `debugger` statements
    to clarify your understanding.

-   Be ready to answer questions to on what is happening with the router.  Also
    where you would write various pieces of your code.

## Demo: Investigating the Router

Please watch as I create a cats route.  You can follow along on your machine
if it helps but you will be creating your own route shortly, so feel free to
watch.

### Creating a Route (for Cats)

I'm going to start by adding a button to my navbar so I can easily access my
route then I'm going to attach a click event to it.  Creating a button isn't
necessary for the route but it makes it easy to test and makes for a more
understandable demo.

In my HTML I'm going to add the following code to my navbar:

```html
<li><a class="cats">Cats</a></li>
```

Cool, so now I have a line item, let's register an event. In
`scrips/routing/handlers.js` I'm going to add the code, there should only be
one line that you are unfamilar with:

```js
$('.cats').on('click', function(e){
  e.preventDefault();
  router.handleURL('/cats');
});
```

If we put a debugger inside of our click handler we can see that the click is
being registered.  Inside of our click handler we tell the router to handle the
URL for `/cats` but we have yet to tell our router to map the `/cats` route.

Building on the code that is already in our `index.js`. Let's add to the
router.map function in the same pattern as the other routes.

Using the same pattern I'm going to match the cats route:

```js
match('/cats').to('cats');
```

Now when we click the `cats` button in our navbar we can see the URL change.

The URL changes, which is all well and good but we're not quite there yet. I
want to change the content that appears in my main div, which in this case is
is a div with an ID of `main-content`.

___Please note that you do not need to limit yourself to only changing divs___
___this can be applied to classes, entired pages or just components that___
___make up a page.___

`scripts/routing/router.js` is where I'm going to write the code that will
change the content.

## Lab: Adding your own route

-   Create "Book" route
-   Create click to change view state
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
