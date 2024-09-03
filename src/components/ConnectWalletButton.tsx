'use client';

import { shortenAddress } from '@/shared/helpers/web3Helpers';

import { useDisconnect, useWeb3ModalAccount } from '@web3modal/solana/react';

const ConnectWalletButton = () => {
  const { address } = useWeb3ModalAccount();
  const { disconnect } = useDisconnect();

  return address ? (
    <button
      className="rounded-full bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
      onClick={disconnect}
    >
      {shortenAddress(address)}
    </button>
  ) : (
    <w3m-button />
  );
};

export default ConnectWalletButton;
