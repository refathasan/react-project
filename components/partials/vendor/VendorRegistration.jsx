import React, { Component } from 'react';
import Slider from 'react-slick';
import { relatedProduct } from '../../../public/static/data/product';
import Product from '../../elements/products/Product';
import VendorProducts from './modules/VendorProducts';
import NextArrow from '../../elements/carousel/NextArrow';
import PrevArrow from '../../elements/carousel/PrevArrow';
import Rating from '../../elements/Rating';
import { carouselStandard } from '../../../utilities/carousel-helpers';
import ProductOffline from '../../elements/products/ProductOffline';
import { Upload, message, Button, } from 'antd';
import Icon from '@ant-design/icons';
const props = {
    name: 'file',
    action: '//jsonplaceholder.typicode.com/posts/',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            let reader = new FileReader();
            reader.onload = (e) => {
                console.log(e.target.result);
            }
            reader.readAsText(info.file.originFileObj);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

import Link from 'next/link';
import Router from 'next/router';
import { Form, Input, Dropdown } from 'antd';
import { connect } from 'react-redux';
class VendorRegistration extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleFeatureWillUpdate(e) {
        e.preventDefault();
        notification.open({
            message: 'Opp! Something went wrong.',
            description: 'This feature has been updated later!',
            duration: 500,
        });
    };

    handleRegSubmit = e => {
        console.log('test', e);

        //this.props.dispatch(login());
        Router.push('/account/vendor-information');
    };

    render() {
        return (
            <div className="ps-my-account">
                <div className="container">
                    <Form
                        className="ps-form--account"
                        onFinish={this.handleRegSubmit.bind(this)}>
                        <ul className="ps-tab-list">
                            {/* <li>
                                <Link href="/account/login">
                                    <a>Login</a>
                                </Link>
                            </li> */}
                            {/* <li className="active">
                                <Link href="/account/register">
                                    <a>Create Account</a>
                                </Link>
                            </li> */}
                        </ul>
                        <div className="ps-tab active" id="register">
                            <div className="ps-form__content">
                                <h5>Vendor registration</h5>
                                <div className="form-group">

                                    <Form.Item
                                        name="Business Name"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your business name',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="text"
                                            placeholder="Business Name"
                                        />

                                    </Form.Item>
                                </div>
                                <div className="form-group">
                                    <Form.Item
                                        name="First Name"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your First name',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="text"
                                            placeholder="First Name"
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group">
                                    <Form.Item
                                        name="Last Name"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your Last name',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="text"
                                            placeholder="Last Name"
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group">
                                    <Form.Item
                                        name="Address"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your Address',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="text"
                                            placeholder="Address"
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group">
                                    <Form.Item
                                        name="City"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your City',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="text"
                                            placeholder="City"
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group">
                                    <Form.Item
                                        name="Country"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your Country',
                                            },
                                        ]}>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="country"
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group">
                                    <Form.Item
                                        name="PhoneNumber"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your Phone Number',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="text"
                                            placeholder="Phone Number"
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group">
                                    <Form.Item
                                        name="Email"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your Email',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="email"
                                            placeholder="Email"
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group">
                                    <Form.Item
                                        name="Description"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your Description',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="text"
                                            placeholder="Description"
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group">
                                    <Form.Item
                                        name="Website"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your Web Address',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="text"
                                            placeholder="Website"
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group">
                                    <Form.Item
                                        name="SocilaMediaLink"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your Socila Media Link',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="text"
                                            placeholder="Socila Media Link"
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group">
                                    <Form.Item
                                        name="UploadLogo"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your Upload Logo',
                                            },
                                        ]}>
                                        <Upload {...props}>
                                            <Button>
                                                <Icon type="upload" /> Click to Upload</Button>
                                        </Upload>
                                    </Form.Item>
                                </div>
                                <div className="form-group submit">
                                    <button
                                        type="submit"
                                        className="ps-btn ps-btn--fullwidth">
                                        Add As A Vendor
                                    </button>
                                </div>
                            </div>
                            <div className="ps-form__footer">
                                {/* <p>By createting an account, you agree to Jaadu's Condition of Use and privecy Notice.</p> */}
                                {/* <ul className="ps-list--social">
                                    <li>
                                        <a className="facebook" href="#">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="google" href="#">
                                            <i className="fa fa-google-plus"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="twitter" href="#">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="instagram" href="#">
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul> */}
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

export default connect(mapStateToProps)(VendorRegistration);
