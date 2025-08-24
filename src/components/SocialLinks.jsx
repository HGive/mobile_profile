import React from 'react';
import { Box, Typography, Button, Grid, useTheme } from '@mui/material';

const SocialLinks = ({ socialLinks, onContactClick }) => {
  const theme = useTheme();
  
  return (
  <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center', color: 'text.primary' }}>
              연결하기
            </Typography>
    <Grid container spacing={2}>
      {socialLinks.map((social, index) => (
        <Grid item xs={4} key={index}>
          <Button
            fullWidth
            variant="outline"
            onClick={() => onContactClick(social.type, social.url)}
            sx={{
              borderColor: 'divider',
              color: 'text.primary',
              '&:hover': { 
                borderColor: 'primary.main', 
                bgcolor: 'action.hover' 
              }
            }}
          >
            <span style={{ marginRight: '8px', fontSize: '16px' }}>{social.icon}</span>
            {social.name}
          </Button>
        </Grid>
      ))}
    </Grid>
  </Box>
  );
}

export default SocialLinks;
