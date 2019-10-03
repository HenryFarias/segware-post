import React from "react";

import { Container, Content } from "./styles";
import Menu from "../../../components/Menu";

export default function Default({ children }) {
  return (
    <Container>
      <Menu />
      <Content>{children}</Content>
    </Container>
  );
}
