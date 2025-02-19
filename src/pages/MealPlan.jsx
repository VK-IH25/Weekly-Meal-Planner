function MealPlan (props){

   

const selectedMeal = function () {
    let name = props.mealPlan.map((e)=> {
        const recipeDetails = props.recipeList.find((r) => r.idMeal === e.recipeId);
        return recipeDetails ? recipeDetails.strMeal : "Unknown recipe";
    })



    return <div>{name.join(", ")}</div>
}



return (
    <>
    {selectedMeal()}
    </>

)

}

export default MealPlan