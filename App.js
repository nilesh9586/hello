import React, { useEffect, useState } from 'react';

import './index.css';
import './App.css';
import Header from './componats/Header';
import Recipe from './componats/Recipe';

import axios from 'axios';

function App() 
{
  

  const[search ,setSearch]=useState("chicken");
  const [recipe,SetRecipe]=useState([]);

  
  const APP_ID="706f08ff";
  const APP_KEY="258e01d42d19bf8e4d4811f6af5b84de";

  useEffect (()=>{
    getRecipe();
  },[]);

  const getRecipe = async ()=>{
    const result =await axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);

   
   SetRecipe(result.data.hits);  
  }; 

    const onInputChange =(e)=>{
       setSearch(e.target.value);
    }
   const onSearchClick = ()=>{
      getRecipe();
   }
    

  return (
    <div className="App">
    <Header search={search} 
    onInputChange={onInputChange}
    onSearchClick={onSearchClick }

    />
    <div className="container">
    <Recipe recipe={recipe}/>

    </div>
      
    </div>
  );
}

export default App;
