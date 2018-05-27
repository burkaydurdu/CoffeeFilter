import React, {Component} from 'react'
import DefaultLayout from '../layouts/default'

export default class Login extends Component {
    render() {
        return (
            <DefaultLayout title={this.props.title}>
                {/* <div className="text-success"> Hello {this.props.name} </div> */}
                <form className="needs-validation mt-5" action="/login" method="POST" novalidate>
                    <div className="row justify-content-center">
                        <div className="col col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
                            <div className="form-group row">
                                <label for="email" className="col-sm-2 col-form-label col-form-label-md">Email</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control form-control-md" name="email" required/>
                                </div>
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="password" className="col-sm-2 col-form-label col-form-label-md">Password</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control form-control-md" name="password" required/>
                                </div>
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <button className="btn btn-dark btn-md btn-block" type="submit">Login</button>
                        </div>
                    </div>
                </form>
            </DefaultLayout>
        );
    }
}
