import React from 'react';
import { Box, Typography, Avatar, useTheme } from '@mui/material';

const ProfileSection = ({ personalInfo }) => {
  const theme = useTheme();
  
  return (
  <Box sx={{ textAlign: 'center', mb: 3 }}>
    <Avatar
      src={personalInfo.profileImage}
      alt={personalInfo.name}
      sx={{
        width: 200,
        height: 200,
        mx: 'auto',
        mb: 3,
        border: '4px solid #fff',
        boxShadow: 3
      }}
    />
    
    <Typography 
      variant="h6" 
      component="h6" 
      sx={{ 
        fontWeight: 'bold', 
        color: 'text.primary',
        mb: 2
      }}
    >
      {personalInfo.name} {personalInfo.title}
    </Typography>
    
    <Typography
      component="p"
      sx={{
        color: 'text.primary',
        mb: 4,
        whiteSpace: 'pre-line'
      }}
    >
      {personalInfo.greeting}
    </Typography>
  </Box>
  );
}

export default ProfileSection;
