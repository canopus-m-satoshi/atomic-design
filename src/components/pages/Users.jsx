import { SearchInput } from '../molecules/SearchInput';

import styled from 'styled-components';

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧です</h2>
      <SearchInput />
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
