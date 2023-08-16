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
    
    <div class="App">
      <header class="App-header">
        
        <div class="row">
          <p class="col-12" >
            NodeFlair.jobs
          </p>
          
        </div>
        
        
      </header>
      
      <body class="App-body">
        
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-7">
              <EmblaCarousel slides={SLIDES} options={OPTIONS} updateCurrentJob={updateCurrentJob}/>
            </div>
            <div class="col-md-5 d-none d-md-block">
              
              <p class="row" style={{padding:20}}>{currentJob.role}</p>
              
              
            </div>
          </div>
        </div>
        
      </body>
    </div>
  );
}

export default App;
