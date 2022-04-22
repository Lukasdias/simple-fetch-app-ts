import styled from "styled-components";
import { TiPlus, TiMail, TiPhone, TiCamera, TiUser } from "react-icons/ti";

export const Container = styled.div`
  position: relative;
  flex: 1;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px;
  border: 2px solid lightskyblue;
  border-radius: 15px;
  //padding: 0.9rem;

  h1 {
    font-size: 1.2rem;
    color: white;
    font-weight: 600;
    margin: 0;
  }

  h2 {
    font-size: 0.7rem;
    color: white;
    font-weight: 600;
    margin: 0;
  }

  span {
    font-size: 0.5rem;
    color: #cecece;
    font-weight: 600;
    margin: 0;
  }

  img {
    margin: 0 auto;
    border-radius: 50%;
    height: 70px;
    margin-bottom: 0.3rem;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: auto;
  border-radius: 12px 12px 0 0;
  background-color: lightskyblue;
  margin-bottom: 16px;
  padding: 1rem 0;
`;

export const InfoContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.2rem 1rem;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
`;

const iconCommonStyles = `
  font-size: .9rem;
  color: blueviolet;
`;

export const CameraIcon = styled(TiCamera)`
  ${iconCommonStyles}
`;

export const UserIcon = styled(TiUser)`
  ${iconCommonStyles}
`;

export const PhoneIcon = styled(TiPhone)`
  ${iconCommonStyles}
`;

export const EmailIcon = styled(TiMail)`
  ${iconCommonStyles}
`;

export const PlusIcon = styled(TiPlus)`
  ${iconCommonStyles}
`;
