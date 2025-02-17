import axios from 'axios'
import { useEffect, useState } from 'react'
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core'

function RecipeCards() {
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
            <div key={e.idMeal} draggable={true} >
                <Card shadow="sm" padding="lg" radius="md" withBorder mt="md" w={150}>
                    
                    <Group justify="space-between" >
                        <Text fw={500} size='xs'>{e.strMeal}</Text>
                    </Group>
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

export default RecipeCards