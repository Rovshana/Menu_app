import "./App.css";
import { RecipieCard } from "./Components/RecipieCard";

import { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipies, setRecipies] = useState([]);
  const [recipie, setRecipie] = useState([]);
  // const inRef = useRef();

  // const handleSubmit = ()=>{
   
  //   console.log( inRef.current.value)

  // }

  // function for serching meal
  const searchDishes = async () => {
    setIsLoading(true);
    const url = apiUrl + query;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.meals[0])
    setRecipies(data.meals);
    setIsLoading(false);
  };
  useEffect(() => {
    searchDishes();
  }, []);
  return (
    <div className="App">
      <h1>Menu App</h1>
      {/* <input ref={inRef}/>
      <button onClick={handleSubmit}>search</button> */}
      <div>

      </div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent:"space-around" }}>
        {recipies?.map((item, index) => (
          <RecipieCard key={`res-${index}`} {...item} />
        ))}
      </div>

    
    </div>
  );
}

export default App;
