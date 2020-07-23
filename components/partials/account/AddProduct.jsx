import React, { Component } from 'react';
import Link from 'next/link';
import { Form, Input, Radio, DatePicker } from 'antd';

class AddProduct extends Component {
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
                                        <h3>Add Product</h3>
                                    </div>
                                    <div className="ps-form__content">
                                        <div className="form-group">
                                            <Form.Item
                                                // label="Product Name"
                                                name="product_name"
                                                rules={[
                                                    {
                                                        required: false,
                                                        message:
                                                            'Please input product name!',
                                                    },
                                                ]}>
                                                <Input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Product Name"
                                                />
                                            </Form.Item>
                                            <Form.Item
                                                // label="Product Name"
                                                name="brnad_name"
                                                rules={[
                                                    {
                                                        required: false,
                                                        message:
                                                            'Please input brand name!',
                                                    },
                                                ]}>
                                                <Input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Brand Name"
                                                />
                                            </Form.Item>
                                            <Form.Item
                                                // label="Product Name"
                                                name="brnad_price"
                                                rules={[
                                                    {
                                                        required: false,
                                                        message:
                                                            'Please input brand price!',
                                                    },
                                                ]}>
                                                <Input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Brand Price"
                                                />
                                            </Form.Item>
                                            <Form.Item
                                                // label="Product Name"
                                                name="product_type"
                                                rules={[
                                                    {
                                                        required: false,
                                                        message:
                                                            'Please select Product Type!',
                                                    },
                                                ]}>
                                                <Input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Product Type"
                                                />
                                            </Form.Item>
                                            <Form.Item
                                                // label="Product Name"
                                                name="product_specification"
                                                rules={[
                                                    {
                                                        required: false,
                                                        message:
                                                            'Please select Product specification',
                                                    },
                                                ]}>
                                                <Input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Product Specification"
                                                />
                                            </Form.Item>
                                            <Form.Item
                                                // label="Product Name"
                                                name="product_dimension"
                                                rules={[
                                                    {
                                                        required: false,
                                                        message:
                                                            'Please select Product Dimension',
                                                    },
                                                ]}>
                                                <Input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Product Dimension"
                                                />
                                            </Form.Item>
                                            <Form.Item
                                                // label="Product Name"
                                                name="product_description"
                                                rules={[
                                                    {
                                                        required: false,
                                                        message:
                                                            'Please select Product Description',
                                                    },
                                                ]}>
                                                <Input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Product Description"
                                                />
                                            </Form.Item>
                                            <Form.Item
                                                // label="Product Name"
                                                name="product_sku"
                                                rules={[
                                                    {
                                                        required: false,
                                                        message:
                                                            'Please select Product SKU',
                                                    },
                                                ]}>
                                                <Input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Product SKU"
                                                />
                                            </Form.Item>
                                            <Form.Item
                                                // label="Product Name"
                                                name="product_measurement"
                                                rules={[
                                                    {
                                                        required: false,
                                                        message:
                                                            'Please select Unit of Measurement',
                                                    },
                                                ]}>
                                                <Input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Product Measurement"
                                                />
                                            </Form.Item>
                                            {/* <Form.Item
                                               // label="Product Name"
                                                name="product_style"
                                                rules={[
                                                    {
                                                        required: false,
                                                        message:
                                                            'Please select Style',
                                                    },
                                                ]}>
                                                <Input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Product Style"
                                                />
                                            </Form.Item> */}
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <Form.Item
                                                        // label="Phone Number"
                                                        name="style_name"
                                                        rules={[
                                                            {
                                                                required: false,
                                                                message:
                                                                    'Please input your style_name!',
                                                            },
                                                        ]}>
                                                        <Input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Style Name"
                                                        />
                                                    </Form.Item>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <Form.Item
                                                        // label="Email"
                                                        name="style_code"
                                                        rules={[
                                                            {
                                                                required: false,
                                                                message:
                                                                    'Please input your Code !',
                                                            },
                                                        ]}>
                                                        <Input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Style Code"
                                                        />
                                                    </Form.Item>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <Form.Item
                                                        // label="Phone Number"
                                                        name="image"
                                                        rules={[
                                                            {
                                                                required: false,
                                                                message:
                                                                    'Please upload image',
                                                            },
                                                        ]}>
                                                        <Input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Upload Image"
                                                        />
                                                    </Form.Item>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    {/* <Form.Item
                                                        // label="Email"
                                                        name="email"
                                                        rules={[
                                                            {
                                                                required: false,
                                                                message:
                                                                    'Please input your username!',
                                                            },
                                                        ]}>
                                                        <button className="ps-btn">
                                                            Add more +
                                                        </button>
                                                    </Form.Item> */}
                                                    <button className="ps-btn">
                                                            Add more +
                                                        </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <Form.Item
                                                        // label="Phone Number"
                                                        name="size_name"
                                                        rules={[
                                                            {
                                                                required: false,
                                                                message:
                                                                    'Please input your size_name!',
                                                            },
                                                        ]}>
                                                        <Input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Size Name"
                                                        />
                                                    </Form.Item>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <Form.Item
                                                        // label="Email"
                                                        name="size_code"
                                                        rules={[
                                                            {
                                                                required: false,
                                                                message:
                                                                    'Please input your Code !',
                                                            },
                                                        ]}>
                                                        <Input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Style Code"
                                                        />
                                                    </Form.Item>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            {/* <div className="col-sm-6">
                                                <div className="form-group">
                                                    <Form.Item
                                                        // label="Phone Number"
                                                        name="image"
                                                        rules={[
                                                            {
                                                                required: false,
                                                                message:
                                                                    'Please upload image',
                                                            },
                                                        ]}>
                                                        <Input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Upload Image"
                                                        />
                                                    </Form.Item>
                                                </div>
                                            </div> */}
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    {/* <Form.Item
                                                        // label="Email"
                                                        name="email"
                                                        rules={[
                                                            {
                                                                required: false,
                                                                message:
                                                                    'Please input your username!',
                                                            },
                                                        ]}>
                                                        <button className="ps-btn">
                                                            Add more +
                                                        </button>
                                                    </Form.Item> */}
                                                    <button className="ps-btn">
                                                            Add more +
                                                        </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <Form.Item
                                                        // label="Phone Number"
                                                        name="color_name"
                                                        rules={[
                                                            {
                                                                required: false,
                                                                message:
                                                                    'Please input your color_name!',
                                                            },
                                                        ]}>
                                                        <Input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Color Name"
                                                        />
                                                    </Form.Item>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <Form.Item
                                                        // label="Email"
                                                        name="color_code"
                                                        rules={[
                                                            {
                                                                required: false,
                                                                message:
                                                                    'Please input your Code !',
                                                            },
                                                        ]}>
                                                        <Input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Color Code"
                                                        />
                                                    </Form.Item>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <Form.Item
                                                        // label="Phone Number"
                                                        name="image"
                                                        rules={[
                                                            {
                                                                required: false,
                                                                message:
                                                                    'Please upload image',
                                                            },
                                                        ]}>
                                                        <Input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Upload Image"
                                                        />
                                                    </Form.Item>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    {/* <Form.Item
                                                        // label="Email"
                                                        name="email"
                                                        rules={[
                                                            {
                                                                required: false,
                                                                message:
                                                                    'Please input your username!',
                                                            },
                                                        ]}>
                                                        
                                                    </Form.Item> */}
                                                    <button className="ps-btn">
                                                            Add more +
                                                        </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="row">
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
                                        </div> */}
                                        <div className="form-group submit">
                                            <button className="ps-btn">
                                            SUBMIT FOR APPROVAL
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

export default AddProduct;
