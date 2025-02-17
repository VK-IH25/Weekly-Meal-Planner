import axios from 'axios'
import { useEffect, useState } from 'react'
import { Card, Image, Text, Badge, Button, Group, Title } from '@mantine/core'

function RecipeCards(props) {


    const list = props.recipeList.map((e) => {
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
              <Title order={5}>Pick your recipes</Title>
            {list}
        </div>
    )

}

export default RecipeCards