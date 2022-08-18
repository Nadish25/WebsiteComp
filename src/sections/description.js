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

<Text sx={styles.para}>The Finest Chocolate in the World- India’s best kept secret! CACAO was founded in 2021 in Gurugram, the capital of Harayana, India. Over the years, CACAO has grown from Gurugram’s best kept secret to an international phenomenon. Demand has overflowed as people from all over the world have fallen in love with our uniquely fresh chocolates. First came the other cities of India, then multiple stores popped up across Asia. In July 2022, 
ROYCE’ opened the doors to its first store in USA.

In July 2022, Burgundy brought this innovative Indian confectionery brand to USA, with the opening of the first CACAO store in Central New York. CACAO is now available in Las Vegas, New Delhi, New York, London and Zurich.</Text>


        <SectionHeading
          sx={styles.heading}
          title="Marketing Strategy"
          description="USP and Takeaway"
        />
  <Text sx={styles.para2}>Increase the number of new visitors to the website by 5% in the first six months and 10% by the end of the first year.

Within 18 months, we will increase the proportion of adult and adolescent patients from 15% to 25% of total patient visits.



Increase our gross revenue by 30% in 24 months.



Improve the image of our brand, as measured by "before" and "after" scores on a community survey or feedback from focus group participants.
Instead of worrying about meeting our sales targets, focus on providing excellent customer service. Create a personal sales script in your preferred language to introduce new clients to new products or services. Give your full attention to customers and concentrate on meeting their needs rather than "selling" anything. Prepare for questions, concerns, and future issues.

Providing excellent customer service results in repeat business and word-of-mouth referrals, increasing sales and decreasing prospecting time. 
<br/><br/>
Advertising - Traditional media advertising and brand marketing campaigns can be a good way for a new business to get their brand in front of their target audience and communicate their USP.
Social Media - Social media is a large driver of brand awareness for many companies. Having a strong presence on social networks and working with social media influencers can be a way for companies to communicate their USP.
Content Marketing - Creating interesting or viral content that also talks about how and why a company is different from the competition can be a good way to communicate USPs.
Digital Marketing - For an online store or digital business, the USP is often presented as the tagline of a webpage or as a bulleted list on a product page.
Search Marketing - Improving a website's SEO and ranking for key terms in search engines such as Google can be a good way for a company to generate visibility and communicate their USPs.
Quality - Superior materials or ingredients, superior craftsmanship, proprietary manufacturing methods, one of a kind
Price - The lowest price guaranteed, price matching, free shipping, bulk discounts, special offers</Text>


<SectionHeading
          sx={styles.heading}
          title="Team"
          description="Our Introductions"
  />
  <Text sx={styles.para2}>My name is <b>Shaurya Chandna</b>, and I am 14 years old. I am currently enrolled at Scottish High International School. I enjoy sports, video games, and playing the guitar.</Text>
  <br/><Text sx={styles.para2}>I'm <b>Nadish Namish Bhardwaj</b>, I'm 13 years old and am studying at Scottish High International School. I like playing sports, coding, guitar, and astronomy.</Text>
  <br/><Text sx={styles.para2}>I am <b>Rutva Rishi</b> and I am 14 years old who is studying in Scottish High International School. Love to play Sports such as Cricket, Football and Basketball</Text>
  <br/><Text sx={styles.para2}>I am <b>Vedant Singhal</b>, amd I am 14 years old. I love front-end development, mathematics and playing tennis.</Text>
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
  para2:{
    textAlign: 'left',
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
