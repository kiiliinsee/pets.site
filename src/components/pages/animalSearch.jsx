import React, { useState } from 'react';
import AnimalSearchForm from "../animalSearchForm";
import Footer from '../footer';
import FoundAnimalsCards from "../foundAnimalsCards";
import Header from "../header";
 
const AnimalSearch = () => {
    const [searchParams, setSearchParams] = useState({});
 
    return (
        <div> 
        <Header/>
        <div>
            <AnimalSearchForm onSearch={(params) => setSearchParams(params)} />
            {Object.keys(searchParams).length > 0 && (
                <FoundAnimalsCards searchParams={searchParams} />
            )}
        </div>
        <Footer/>
        </div>
    );
};
 
export default AnimalSearch;