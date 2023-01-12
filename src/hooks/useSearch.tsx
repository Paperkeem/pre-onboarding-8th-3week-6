import { useState } from 'react';

export default function useSearch() {
  let storageInit = localStorage.getItem('searched')?.split(',');

  const [localStorageData, setlocalStorageData] = useState<any>(storageInit);

  const setRecentSearch = (searchWord: string) => {
    if (searchWord !== '') {
      if (!localStorage.getItem('searched')) {
        localStorage.setItem('searched', searchWord);
        setlocalStorageData([searchWord]);
      } else {
        let newStorage = `${localStorage.getItem(
          'searched'
        )},${searchWord}`.split(',');
        let newStorageSet = newStorage.filter((item, index) => {
          return newStorage.indexOf(item) === index;
        });
        localStorage.setItem('searched', `${newStorageSet}`);
        setlocalStorageData(newStorageSet);
      }
    }
  };

  return {
    localStorageData,
    setlocalStorageData,
    setRecentSearch,
  };
}
