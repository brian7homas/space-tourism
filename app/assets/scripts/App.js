import '../styles/styles.css'
import 'lazysizes'
import barba from '@barba/core'
import gsap from 'gsap'
import React from 'react'
import ReactDOM from 'react-dom'
import Header from './modules/Header';
import Footer from './modules/Footer';
import MobileMenu from './modules/MobileMenu';
import ActiveNav from './modules/ActiveNav'
import DestinationContent from './modules/DestinationContent'
import ContentSwitch from './modules/ContentSwitch'
import CrewContent from './modules/CrewContent'
import TechContent from './modules/TechContent'
import ExploreBtn from './modules/ExploreHover'

barba.init({
  transitions: [{
    name: 'opacity-transition',
    beforeLeave(data){
      gsap.set('body', {overflow:'hidden'})
      return gsap.to('#bg-image', .95,{ opacity: 0, ease:"power2.out", transform: 'scale(1.05)'})
    },
    leave(data) {
      return gsap.to(data.current.container, .25,{autoAlpha:0, opacity: 0, display:'none', ease: "power2.in"});
    },
    enter(data) {
      return gsap.fromTo(data.next.container, .25, {autoAlpha:0, visibility:'hidden', opacity: 0, ease: 'power2.in'}, {autoAlpha:1, visibility:'visible', opacity: 1, ease: 'power2.in'});
    },
    afterEnter(){
      gsap.set('body', {overflow:'auto'})
      return gsap.fromTo('#bg-image', {opacity: 0, ease:"power2.in", transform:'scale(1.05)', autoAlpha:0},{autoAlpha:1,duration: 1.2, opacity:1, ease:"power2.out",transform:'scale(1)'}, '+=.25');
    }
  }],
  views:[
    // HOME
    {
      namespace:'home',
      afterLeave(data){
        new ActiveNav().leave(data.current.namespace, data.next.namespace)
      },
      afterEnter(data) {
        ReactDOM.render(<Header active={data.next.namespace}/>, document.querySelector('#header'))
        // Explore button needs to have its own component and mouse enter event listener to work properly
        ReactDOM.render(<ExploreBtn />, document.querySelector('.page__home-container--button'))
        new MobileMenu()
        new ActiveNav().enter(data.current.namespace, data.next.namespace)
        const tl = gsap.timeline({paused:true})
          tl.to('.page__home-main-cta--hover', .5,{
            ease: 'linear', 
            opacity:.50,
            })
        document.querySelector('.page__home-main-cta').addEventListener('mouseenter', ()=>{
          tl.play()
        })
        document.querySelector('.page__home-main-cta').addEventListener('mouseleave', ()=>{
          console.log('pause')
          tl.pause()
          tl.reverse()
        })
      }
    },
    
    // DESTINATION
    {
      namespace:'destination',
      afterLeave(data){
        new ActiveNav().leave(data.current.namespace, data.next.namespace)
      },
      
      afterEnter(data) {
        ReactDOM.render(<DestinationContent />, document.querySelector('#destination-content-container'))
        new ContentSwitch(data.next.namespace)
        ReactDOM.render(<Header active={data.next.namespace}/>, document.querySelector('#header'))
        new MobileMenu()
        new ActiveNav().enter(data.current.namespace, data.next.namespace)
      },
    },
    // CREW
    {
      namespace:'crew',
      afterLeave(data){
        new ActiveNav().leave(data.current.namespace, data.next.namespace)
      },
      afterEnter(data) {
        ReactDOM.render(<CrewContent />, document.querySelector('#crew-content-container'))
        new ContentSwitch(data.next.namespace)
        ReactDOM.render(<Header active={data.next.namespace}/>, document.querySelector('#header'))
        new MobileMenu()
        new ActiveNav().enter(data.current.namespace, data.next.namespace)
      },
    },
    // Technology
    {
      namespace:'technology',
      afterLeave(data){
        new ActiveNav().leave(data.current.namespace, data.next.namespace)
      },
      afterEnter(data) {
        ReactDOM.render(<TechContent />, document.querySelector('#tech-content-container'))
        new ContentSwitch(data.next.namespace)
        ReactDOM.render(<Header active={data.next.namespace}/>, document.querySelector('#header'))
        new MobileMenu()
        new ActiveNav().enter(data.current.namespace, data.next.namespace)
      },
    }
  ]
});


ReactDOM.render(<Footer/>, document.querySelector('#footer'))


if (module.hot) {
  module.hot.accept()
}