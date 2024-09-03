import { ReactNode } from 'react';

import Web3ModalProvider from '@/shared/providers/Web3ModalProvider';

interface IProps {
  children: ReactNode;
}

const App = ({ children }: IProps) => {
  return <Web3ModalProvider>{children}</Web3ModalProvider>;
};

export default App;
