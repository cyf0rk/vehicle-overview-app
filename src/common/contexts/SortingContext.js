import { createContext, useContext, useState } from 'react';

const SortingContext = createContext('');

export const useSorting = () => useContext(SortingContext);

const SortingProvider = ({ children }) => {
  const [sorting, changeSorting] = useState('name');

  const sortByName = (list) => {
    return list.sort((a, b) => {
      const nameA = a.vehicleBrand;
      const nameB = b.vehicleBrand;

      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;

      return 0;
    });
  };

  return (
    <SortingContext.Provider value={{ changeSorting, sortByName }}>
      {children}
    </SortingContext.Provider>
  );
};

export default SortingProvider;
