import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  TextInput,
  Textarea,
  Select,
  Title,
  Button,
  Card,
  Center,
} from "@mantine/core";
import axios from "axios";

function EditRecipe(props) {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipeObj = props.recipeList.find((e) => e.idMeal == id);

  const [strMeal, setStrMeal] = useState("");
  const [strCategory, setStrCategory] = useState("");
  const [strArea, setStrArea] = useState("");
  const [strInstructions, setStrInstructions] = useState("");
  const [strMealThumb, setStrMealThumb] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [measures, setMeasures] = useState("");

  useEffect(() => {
    if (recipeObj) {
      setStrMeal(recipeObj.strMeal);
      setStrCategory(recipeObj.strCategory);
      setStrArea(recipeObj.strArea);
      setStrInstructions(recipeObj.strInstructions);
      setStrMealThumb(recipeObj.strMealThumb);
      const ingredientList = [];
      const measureList = [];
      for (let i = 1; i <= 20; i++) {
        if (recipeObj[`strIngredient${i}`]) {
          ingredientList.push(recipeObj[`strIngredient${i}`]);
          measureList.push(recipeObj[`strMeasure${i}`]);
        }
      }
      setIngredients(ingredientList.join(", "));
      setMeasures(measureList.join(", "));
    }
  }, [recipeObj]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedRecipe = {
      strMeal,
      strCategory,
      strArea,
      strInstructions,
      strMealThumb,
    };

    const ingredientList = ingredients
      .split(",")
      .map((ingredient) => ingredient.trim());
    const measureList = measures.split(",").map((measure) => measure.trim());

    const ingredientWithMeasures = ingredientList.map((ingredient, index) => ({
      ingredient,
      measure: measureList[index],
    }));

    ingredientWithMeasures.forEach((item, index) => {
      if (item.ingredient) {
        updatedRecipe[`strIngredient${index + 1}`] = item.ingredient;
        updatedRecipe[`strMeasure${index + 1}`] = item.measure;
      }
    });

    axios
      .put(
        `https://weekly-meal-plan-4de4b-default-rtdb.europe-west1.firebasedatabase.app/meals/${id}.json`,
        updatedRecipe
      )
      .then(() => {
        const updatedRecipeList = props.recipeList.map((recipe) =>
          recipe.idMeal === id ? { ...recipe, ...updatedRecipe } : recipe
        );
        props.setRecipeList(updatedRecipeList);

        navigate(`/recipe/${id}`);
      })
      .catch((error) => {
        console.error("Error updating recipe:", error);
      });
  };

  return (
    <Center>
      <Card shadow="sm" padding="lg" radius="md" withBorder mt="md" w={800}>
        <Title order={3} mb="20px">
          Edit Recipe
        </Title>
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Recipe Title"
            placeholder="i.e. Margherita Pizza"
            value={strMeal}
            onChange={(event) => setStrMeal(event.currentTarget.value)}
          />
          <Select
            label="Category"
            placeholder="Pick value"
            data={[
              "Beef",
              "Chicken",
              "Dessert",
              "Miscellaneous",
              "Pork",
              "Pasta",
              "Starter",
              "Vegetarian",
              "Vegan",
            ]}
            value={strCategory}
            onChange={(value) => setStrCategory(value)}
          />
          <TextInput
            label="Cuisine"
            placeholder="i.e. Italian"
            value={strArea}
            onChange={(event) => setStrArea(event.currentTarget.value)}
          />
          <Textarea
            label="Instructions"
            placeholder="How to make this dish?"
            value={strInstructions}
            onChange={(event) => setStrInstructions(event.currentTarget.value)}
          />
          <TextInput
            label="Image"
            description="Upload a good photo of your dish"
            placeholder="https://www.photos.com/pizza.png"
            value={strMealThumb}
            onChange={(event) => setStrMealThumb(event.currentTarget.value)}
          />
          <TextInput
            label="Ingredients (comma separated)"
            placeholder="i.e. Cheese, Tomato, Dough"
            value={ingredients}
            onChange={(event) => setIngredients(event.currentTarget.value)}
          />
          <TextInput
            label="Measures (comma separated)"
            placeholder="i.e. 1 cup, 2 tomatoes, 1 dough ball"
            value={measures}
            onChange={(event) => setMeasures(event.currentTarget.value)}
          />
          <Button type="submit" mt="md">
            Save Changes
          </Button>
        </form>
      </Card>
    </Center>
  );
}

export default EditRecipe;
