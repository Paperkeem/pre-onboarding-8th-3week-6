import styled from 'styled-components';
import { SetStateAction, useEffect, useState } from 'react';
import { RegExp } from '../util/RegExp';
import { KeyLIEvent } from '../types/index';
import RecentSearch from './RecentSearch';
import fetchSick from '../lib/fetchSick';
import useDebounce from '../hooks/useDebounce';
import useSearch from '../hooks/useSearch';
import RecommendList from './RecommendList';

interface childProps {
  searchWord: string;
  setSearchWord: React.Dispatch<React.SetStateAction<string>>;
  setIsFocus: React.Dispatch<SetStateAction<boolean>>;
}

const RecommendSearch = ({
  searchWord,
  setSearchWord,
  setIsFocus,
}: childProps) => {
  const [recommendWord, setRecommendWord] = useState<Array<any>>([]);

  const { keyInUse } = useDebounce();
  const { localStorageData, setlocalStorageData } = useSearch();

  useEffect(() => {
    if (
      searchWord?.length > 0 &&
      !RegExp.blankPattern(searchWord) && // not only blank
      keyInUse === false
    ) {
      if (
        searchWord?.length <= 1 &&
        RegExp.pattern(searchWord) // not each String
      ) {
        return;
      } else {
        fetchSick(searchWord, setRecommendWord);
      }
    }
    if (searchWord?.length === 0) setRecommendWord([]);
  }, [searchWord, keyInUse]);

  // delete recent list
  const deleteSearchedWord = (value: string) => {
    let newLocalData = localStorageData?.filter((item: any) => item !== value);
    localStorage.setItem('searched', `${newLocalData}`);
    setlocalStorageData(newLocalData);
  };

  // tabIndex logic
  const [focusItem, setFocusItem] = useState<string>('');

  const focusListSearch = (e: KeyboardEvent, focusItem: string) => {
    if (e.code === 'Enter') {
      setSearchWord(focusItem);
      let searchListId = document.getElementById('#searchList');
      searchListId?.blur();
      let searchInputId = document.getElementById('searchInput');
      searchInputId?.focus();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', (e: KeyboardEvent) =>
      focusListSearch(e, focusItem)
    );
    return () => {
      document.removeEventListener('keydown', (e: KeyboardEvent) =>
        focusListSearch(e, focusItem)
      );
    };
  }, [focusItem]);

  // tabIndex ArrowKey contral
  const focusContralArrow = (
    e: KeyLIEvent,
    index: number,
    listLength: number
  ) => {
    document.getElementById(`searchList${index}`)?.blur();
    if (e.code === 'ArrowDown') {
      if (index === listLength - 1) {
        document.getElementById(`searchList${0}`)?.focus();
      } else {
        document.getElementById(`searchList${index + 1}`)?.focus();
      }
    } else if (e.code === 'ArrowUp') {
      if (index === 0) {
        document.getElementById(`searchList${listLength - 1}`)?.focus();
      } else {
        document.getElementById(`searchList${index - 1}`)?.focus();
      }
    }
  };

  return (
    <Container onClick={(e) => e.stopPropagation()}>
      {searchWord?.length === 0 ? (
        <RecentSearch
          setSearchWord={setSearchWord}
          localStorageData={localStorageData}
          focusContralArrow={focusContralArrow}
          deleteSearchedWord={deleteSearchedWord}
          setFocusItem={setFocusItem}
          setIsFocus={setIsFocus}
        />
      ) : (
        <RecommendList
          searchWord={searchWord}
          recommendWord={recommendWord}
          setSearchWord={setSearchWord}
          setIsFocus={setIsFocus}
          setFocusItem={setFocusItem}
          focusContralArrow={focusContralArrow}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 490px;
  max-height: 500px;
  overflow-y: auto;
  background-color: white;
  box-shadow: 1px 1px 4px 1px lightgray;
  border-radius: 20px;
`;

export default RecommendSearch;
