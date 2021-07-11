import { useHistory } from 'react-router-dom';

import { SecondryButton } from '../atoms/button/SecondryButton';

import styled from 'styled-components';

export const Top = () => {
  const history = useHistory();
  const onClickAdmin = () =>
    history.push({ pathname: '/users', state: { isAdmin: true } });

  const onClickGeneral = () =>
    history.push({ pathname: '/users', state: { isAdmin: false } });

  return (
    <SContainer>
      <h2>TOPです</h2>
      <SecondryButton onClick={onClickAdmin}>管理者ユーザー</SecondryButton>
      <br />
      <br />
      <SecondryButton onClick={onClickGeneral}>一般ユーザー</SecondryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
