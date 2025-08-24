import React from 'react';
import { Box, Typography, Paper, IconButton, useTheme } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const ImageGallery = ({ portfolioImages, currentImageIndex, onPrevImage, onNextImage }) => {
  const theme = useTheme();
  
  return (
  <Paper sx={{ mb: 3, borderRadius: 3, p: 3 }}>
    <Typography 
      variant="h5" 
      sx={{ 
        mb: 2, 
        fontWeight: 'bold', 
        color: 'text.primary',
        textAlign: 'center'
      }}
    >
      포트폴리오
    </Typography>
    
    <Box sx={{ 
      position: 'relative',
      width: '100%',
      height: 300,
      bgcolor: 'background.default',
      borderRadius: 2,
      overflow: 'hidden',
      cursor: 'grab',
      '&:active': { cursor: 'grabbing' }
    }}
      onMouseDown={(e) => {
        const container = e.currentTarget;
        let startX = e.clientX;
        let scrollLeft = container.scrollLeft;
        
        const handleMouseMove = (e) => {
          e.preventDefault();
          const x = e.clientX;
          const walk = (x - startX) * 2;
          container.scrollLeft = scrollLeft - walk;
        };
        
        const handleMouseUp = () => {
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
        };
        
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
      }}
    >
      {/* 좌우 화살표 (이미지 내부) */}
      <IconButton 
        onClick={onPrevImage}
        disabled={portfolioImages.length === 0}
        sx={{ 
          position: 'absolute',
          left: 10,
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'rgba(0,0,0,0.3)',
          color: 'white',
          '&:hover': { bgcolor: 'rgba(0,0,0,0.5)' },
          zIndex: 2
        }}
      >
        <ChevronLeft />
      </IconButton>
      
      <IconButton 
        onClick={onNextImage}
        disabled={portfolioImages.length === 0}
        sx={{ 
          position: 'absolute',
          right: 10,
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'rgba(0,0,0,0.3)',
          color: 'white',
          '&:hover': { bgcolor: 'rgba(0,0,0,0.5)' },
          zIndex: 2
        }}
      >
        <ChevronRight />
      </IconButton>
      
      {/* 이미지 표시 */}
      {portfolioImages.length > 0 ? (
        <Box
          component="img"
          src={portfolioImages[currentImageIndex]}
          alt={`Car ${currentImageIndex + 1}`}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
        />
      ) : (
        <Typography variant="body2" color="text.secondary" sx={{ 
          textAlign: 'center', 
          lineHeight: '300px'
        }}>
          이미지를 불러오는 중...
        </Typography>
      )}
      
      {/* 이미지 인덱스 표시 */}
      {portfolioImages.length > 0 && (
        <Box sx={{
          position: 'absolute',
          bottom: 10,
          left: '50%',
          transform: 'translateX(-50%)',
          bgcolor: 'rgba(0,0,0,0.6)',
          color: 'white',
          px: 2,
          py: 1,
          borderRadius: 2,
          fontSize: '0.875rem'
        }}>
          {currentImageIndex + 1} / {portfolioImages.length}
        </Box>
      )}
    </Box>
  </Paper>
  );
}

export default ImageGallery;
