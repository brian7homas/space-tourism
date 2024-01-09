# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/solutions/space-tourism-4xwx3G7bWi). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview
#### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![](./screenshot.jpg)




### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [GSAP](https://gsap.com) - JS library - Animations
- [Barba JS](https://barba.js.org) - React framework) - Page transistions 


### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

I was able to find that I needed to brush up on how to keep footer content stuck to the bottom of the page without having to define heights at different viewports/devices. 

(place code that fixes this here)

After finding the MDN docs direction on how to acheive the desired footer behavior. I was able to get the footer to stick to the bottom of the page with minimal css compensations.

I could spend days adjusting the Barba/GSAP integration. Making the pages smoothly transition was not to difficult when testing on Firefox/Chrome browsers. But on Safari the page indicator appeared to not complete the animation. 

(place example gif here)

I was able to mitigate the animation by changing/adding these lines in the projects HTML, CSS an JS files.

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```


### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

In the future I'd like to add Three JS to each of the planets.


### Useful resources

- [GSAP Cheatsheet](https://www.example.com) - Main resource to add transition/svg animations.
- [Barba Docs](https://www.example.com) - Documentation used to implement page transistions



## Author

- Website - [Brian Thomas](https://www.your-site.com)
- Frontend Mentor - [@joyreacher](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
