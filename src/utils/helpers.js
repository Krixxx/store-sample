export const formatPrice = (number) => {
  // International number format function, to format price from cents to euro and cents
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
  }).format(number / 100);
};

// this function helps us to retrieve unique values for each data type. We use it to get unique values for categories, companies and colors.
export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);

  // it type is colors, then we need to flatten the received data into array.
  if (type === 'colors') {
    unique = unique.flat();
  }

  // we add "all" to the first item and then the rest of the items
  return ['all', ...new Set(unique)];
};
