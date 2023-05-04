import { AppBar, Toolbar, Typography, styled, Box, Button } from "@mui/material"; //Importing tags from mui/material

 
import Search from "./Search"; //search bar is imported from search.jsx
import CustomButtons from "./CustonButtons"; //custom buttons are imported from Custom.jsx

//adding style to the appbar
const StyledHeader = styled(AppBar)`
  background:   grey;
  
`;
const Component = styled(Box)``;
//components
const Header = () => {
  //image link
  const logoURL = 'https://static.tvmaze.com/images/tvm-header-logo.png';

   

  return (
    <StyledHeader>
      <Toolbar>
        <Component>
          <img src={logoURL} alt="logo" style={{ height: 40 }} />
        </Component>
        <Search />
        <Box>
          <CustomButtons />
          
        </Box>
      </Toolbar>
      
    </StyledHeader>
  );
};

export default Header;
