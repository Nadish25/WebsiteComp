import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Footer from '../components/footer/footer'
import NewHeader from 'components/header/new_header';
import Banner from 'sections/banner';
import Products from 'sections/products';
import PremiumFeature from 'sections/premium-feature';
import UltimateFeatures from 'sections/ultimate-feature';
import CustomerSupport from 'sections/customer-support';
import Testimonials from 'sections/testimonials';


import Description from 'sections/description';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
    <NewHeader></NewHeader>
        <SEO
          title="Cacao"
          description="Customized Chocolate"
        />


        <Description />
    <Footer></Footer>
    </ThemeProvider>
  );
}
