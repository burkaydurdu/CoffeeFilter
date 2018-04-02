import React, {Component} from 'react'
import DefaultLayout from '../layouts/default'

export default class Login extends Component {
    render() {
        return (
            <DefaultLayout title={this.props.title}>
                <div className="text-success"> Hello {this.props.name} </div>
            </DefaultLayout>
        );
    }
}
