import styled from "styled-components";

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧です</h2>
      <SearchInpu />
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
