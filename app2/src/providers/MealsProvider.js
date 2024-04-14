import React from "react";

const todayMeals = ['Baked Beans', 'Baked Sweet Potatoes', 'Baked Potatoes'];
const MealContex = React.createContext();

const MealsProvider = ({children}) => {
    const [Meals, setMealsList] = React.useState(todayMeals);
    return(
        <MealContex.Provider value={Meals}>
            {children}
        </MealContex.Provider>
    );
}

export const useMealsListContext = () => React.useContext(MealContex);
export default MealsProvider;