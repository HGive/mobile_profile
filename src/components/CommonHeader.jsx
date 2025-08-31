import { Box } from '@mui/material';
import CompanyLogo from './CompanyLogo';

const CommonHeader = () => {
  return (
    <Box component='header' position="fixed"
      sx={{ width: '400px', height: '40px', zIndex: 1000, backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
      <CompanyLogo />
    </Box>
  )
}

export default CommonHeader;