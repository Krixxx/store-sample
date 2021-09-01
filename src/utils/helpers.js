export const formatPrice = (number) => {
  // International number format function, to format price from cents to euro and cents
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
  }).format(number / 100);
};

export const getUniqueValues = () => {};
