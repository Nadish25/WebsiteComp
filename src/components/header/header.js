/** @jsx jsx */
import { jsx, Box, Flex, Container, Button,Image } from 'theme-ui';
import { Fragment, useState } from 'react';
import Sticky from 'react-stickynode';
import Logo from 'components/logo';
import TopBar from 'components/topbar';
import shop from 'assets/images/icons/bag.png';
import HamburgerMenu from 'components/hamburger';
import Navbar from './navbar';
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()
  const [state, setState] = useState({
    isMobileMenu: false,
    isSticky: false,
  });
  const handleStateChange = (status) => {
    status.status === Sticky.STATUS_FIXED
      ? setState({ ...state, isSticky: true })
      : setState({ ...state, isSticky: false });
      console.log(state.isMobileMenu)
  };
  const handleClick = (e) => {
    e.preventDefault()
    router.push("/about")
  }
  const handleClick2 = () => {
    window.open("https://vedantsinghal07.mfs.gg/oGFht3u");
  }
  const toggleMobileMenu = () => {
    setState((prev) => {
      return {
        ...prev,
        isMobileMenu: !prev.isMobileMenu,
      };
    });
  };
  const handleCloseMenu = () => {
    setState({
      ...state,
      isMobileMenu: false,
    });
  };


  return (
    <Fragment>
      <TopBar isMobile={state.isMobileMenu}/>
      <Sticky
        enabled={true}
        top={0}
        activeClass="is-sticky"
        innerZ={100}
        onStateChange={handleStateChange}
      >
        <Box
          as="header"
          sx={styles.header}
          className={state.isSticky ? 'is-sticky' : ''}
        >
          <Container sx={styles.container}>
            <Logo sx={styles.logo} isSticky={state.isSticky} />
            <Navbar
              isSticky={state.isSticky}
              isMobile={state.isMobileMenu}
              handleCloseMenu={handleCloseMenu}
            />
            <Flex sx={styles.buttonGroup}>
              <Button
               onClick={handleClick2}
                variant="text"
                sx={{
                  ...styles.login,
                  color: state.isSticky ? 'text' : 'white',
                }}
              >
                <Image src={shop} sx={styles.cartIcon}/>
                Buy
              </Button>
              <Button
              onClick={handleClick}
                variant="text"
                sx={{
                  ...styles.joinCommunity,
                  backgroundColor: state.isSticky ? 'primary' : 'white',
                  color: state.isSticky ? 'white' : 'primary',
                }}
              >
                About Us
              </Button>
            </Flex>

            <HamburgerMenu
              sx={styles.hamburger}
              isSticky={state.isSticky}
              isOpen={state.isMobileMenu}
              toggleMobileMenu={toggleMobileMenu}
            />
          </Container>
        </Box>
      </Sticky>
    </Fragment>
  );
}

const styles = {
  header: {
    position: 'fixed',
    left: 0,
    right: 0,
    py: 4,
    transition: 'all 0.3s ease-in-out 0s',
    '&.is-sticky': {
      backgroundColor: '#c0934b',
      boxShadow: '0 6px 13px rgba(38,78,118,0.1)',
      paddingTop: '15px',
      paddingBottom: '15px',
    },
    '&.is-mobile-menu': {
      backgroundColor: 'white',
    },
  },
  cartIcon:{
    width: "2rem",
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    mr: [null, null, null, null, 6, null, 12],
  },
  buttonGroup: {
    alignItems: 'center',
    marginLeft: 'auto',
    button: {
      fontWeight: 500,
    },
  },
  login: {
    display: ['none', null, null, null, 'flex'],
    color: 'black',
    p: 0,
    mr: [null, null, null, null, 5],
    svg: {
      mr: 2,
    },
  },
  joinCommunity: {
    backgroundColor: 'white',
    minHeight: [30, null, null, 40],
    p: ['0 12px', null, null, '0 14px'],
    fontSize: ['10px', null, null, 1],
  },
  hamburger: {
    display: [null, null, null, null, null, 'none'],
  },
};
