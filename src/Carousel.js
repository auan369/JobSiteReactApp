import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
//import imageByIndex from './imageByIndex'
import logo from './logo.svg';
/*
<div className="embla__slide__number">
  <span>{index.company}</span>
  <p style={{lineHeight: '1.5em', height: '3em', paddingLeft:'20px',paddingRight:'20px'}}>{index.role}</p>
</div>
<img src={logo} className="App-logo" alt="logo" size=''/>
*/
const EmblaCarousel = (props) => {
  const { slides, options, updateCurrentJob } = props
  const [emblaRef] = useEmblaCarousel(options)
  

  return (
    <div className="embla" >
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <button className="embla__slide" key={index} onClick={()=>updateCurrentJob(index)}>
              
              <div class="card flex-row flex-wrap" style={{display:"flex"}}>
                <div class="card-header border-0" style={{flex:0.2}}>
                  <img src={logo} className="App-logo" alt="logo" size=''/>
                </div>
                <div class="card-block px-1 flex-column" style={{flex:0.5}}>
                    <p class="card-title" style={{fontSize:20, textAlign: 'left'}}>{index.company}</p>
                    <p style={{fontSize:10, textAlign: 'left'}} class="card-text">{index.role}</p>
                    
                </div>
                <div class="card-block px-1" style={{flex:1, alignSelf:'start', justifySelf:"self-end"}}>
                  <h5 style={{textAlign:'right'}}><span class="badge bg-success" style={{marginRight:1, justifySelf:'right'}}>{index.mainTag}</span></h5>
                  
                </div>
                <div class="w-100"></div>
                <div class="card-footer w-100 text-muted">
                  <h5 style={{justifyContent:"left"}}>{index.tag.map((index) => (<span class="badge bg-secondary" style={{marginRight:1}}>{index}</span>))}</h5>
                </div>
              </div>


            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
