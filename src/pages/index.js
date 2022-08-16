import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Products from 'sections/products';
import PremiumFeature from 'sections/premium-feature';
import UltimateFeatures from 'sections/ultimate-feature';
import CustomerSupport from 'sections/customer-support';

import Testimonials from 'sections/testimonials';


import Support from 'sections/support';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Cacao"
          description="Customized Chocolate"
        />
        <Banner />
        <Products />
        <PremiumFeature />
        <UltimateFeatures />
        <CustomerSupport />
  
        <Testimonials />

        <Support />
      </Layout>
    </ThemeProvider>
  );
}
