import React, { Component } from 'react'
import navImg from '../Components/Navbar-Logo-1.png'
import { Link } from 'react-router-dom';

export class Navbar extends Component {
    render() {
        let { title, home, about, newsCategories, asiaCountyDropdown, euCountyDropdown, americasCountyDropdown, OceaniaCountyDropdown, AfricaCountyDropdown } = this.props
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
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
                                    <Link className="nav-link" to="/about">{about}</Link>
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
                                        <li><Link className="dropdown-item bg-dark text-light" to="/ukraine">Ukraine-ua</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/france">France-fr</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/sweden">Sweden-se</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/norway">Norway-no</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/germany">Germany-de</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/poland">Poland-pl</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/italy">Italy-it</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/unitedkingdom">United Kingdom-gb</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/romania">Romania-ro</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/greece">Greece-gr</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/bulgaria">Bulgaria-bg</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/hungary">Hungary-hu</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/portugal">Portugal-pt</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/serbia">Serbia-rs</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/austria">Austria-at</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/czechrepublic">Czech Republic-cz</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/ireland">Ireland-ie</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/lithuania">Lithuania-lt</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/latvia">Latvia-lv</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/slovakia">Slovakia-sk</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/switzerland">Switzerland-ch</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/netherlands">Netherlands-nl</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/belgium">Belgium-be</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/turkey">Turkey-tr</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/slovenia">Slovenia-si</Link></li>
                                    </ul>
                                </li>
                                {/* Asia Countries List  */}
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {asiaCountyDropdown}
                                    </Link>
                                    <ul className="dropdown-menu bg-dark text-light">
                                        <li><Link className="dropdown-item bg-dark text-light" to="/russia">Russia-ru</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/china">China-cn</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/india">India-in</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/saudiarabia">Saudi Arabia-sa</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/indonesia">Indonesia-id</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/thailand">Thailand-th</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/japan">Japan-jp</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/malaysia">Malaysia-my</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/philippines">Philippines-ph</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/southkorea">South Korea-kr</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/uae">UAE-ae</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/egypt">Egypt-eg</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/taiwan">Taiwan-tw</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/israel">Israel-il</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/singapore">Singapore-sg</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/hongkong">Hong Kong-hk</Link></li>
                                    </ul>
                                </li>
                                {/* Americas Countries List  */}
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">{americasCountyDropdown}</Link>
                                    <ul className="dropdown-menu bg-dark text-light">
                                        <li><Link className="dropdown-item bg-dark text-light" to="/unitedstates">United States-us</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/canada">Canada-ca</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/cuba">Cuba-cu</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/mexico">Mexico-mx</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/argentina">Argentina-ar</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/brazil">Brazil-br</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/colombia">Colombia-co</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/venuzuela">Venuzuela-ve</Link></li>
                                    </ul>
                                </li>
                                {/* Oceania Countries List  */}
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">{OceaniaCountyDropdown}</Link>
                                    <ul className="dropdown-menu bg-dark text-light">
                                        <li><Link className="dropdown-item bg-dark text-light" to="/australia">Australia-au</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/newzealand">New Zealand-nz</Link></li>
                                    </ul>
                                </li>
                                {/* African Countries List  */}
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">{AfricaCountyDropdown}</Link>
                                    <ul className="dropdown-menu bg-dark text-light">
                                        <li><Link className="dropdown-item bg-dark text-light" to="/southafrica">South Africa-za</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/nigeria">Nigeria-ng</Link></li>
                                        <li><Link className="dropdown-item bg-dark text-light" to="/morocco">Morocco-ma</Link></li>
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
