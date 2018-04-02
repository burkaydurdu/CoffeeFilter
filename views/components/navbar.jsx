import React, {Component} from 'react'

export default class NavBar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">
                <img className="header-svg-vertical" src="/images/svg/coffee-filter.svg" width="35" height="35"/>
                <img src="/images/svg/coffee.svg" width="20" height="20"/>
                CoffeeFilter
                </a>
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
