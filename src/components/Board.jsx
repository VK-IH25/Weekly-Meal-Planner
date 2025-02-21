import { Center, Container, Image, Flex, Tooltip } from "@mantine/core";

import { Link } from "react-router-dom";
import img10 from "../assets/img/10.png";
import img8 from "../assets/img/8.png";
import img9 from "../assets/img/9.png";
import img11 from "../assets/img/11.png";

function Board() {
  return (
    <Container>
      <Center mt={100}>
        <Flex direction="column" align="center">
          {/* First row with three images */}
          <Container>
            <Flex gap={4} justify="center" align="center">
              <Link to="recipe-list">
                <Tooltip label="Recipes List" position="top">
                  <Image radius="md" src={img10} alt="Recipes List" h={100} />
                </Tooltip>
              </Link>
              <Link to="about">
                {" "}
                <Tooltip label="About Us" position="top">
                  <Image
                    className="mainimg"
                    radius="md"
                    src={img8}
                    alt="About Us"
                    w={150}
                  />
                </Tooltip>
              </Link>

              <Link to="mealplan">
                {" "}
                <Tooltip label="Shopping List" position="top">
                  <Image
                    radius="md"
                    src={img9}
                    alt="Shopping List"
                    title="Shopping List"
                    h={100}
                  />
                </Tooltip>
              </Link>
            </Flex>
          </Container>

          {/* Second row with image 11 */}
          <Link to="planner">
            {" "}
            <Tooltip label="Meal Plan" position="bottom">
              <Image
                radius="md"
                src={img11}
                alt="Meal Plan"
                title="Meal Plan"
                w={100}
                mt={4}
              />
            </Tooltip>
          </Link>
        </Flex>
      </Center>
    </Container>
  );
}

export default Board;
