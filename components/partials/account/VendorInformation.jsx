import React, { Component } from 'react';
import Link from 'next/link';
import { Form, Input, Radio, DatePicker } from 'antd';

class VendorInformation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const accountLinks = [
            {
                text: 'Vendor Summery',
                url: '/account/vendor-information',
                icon: 'icon-vector',
                active: true,
            },
            {
                text: 'Add Product',
                url: '/account/add-product',
                icon: 'icon-store',
            },
            {
                text: 'View orders',
                url: '/account/invoices',
                icon: 'icon-eye',
            },
            {
                text: 'View Sales Report',
                url: '/account/addresses',
                icon: 'icon-chart-bars',
            },
            {
                text: 'Track Order',
                url: '/account/recent-viewed-product',
                icon: 'icon-map-marker',
            },
            {
                text: 'Payments',
                url: '/account/wishlist',
                icon: 'icon-credit-card',
            },
        ];
        return (
            <section className="ps-my-account ps-page--account">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="ps-section__left">
                                <aside className="ps-widget--account-dashboard">
                                    <div className="ps-widget__header">
                                        <img src="/static/img/users/3.jpg" />
                                        <figure>
                                            <figcaption>Hello</figcaption>
                                            <p>shawkat.islm@gmail.com</p>
                                        </figure>
                                    </div>
                                    <div className="ps-widget__content">
                                        <ul>
                                            {accountLinks.map(link => (
                                                <li
                                                    key={link.text}
                                                    className={
                                                        link.active
                                                            ? 'active'
                                                            : ''
                                                    }>
                                                    <Link href={link.url}>
                                                        <a>
                                                            <i
                                                                className={
                                                                    link.icon
                                                                }></i>
                                                            {link.text}
                                                        </a>
                                                    </Link>
                                                </li>
                                            ))}
                                            <li>
                                                <Link href="/account/my-account">
                                                    <a>
                                                        <i className="icon-power-switch"></i>
                                                        Logout
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="ps-page__content">
                                <Form
                                    className="ps-form--account-setting"
                                    onSubmit={this.handleLoginSubmit}>
                                    <div className="ps-form__header">
                                        <h3>Account Information</h3>
                                    </div>
                                    <div className="ps-form__content">
                                        <div className="form-group">
                                            <Form.Item
                                                label="Name"
                                                name="name"
                                                rules={[
                                                    {
                                                        required: false,
                                                        message:
                                                            'Please input your name!',
                                                    },
                                                ]}>
                                                <Input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Username or email address"
                                                />
                                            </Form.Item>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <Form.Item
                                                        label="Phone Number"
                                                        name="phone"
                                                        rules={[
                                                            {
                                                                required: false,
                                                                message:
                                                                    'Please input your name!',
                                                            },
                                                        ]}>
                                                        <Input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Enter your phone number"
                                                        />
                                                    </Form.Item>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <Form.Item
                                                        label="Email"
                                                        name="email"
                                                        rules={[
                                                            {
                                                                required: false,
                                                                message:
                                                                    'Please input your username!',
                                                            },
                                                        ]}>
                                                        <Input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Username or email address"
                                                        />
                                                    </Form.Item>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Birthday</label>
                                                    <DatePicker />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <Form.Item
                                                        label="Gender"
                                                        name="gender"
                                                        rules={[
                                                            {
                                                                required: false,
                                                                message:
                                                                    'Please input your username!',
                                                            },
                                                        ]}>
                                                        <Radio.Group>
                                                            <Radio value="male">
                                                                Male
                                                            </Radio>
                                                            <Radio value="female">
                                                                Female
                                                            </Radio>
                                                        </Radio.Group>
                                                    </Form.Item>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group submit">
                                            <button className="ps-btn">
                                                Update
                                            </button>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default VendorInformation;
