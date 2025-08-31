import React from 'react';
import { Button, useTheme } from '@mui/material';

const ContactButton = ({ icon: Icon, text, onClick, variant = "contained", color = "#82101F" }) => {
  const theme = useTheme();
  
  return (
  <Button
    fullWidth
    variant={variant}
    onClick={onClick}
      sx={{
    bgcolor: variant === "contained" ? 'primary.main' : 'transparent',
    color: variant === "contained" ? 'white' : 'text.primary',
    py: variant === "contained" ? 1 : 2,
    mb: 1,
    borderRadius: 3,
    fontSize: '1.1rem',
    fontWeight: 'bold',
    '&:hover': { 
      bgcolor: variant === "contained" ? 'primary.dark' : 'action.hover' 
    }
  }}
>
  {Icon && <Icon sx={{ mr: 1 }} />}
  {text}
</Button>
  );
}

export default ContactButton;
