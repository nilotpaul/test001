import React, { useState } from 'react'
import "./Homepage.css"
import {useNavigate} from "react-router-dom";
// import { Button } from '@mui/material';


function Homepage() {

 
  const navigate = useNavigate();
  const goToArray = () => {
    navigate("/Array");
  };

  const navigate2 = useNavigate();
  const goToString = () => {
    navigate2("/String");
  };

  const navigate3 = useNavigate();
  const goToMatrix = () => {
    navigate3("/Matrix");
  };

  const navigate4 = useNavigate();
  const goToSearchsort = () => {
    navigate4("/Searchsort");
  };

  const navigate5 = useNavigate();
  const goToStackqueue = () => {
    navigate5("/Stackqueue");
  };

  const navigate6 = useNavigate();
  const goToLinkedlist = () => {
    navigate6("/Linkedlist");
  };

  const [cards] = useState([
    {
      title: "Array",
      Text: "Total Questions: 40"
      ,Text1: <button className='buttonn' onClick={goToArray} >Start Now</button>
    },
    {
      title: "String",
      Text: "Total Questions: 40"
      ,Text1: <button className='buttonn' onClick={goToString}>Start Now</button> 
    },
    {
      title: "Search & Sort",
      Text: "Total Questions: 40"
      ,Text1: <button className='buttonn' onClick={goToSearchsort}>Start Now</button>
    },
    {
      title: "Stack & Queue",
      Text: "Total Questions: 40"
      ,Text1: <button className='buttonn' onClick={goToStackqueue}>Start Now</button>
    },
    {
      title: "Linked List",
      Text: "Total Questions: 40"
      ,Text1: <button className='buttonn' onClick={goToLinkedlist}>Start Now</button>   
    },
    {
      title: "Matrix",
      Text: "Total Questions: 40"
      ,Text1: <button className='buttonn' onClick={goToMatrix}>Start Now</button>
    },
  ])

  return (
    <div className='Homepagee'>
      <section>
        <div className='container'>
           <h1>Crack Your Way Through DSA!
           </h1>
           <h2>Start Solving Now</h2>
           <div className='cards'>
            {
              cards.map((card, i) => (

            <div key={i} className='card'>
           <h2>{card.title}</h2>
           <p>
            {card.Text}
           </p>
           {card.Text1}
           </div>
            ))
          }
      </div>
      </div> 
      </section>
    </div>
  );

}
export default Homepage
