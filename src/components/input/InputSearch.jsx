import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 3rem;
    padding: 0.8rem 1.6rem;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
    border: 1px solid  var(--Grey);
    background: var(--White);
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 0.5rem;
  font-family: var(--font-family-primary);
`;

const SearchIcon = styled(FontAwesomeIcon)`
  margin-left: 0.5rem;
  font-size: 1.5rem;
  color: var(--Black);
`;

const InputSearch = ({ id, value, onChange, placeholder }) => (
  <SearchBar>
    <SearchInput
      type="text"
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
    <SearchIcon icon={faSearch} />
  </SearchBar>
);

export default InputSearch;
