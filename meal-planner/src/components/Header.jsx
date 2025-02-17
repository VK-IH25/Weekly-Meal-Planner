import React from "react";

import { Container, Text, Group, Burger } from "@mantine/core";

const Header = (props) => {

  return (
    <header>
      
      <Group h="100%" px="md">
          <Burger opened={props.mobileOpened} onClick={props.toggleMobile} hiddenFrom="sm" size="sm" />
          <Burger opened={props.desktopOpened} onClick={props.toggleDesktop} visibleFrom="sm" size="sm" />
         
        </Group>
        <Container>
        <Text size="lg">Weekly Meal Planner</Text>
      </Container>
    </header>
  );
};

export default Header;
