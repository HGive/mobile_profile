import React, { useState, useEffect } from 'react';
import {
  Box,
  Divider,
  Fab,
} from '@mui/material';
import {
  DarkMode,
  LightMode
} from '@mui/icons-material';

// 컴포넌트들 import
import ProfileSection from '../components/ProfileSection';
import BottomNavi from '../components/BottomNavi';
import Header from '../components/CommonHeader';

// 테마 컨텍스트 import
import { useThemeContext } from '../App';
import InfoSection from '../components/InfoSection';
import QnASection from '../components/QnASection';
import PortfolioSection from '../components/PortfolioSection';
import MapSection from '../components/MapSection';



const ProfilePage = () => {
  const [portfolioImages, setPortfolioImages] = useState([]);
  const { mode, toggleColorMode } = useThemeContext();

  // portfolio 폴더의 이미지들을 자동으로 가져오기
  useEffect(() => {
    const importImages = async () => {
      try {
        const imageModules = import.meta.glob('/src/assets/images/portfolio/*', { eager: true });
        const images = Object.values(imageModules).map(module => module.default);
        setPortfolioImages(images);
      } catch (error) {
        console.log('Portfolio 이미지를 가져오는 중 오류:', error);
        setPortfolioImages([
          'https://via.placeholder.com/300x200/FF5722/FFFFFF?text=Car+1',
          'https://via.placeholder.com/300x200/4CAF50/FFFFFF?text=Car+2',
          'https://via.placeholder.com/300x200/9C27B0/FFFFFF?text=Car+3'
        ]);
      }
    };

    importImages();
  }, []);

  return (
    <Box maxWidth="400px" sx={{
      minHeight: '100vh',
      mx: 'auto',
      mb: 8,
      position: 'relative',
      bgcolor: 'background.default'
    }}>
      <Header />
      {/* 다크모드 토글 버튼 */}
      <Fab
        color="primary"
        aria-label="toggle dark mode"
        onClick={toggleColorMode}
        sx={{
          display: 'none',
          position: 'fixed',
          top: 16,
          right: 16,
          zIndex: 1000,
        }}
      >
        {mode === 'dark' ? <LightMode /> : <DarkMode />}
      </Fab>

      <ProfileSection />
      <InfoSection/>
      <QnASection/>
      <PortfolioSection/>
      <MapSection/>
      <BottomNavi/>
    </Box>
  );
}

export default ProfilePage;

