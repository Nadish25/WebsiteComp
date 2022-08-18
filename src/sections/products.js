/** @jsx jsx */
import { jsx, Box, Container, Image, Button } from 'theme-ui';
import { RiArrowRightSLine } from 'react-icons/ri';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import GalleryCard from 'components/cards/gallery-card';

import gallery1 from 'assets/images/gallery/1.png';
import gallery2 from 'assets/images/gallery/2.png';
import gallery3 from 'assets/images/gallery/3.png';
import gallery4 from 'assets/images/gallery/4.png';
import gallery5 from 'assets/images/gallery/5.png';
import gallery6 from 'assets/images/gallery/6.png';

const data = [
  {
    id: 1,
    image: gallery1,
    title: 'Family Occasions',
  },
  {
    id: 2,
    image: gallery2,
    title: 'Chocolate Flowers',
  },
  {
    id: 3,
    image: gallery3,
    title: 'Single Bars',
  },
  {
    id: 4,
    image: gallery4,
    title: 'Hand Picked',
  },
  {
    id: 6,
    image: gallery6,
    title: 'Personalized Picks',
  },
  {
    id: 5,
    image: gallery5,
    title: 'Seasonal',
  },
];

const masonryOptions = {
  transitionDuration: 0,
};
const handleClick=()=>{
  window.open("https://vedantsinghal07.mfs.gg/oGFht3u")
}
const Gallery = () => {
  return (
    <Box id="gallery" as="section" sx={styles.section}>
      <Container sx={styles.container}>
        <SectionHeading
          sx={styles.heading}
          slogan="Working space"
          title="Let’s meet our interior room decoration"
        />
        <Box as={Masonry} options={masonryOptions} sx={styles.galleryWrapper}>
          {data?.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </Box>
        <Button variant="muted" sx={styles.button} onClick={handleClick}>
        Buy Now <RiArrowRightSLine size="20px" />
        </Button>
      </Container>
    </Box>
  );
};

export default Gallery;

const styles = {
  section: {
    pt: [30, 30, 40, 50, 60],
    pb: [60, 60, 60, 90, 80, 120],
  },
  heading: {
    mb: [30, 30, 40, 60],
  },
  galleryWrapper: {
    mx: '-15px',
  },
  button: {
    minHeight: [50, 50, 50, 60],
    fontSize: [12, 10, 12],
    width: '100%',
    svg: {
      transition: 'margin-left 0.3s ease-in-out 0s',
    },
    ':hover': {
      svg: {
        ml: '5px',
      },
    },
  },
};
