import React from 'react';

const Header = ({ active }) => {
  let fileName = active.charAt(0).toUpperCase() + active.slice(1)
  return (
    <>
    <picture>
        <source srcSet={`./assets/images/${fileName.toLowerCase()}/background-${fileName.toLowerCase()}-desktop.jpg 768w`} media="(min-width:769px)"/>
        <source srcSet={`./assets/images/${fileName.toLowerCase()}/background-${fileName.toLowerCase()}-tablet.jpg 768w`} media="(min-width:565px)"/>
        <img srcSet={`./assets/images/${fileName.toLowerCase()}/background-${fileName.toLowerCase()}-mobile.jpg 375w`} alt="background-small" id="bg-image" />
      </picture>  
    <section className='header'>
      <div className='header__container-outer'>
        <div className='header__container-inner'>
          <section className='header__section-left'>
            <img className='header__image' src="assets/images/shared/logo.svg" alt="logo" />
            
          </section>
          <section className='header__section-right'>
            <svg version="1.1" className="header__divider-line" x="0px" y="0px"  >
              <path className="path2" strokeWidth="2.3" d="M0 0 l1120 0" />
            </svg>
            {/* nav to show for non mobile screens */}
            <nav className='header__nav-outer'>
              <ul className='header__nav-inner'>
                <li className='header__nav-item'>
                  <span className='header__nav-item-order'>00</span> 
                  <a href='index.html' className='header__nav-item-text'>HOME</a>
                  <span className={`${active === 'home' ? 'header__nav-item-marker--active' : ''} header__nav-item-marker`}></span>
                </li>
                <li className='header__nav-item'>
                  <span className='header__nav-item-order'>01</span> 
                  <a href='destination.html' className='header__nav-item-text'>DESTINATION</a>
                  <span className={`${active == 'destination' ? 'header__nav-item-marker--active' : ''} header__nav-item-marker`}></span>
                </li>
                <li className='header__nav-item'>
                  <span className='header__nav-item-order'>02</span> 
                  <a href='crew.html' className='header__nav-item-text'>CREW</a>
                  <span className={`${active == 'crew' ? 'header__nav-item-marker--active' : ''} header__nav-item-marker`}></span>
                  </li>
                <li className='header__nav-item'>
                  <span className='header__nav-item-order'>03</span> 
                  <a href='technology.html' className='header__nav-item-text'>TECHNOLOGY</a>
                  <span className={`${active == 'technology' ? 'header__nav-item-marker--active' : ''} header__nav-item-marker`}></span>
                </li>
              </ul>
            </nav>
            {/* menu expander */}
            <div className='header__mobile-expand-container' >
                <span className='header__mobile--top'></span>
                <span className='header__mobile--mid'></span>
                <span className='header__mobile--bottom'></span>
              </div>
              {/* nav to show for mobile screens */}
              <nav>
                <ul className='header__mobile'>
                  <li className='header__mobile-nav-item'>
                    <span className='header__nav-item-order'>00</span> 
                    <a href="index.html" className='header__nav-item-text'>HOME</a>
                    <span className={`${active == 'home' ? 'header__nav-item-marker--active' : ''} header__nav-item-marker`}></span>
                  </li>
                  <li className='header__mobile-nav-item'>
                    <span className='header__nav-item-order'>01</span> 
                    <a href='destination.html' className='header__nav-item-text'>DESTINATION</a>
                    <span className={`${active == 'destination' ? 'header__nav-item-marker--active' : ''} header__nav-item-marker`}></span>
                  </li>
                  <li className='header__mobile-nav-item'>
                    <span className='header__nav-item-order'>02</span> 
                    <a href='crew.html' className='header__nav-item-text'>CREW</a>
                    <span className={`${active == 'crew' ? 'header__nav-item-marker--active' : ''} header__nav-item-marker`}></span>
                    </li>
                  <li className='header__mobile-nav-item'>
                    <span className='header__nav-item-order'>03</span> 
                    <a href='technology.html' className='header__nav-item-text'>TECHNOLOGY</a>
                    <span className={`${active == 'technology' ? 'header__nav-item-marker--active' : ''} header__nav-item-marker`}></span>
                  </li>
                </ul>
              </nav>
          </section>
        </div>
      </div>
    </section>
    </>
  );
};

export default Header