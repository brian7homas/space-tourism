import gsap from 'gsap'
class ActiveNav{
  constructor(){
    this.marker = document.querySelector('.header__nav-item-marker--active')
  }
  enter(current, next){
    let moveIndicatorFromLeft = () => gsap.fromTo(this.marker, {autoAlpha: 0, visibility:'visible', opacity: 0, scaleX:'0%'}, {ease:'sine.out', autoAlpha: 1, transformOrigin: 'left', visibility:'visible', opacity: 1, scaleX:'100%'})
    let moveIndicatorFromRight = () => gsap.fromTo(this.marker, {autoAlpha: 0, visibility:'visible', opacity: 0, scaleX:'0%'}, {ease:'sine.out', autoAlpha: 1, transformOrigin: 'right', visibility:'visible', opacity: 1, scaleX:'100%'})
    let pageReload = () => gsap.fromTo(this.marker, {autoAlpha: 0, visibility:'hidden', opacity: 0, scaleX: '0%' }, {duration: 1.2, ease:'sine.out', autoAlpha: 1, transformOrigin: 'center', scaleX: '100%', visibility:'visible', opacity: 1, })
    switch (true) {
      case !current:
        return pageReload()
      case next === 'home':
        return moveIndicatorFromRight()
      case next === 'technology':
        return moveIndicatorFromLeft()
      case next === 'destination' && current === 'home':
        return moveIndicatorFromLeft()
      case next === 'destination' && (current === 'crew' || current === 'technology'):
        return moveIndicatorFromRight()
      case next === 'crew' && (current === 'destination' || current === 'home'):
        return moveIndicatorFromLeft()
      case next === 'crew' && current === 'technology':
        return moveIndicatorFromRight()
      default:
        break
    }
  }
  leave(current, next){
    let exitLeft = () => gsap.fromTo(this.marker, { autoAlpha: 1, visibility:'visible', opacity: 1, scaleX:'100%'}, { duration: .2, ease:'sine.in', autoAlpha: 0, transformOrigin: 'left', visibility:'hidden', opacity: 0,scaleX:'0%' })
    let exitRight = () => gsap.fromTo(this.marker, { autoAlpha: 1, visibility:'visible', opacity: 1, scaleX:'100%'},{ duration: .2, ease:'sine.in', autoAlpha: 0, transformOrigin: 'right', visibility:'hidden', opacity: 0, scaleX:'0%' })
    switch (true) {
      case current === 'home':
        return exitRight()
      case current === 'technology':
          return exitLeft()
      case current === 'destination' && next === 'home':
          return exitLeft()
      case current === 'destination' && next != 'home':
          return exitRight()
      case current === 'crew' && next == 'technology':
          return exitRight()
      case current === 'crew' && next != 'technology':
          return exitLeft()
      default:
        break
    }
  }
}
export default ActiveNav