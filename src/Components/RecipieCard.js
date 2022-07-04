import React from "react";

export function RecipieCard(props) {
  console.log(props);
  const { strMealThumb, strMeal, strCategory,idMeal } = props;
  return (
    <div style={{margin:"10px" }}>
      <div className="card" style={{ width: "18rem" }}>
        <img src={strMealThumb} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Title: {strMeal}</h5>
          <p className="card-text">Category: {strCategory}</p>
          <a href={`https://www.themealdb.com/meal.php?c=${idMeal}`} className="btn btn-warning">
            learn about ingridients
          </a>
        </div>
      </div>
    </div>
  );
}
