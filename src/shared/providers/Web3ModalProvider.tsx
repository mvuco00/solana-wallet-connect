'use client';

import { ReactNode } from 'react';

import { solana, solanaDevnet, solanaTestnet } from '@web3modal/solana/chains';
import { createWeb3Modal, defaultSolanaConfig } from '@web3modal/solana/react';

interface IProps {
  children: ReactNode;
}

const chains = [solana, solanaTestnet, solanaDevnet];

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID!!;

const metadata = {
  name: 'SOLANA',
  description: 'Solana',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

const solanaConfig = defaultSolanaConfig({
  metadata,
  chains,
  projectId,
});

createWeb3Modal({
  solanaConfig,
  chains,
  projectId,
  allowUnsupportedChain: true,
});

const Web3ModalProvider = ({ children }: IProps) => {
  return <div>{children}</div>;
};

export default Web3ModalProvider;
