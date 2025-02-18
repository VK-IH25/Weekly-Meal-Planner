import {
  Container,
  Card,
  Title,
  Text,
  Badge,
  Button,
  Group,
  BackgroundImage,
  Center,
  Grid,
  Divider,
} from "@mantine/core";
import axios from "axios";

import { useParams, useNavigate } from "react-router-dom";

function SingleRecipe(props) {
  const { id } = useParams();
  const navigate = useNavigate();


  const recipeObj = props.recipeList.find((e) => e.idMeal == id);

  const handleDelete = async () => {
    const response = await axios.get(
      "https://weekly-meal-plan-4de4b-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
    );
    const data = response.data;
    const recipeKey = Object.keys(data).find(
      (key) => data[key].idMeal == id
    );

    props.deleteRecipe(recipeKey)
  };



  if (!recipeObj) {
    return (
      <Container>
        <Title>No Recipe Found</Title>
        <Text>The recipe you are looking for does not exist.</Text>
      </Container>
    );
  }

  return (
    <Container>
      <Card shadow="sm" padding="lg" radius="md" withBorder mt="md" w={800}>
        <BackgroundImage src={recipeObj.strMealThumb} radius="sm" h={250}>
          <Center p="md">
            <Text c="white" align="center">
              {recipeObj.strMeal} - A delicious {recipeObj.strCategory} dish
              from {recipeObj.strArea}
            </Text>
          </Center>
        </BackgroundImage>

        <Group mt="15px" mb="10px" position="apart">
          <Title>{recipeObj.strMeal}</Title>
          <Group>
            <Badge color="pink">{recipeObj.strArea}</Badge>
            <Badge color="pink">{recipeObj.strCategory}</Badge>
          </Group>
        </Group>

        <Divider my="md" />

        <Title order={4} mb="20px">
          Ingredients:
        </Title>
        <Grid>
          {[...Array(20).keys()].map((index) => {
            const ingredient = recipeObj[`strIngredient${index + 1}`];
            const measure = recipeObj[`strMeasure${index + 1}`];
            return ingredient && measure ? (
              <Grid.Col span={6} key={index}>
                <Text tt="capitalize">
                  {ingredient} - {measure}
                </Text>
              </Grid.Col>
            ) : null;
          })}
        </Grid>

        <Title order={4} mt="20px" mb="20px">
          Instructions:
        </Title>
        <Text>{recipeObj.strInstructions}</Text>

        <Button bg={"red"} mt="20px" onClick={() => handleDelete()}>Delete</Button>

        <Button mt={"20px"} onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </Card>
    </Container>
  );
}

export default SingleRecipe;
