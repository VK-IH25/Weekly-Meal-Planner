import { Center, SimpleGrid } from '@mantine/core';
import { Container, Image, Flex } from '@mantine/core';
import { Link } from 'react-router';

function Board() {




  return (


    <Container>
      <Center mt={100}>
        <Flex direction="column" align="center">
          {/* First row with three images */}
          <Flex gap={4} justify="center" align="center">
            <Link to="recipe-list"><Image radius="md" src="src/assets/img/10.png" alt="Image 10" h={100} /></Link>

            <Link to="about">        <Image radius="md" src="src/assets/img/8.png" alt="Image 8" w={200} />
            </Link>

            <Link to="mealplan">        <Image radius="md" src="src/assets/img/9.png" alt="Image 9" h={100} />
            </Link>
          </Flex>

          {/* Second row with image 11 */}
          <Link to="planner">      <Image radius="md" src="src/assets/img/11.png" alt="Image 11" w={100} mt={4} />
          </Link>
        </Flex>
      </Center>
    </Container>







  )


}

export default Board