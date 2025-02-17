import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { Link } from "react-router-dom";

function RecipeList(props) {
  const list = props.recipeList.map((e) => {
    return (
      <Card
        key={e.idMeal}
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        mt="15px"
      >
        <Card.Section>
          <Image src={e.strMealThumb} height={160} alt={e.strMeal} />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>{e.strMeal}</Text>
        </Group>
        <Link to={`/recipe/${e.idMeal}`}>
          <Button color="blue" fullWidth mt="md" radius="md">
            More
          </Button>
        </Link>
      </Card>
    );
  });

  return <div>{list}</div>;
}

export default RecipeList;
