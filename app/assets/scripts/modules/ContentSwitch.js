import gsap from 'gsap'
class ContentSwitch{
  constructor(page){
    this.page = page
    this.contentList = document.querySelectorAll(`.page__${this.page}--content`)
    this.items = document.querySelectorAll(`.page__${this.page}--pagination-number`)
    this.markers = document.querySelectorAll(`.page__${this.page}--marker`)
    this.currentDestination = 1
    this.pagenationLimit = 1
    this.elementsToAnimate = []
    this.events()
    this.setCurrentDestination(1)
  }
  getAnimationElements(){
    if(this.page == 'crew'){
      this.elementsToAnimate =[
        `.page__${this.page}--image`,
        `.page__${this.page}--text-role`,
        `.page__${this.page}--text-name`,
        `.page__${this.page}--text-bio`,
        `.page__${this.page}--line`
      ]
    }else if(this.page == 'destination'){
      this.elementsToAnimate = [
        `.page__${this.page}--image`,
        `.page__${this.page}--main-title`,
        `.page__${this.page}--description`, 
        `.page__${this.page}--text-distance`, 
        `.page__${this.page}--text-travel`
        ]
    }else if(this.page == 'technology'){
      this.elementsToAnimate = [
        `.page__${this.page}--image`,
        `.page__${this.page}--description`, 
        `.page__${this.page}--name`
      ]
    }
  }
  events(){
    this.items.forEach((item) => {
      const destinationIndex = Number(item.getAttribute(`${this.page}-index`))
      if(destinationIndex){
        item.addEventListener('click', () => {
          gsap.to(this.elementsToAnimate, {clearProps:'opacity, visibility', visibility:'hidden',autoAlpha:0,ease: 'power2.inOut', stagger:.009,opacity:0, onComplete:() => this.setCurrentDestination(destinationIndex)})
        })
      }
    })
  }
  handleActiveDestionation(){
    this.items.forEach((item, i) => {
      this.clearInlineProps(i)
      this.removeActiveClasses(item, `page__${this.page}--pagination-number--active`)
      this.removeActiveClasses(this.markers[i], `page__${this.page}--marker-active`)
      const destinationIndex = Number(item.getAttribute(`${this.page}-index`))
      if(destinationIndex == this.currentDestination){
        this.addActiveClasses(item, `page__${this.page}--pagination-number--active`)
        this.addActiveClasses(this.markers[i], `page__${this.page}--marker-active`)
        this.menuAnimation(i)
      }
    })
  }
  menuAnimation(index){
    if(this.page === 'crew'){
      return gsap.fromTo(this.markers[index], .75,{opacity:.45, ease:'power2.out'},{opacity:1})
    }else if(this.page === 'technology'){
      return gsap.fromTo(this.markers[index], {backgroundColor: 'transparent'}, {ease: 'power2.in', backgroundColor: 'white'})
    }
  }
  addActiveClasses(target, className){
    return target.classList.add(className)
  }
  removeActiveClasses(target, className){
    return target.classList.remove(className)
  }
  clearInlineProps(index){
    if(this.page === 'crew'){
      return gsap.to(this.markers[index], {clearProps: 'all', opacity:.17})
    }else if(this.page === 'technology'){
      return gsap.to(this.markers[index], {clearProps: 'all', ease:'power2.out', backgroundColor: 'transparent'})
    }
  }
  destinationMenuAnimation(destination){
    if(destination > this.currentDestination){
      return gsap.fromTo(`.page__${this.page}--marker`, {ease:'sine.out', scaleX: '0%'},{ease:'sine.out',transformOrigin:'left', scaleX: '100%'})
    }else if(destination < this.currentDestination){
      return gsap.fromTo(`.page__${this.page}--marker`, {ease:'sine.out', scaleX: '0%'},{ease:'sine.out',transformOrigin: 'right', scaleX: '100%'})
    }
  }
  contentAnimation(){
    return gsap.from(this.elementsToAnimate, {duration: .16, autoAlpha:0,ease: 'sine.inOut', stagger:.009,opacity:0})
  }

  setCurrentDestination(destination){
    this.getAnimationElements()
    if(this.page === 'destination')this.destinationMenuAnimation(destination)
    this.currentDestination = destination
    this.handleActiveDestionation()
    const prevRange = (destination - 1) * this.pagenationLimit
    const currRange = destination * this.pagenationLimit
    this.contentList.forEach((item, index)=>{
      item.classList.add(`page__${this.page}--content-hidden`)
      item.classList.remove(`page__${this.page}--content-active`)
      if(index >= prevRange && index < currRange){
        this.contentAnimation()
        item.classList.remove(`page__${this.page}--content--hidden`)
        item.classList.add(`page__${this.page}--content-active`)
        
      }
    })
    
  }
}

export default ContentSwitch