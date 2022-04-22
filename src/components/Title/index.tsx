import React from "react";
import { Container } from "./styles";

type Props = {
  title: string;
};

export default function Title({ title }: Props) {
  return <Container>{title}</Container>;
}
