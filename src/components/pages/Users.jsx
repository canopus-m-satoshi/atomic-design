import { SearchInput } from '../molecules/SearchInput';
import { UserCard } from '../organisms/user/UserCard';

import styled from 'styled-components';

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `Satoshi ${val + 1}`,
    image: 'https://source.unsplash.com/0G_NlJ0shFw',
    email: '123@gmail.com',
    phone: '090-1234-5678',
    company: { name: 'test company' },
    website: 'https://google.com',
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧です</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={users.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
