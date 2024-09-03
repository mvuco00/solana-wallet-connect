import ConnectWalletButton from '@/components/ConnectWalletButton';

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-between gap-10 p-24">
      <p>Hello SOL</p>
      <ConnectWalletButton />
    </main>
  );
};

export default Home;
