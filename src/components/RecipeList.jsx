import { SimpleGrid, Card, Overlay, Text, Group, Title, Autocomplete, Input } from "@mantine/core";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";


function RecipeList({ recipeList }) {
  const [query, setQuery] = useState("");



  //search

  const filteredList = recipeList.filter((recipe) =>
    Object.values(recipe).some(
      (value) =>
        typeof value === "string" && value.toLowerCase().includes(query.toLowerCase())
    )
  );


  const list = filteredList.map((e) => {
    return (
      <Card
        key={e.idMeal}
        shadow="sm"
        padding="lg"
        radius="md"
        h="300px"
        withBorder
        style={{
          backgroundImage: `url(${e.strMealThumb})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          position: "relative",
          color: "white",
          textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)",
        }}
      >
        <Overlay
          color="#000"
          backgroundOpacity={0.35}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            zIndex: 1,
            borderRadius: "inherit",
          }}
        />

        <Link
          to={`/recipe/${e.idMeal}`}
          style={{
            color: "inherit",
            textDecoration: "none",
            position: "relative",
            zIndex: 2,
          }}
        >
          <Group justifyContent="space-between" align="left" mt="md" mb="xs">
            <Title order={3} color="#fff">
              {e.strMeal}
            </Title>
          </Group>
        </Link>
      </Card>
    );
  });

  return (
    <>

      <Input
        placeholder="Search"
        value={query}
        mb="20px"
        rightSection={<FaSearch />}
        onChange={(event) => setQuery(event.target.value)}
      />
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 5 }} spacing="lg" verticalSpacing="lg">
        {list}
      </SimpleGrid>
    </>
  );

}

export default RecipeList;
