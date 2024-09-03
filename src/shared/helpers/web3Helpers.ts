export const shortenAddress = (address: string) => {
  const firstPart = address?.slice(0, 6);
  const lastPart = address?.slice(address.length - 4, address.length);
  return `${firstPart}...${lastPart}`;
};
