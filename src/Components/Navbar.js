import React, { Component } from 'react'
import navImg from '../Components/Navbar-Logo-1.png'
import { Link } from 'react-router-dom';

export class Navbar extends Component {
    render() {
        let { title, home, about, newsCategories, asiaCountyDropdown, euCountyDropdown, americasCountyDropdown, OceaniaCountyDropdown, AfricaCountyDropdown} = this.props
        return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid" style={{ paddingLeft: '0.1rem' }}>
                    {/* Navbar Logo */}
                    <img src={navImg} className='mx-2 pl-0' alt="" width="45" height="45" />
                    {/* Navbar Title */}
                    <Link className="navbar-brand" to="/">{title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* Home */}
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">{home}</Link>
                            </li>
                            {/* About */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/">{about}</Link>
                            </li>
                            {/* News Categories */}
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {newsCategories}
                                </Link>
                                <ul className="dropdown-menu bg-dark text-light">
                                    <li><Link className="dropdown-item bg-dark text-light" to="/business">Business</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/entertainment">Entertainment</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/general">General</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/health">Health</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/science">Science</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/sports">Sports</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/technology">Technology</Link></li>
                                </ul>
                            </li>
                            {/* Eu Countries List  */}
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {euCountyDropdown}
                                </Link>
                                <ul className="dropdown-menu bg-dark text-light eu-dropdown-menu">
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Ukraine-ua</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">France-fr</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Sweden-se</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Norway-no</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Germany-de</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Poland-pl</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Italy-it</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">United Kingdom-gb</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Romania-ro</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Greece-gr</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Bulgaria-bg</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Hungary-hu</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Portugal-pt</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Serbia-rs</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Austria-at</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Czech Republic-cz</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Ireland-ie</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Lithuania-lt</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Latvia-lv</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Slovakia-sk</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Switzerland-ch</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Netherlands-nl</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Belgium-be</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Turkey-tr</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Slovenia-si</Link></li>
                                </ul>
                            </li>
                            {/* Asia Countries List  */}                            
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {asiaCountyDropdown}
                                </Link>
                                <ul className="dropdown-menu bg-dark text-light">
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Russia-ru</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">China-cn</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">India-in</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Saudi Arabia-sa</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Indonesia-id</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Thailand-th</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Japan-jp</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Malaysia-my</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Philippines-ph</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">South Korea-kr</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">UAE-ae</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Egypt-eg</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Taiwan-tw</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Israel-il</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Singapore-sg</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Hong Kong-hk</Link></li>
                                </ul>
                            </li>
                            {/* Americas Countries List  */}
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">{americasCountyDropdown}</Link>
                                <ul className="dropdown-menu bg-dark text-light">
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">United States-us</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Canada-ca</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Cuba-cu</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Mexico-mx</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Argentina-ar</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Brazil-br</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Colombia-co</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Venuzuela-ve</Link></li>
                                </ul>
                            </li>
                            {/* Oceania Countries List  */}                            
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">{OceaniaCountyDropdown}</Link>
                                <ul className="dropdown-menu bg-dark text-light">
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Australia-au</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">New Zealand-nz</Link></li>
                                </ul>
                            </li>
                            {/* African Countries List  */}
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">{AfricaCountyDropdown}</Link>
                                <ul className="dropdown-menu bg-dark text-light">
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">South Africa-za</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Nigeria-ng</Link></li>
                                    <li><Link className="dropdown-item bg-dark text-light" to="/">Morocco-ma</Link></li>
                                </ul>
                            </li>                            
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
        )
    }
}

export default Navbar
