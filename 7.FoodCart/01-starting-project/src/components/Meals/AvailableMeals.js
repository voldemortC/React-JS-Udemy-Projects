import { useCallback, useEffect, useState } from "react";
import './AvailableMeals.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

/*
  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },
  ];
*/
export default function AvailableMeals() {

  const [dummyMeals, setDummyMeals] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState();

  const FetchMeals = useCallback(async () => {
    try{
      setIsLoading(true);
      const response =  await fetch('https://react-meals-7cb9f-default-rtdb.firebaseio.com/meals.json');
    
      if(!response.ok){
        throw new Error('Something went wrong!');
      }

      let data = await response.json();

        let loadedMeals = [];

        for(const key in data){
          loadedMeals.push({
            id : key,
            name : data[key].name,
            description : data[key].description,
            price : data[key].price,
          });
        }

        setDummyMeals(loadedMeals);
      } catch(error) {
        setError(error.message);
      }
      setIsLoading(false);
    }, []);


  useEffect(()=>{
    FetchMeals();
  }, [FetchMeals]);


  const MealsList =dummyMeals.length > 0 && dummyMeals.map(
      meal => <MealItem 
      key = {meal.id} 
      name = {meal.name} 
      desc = {meal.description} 
      price = {meal.price} 
      id = {meal.id}/>
    );

    let content;

    if(isLoading){
      content = <p className="MealsLoading">Loading...</p>;
    } else if(error ) {
      content = <p className = "MealsError">{error}</p>
    } else if(dummyMeals.length > 0) {
      content = <ul>{MealsList}</ul>
    } else {
      content = <p className = "MealsError">No meals found</p>;
    }
  

  return (
    <Card className="meals">
      {content}
    </Card>
  );
}
