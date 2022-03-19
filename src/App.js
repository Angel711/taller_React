import './App.css';
import Pokemon from './Prueba.jsx';
import React, {useEffect, useState} from 'react';
import { Button } from 'react-bootstrap';
let pokemonLista = [
  {
      "abilities":[
          {
              "name":"limber"
          },
          {
              "name":"imposter"
          }
      ],
      "base_experience":101,
      "height":3,
      "id":132,
      "name":"ditto",
      "weight": 40,
      "types":[
          {
              "name":"normal"
          }
      ]
  },
  {
      "abilities":[
          {
              "name":"overgrow"
          },
          {
              "name":"chlorophyll"
          }
      ],
      "base_experience":64,
      "height":7,
      "id":132,
      "name":"bulbasaur",
      "weight": 69,
      "types":[
          {
              "name":"grass"
          },
          {
              "name":"poison"
          }
      ]
  },
  {
      "abilities":[
          {
              "name":"blaze"
          },
          {
              "name":"solar-power"
          }
      ],
      "base_experience":62,
      "height":6,
      "id":4,
      "name":"charmander",
      "weight": 85,
      "types":[
          {
              "name":"fire"
          }
      ]
  },
  {
      "abilities":[
          {
              "name":"run-away"
          },
          {
              "name":"guts"
          },
    {
              "name":"hustle"
          }
      ],
      "base_experience":62,
      "height":7,
      "id":20,
      "name":"raticate",
      "weight": 185,
      "types":[
          {
              "name":"normal"
          }
      ]
  },
{
      "abilities":[
          {
              "name":"shield-dust"
          },
          {
              "name":"run-away"
          }
      ],
      "base_experience":39,
      "height":3,
      "id":10,
      "name":"caterpie",
      "weight": 29,
      "types":[
          {
              "name":"bug"
          }
      ]
  },
{
      "abilities":[
          {
              "name":"swarm"
          },
          {
              "name":"sniper"
          }
      ],
      "base_experience":178,
      "height":10,
      "id":15,
      "name":"beedrill",
      "weight": 295,
      "types":[
          {
              "name":"bug"
          },
    {
              "name":"poison"
          }
      ]
  }

]

function App() {
  const [pokemon, setPokemon] = useState([pokemonLista]);
  return(
    <>
    <h1>Pokemon</h1>
      {
        pokemon.map((pokemon,index) => (
          <p key={index}>{pokemon}</p>
        ))
      }
      <button onClick={()=>{
        let nuevoPokemon = prompt("Ingrese el nombre del pokemon");
        
      }}>Agregar Pokemon</button> 
    </>
  )
}

export default App;
