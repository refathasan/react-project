import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { login } from '../../../store/auth/action';

import { Form, Input, notification } from 'antd';
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static getDerivedStateFromProps(props) {
        if (props.isLoggedIn === true) {
            Router.push('/account/login-2');
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
        Router.push('/account/login-2');

    };
    handleNext = e => {
        console.log('next', e);
        // this.props.dispatch(login());
        Router.push('/account/register');

    };


    render() {
        return (
            <div className="ps-my-account">
                <div className="container">
                    <Form className="ps-form--account" onFinish={this.handleLoginSubmit.bind(this)} >
                        <ul className="ps-tab-list">
                            <li className="active">
                                <Link href="/account/login-2">
                                    <a>Sing-In</a>
                                </Link>
                            </li>
                        </ul>
                        <div className="ps-tab active" id="sign-in">
                            <div className="ps-form__content">
                                <h5>Email (Phone for mobile accounts)</h5>
                                <div className="form-group">
                                    <Form.Item name="email" rules={[
                                        {
                                            required: true,
                                            message:
                                                'Please input your email!',
                                        },
                                    ]}>
                                        <Input
                                            className="form-control"
                                            type="email" />
                                    </Form.Item>
                                </div>
                                <div className="form-group submit">

                                    <button
                                        type="submit"
                                        className="ps-btn ps-btn--fullwidth"
                                    >
                                        Continue
                                    </button>
                                </div>
                                <div className="ps-text ps-text--fullwidth">
                                    By continuing, you agree to Jaadu's Conditions of Use and Privecy Notice. Need help?
                                </div>
                                <div className="ps-linetext">
                                    <h6><span>New to Jaadu?</span></h6>
                                </div>
                                <div className="form-group submit">
                                    {/* Code To handle  */}

                                    <button
                                        type="submit"
                                        className="ls-btn ls-btn--fullwidth"

                                        onClick={this.handleNext.bind(this)}>
                                        Continue
                                    </button>
                                </div>
                                <div className="ps-form__footer">
                                    <ul className="ps-list--social">
                                        <li >Condition of Use</li>
                                        <li >Privecy Notice</li>
                                        <li >Help</li>
                                    </ul>
                                    <div >
                                        <p> © 2020 Jaadu. All Rights Reserved</p>
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
export default connect(mapStateToProps)(Login);
