export const formatAddress = (address) => {
  return String(address)
    .slice(0, 6)
    .concat("...")
    .concat(String(address).slice(-3));
};
