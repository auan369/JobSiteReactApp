import React from 'react'
import { useState, useEffect } from 'react';
//import { useEffect } from 'react'
//import ReactDOM from 'react-dom/client'
import EmblaCarousel from './Carousel'
//import useEmblaCarousel from 'embla-carousel-react'
import data from './data.json';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


const OPTIONS = { axis: 'y',dragFree: true};
//const SLIDE_COUNT = 10
//const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
const SLIDES = data.jobs;
//style={{borderWidth:  3, borderColor:'springgreen', borderStyle :'solid'}}


function App() {
  const [currentJob,setCurrentJob] = useState({});
  useEffect(() => {
    // Update the document title using the browser API
    console.log(currentJob.role);
  });


  const updateCurrentJob = (currentJobObj) => {
    setCurrentJob(currentJobObj);
  };
  
  //<img src={require("./logos/logo.svg").default} className="App-logo" alt="logo" width={"50"} height={"auto"}/>
  

  return (
    
    <div className="App">
      <header className="App-header">
        
        <div class="row">
          <p class="col-12" >
            NodeFlair.jobs
          </p>
          
        </div>
        
        
      </header>
      
      <body className="App-body" style={{backgroundColor:"#e1e1e1"}}>
        
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <EmblaCarousel slides={SLIDES} options={OPTIONS} updateCurrentJob={updateCurrentJob}/>
            </div>
            <div class="col-sm">
              
              <p class="row">{currentJob.role}</p>
              <p class="row">{currentJob.company}</p>
              
            </div>
          </div>
        </div>
        
      </body>
    </div>
  );
}

export default App;
