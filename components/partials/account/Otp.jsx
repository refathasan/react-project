import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { login } from '../../../store/auth/action';

import { Form, Input, notification } from 'antd';
import { connect } from 'react-redux';

class Otp extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static getDerivedStateFromProps(props) {
        if (props.isLoggedIn === true) {
            Router.push('/account/user-information');
        }
        return false;
    }

    handleFeatureWillUpdate(e) {
        e.preventDefault();
        notification.open({
            message: 'Opp! Something went wrong.',
            description: 'This feature has been updated later!',
            duration: 500,
        });
    };


    handleLoginSubmit = e => {
        console.log('test', e);

        //this.props.dispatch(login());
        Router.push('/account/user-information');

    };
    handleNext = e => {
        console.log('next', e);
        // this.props.dispatch(login());
        // Router.push('/account/login-2');

    };


    render() {
        return (
            <div className="ps-my-account">
                <div className="container">
                    <Form className="ps-form--account" onFinish={this.handleLoginSubmit.bind(this)} >
                        <ul className="ps-tab-list">
                            <li className="active">
                                <Link href="/account/login">
                                    <a>Verify email address</a>
                                </Link>
                            </li>
                        </ul>
                        <div className="ps-tab active" id="sign-in">
                            <div className="ps-form__content">
                                
                                <h5 >To varify your Email, we'vb sent a One Time password (OTP)to shawkat.jaadu@gmail.com (change)</h5>
                                <h5>Enter OTP</h5>
                                <div className="form-group">
                                    <Form.Item name="password" rules={[
                                        {
                                            required: true,
                                            message:
                                                'Please input your OTP',
                                        },
                                    ]}>
                                        <Input
                                            className="form-control"
                                            type="text" />
                                    </Form.Item>
                                </div>
                                {/* <div className="ps-checkbox">
                                    <input
                                        className="form-control"
                                        type="checkbox"
                                        id="remember-me"
                                        name="remember-me"
                                    />
                                    <label htmlFor="remember-me">
                                        Keep me singed in.<a href="#">Details</a>
                                    </label>
                                </div> */}
                                <div className="form-group submit">

                                    <button
                                        type="submit"
                                        className="ps-btn ps-btn--fullwidth"
                                    >
                                        Varify your Jaadu account
                                    </button>
                                </div>
                                <div className="ps-text ps-text--fullwidth">
                                By createting an account, you agree to Jaadu's Condition of Use and privecy Notice.
                                </div>
                                {/* <div className="ps-linetext">
                                    <h6><span>New to Jaadu?</span></h6>
                                </div> */}
                                <div className="form-group submit">
                                    {/* Code To handle  */}

                                    {/* <button
                                        type="submit"
                                        className="ls-btn ls-btn--fullwidth"
                                        
                                        onClick={this.handleNext.bind(this)}>
                                        Continue
                                    </button> */}
                                </div>
                                <div className="ps-form__footer">
                                    <ul className="ps-list--social">
                                        {/* <li className="ps-list--social--cou">Condition of Use</li> */}
                                        <li className="ps-list--social--cou"><a href="#">Resend OTP</a></li>
                                        {/* <li className="ps-list--social--cou">Help</li> */}
                                    </ul>
                                    <div >
                                        {/* <p> © 2020 Jaadu. All Rights Reserved</p> */}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return state.auth;
};
export default connect(mapStateToProps)(Otp);
