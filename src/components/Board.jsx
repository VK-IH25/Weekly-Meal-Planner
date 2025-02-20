import { Center, SimpleGrid, Container, Image, Flex } from '@mantine/core';

import { Link } from 'react-router-dom';
import img10 from '../assets/img/10.png';
import img8 from '../assets/img/8.png';
import img9 from '../assets/img/9.png';
import img11 from '../assets/img/11.png';

function Board() {




  return (


    <Container>
      <Center mt={100}>
        <Flex direction="column" align="center">
          {/* First row with three images */}
          <Container>
          <Flex gap={4} justify="center" align="center">
            <Link to="recipe-list"><Image radius="md" src={img10} alt="Image 10" h={100} /></Link>

            <Link to="about"> <Image className="mainimg" radius="md" src={img8} alt="Image 8" w={150} />
            </Link>

            <Link to="mealplan"><Image radius="md" src={img9} alt="Image 9" h={100} />
            </Link>
          </Flex>
          </Container>

          {/* Second row with image 11 */}
          <Link to="planner">      <Image radius="md" src={img11} alt="Image 11" w={100} mt={4} />
          </Link>
        </Flex>
      </Center>
    </Container>







  )


}

export default Board