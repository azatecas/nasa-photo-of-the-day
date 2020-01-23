import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Head from './components/Head';
import Image from './components/Image';

//api key
const apiKey = process.env.REACT_APP_API_KEY;

function App() {
  const [nasa, setNasa] = useState([]);



  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then(res => {
        // console.log(res);
        setNasa(res.data);
      })
      .catch(error => {
        console.log('Error on App.js', error);
      })
  },[]);

  return (
    <div className="App">
      <Head data={nasa}/>
      <Image data={nasa}/>
    </div>
  );
}

export default App;
