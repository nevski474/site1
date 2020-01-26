import React from 'react';
import Img from './Img.js';
import { Link } from 'react-router-dom';



function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <a className="navbar-brand ml-5 text-white">ЭлектроКонтинент</a>
            <button className="navbar-toggler bg-white" type="button" data-toggle="collapse" 
                data-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent"
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span> 
                 <i className="fas fa-bars"  style={{ color:'#fff'}} />
                </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                    
                    <li className="nav-item active">
                        <div className="navbar-nav m-auto ">
                            <li>
                                <Link alt="Home" className="nav-link text-white text-uppercase ml-5" to="/">Главная 
                                    <span class="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li>
                                <Img/>
                            </li>
                        </div>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link text-white text-uppercase ml-5" to="/news">Новости</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white text-uppercase ml-5" to="/contacts">Контакты</Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>>
                    <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Поиск</button>
                </form>
            </div>
        </nav>
    
    )
}
                        
export default Navbar;
                        
/**
 * 
 */