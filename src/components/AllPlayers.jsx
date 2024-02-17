import React from "react";
import {Routes, Route, Link } from "react-router-dom"
import {  useState, useEffect } from "react";
const BASE_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT-A/players"


export default function AllPlayers() {
  
  const[filterText, setFilterText] = useState("");
  const[players, setplayer] = useState(null);
    useEffect(()=>{
        async function fetchData(){
            const response = await fetch(BASE_URL);
            const data =await response.json();
            console.log(data.data.players)
            setplayer(data.data.players);
        }
        fetchData();
    },[])
    
    if (!players) {
        return <div>Loading...</div>;
      }
      const filteredPlayers = players.filter(players => players.name.toLowerCase().includes(filterText.toLowerCase()))
      return (
        <>
        <div>
          <input value={filterText} onChange={(e) => setFilterText (e.target.value)} />
          </div>

    
          {filteredPlayers.map(players => (
            <h1 key={players.id}> Dog Name:{players.name} 

           <img src={players.imageUrl} />
  
            
            <div className="button"> 
            <Link to={`${players.id}`}>{players.name}</Link>
            <div className="delete"> 
            <
      

      
        
        
            
             </div>
            
             </h1>
          
              
    

    

          ))}
        </>
      );
    };

  