import React, { useState } from "react";
import {
    SearchContainer,
    SearchInput
} from './SearchElements'



const Search = ({ setSubReddit }) => {
    const [searchInput, setSearchInput] = useState('');

    const handleSubmit = () => {
        console.log(searchInput);
        setSubReddit(searchInput);
        setSearchInput('');
    }

    const handleKeyDown = (evt) => {
        if(evt.key === 'Enter'){
            handleSubmit();
        }
    }

    return (
        <SearchContainer id="Search">
            <SearchInput
              type='text'
              placeholder="Search for One!"
              value={searchInput}
              onChange={e => setSearchInput(e.currentTarget.value)}
              onKeyDown={handleKeyDown}
            />
        </SearchContainer>
      );
};
export default Search;
