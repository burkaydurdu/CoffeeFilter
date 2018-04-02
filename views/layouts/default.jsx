import React, {Component} from 'react'
import NavBar from '../components/navbar'

export default class DefaultLayout extends Component {

    render() {
        return (
            <html>
                <head>
                    
                    <meta charset="UTF-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>

                    <title>{this.props.title}</title>
                    <link href="/ex-css/bootstrap.min.css" type="text/css" rel="stylesheet"/>
                    <link href="/ex-css/bootstrap-grid.min.css" type="text/css" rel="stylesheet"/>
                    <link href="/ex-css/bootstrap-reboot.min.css" type="text/css" rel="stylesheet"/>
                    <link href="/css/index.css" type="text/css" rel="stylesheet"/>
                    <script src="/ex-js/jquery.min.js" type="text/javascript"></script>
                    <script src="/ex-js/bootstrap.min.js" type="text/javascript"></script>
                </head>
                <body>
                    <NavBar> </NavBar>
                    {this.props.children}
                </body>
            </html>
        );
    }
}
