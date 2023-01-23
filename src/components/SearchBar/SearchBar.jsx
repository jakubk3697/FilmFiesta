import * as React from 'react';
import { useState } from 'react';
import style from './SearchBar.module.scss';

function SearchBar() {
    const [search, setSearch] = useState('');
    return (
        <>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        </>
    )
}