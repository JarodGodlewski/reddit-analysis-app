import React, { useState } from "react";

import {
    SearchContainer,
    SearchInput
} from './SearchElements'



const Search = ({ setSubReddit }) => {
    const [searchInput, setSearchInput] = useState('');

    const handleSubmit = (evt) => {
        console.log(evt);
        setSubReddit(evt);
    }

    return (
        <SearchContainer id="Search">
            <SearchInput
              placeholder="Search for One!"
              onEnter={handleSubmit}
            />
        </SearchContainer>
      );
};
export default Search;
