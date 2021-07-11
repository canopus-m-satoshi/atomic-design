import { Router } from './router/Router';
import { RecoilRoot } from 'recoil';

import { UserProvider } from './providers/UserProvider';

import './styles.css';

const user = {
  name: 'satoshi',
  image: 'https://source.unsplash.com/joI8DqUy034',
  email: '123@gmail.com',
  phone: '090-1234-5678',
  company: { name: 'test company' },
  website: 'https://google.com',
};

export default function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <Router />
      </UserProvider>
    </RecoilRoot>
  );
}
