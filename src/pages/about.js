import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Footer from '../components/footer/footer'
import NewHeader from 'components/header/new_header';


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
