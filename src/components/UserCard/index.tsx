import React from "react";
import {
  Container,
  ImageContainer,
  InfoContainer,
  CameraIcon,
  EmailIcon,
  PhoneIcon,
  PlusIcon,
  UserIcon,
  TextContainer,
} from "./styles";
type Props = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  image: string;
};

export default function UserCard({ ...props }: Props) {
  return (
    <Container>
      <ImageContainer>
        <img src={props.image} alt={`${props.firstName} `} />
      </ImageContainer>
      <InfoContainer>
        <TextContainer>
          <h1>
            {props.firstName} {props.lastName}{" "}
            <sup>
              <UserIcon />
            </sup>
          </h1>
        </TextContainer>
      </InfoContainer>
      <InfoContainer>
        <h2>
          {props.email}
          <sup>
            <EmailIcon />
          </sup>
        </h2>
      </InfoContainer>
      <InfoContainer>
        <span>
          {props.phone}{" "}
          <sup>
            <PhoneIcon />
          </sup>
        </span>
      </InfoContainer>
    </Container>
  );
}
