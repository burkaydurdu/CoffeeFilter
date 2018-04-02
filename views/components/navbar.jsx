import React, {Component} from 'react'

export default class NavBar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
              <a className="navbar-brand" href="/">
              <img className="header-svg-vertical" src="/images/svg/coffee-filter.svg" width="35" height="35"/>
              <img src="/images/svg/coffee.svg" width="20" height="20"/>
              CoffeeFilter
              </a>
            </nav>
        );
    }
}