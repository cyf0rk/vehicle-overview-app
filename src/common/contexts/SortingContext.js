import { createContext, useContext, useEffect, useState } from 'react';
import {useWindowDimensions} from '../hooks/useWindowDimensions';

const SortingContext = createContext('');
const SortingStyleContext = createContext('');

export const useSorting = () => useContext(SortingContext);
export const useSortingStyle = () => useContext(SortingStyleContext);

const SortingProvider = ({ children }) => {
  const [sorting, changeSorting] = useState('name');
  const [listStyle, changeListStyle] = useState('list');
  const { width } = useWindowDimensions();

  useEffect(() => {
    width < 1160 && changeListStyle('grid');
  },[width])

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
        <SortingStyleContext.Provider value={{ listStyle, changeListStyle }}>
            {children}
        </SortingStyleContext.Provider>
    </SortingContext.Provider>
  );
};

export default SortingProvider;
