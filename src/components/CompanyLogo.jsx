import React from 'react';
import { Box, Typography } from '@mui/material';
import { useThemeContext } from '../App';

const CompanyLogo = () => {
  const { mode } = useThemeContext();
  
  const logoSrc = mode === 'dark' 
    ? '/src/assets/images/a1-logo-trans-light.png'
    : '/src/assets/images/a1-logo-trans.png';
  
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, mb: 1, ml: 1}}>
      <Box
        component="img"
        src={logoSrc}
        alt="A1 Auto Logo"
        sx={{
          height: 20,
          objectFit: 'contain'
        }}
      />
    </Box>
  );
};

export default CompanyLogo;
