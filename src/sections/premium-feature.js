/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
import Image from 'components/image';
import iphone from 'assets/images/iphone.png';

const data = [
  {
    title: 'Delivery Outreach',
    contents: (
      <div>
        Get your homemade chocolates delievered right at your door step. Currently supporting: India, United States, United Kingdom and European Union.
      </div>
    ),
  },
  {
    title: 'Crafted for every occasion',
    contents: (
      <div>
        Is it a birthday? An anniversary ? No matter what, a celebration should have sweets: Nothing better than chocolates.
      </div>
    ),
  },
  {
    title: `Personalisation`,
    contents: (
      <div>
        You want a single bar? A collection of several... half n half. We have got you covered. You can choose your flavours, ingredients, fruits and nuts.
      </div>
    ),
  },
];

const PremiumFeature = () => {
  return (
    <Box as="section" sx={styles.section}>
      <Box
        as="figure"
        sx={{ ...styles.illustration, background: `url(${iphone}) no-repeat` }}
      />
      <Container sx={styles.container}>
        <Box sx={styles.accordionGroup}>
          <SectionHeading
            sx={styles.heading}
            slogan="Worth Remembering"
            title="Send a gift crafted with love and worth remembering"
            description="A chocolate is your best friend! Share this joy with handmade chocolates."
          />
          <Accordion items={data} />
        </Box>
      </Container>
    </Box>
  );
};

export default PremiumFeature;

const styles = {
  section: {
    pt: 0,
    pb: [12, null, null, null, null, 14, 18],
    // marginBottom: [null, null, null, null, null, null, '-85px'],
    position: 'relative',
    zIndex: 0,
  },
  container: {
    display: ['flex'],
    alignItems: ['flex-start'],
    justifyContent: 'flex-end',
  },
  illustration: {
    backgroundSize: [null, null, null, null, null, '62%', '50%', '60%', '60%'],
    '@media only screen and (min-width: 1601px)': {
      backgroundSize: '60%',
      backgroundPosition: '0 0',
    },
    backgroundPosition: [
      null,
      null,
      null,
      null,
      null,
      '-80px 0',
      null,
      null,
      '0 0',
      '-140px 0px',
    ],
    bottom: 0,
    display: ['none', null, null, null, null, 'block'],
    height: '100%',
    left: 0,
    position: 'absolute',
    width: '100%',
  },
  accordionGroup: {
    maxWidth: [null, null, null, 520, 610, 410, null, 450, 410],
    m: [null, null, null, '0 auto', null, '0', null],
    // marginLeft: [null, null, null, 'auto', null, 10, 12, 16],
    // marginRight: [null, null, null, 'auto', null, 'unset'],
    // px: [6, null, null, null, 0],
  },
  heading: {
    textAlign: ['center', null, null, null, null, 'left'],
    maxWidth: [null, null, null, 440, 450, 'none'],
    mb: [null, null, null, null, 6, 4, 6],
    h3: {
      fontSize: [4, null, null, 8, 10, 8, 12],
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: 'heading',
      maxWidth: [250, null, null, 'none'],
      margin: ['0 auto', null, null, 'unset'],
    },
  },
};
