import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
//import imageByIndex from './imageByIndex'
import logo from './logo.svg';

const EmblaCarousel = (props) => {
  const { slides, options, updateCurrentJob } = props
  const [emblaRef] = useEmblaCarousel(options)
  

  return (
    <div className="embla" >
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <button className="embla__slide" key={index} onClick={()=>updateCurrentJob(index)}>
              <div className="embla__slide__number">
                <span>{index.company}</span>
                <p style={{lineHeight: '1.5em', height: '3em', paddingLeft:'20px',paddingRight:'20px'}}>{index.role}</p>
              </div>
              <img src={logo} className="App-logo" alt="logo" size=''/>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
