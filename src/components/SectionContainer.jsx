import { Box } from "@mui/material";

const SectionContainer = ({ children }) => {
  return (
    <Box component='section' 
    sx={{ 
      width: '100%', 
      height: '100%', 
      borderRadius: 2,
      boxShadow: '0 0 12px rgba(255, 255, 255, 0.3), 0 0 3px rgba(0, 0, 0, 0.1)',
      backgroundColor: 'background.paper', 
      py: 2, 
      px: 2,
      mb: 2
    }}>
      {children}
    </Box>
  )
}

export default SectionContainer;