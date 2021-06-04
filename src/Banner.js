import React,{useState } from 'react'
import './Banner.css'
import {Button} from '@material-ui/core'
import Search from './Search'
import {useHistory} from 'react-router-dom'
function Banner() {
    const [showSearch, setShowsearch] = useState(false)
    const history = useHistory();
    return (
        <div className="banner">
            {showSearch && <Search />}
            
            <div className="banner__search">
                <Button onClick={()=>setShowsearch(!showSearch)}
                 className="banner__searchButton"
                variant='outlined'> {showSearch? "Hide": "Search Dates" }</Button>
            </div>
            <div className="banner__info"> 
                <h1> Get out and Stretch your 
                     imagination </h1>
                <h5>
                    Plan a different Kind of 
                    getaway to uncover the hidden 
                    gems near you.
                </h5>
                <Button variant='outlined' onClick={()=> history.push('/search')}>Explore Nearby</Button>
            </div>

        </div>
    )
}

export default Banner
