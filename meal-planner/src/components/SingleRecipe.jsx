import axios from 'axios'
import { useEffect, useState } from 'react'
import { Container, Card, Image, Title, Text, Badge, Button, Group, BackgroundImage, Center, Grid } from '@mantine/core'
import { useParams } from 'react-router-dom'

function SingleRecipe() {
    const [recipeList, setRecipeList] = useState([])
    const recipeId = "0"

    useEffect(() => {
        axios.get("https://weekly-meal-plan-4de4b-default-rtdb.europe-west1.firebasedatabase.app/meals.json")
            .then(r => {
                setRecipeList(Object.values(r.data));
                console.log(r.data)
            })
            .catch(e => console.log(e))
    }, [])

    const recipeObj = recipeList[recipeId]





    return (
        <>
            <Container>
            <BackgroundImage
                    src={recipeObj.strMealThumb}
                    radius="sm"
                    h={250}
                >
                    <Center p="md">
                        <Text c="white">
                            BackgroundImage component can be used to add any content on image. It is useful for hero
                            headers and other similar sections
                        </Text>
                    </Center>
                </BackgroundImage>
                <Group mb="30px"> 
                    <Title>{recipeObj.strMeal}</Title>
                    <Badge color="pink">{recipeObj.strArea}</Badge>
                    <Badge color="pink">{recipeObj.strCategory}</Badge>
                </Group>
                <Divider my="md" />
                <Title order={4} mb="20px">Ingredients:</Title>
                <Grid>
                    <Grid.Col span={6}><Text tt="Capitalize">{recipeObj.strIngredient1} - {recipeObj.strMeasure1}</Text></Grid.Col>
                    <Grid.Col span={6}><Text tt="Capitalize">{recipeObj.strIngredient2} - {recipeObj.strMeasure2}</Text></Grid.Col>
                    <Grid.Col span={6}><Text tt="Capitalize">{recipeObj.strIngredient3} - {recipeObj.strMeasure3}</Text></Grid.Col>
                    <Grid.Col span={6}><Text tt="Capitalize">{recipeObj.strIngredient4} - {recipeObj.strMeasure4}</Text></Grid.Col>
                    <Grid.Col span={6}><Text tt="Capitalize">{recipeObj.strIngredient5} - {recipeObj.strMeasure5}</Text></Grid.Col>
                    <Grid.Col span={6}><Text tt="Capitalize">{recipeObj.strIngredient6} - {recipeObj.strMeasure6}</Text></Grid.Col>
                    <Grid.Col span={6}><Text tt="Capitalize">{recipeObj.strIngredient7} - {recipeObj.strMeasure7}</Text></Grid.Col>
                    <Grid.Col span={6}><Text tt="Capitalize">{recipeObj.strIngredient8} - {recipeObj.strMeasure8}</Text></Grid.Col>
                    <Grid.Col span={6}><Text tt="Capitalize">{recipeObj.strIngredient9} - {recipeObj.strMeasure9}</Text></Grid.Col>
                    <Grid.Col span={6}><Text tt="Capitalize">{recipeObj.strIngredient10} - {recipeObj.strMeasure10}</Text></Grid.Col>
                    <Grid.Col span={6}><Text tt="Capitalize">{recipeObj.strIngredient11} - {recipeObj.strMeasure11}</Text></Grid.Col>
                    <Grid.Col span={6}><Text tt="Capitalize">{recipeObj.strIngredient12} - {recipeObj.strMeasure12}</Text></Grid.Col>
                    <Grid.Col span={6}><Text tt="Capitalize">{recipeObj.strIngredient13} - {recipeObj.strMeasure13}</Text></Grid.Col>
                    <Grid.Col span={6}><Text tt="Capitalize">{recipeObj.strIngredient14} - {recipeObj.strMeasure14}</Text></Grid.Col>
                </Grid>
                <Title order={4} mb="20px">Instructions:</Title>
                <Text>{recipeObj.strInstructions}</Text>

                <Button mt={"20px"}>Go Back</Button>
            </Container>
        </>

    )

}

export default SingleRecipe