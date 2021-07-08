import styled from "styled-components";

export const UserIconWithName = (props) => {
  const { image, name } = props;

  return (
    <SContainer>
      <SImg height={160} width={160} src={image} alt={name} />
      <SName>{name}</SName>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.06em;
  margin: 0;
  color: #40514e;
  text-transform: capitalize;
`;