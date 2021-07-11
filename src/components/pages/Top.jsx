import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { SecondryButton } from '../atoms/button/SecondryButton';
import { UserContext } from '../../providers/UserProvider';

import styled from 'styled-components';

export const Top = () => {
  const history = useHistory(UserContext);
  const { setUserInfo } = useContext(UserContext);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push('/users');
  };

  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push('/users');
  };

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
