/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';

import icon1 from 'assets/images/services/1.png';
import icon2 from 'assets/images/services/2.png';
import icon3 from 'assets/images/services/3.png';
import icon4 from 'assets/images/services/4.png';
import icon5 from 'assets/images/services/5.png';
import icon6 from 'assets/images/services/6.png';

const data = [
  {
    id: 1,
    icon: icon1,
    title: 'Customisable Cacao',
    description: `What we are special for - Customizable Cacao-  you can add images,change shape and
     texture of the chocolates and will be on your doorstep, in the next 2 days!`,
  },
  {
    id: 2,
    icon: icon2,
    title: 'Bundles for Almost any Occasion ',
    description: `Recently launched tens of bundles to be used for almost any occasion`,
  },
  {
    id: 3,
    icon: icon3,
    title: 'Only 4 Base Ingredients',
    description: `We are also preferred because we only use 4 base ingredients sugar cane, 
    cocoa bean, cocoa butter, and sunflower lecithin - to be suitable for everyone!`,
  },
  {
    id: 4,
    icon: icon4,
    title: 'Gluten free',
    description: `Our chocolate is all gluten-free, so that everyone can enjoy it! `,
  },
  {
    id: 5,
    icon: icon5,
    title: '5 Star Rating service',
    description: `We have been rated a 5-star!`,
  },
  {
    id: 6,
    icon: icon6,
    title: 'Organic Cocoa',
    description: `Our cocoa comes from tropical evergreen Cocoa trees, such as Theobroma Cocoa, 
    which grow in the wet lowland tropics of Central and South America, West Africa, and Southeast 
    Asia`,
  },
];

const UltimateFeatures = () => {
  return (
    <Box as="section" id="features" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="Product features"
          title="Ultimate features that works"
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
            <Feature className="feature-item" key={item.id} data={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default UltimateFeatures;

const styles = {
  section: {
    backgroundColor: '#F9FAFC',
    pt: [8, null, null, null, 10, 14],
    pb: [8, null, null, null, 15, 16, 59],
    position: 'relative',
  },
  heading: {
    marginBottom: [50, 50, 80],
    p: {
      maxWidth: 490,
      margin: ['5px auto 0'],
    },
  },
  features: {
    gap: [35, null, null, 40, '50px 30px', 60],
    display: ['grid', 'grid'],
    maxWidth: 1130,
    margin: '0 auto',
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      null,
      null,
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
    '.feature-item': {
      display: ['block'],
      textAlign: 'center',
      maxWidth: [300, 290, null, 300, 'none'],
      m: ['0 auto', '0 auto', '0 auto', '0 auto', '0 auto', 0],
      figure: {
        m: ['0 0 20px'],
      },
      h4: {
        mb: ['15px', '15px', '20px'],
      },
      p: {
        fontSize: ['13px', '13px', '15px', '15px', '13px', '15px'],
      },
    },
  },
};
