import * as React from 'react';
import { useState } from 'react';


export const SearchBar = () => {
    const [search, setSearch] = useState('');
    return (
        <>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        </>
    )
}