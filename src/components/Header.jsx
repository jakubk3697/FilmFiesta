import { BiCameraMovie } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'
import Button from '@mui/material/Button';
import styles from '../assets/styles/Header.module.css'

export const Header = () => {
    return (
        <header>
            <div>
                <BiCameraMovie />
                <h1>FilmFiesta</h1>
            </div>
            <div>
                <AiFillGithub />
                <button>Sign In</button>
            </div>

        </header >
    )
}