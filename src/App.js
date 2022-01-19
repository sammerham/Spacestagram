import { React, useState, useEffect } from 'react';
import axios from 'axios';
import CardList from './components/CardList'
import NasaContext from './naseContext';
import { Spin } from "antd";
import "antd/dist/antd.css";
import DisplayError from './components/DisplayError';
import env from "react-dotenv";
const KEY = 'localStorage';



/*
 * App
 *
 * 
 * State: 
 *      Data 
 *      updatedData
 *      isLoading
 *      errorMessages
 *        
 * props: 
        None
  * State: 
        None      
 * App ---->> CardList ----> CardItem 
                      -----> Introduction
 */




function App() {
  const [data, setData] = useState([]);
  const [updatedData, setUpdatedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessages, setErrorMessages] = useState('');

// use effect to fetch data from API
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`${env.URL}api_key=${env.api_key}&count=30`);
        setData(d => res.data);
      } catch (err) {
        const errMsg = `${err.response.statusText} Status Code ${err.response.status}`
        setErrorMessages(errMsg);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData()
  }, []);
 


  useEffect(() => {
    const dataLikes = data.map(el => ({...el, like:false}));
    setUpdatedData(d => dataLikes)
  }, []);
  

  //get items from localStorage
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem(KEY));
    setUpdatedData(savedItems);
  }, []);
  
  
  // save items in local storage
  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(updatedData));
  }, [updatedData]);
  

// LIKE FEATURE
  
  // toggle todo comoleted or not completed;
  const toggleLikeCard = title => {

    setUpdatedData(data => data.map(d => {
      if (d.title === title) {
        return {
          ...d,
          like: !d.like,
        }
      }
      return d;
    }));
  };

  
  return (
    <NasaContext.Provider value={{  toggleLikeCard, updatedData }}>  
      <div className="App">
        {
          !isLoading && data.length
          ?
          <CardList />
          :
          <Spin size="large" tip="Loading..."/>
        }
        {errorMessages.length !== 0
          ? <DisplayError errors={errorMessages} />
          :
          null
        }
      </div>
    </NasaContext.Provider>
  );
}

export default App;
