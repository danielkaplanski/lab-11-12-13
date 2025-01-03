"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classes from './main-header.module.css'


import logoImg from '../assets/logo.png'
import NavLink from'../components/NavLink';


export default function MainHeader() {
  const path = usePathname();
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <img src={logoImg.src} alt="A plate with food on it"/>
        NextLevelFood
      </Link>
    <nav className={classes.nav}>
      <ul>
      <NavLink href="/meals">Browse Meals</NavLink>
      <NavLink href="/community">Foodies community</NavLink>
      </ul>    
    </nav>  
    </header>
  );
}
