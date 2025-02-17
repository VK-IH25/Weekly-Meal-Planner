import axios from 'axios'
import { useEffect, useState } from 'react'
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core'

function RecipeList() {
    const [recipeList, setRecipeList] = useState([])

    useEffect(() => {
        axios.get("https://weekly-meal-plan-4de4b-default-rtdb.europe-west1.firebasedatabase.app/meals.json")
            .then(r => {
                setRecipeList(Object.values(r.data));
                console.log(r.data)
            })
            .catch(e => console.log(e))
    }, [])

    const list = recipeList.map((e) => {
        return (
            <div key={e.idMeal}>
                <Card shadow="sm" padding="lg" radius="md" withBorder mt="15px">
                    <Card.Section>
                        <Image
                            src={e.strMealThumb}
                            height={160}
                            alt={e.strMeal}
                        />
                        
                    </Card.Section>

                    <Group justify="space-between" mt="md" mb="xs">
                        <Text fw={500}>{e.strMeal}</Text>
                    </Group>

                    <Button color="blue" fullWidth mt="md" radius="md">
                        More
                    </Button>
                </Card>
            </div>

        )
    })


    return (
        <div>
            {list}
        </div>
    )

}

export default RecipeList