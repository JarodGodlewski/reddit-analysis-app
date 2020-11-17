import styled from 'styled-components';
import SearchField from 'react-search-field';

export const SearchContainer = styled.div`
    color: #fff;
`;

export const SearchInput = styled.input`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #e9ba23;
  color: #fff;
  transition: 0.2s ease-out;
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
  ::placeholder {
    color: #fff;
  }
`;
