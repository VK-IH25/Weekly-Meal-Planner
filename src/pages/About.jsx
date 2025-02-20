import React from "react";
import {
  Container,
  Title,
  Image,
  Text,
  Grid,
  Card,
  Anchor,
  Center,
} from "@mantine/core";
import VictorImage from "../assets/img/profile/victor.jpeg";
import KamranImage from "../assets/img/profile/kamran.png";
import logodark from "../assets/img/logo-dark.png";

function About() {
  const devMembers = [
    {
      name: "Victor Abussafi",
      image: VictorImage,
      github: "https://github.com/abussafilx",
      linkedin: "https://www.linkedin.com/in/victorabussafi/",
    },
    {
      name: "Kamran Ali",
      image: KamranImage,
      github: "https://github.com/Kamran-frontend",
      linkedin: "https://www.linkedin.com/in/kamranalifrmrbw/",
    },
  ];

  return (
    <Container size="md" my="xl">
      <Center>
        <Title order={1} mb="md">
          Weekly Meal Planner Project
        </Title>
      </Center>

      <Center>
        <Image src={logodark} w={250} mt="md" />
      </Center>

      <Text align="center" mt="md" mb="xl">
        <i>
          This React.js project was developed by{" "}
          <strong>{devMembers[0].name}</strong> and{" "}
          <strong>{devMembers[1].name}</strong> as part of their learning
          journey at Ironhack.
        </i>
      </Text>

      <Title order={2} align="center" mb="lg">
        Meet the Devs
      </Title>

      <Grid gutter="xl" justify="center">
        {devMembers.map((member, index) => (
          <Grid.Col span={{ base: 12, sm: 4 }} key={index}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Center>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={120}
                  height={120}
                  style={{ borderRadius: "50%" }}
                  mt="lg"
                />
              </Center>
              <Text align="center" weight={500} mt="md">
                {member.name}
              </Text>
              <Text align="center" mt="sm">
                <Anchor href={member.github} target="_blank" mr="sm">
                  GitHub
                </Anchor>
                |
                <Anchor href={member.linkedin} target="_blank" ml="sm">
                  LinkedIn
                </Anchor>
              </Text>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}

export default About;
