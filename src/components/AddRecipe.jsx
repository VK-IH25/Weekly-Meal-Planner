import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextInput,
  Textarea,
  Select,
  Title,
  Button,
  Container,
  Card,
  Stack,
} from "@mantine/core";

function AddRecipe(props) {
  const [strMeal, setStrMeal] = useState("");
  const [strCategory, setStrCategory] = useState("");
  const [strArea, setStrArea] = useState("");
  const [strInstructions, setStrInstructions] = useState("");
  const [strMealThumb, setStrMealThumb] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [measures, setMeasures] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      strMeal: strMeal,
      strCategory: strCategory,
      strArea: strArea,
      strInstructions: strInstructions,
      strMealThumb: strMealThumb,
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
        newRecipe[`strIngredient${index + 1}`] = item.ingredient;
        newRecipe[`strMeasure${index + 1}`] = item.measure;
      }
    });

    props.addRecipe(newRecipe);

    navigate("/recipe-list");
  };

  return (
    <Container size="md" my="xl">
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Title order={3} mb="md" align="center">
          Add New Recipe
        </Title>
        <form onSubmit={handleSubmit}>
          <Stack>
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
              onChange={(event) =>
                setStrInstructions(event.currentTarget.value)
              }
            />
            <TextInput
              label="Image URL"
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
            <Button type="submit">Add Recipe</Button>
          </Stack>
        </form>
      </Card>
    </Container>
  );
}

export default AddRecipe;
