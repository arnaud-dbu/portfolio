import events from './events'
import animations from './animations'
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

// define a function that sets min-height of my-element to window.innerHeight:

const setHeight = () => {
  document.querySelector('.hero').style.minHeight = window.innerHeight + "px"
};

// define mobile screen size:

let deviceWidth = window.matchMedia("(max-width: 1024px)");

if (deviceWidth.matches) {
// set an event listener that detects when innerHeight changes:

  window.addEventListener("resize", setHeight);

// call the function once to set initial height:

  setHeight();
}





