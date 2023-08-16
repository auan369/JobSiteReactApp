import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
//import imageByIndex from './imageByIndex'
import logo from './logos/thales.jpg';
import { FaLocationDot, FaStar } from "react-icons/fa6";

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
                <div class="card-header border-0">
                  <img src={require("./logos/"+index.logo)} className="App-logo" alt="logo" width={"50"} height={"auto"}/>
                </div>
                <div class="card-block px-1 flex-column" style={{flex:7, marginTop:10, marginBottom:10}}>
                    <div class="card-title" style={{fontSize:10, textAlign: 'left',  margin:0}}>
                      <p style={{display:"inline-block", margin:0}}>{index.company}</p>
                      <div class="px-3" style={{display:"inline-block",justifyContent: "center", margin:0}}>
                        <span class="px-1">{index.stars}</span>
                        <FaStar size={"0.8em"} style={{verticalAlign: 'baseline'}}/>
                      </div>
                    </div>
                    <p style={{fontSize:15, textAlign: 'left',  margin:0}} class="card-text">{index.role}</p>

                    <div style={{fontSize:10, textAlign: 'left', margin:0}}>
                      <p style={{display:"inline-block", margin:0}}>{index.time}</p>
                      <p class="px-2" style={{display:"inline-block",margin:0}}>
                        <FaLocationDot size={"0.9em"} style={{verticalAlign:"baseline"}}/>
                        {index.location}
                      </p>
                    </div>

                    <p style={{fontSize:10, textAlign: 'left'}} class="card-text">
                      {index.salary}
                      <span class="badge bg-secondary" style={{marginLeft:5, justifySelf:'right'}}>{index.salaryTag}</span>
                    </p>
                    
                    
                </div>
                <div class="card-block px-1" style={{flex:2, alignSelf:'start', justifySelf:"self-end", marginTop:10, marginBottom:10}}>
                  <h5 style={{textAlign:'right', fontSize:"1rem"}}><span class="badge bg-success" style={{marginRight:1, justifySelf:'right', fontWeight:"normal"}}>{index.mainTag}</span></h5>
                  
                </div>
                <div class="w-100"></div>
                <div class="card-footer w-100 text-muted overflow-hidden">
                  <h5 style={{justifyContent:"left", textAlign:'left', fontSize:"1rem", display:'flex',flexWrap:"nowrap", overflow:"clip"}}>{index.tag.map((index) => (<span class="badge bg-secondary" style={{marginRight:1,fontWeight:"normal", fontFamily:"monospace"}}>{index}</span>))}</h5>
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
