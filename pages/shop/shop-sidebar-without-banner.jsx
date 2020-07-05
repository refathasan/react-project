import React, { Component } from 'react';
import { connect } from 'react-redux';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import Newletters from '../../components/partials/commons/Newletters';
import BreadCrumb from '../../components/elements/BreadCrumb';
import LayoutShopSidebar from '../../components/partials/shop/LayoutShopSidebar';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import ShopWidget from '../../components/partials/shop/modules/ShopWidget';
import { getProducts, getTotalProducts } from '../../store/product/action';
import MartketPlace4Dealhot from '../../components/partials/homepage/marketplace4/MartketPlace4Dealhot';
import '../../scss/market-place-4.scss';
import { getCategories, getCollections } from '../../store/collection/action';
import HomeMarketPlace4Page from '../home/market-place-4';
class ShopSidebarWithoutBannerPage extends Component {
    constructor(props) {
        super(props);

    }
    
    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }

    componentDidMount() {
        const params = {
            _start: 1,
            _limit: 12,
        };

        // const collectionsSlug = [
        //     'shop_best_sale_items',
        //     'shop-recommend-items',
        // ];

        const { query } = this.props;
        if (query) {
            const collectionsSlug = [
                'shop_best_sale_items',
                'shop-recommend-items',
                'deal_of_the_day'
            ];
            const categoriesSlug = [
                'clothing-and-parel',
                'consumer-electrics',
                'computers-and-technologies',
                'garden-and-kitchen',
                'health-and-beauty',
            ];
            this.props.dispatch(getCollections(collectionsSlug));
            this.props.dispatch(getCategories(categoriesSlug));
            this.props.dispatch(getProducts(params));
            this.props.dispatch(getTotalProducts());
        }
        setTimeout(() => {
            this.setState({ subscribe: false });
        }, 10000);
        
    }

    render() {

        const breadCrumb = [
            {
                text: 'Home',
                url: '/',
            },
            {
                text: 'Shop Sidebar',
            },
        ];
        return (
            <div className="site-content">
                <HeaderDefault />
                <HeaderMobile />
                <NavigationList />
                <BreadCrumb breacrumb={breadCrumb} />
                <div className="ps-page--shop" id="shop-sidebar">
                    <div className="container">
                        <div className="ps-layout--shop">
                            <ShopWidget />
                            <div className="ps-layout__right">
                                <LayoutShopSidebar />                                
                            </div>
                           
                        </div>
                        <HomeMarketPlace4Page/>
                    </div>
                    
                </div>
                

                <Newletters layout="container" />

                <FooterDefault />
            </div>
        );
    }
}

export default connect(state => state.product)(ShopSidebarWithoutBannerPage);
