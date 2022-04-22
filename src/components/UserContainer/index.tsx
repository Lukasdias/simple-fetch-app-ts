import React from "react";
import { Container } from "./styles";

type Props = {
  children: JSX.Element[];
};

export default function UserContainer({ children }: Props) {
  return <Container>{children}</Container>;
}
