import { KeyLIEvent } from '.';

export type RecommendProps = {
  searchWord?: any;
  recommendWord?: Array<any>;
  setSearchWord: React.Dispatch<React.SetStateAction<string>>;
  setIsFocus: React.Dispatch<React.SetStateAction<boolean>>;
  setFocusItem: React.Dispatch<React.SetStateAction<string>>;
  focusContralArrow: (e: KeyLIEvent, index: number, length: number) => void;
  localStorageData?: string[] | undefined;
  deleteSearchedWord?: (item: string) => void;
};
