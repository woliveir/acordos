//  layout padrao das paginas
//      <header /> <-- dados do cookie
//      <content />
//      <footer />
//import logobb from "../assets/images/bb-logo.png";

import { useContext } from 'react';
import logobb from "../assets/images/bb-logo.png";
import { Box, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ThemeHeader, ThemeFooter } from '../themes';
import { Link, useNavigate } from 'react-router-dom';
import { CookieContext } from '../contexts';

interface IProps {
    children: React.ReactNode
    widthContent?: string
}

// header da pagina
const Header: React.FC<IProps> =  ( {children} ) => {
    
    // material ui
    const theme = createTheme(ThemeHeader);
    
    return (
        <ThemeProvider theme={theme}>
            <Box
                alignItems="center"
                bgcolor="#062c4c" 
                color="white"
                display="flex"
                fontWeight="900"
                fontSize="1.5rem"
                height="40px"
                justifyContent="space-between"
                paddingLeft="25px"
                paddingRight="25px"
                paddingTop="15px"
                paddingBottom="15px"
            >
                {children}
            </Box>
     </ThemeProvider>
    );
};

// footer da pagina
const Footer: React.FC<IProps> = ( {children} ) => {

    // material ui
    const theme = createTheme(ThemeFooter);
  
    return (
        <ThemeProvider theme={theme}>
            <Box
            alignItems="center"
            bgcolor="#062c4c"
            borderTop="1px solid #eaeaea"
            color="white"
            display="flex"
            fontWeight="300"
            height="50px"
            justifyContent="space-between"
            paddingLeft="15px"
            paddingRight="15px"
            >
                {children}
            </Box>
      </ThemeProvider>
    );
};

const Content: React.FC<IProps> = ( {children, widthContent} ) => {
  
    return (
      <Box
        bgcolor="pink"
        marginLeft="auto"
        marginRight="auto"
        width={widthContent || '60%'}
        height="100%"
        padding="5px"
        position="relative"
        //display="grid"
      >
        {children}
      </Box>
    );
};

export const DefaultLayout:React.FC<IProps>= ( {children, widthContent} ) => {
  
  const cookie = useContext(CookieContext);
  const navigate = useNavigate();
  const onClick = () => {
    return navigate('/');
  }

    return (
        <Box 
            height="100vh" 
            width="100vw" 
            display="flex" 
            flexDirection="column"
            alignContent="space-between"
            bgcolor="purple"
        >

            {/* header */}
            <Header>
                {/* <Link to="/" style={{ textDecoration: 'none', color: 'inherit', fontFamily: 'inherit' }}> */}
                    <Box
                        alignItems="center" 
                        display="flex"
                        justifyContent="space-between" 
                    >
                        <img src={logobb} alt="Logo BB" width="48" height="48" />
                        <Typography
                            overflow="hidden"
                            whiteSpace="nowrap"
                            variant="h5"
                            fontSize="22px"
                            fontWeight="bold"
                            lineHeight="1"
                            paddingLeft="10px"
                            textAlign="right"
                        >
                            Acordos<br/>
                            VIPAT
                        </Typography>
                    </Box>
                {/* </Link> */}
                <Link to='/about'>Ir para About</Link>
                <br />
                <Link to='/list'>Ir para List</Link>
                <br />
                <Link to='/list/qualquer_coisa'>Ir para List/quaquer_coisa</Link>
                <br />
                <button onClick={onClick}>
                  Voltar para Home
                </button>
            </Header>

            {/* content */}
            <Content widthContent={widthContent}>
                {children}
            </Content>

            {/* footer */}
            <Footer>
                <Typography>
                    <a>GEPER</a>        
                </Typography>
                <Typography>
                    <a>VIPAT</a>        
                </Typography>
            </Footer>
        
        </Box>
    )
}