import { Table, Container, Title, Text } from "@mantine/core";

function MealPlan(props) {
  if (!props.mealPlan.length) {
    return (
      <Container mt="md">
        <Text>No meals available. Please add a meal to view details.</Text>
      </Container>
    );
  }

  const selectedMeal = function () {
    return props.mealPlan.map((e) => {
      const recipeDetails = props.recipeList.find(
        (r) => r.idMeal === e.recipeId
      );

      if (!recipeDetails) {
        return (
          <div key={e.recipeId}>
            <Title order={4}>Unknown Recipe</Title>
          </div>
        );
      }

      return (
        <Container key={recipeDetails.idMeal} mt="md">
          <Title order={4}>{recipeDetails.strMeal}</Title>
          <Table style={{ textAlign: "left" }} mt={15}>
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(20).keys()].map((index) => {
                const ingredient = recipeDetails[`strIngredient${index + 1}`];
                const measure = recipeDetails[`strMeasure${index + 1}`];
                return ingredient && measure ? (
                  <tr key={index}>
                    <td>{ingredient}</td>
                    <td>{measure}</td>
                  </tr>
                ) : null;
              })}
            </tbody>
          </Table>
        </Container>
      );
    });
  };

  return <>{selectedMeal()}</>;
}

export default MealPlan;
