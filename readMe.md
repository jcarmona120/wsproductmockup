# Markup Challenge

By [Jawann Carmona](carmona.jawann@gmail.com)

[jcarmona120.github.io](http://jcarmona120.github.io)

## Instructions

1. Open index.html in browser. 

or 

Optionally, you can run npm run devserver

1. Install dependencies using `npm i`
2. Start the webpack-dev-server using 'npm run devServer'
3. Navigate to app in [browser](http://localhost:8080)
4. Enjoy!

## Discussion

I used HTML, CSS, and React to build this website. 

The HTML features several accesibility attributes. Grid is used to build the main layout of the page while Flexbox is used often to control placement within individual divs and control spacing. CSS :before was used to create the arrows instead of requesting more images from the server. I built out the design first before moving to React. 

React was built in from scratch using the npm packages for React, Babel, and Webpack.

Built with Visual Studio Code with ESLint and Prettier. 

## Requirements

#### Download and extract the attached archive. Refer to the image titled "markup-challenge.jpg” while putting your page together. Feel free to use the images provided, or use your own optimized images. Dazzle us with your HTML / CSS and JavaScript skills by:

###Using the small product images to update the large hero product image.

Each product thumbnail features a data-largeimage attribute to keep track of the link to it's larger version. Each click changes the state of the large image to that of the data attribute.

###Expanding and collapsing the sections on the lower right quadrant of the page.

Each section can expand and collapse. Accordion panels can be added with names passed in as props from the Accordion parent component. 

###Display a modal or message after the Add to Cart button is clicked.

The modal pops up when the Add To Cart and features information about the item. 


## Things I Wish I Did!

- Add onChange feature to disable button if there is no amount in the quantity input
- Used CSSTransitionGroup and styled-components to add more to the user experience. 



