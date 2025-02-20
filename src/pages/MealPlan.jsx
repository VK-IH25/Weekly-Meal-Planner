import { useState, useEffect } from "react";
import { Table, Checkbox, Container, Title, Input } from "@mantine/core";

function MealPlan(props) {
  if (!props.mealPlan.length) {
    return (
      <Container mt="md">
        <Title order={3}>
          Your meal plan is empty. Add some recipes to get started!
        </Title>
      </Container>
    );
  }

  let shoppingList = {};

  // creating shopping list
  props.mealPlan.forEach((e) => {
    const recipeDetails = props.recipeList.find((r) => r.idMeal === e.recipeId);
    if (recipeDetails) {
      [...Array(20).keys()].forEach((index) => {
        const ingredient = recipeDetails[`strIngredient${index + 1}`].toCapit;
        const measure = recipeDetails[`strMeasure${index + 1}`];
        if (ingredient && measure) {
          if (shoppingList[ingredient]) {
            shoppingList[ingredient].push(measure);
          } else {
            shoppingList[ingredient] = [measure];
          }
        }
      });
    }
  });

  const consolidateMeasurements = (measurements) => {
    return measurements.join(" + ");
  };

  // loading purchased items from local storage
  const [purchasedItems, setPurchasedItems] = useState(
    () => JSON.parse(localStorage.getItem("purchasedItems")) || []
  );

  // saving purchased items to local storage
  useEffect(() => {
    localStorage.setItem("purchasedItems", JSON.stringify(purchasedItems));
  }, [purchasedItems]);

  // toggling purchased items
  const togglePurchased = (ingredient) => {
    setPurchasedItems((prev) => {
      const updatedList = prev.includes(ingredient)
        ? prev.filter((item) => item !== ingredient)
        : [...prev, ingredient];
      return updatedList;
    });
  };

  // search functionality
  const [searchQuery, setSearchQuery] = useState("");

  const filteredShoppingList = Object.entries(shoppingList)
    .sort(([a], [b]) => a.localeCompare(b))
    .filter(([ingredient]) =>
      ingredient.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <Container size={"xl"} my="xl">
      <Title order={3}>Shopping List</Title>
      <Input
        placeholder="Search ingredients..."
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        my="md"
      />
      <Table my={15}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Ingredient</Table.Th>
            <Table.Th>Total Measure</Table.Th>
            <Table.Th>Purchased</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {filteredShoppingList.map(([ingredient, measures], index) => (
            <Table.Tr
              key={index}
              bg={
                purchasedItems.includes(ingredient)
                  ? "var(--mantine-color-green-light)"
                  : undefined
              }
              onClick={() => togglePurchased(ingredient)}
              style={{ cursor: "pointer" }}
            >
              <Table.Td>{ingredient}</Table.Td>
              <Table.Td>{consolidateMeasurements(measures)}</Table.Td>
              <Table.Td>
                <Checkbox
                  color="var(--oxford-blue)"
                  aria-label="Mark as purchased"
                  checked={purchasedItems.includes(ingredient)}
                  onChange={() => togglePurchased(ingredient)}
                  onClick={(e) => e.stopPropagation()}
                />
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Container>
  );
}

export default MealPlan;
