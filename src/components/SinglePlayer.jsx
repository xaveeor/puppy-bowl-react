import React from "react";
import {Routes, Route, Link, useParams } from "react-router-dom"
import {  useState, useEffect } from "react";
const BASE_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT-A/players/"


export default function SinglePlayer() {

    const [player, setplayer] = useState(null);
    const playerid = useParams();
    // const id = player.find(players => players.id === playerid)
    console.log(playerid)

    useEffect(()=>{
        async function fetchData(id){
            const response = await fetch(`${BASE_URL}${id}`);
            const data =await response.json();
            console.log(data)
            setplayer(data.data.player);
           
            console.log(response)
            console.log(id)
            
        }

        fetchData(playerid.playersId);
    },[])
    
    if (!player) {
        return <div>Loading...</div>;
      }
    
      return (
        <> 
            <h1 key={player.id}> {player.name}<br></br> {player.breed} <br></br>
             Status: {player.status} <br></br>
            Team: {player.teamId}
        

           <img src={player.imageUrl} />
     
             </h1>

         
        </>
      );
    }
    
    