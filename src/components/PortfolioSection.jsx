import * as React from 'react';
import { Typography, Box } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import SectionContainer from './SectionContainer';
import { useState } from 'react';
import { itemData } from '../assets/contents/portfolioContent';
import ImageModal from './ImageModal';

const PortfolioSection = () => {
  const [openModal, setOpenModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOpenModal = (index) => {
    setCurrentImageIndex(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <SectionContainer>
        <Typography variant="h6" component="h6" sx={{ fontWeight: 'bold', color: 'text.primary', mb: 2 }}>
          출고차량
        </Typography>
        
        <Box sx={{ 
          width: '100%', 
          overflowX: 'auto',
          '&::-webkit-scrollbar': {
            height: '4px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'rgba(0, 0, 0, 0.2)',
            borderRadius: '2px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: 'rgba(0, 0, 0, 0.4)',
          },
        }}>
          <ImageList 
            sx={{ 
              width: 'max-content',
              height: 370, // 3행을 위한 높이 (100px * 3 + 간격)
              minWidth: '100%',
            }}
            cols={4} // 4개씩 배치 (3행으로 4개씩)
            rowHeight={100} // 행 높이 100px
            gap={8} // 간격
          >
            {itemData.map((item, index) => (
              <ImageListItem 
                key={item.img}
                sx={{ 
                  cursor: 'pointer',
                  width: '140px !important', // 고정 너비
                  height: '120px !important', // 고정 높이
                  '&:hover': {
                    transform: 'scale(1.02)',
                    transition: 'transform 0.2s ease-in-out',
                  }
                }}
                onClick={() => handleOpenModal(index)}
              >
                <img
                  srcSet={`${item.img}?w=100&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=100&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                  style={{ 
                    width: '140px', 
                    height: '120px', 
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={item.area}
                  // actionIcon={
                  //   <IconButton
                  //     sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
                  //     aria-label={`info about ${item.title}`}
                  //   >
                  //     <InfoIcon />
                  //   </IconButton>
                  // }
                  sx={{
                    fontSize: '0.3rem',
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.82) 0%, rgba(0, 0, 0, 0.75) 70%, transparent 100%)',
                    borderBottomLeftRadius: '8px',
                    borderBottomRightRadius: '8px',
                  }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </SectionContainer>

      {/* 이미지 전용 모달 */}
      <ImageModal
        open={openModal}
        onClose={handleCloseModal}
        images={itemData}
        currentIndex={currentImageIndex}
        onIndexChange={setCurrentImageIndex}
      />
    </>
  );
};

export default PortfolioSection;