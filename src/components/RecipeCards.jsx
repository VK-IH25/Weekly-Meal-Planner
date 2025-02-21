import { Card, Text, Group, Title } from "@mantine/core";

function RecipeCards(props) {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("text", e.target.id);
  };
  const handleDropCard = (e) => {
    e.preventDefault();
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
  };

  const list = props.recipeList.map((e) => {
    return (
      <div
        key={e.idMeal}
        id={e.idMeal}
        draggable={true}
        onDragStart={handleDragStart}
        onDrop={handleDropCard}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
      >
        <Card shadow="sm" padding="lg" radius="md" withBorder mt="md" w={""}>
          <Group justify="space-between">
            <Text fw={500} size="xs">
              {e.strMeal}
            </Text>
          </Group>
        </Card>
      </div>
    );
  });

  return (
    <div>
      <Title order={5} c={"var(--white)"}>
        Pick your recipes
      </Title>
      {list}
    </div>
  );
}

export default RecipeCards;
