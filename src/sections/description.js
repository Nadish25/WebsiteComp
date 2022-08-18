/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box,Text } from 'theme-ui';
import { useMediaQuery } from 'react-responsive';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';
import supportTeam from 'assets/images/support-team.png';

export default function Description() {
  return (
    <section id="support" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="CACAO FINE CHOCOLATE"
          description="Never too much
          chocolate!"
        />

<Text sx={styles.para}>The Finest Chocolate in the World- India’s best kept secret! CACAO’ was founded in 2021 in Gurugram, the capital of Harayana, India. Over the years, CACAO’ has grown from Gurugram’s best kept secret to an international phenomenon. Demand has overflowed as people from all over the world have fallen in love with our uniquely fresh chocolates. First came the other cities of India, then multiple stores popped up across Asia. In July 2022, 
ROYCE’ opened the doors to its first store in USA.

In July 2022, Burgundy brought this innovative Indian confectionery brand to USA, with the opening of the first CACAO’ store in Central New York. CACAO’ is now available in Las Vegas, New Delhi, New York, London and Zurich.</Text>

        <Box as="figure" sx={styles.thumbWrapper}>
          
          <Image src={supportTeam} loading="lazy" alt="Support Team" />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  section: {
    pt: [8, null, null, null, 10, 75],
    pb: [0],
  },
  para:{
      textAlign: 'center',
      fontSize: [3, null, null, 3, 5]
  },
  heading: {
    mb: [8, null, null, 10, null, 15],
    maxWidth: [null, null, null, 500, 600, null],
    h3: {
      fontWeight: 500,
      fontSize: [3, null, null, 8, 11],
      lineHeight: 1.4,
      letterSpacing: 'heading',
      color: 'heading',
    },
    p: {
      mt: [3],
      maxWidth: [500],
    },
  },
  thumbWrapper: {
    display: 'flex',
    justifyContent: 'center',
    mb: '-1px',
    img: {
      height: [180, 'auto'],
    },
  },
};
