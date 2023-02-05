import React from 'react';
import Banners from "./Banners/Banners";
import PopularProducts from "./PopularProducts/PopularProducts";
import PopularCategories from "./PopularCategory/PopularCategory";
import Brands from "./Brands/Brands";
import CustomerReviews from '../../component/CustomerReviews/CustomerReviews';
import Features from './Features/Features';
import Subscription from './Subscription/Subscription';
import { Helmet } from "react-helmet";
import NewProducts from "./NewProducts/NewProducts";

class Home extends React.Component {

      render() {
            return (

                  <div>
                        <Helmet>

                              {/* Seo Meta tag test https://www.pakvitamins.com/product-category/natures-bounty */}
                              <title>Pakvitamins- The Best Natures Bounty Vitamin.</title>
                              <meta name='description'
                                    content='' />
                              <meta name='keywords'
                                    content='Natures Bounty
                              ' />
                              {/* Open Graph Control */}
                              <meta property="og:title" content="Best Multivitamins, Herbal Vitamins & Health Supplements in Pakistan." />
                              <meta property="og:site_name" content="pakvitamins" />
                              <meta property="og:url" content="https://www.pakvitamins.com/" />
                              <meta property="og:description" content="Pakvitamins is the best place for herbal vitamins and health supplements in Pakistan, get the multivitamins, vitamins for pregnancy, & skincare products at the lowest price." />
                              <meta property="og:type" content="" />
                              <meta property="og:image" content="https://www.pakvitamins.com/static/media/abc.9acb5508.png" />
                              {/* Open Graph Control */}

                              {/* Google WebMaster Code  */}
                              <meta name="google-site-verification" content="VsBGbZ3f_aQyGTcTMbSMyvXABNTgIG39yHK0eAp2RWM" />
                              {/* Google WebMaster Code  */}
                        </Helmet>
                        <Banners />
                        <Brands />
                        <PopularProducts />
                        <NewProducts/>
                        <PopularCategories />
                        <Features />
                        <CustomerReviews />
                        <Subscription />
                  </div>
            )
      }
}
export default Home;
