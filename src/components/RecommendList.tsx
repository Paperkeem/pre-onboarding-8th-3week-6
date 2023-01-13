import styled from 'styled-components';
import { RecommendProps } from '../types/recommend';
import RecoWord from './RecoWord';

const RecommendList = ({
  searchWord,
  recommendWord,
  setSearchWord,
  setIsFocus,
  setFocusItem,
  focusContralArrow,
}: RecommendProps) => {
  return (
    <CardBox>
      <SearchCate>추천 검색어</SearchCate>
      <RecommendListWrap>
        {recommendWord?.length !== 0 ? (
          recommendWord?.map((item: any, index: any) => {
            return (
              <li
                key={index}
                id={`searchList${index}`}
                tabIndex={0}
                onClick={() => {
                  setSearchWord(item.sickNm);
                  setIsFocus(false);
                }}
                onKeyDown={(e) =>
                  focusContralArrow(e, index, recommendWord?.length)
                }
                onFocus={() => setFocusItem(item.sickNm)}
              >
                <ListItemWrap>
                  <RecoWord item={item} searchWord={searchWord} />
                </ListItemWrap>
              </li>
            );
          })
        ) : (
          <p>추천 검색어가 없습니다.</p>
        )}
      </RecommendListWrap>
    </CardBox>
  );
};

const CardBox = styled.div`
  padding: 10px;
  & p {
    color: #a3a3a3;
    font-weight: bold;
  }
`;

const SearchCate = styled.span`
  margin-bottom: 10px;
  color: gray;
  font-size: 0.8rem;
  font-weight: bold;
`;

const RecommendListWrap = styled.ul`
  padding: 0;
  & li {
    margin: 15px 0 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    border-radius: 10px;
    cursor: pointer;
    &:focus {
      outline: none;
      background-color: #cae9ff;
    }
  }
  & img {
    margin-right: 7px;
    width: 20px;
    height: 20px;
  }
`;
const ListItemWrap = styled.div`
  display: flex;
  align-items: center;
`;

export default RecommendList;
