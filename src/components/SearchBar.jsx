import * as React from 'react';
import { useState } from 'react';
import styles from '../assets/styles/SearchBar.module.css'


export const SearchBar = () => {
    const [search, setSearch] = useState('');
    return (
        <>
            <form>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
            <button></button>
            </form>
        </>
    )
}