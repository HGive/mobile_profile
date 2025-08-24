import React from 'react';
import { Box, Typography, Button, Paper, useTheme } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

const ExpandableSection = ({ section, isOpen, onToggle }) => {
  const theme = useTheme();
  
  return (
    <Paper sx={{ mb: 2, borderRadius: 2, overflow: 'hidden' }}>
      <Button
        fullWidth
        variant="text"
        onClick={onToggle}
        sx={{
          py: 1,
          px: 2,
          justifyContent: 'space-between',
          textTransform: 'none',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          color: 'text.primary',
          bgcolor: 'action.hover',
          '&:hover': { bgcolor: 'action.selected' }
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '8px', fontSize: '20px' }}>{section.icon}</span>
          {section.title}
        </Box>
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </Button>
      
      {isOpen && (
        <Box sx={{ px: 3, pb: 3, bgcolor: 'background.paper' }}>
          <Typography variant="body1" sx={{ lineHeight: 1.8, pt: 2, whiteSpace: 'pre-line', color: 'text.primary' }}>
            {section.content}
          </Typography>
        </Box>
      )}
    </Paper>
  );
};

export default ExpandableSection;
