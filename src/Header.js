import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import { Avatar } from '@material-ui/core'
import {Link} from 'react-router-dom'
function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img className="header__icon"
                src="https://www.paralympic.org/sites/default/files/2020-03/Airbnb%20logo%20new.jpg"
                />
            </Link>

            <div className="header__center">
                <input />
                <SearchIcon  style={{"color":"red"}}/>
            </div>
            <div className="header__right">
                <p>Become a host</p>
                <ExpandMoreIcon />
                <LanguageIcon />
                <Avatar />
            </div>

        </div>
    )
}

export default Header
