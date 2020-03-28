import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <h1>
                    <Link to ={'/'}>
                        CRUD - REDUX
                    </Link>
                </h1>
            </div>
            <Link to={'/new-element'} className="btn btn-danger">
                Add Element
            </Link>
        </nav>
    )
}

export default Header