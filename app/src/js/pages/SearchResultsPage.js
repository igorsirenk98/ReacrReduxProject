import React from 'react';
import { Header } from '../components/basicComponents/Header';
import SearchResults from '../components/SearchResults';

const SearchResultsPage = props => (
        <>
            <Header />
            <SearchResults searchValue={props} />
        </>
);

export default SearchResultsPage;