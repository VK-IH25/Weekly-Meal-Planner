import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextInput, Textarea, Select, Title, Button } from "@mantine/core";

function AddRecipe(props) {
  const [strMeal, setStrMeal] = useState("");
  const [strCategory, setStrCategory] = useState("");
  const [strArea, setStrArea] = useState("");
  const [strInstructions, setStrInstructions] = useState("");
  const [strMealThumb, setStrMealThumb] = useState("");
  const [strIngredient1, setIngredient1] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      strMeal: strMeal,
      strCategory: strCategory,
      strArea: strArea,
      strInstructions: strInstructions,
      strMealThumb: strMealThumb,
      strIngredient1: strIngredient1,
    };

    props.addRecipe(newRecipe);

    navigate("/recipe-list");
  };

  return (
    <>
      <Title order={3} mb="20px">
        Add new recipe
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
          label="Ingredients"
          placeholder="i.e. Cheese"
          value={strIngredient1}
          onChange={(event) => setIngredient1(event.currentTarget.value)}
        />
        <Button type="submit" mt="md">
          Add Recipe
        </Button>
      </form>
    </>
  );
}

export default AddRecipe;
