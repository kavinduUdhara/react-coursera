import { useMealsListContext } from "../providers/MealsProvider";

const MealsList = () => {
    const meals = useMealsListContext();
    console.log("hello");
    console.log(meals[0]);

    return(
        <div>
            <h1>Meals List using contex API</h1>
            {meals.map((meal, index) => {
                <h2 key={index}>{meal}</h2>
            })}
        </div>
    )
}

export default MealsList;