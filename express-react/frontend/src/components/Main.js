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
        headers: { //header is an obj that is passed as arg to the fetch fn
          'Content-Type': 'Application/json',
        },
        //When call JSON.stringify(), you are calling the stringify method on the JSON object.
        // convert the JavaScript object into a JSON string
        //because the server can only receive and interpret data in string format.
        body: JSON.stringify(person),
      });
      //called after the API call is complete
      //update the list of ppl displayed on the page to include the newly added person
      getPeople();
    } catch(error){
      console.error(error);
    };
  };
//built-in React Hook that run a fn after every render of component
//1st arg: fn you want to run, 2nd arg: an array of dependencies. 
//The fn will be re-run if any of the dependencies change
  useEffect(()=>{
    getPeople();
  }, []);

  return (
    <main>
      <Routes>
      <Route path="/" element={<Index people={people} createPeople={createPeople}/>} />
        <Route path="/people/:id" element={<Show people={people}/>} />
      </Routes>
    </main>
  );
}

export default Main;