import {useEffect, useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from '../pages/Index';
import Show from '../pages/Show';

function Main(props) {
  //null because the data has not yet been fetched from the API
  const [people, setPeople] = useState([]);

  const API_URL = 'http://localhost:3001/people/';
 //does not need a person object as a parameter
 //bc it is simply making an HTTP GET request to the server to retrieve data 
  const getPeople = async()=>{
    try {
      //fetch is like get request to the URL
      const response = await fetch( API_URL);
      const data = await response.json();
      setPeople(data);
    } catch(error){
      console.error(error);
    }
  };
  // const getPeople = async () => {
    //   const response = await fetch(API_URL);
    //   console.log(response)
    //   const data = await response.json();
    //   setPeople(data);
    // }
    
    //requires a person object as a parameter 
    //bc it needs to send that person data to the server as the body of the HTTP POST request. 
    //The server will then use that data to create a new person record in the database.
const createPeople = async(person)=>{
    try{
      await fetch( API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/json',
        },
        //When call JSON.stringify(), you are calling the stringify method on the JSON object.
        // convert the JavaScript object into a JSON string
        //because the server can only receive and interpret data in string format.
        body: JSON.stringify(person),
      });
      getPeople();
    } catch(error){
      console.error(error);
    };
  };

  useEffect(()=>{
    getPeople();
  }, []);

  return (
    <main>
      <Routes>
      <Route path="/" element={<Index people={people} createPeople={createPeople}/>} />
        <Route path="/people/:id" element={<Show />} />
      </Routes>
    </main>
  );
}

export default Main;