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
___this can be applied to classes, entire pages or just components that___
___make up a page.___

`scripts/routing/router.js` is where I'm going to write the code that will
change the content.

Using `myHandler.home` as the basis for how we are going to finish our `cats`
route we're going to create a `myHandlers.cats`

```js
myHandlers.cats = {
  model: function(params) {
    // define template
    return // return template (+ more work if needed)
  },
  setup: function(page) {
    // do additional page setup here if necessary
    $('#main-content').html(page);
  }
};
```

Since we're following along we can see that we are going to need to create a
template to load. Let's create one named `cats.handlebars` in the handlebars
directory.  And just for now I'm going to populate that with some [Cat Ipsum](http://www.catipsum.com/index.php).

Now that the handlebars template has been created I can define and return my
template in the `myHandlers.cats` object I created in `scripts/routing/router.js`.

Now we can test out everything to make sure it's working.

## Lab: Adding your own route

-   Create "Book" route
-   Create click to change view state
-   Populate page with handlebars template

## Demo: Connecting an API

Now that we are able to serve up a template base on the URL let's now deal
with an API payload.  Once again you do not have to code along but you may if
you find it helps your understanding.

In the last demo and then the lab we went through the steps to create a
functioning route that loads a template.  Let's take a quick look at the `about`
route and see what is happening.

We're going to skip to the part where were dealing with the route handlers in
`scripts/routing/router.js`.

In the `myHandler.about` object we can see that the model contains a callback
reffering to a commented ajax call in `scripts/api/requests.js`.  With some
slight tinkering we can call out to our API and return some data.

In the interest of time I am not going to create a handlebars template to
handle the API payload but you will do something similar in the next lab.

__Best practice is to handle your data in the model and setup your page in__
__setup.__

You can see in `scripts/routing/router.js` in the `myHandlers.about` object that
actually append the template in the `setup` function.

## Lab: Connecting an API

Using the following site for dummy JSON please perform the following steps:

API endpoint: `http://jsonplaceholder.typicode.com/posts`

-   Change "Book" template to handle API payload
-   Change view state so when you click "Book" in the navbar (you have to add
    this yourself) it displays all of the books.

## Bonus Challenge

-   Change the page layout and color-scheme based on what "page" the user is on.

-   On the books "page" only add a place below the navbar but before the
    listing of all books, inside of that add a place to search for a single book based on ID.

-   Impliment the code that will display the result of a user searching for that
    ID and display it in the special space you just created.

## Double Bonus

-   After doing the above, try to do it without having the location hash change.

OR

-  After doing the above, try to do the same but with a nested route, so it
   would looks something like `localhost:8080/book/:id`

## Additional Resources

-   [Router.js](https://github.com/tildeio/router.js/)

## [License](LICENSE)

Source code distributed under the MIT license. Text and other assets copyright
General Assembly, Inc., all rights reserved.
