import { createContext, useContext, useState } from 'react';

const SortingContext = createContext('');

export const useSorting = () => useContext(SortingContext);

const SortingProvider = ({ children }) => {
  const [sorting, changeSorting] = useState('name');

  const sortList = (list) => {
    switch (sorting) {
      case 'yom':
        return sortByYear(list);
      case 'price-up':
        return sortByPrice(list);
      case 'price-down':
        return sortByPrice(list);
      default:
        return sortByName(list);
    }
  }

  const checkSorting = (a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;

      return 0;
  }

  const sortByName = (list) => {
    return list.sort((a, b) => {
      const nameA = a.vehicleBrand;
      const nameB = b.vehicleBrand;

      return checkSorting(nameA, nameB);
    });
  };

  const sortByYear = (list) => {
    return list.sort((a, b) => {
      const yearA = a.yearOfManufacture; 
      const yearB = b.yearOfManufacture;

      return checkSorting(yearB, yearA);
    })
  }

  const sortByPrice = (list) => {
    if (sorting === 'price-down') {
      return list.sort((a, b) => {
        const priceA = a.vehiclePrice;
        const priceB = b.vehiclePrice;

        return checkSorting(priceB, priceA);
      })
    }
    if (sorting === 'price-up') {
      return list.sort((a, b) => {
        const priceA = a.vehiclePrice;
        const priceB = b.vehiclePrice;

        return checkSorting(priceA, priceB);
      })
    }
  }

  return (
    <SortingContext.Provider value={{ changeSorting, sortList }}>
      {children}
    </SortingContext.Provider>
  );
};

export default SortingProvider;
