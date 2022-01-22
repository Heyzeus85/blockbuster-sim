# blockbuster-sim
Simulates the experience of going to a video store where some titles are available and some are rented out

This app was coded with React, React-Router-DOM, Axios and CSS

I coded this app to practice my React skills as well as my skills of being able to fetch from a third-party API. It was inspired by my nostalgia for old-fashioned video stores, before streaming meant that you could watch whatever you want whenever you wanted.

Features:

1. The app pulls from The Movie Database (https://www.themoviedb.org) API. Specifically, it draws from their 'Trending' movies list, with first-page movies designated as '1-Day Rentals', second-page movies as '2-Day Rentals' and third-page movies as '3-Day Rentals'. It also draws from the 'Recommendations' list for each movie, to recommend similar titles in case a movie on the list has been rented out.
2. Each time the movie lists are rendered, each movie is randomly assigned either to the 'rented' or 'not rented' categories, and rented movies will have a link that takes you to a list of similar titles, while non-rented movies will have a link that allows you to add it to your cart (NB: THE CART IS NOT CURRENTLY FUNCTIONAL; CLICKING ON IT WILL TAKE YOU BACK TO THE HOME PAGE).

Reflections:

Coding this app was an education in and of itself in creating web apps with React. I had to overcome all sorts of challenges involved in fetching from the API and passing the retrieved data to the correct app components. Since this is a multi-page app I also had to learn to use React-Router-DOM to set up routes.

A feature I want to implement in the future is making the Cart functional, so that you can actually see available titles listed in the cart, even though since this is a simulator you obviously wouldn't be able to actually check them out.
