import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  useTheme,
  useMediaQuery,
  Divider,
  Fab
} from '@mui/material';
import {
  Phone,
  Email,
  LocationOn,
  DarkMode,
  LightMode
} from '@mui/icons-material';

// 컴포넌트들 import
import CompanyLogo from '../components/CompanyLogo';
import ProfileSection from '../components/ProfileSection';
import ContactButton from '../components/ContactButton';
import SocialLinks from '../components/SocialLinks';
import ExpandableSection from '../components/ExpandableSection';
import ImageGallery from '../components/ImageGallery';

// 테마 컨텍스트 import
import { useThemeContext } from '../App';

// ========================= 👤 개인정보 설정 =========================
const PERSONAL_INFO = {
  name: "정재광",
  title: "과장",
  company: "A1 Auto",
  phone: "+82 10-8826-7858",
  email: "jaekwang@a1auto.co.kr",
  location: "서울시 강남구",
  greeting: "안녕하세요.\n에이원오토 정재광 과장입니다...",
  bio: "15년 경력의 자동차 영업 전문가입니다. 고객 만족을 최우선으로 하며, 최적의 차량을 추천해드립니다.",
  website: "https://a1auto.co.kr",
  profileImage: "/src/assets/images/profile_image_main.png"
};

// ========================= 📱 소셜 미디어 링크 =========================
const SOCIAL_LINKS = [
  {
    name: "웹사이트",
    icon: "🌐",
    url: PERSONAL_INFO.website,
    type: "website"
  },
  {
    name: "LinkedIn", 
    icon: "💼",
    url: "https://linkedin.com/in/jaekwang",
    type: "linkedin"
  },
  {
    name: "GitHub",
    icon: "💻", 
    url: "https://github.com/jaekwang",
    type: "github"
  }
];

// ========================= 📋 확장 섹션들 =========================
const EXPANDABLE_SECTIONS = [
  {
    title: "이력",
    icon: "🏢",
    content: "• 2018-현재: A1 Auto - 영업과장\n• 2015-2018: B2 Motors - 영업사원\n• 2012-2015: C3 Cars - 인턴\n• 자동차 판매 경력 6년\n• 고객 만족도 우수상 3회 수상\n• 신차 및 중고차 전문 상담"
  },
  {
    title: "이 달의 차량",
    icon: "🚗",
    content: "🚗 2024 현대 아반떼 (신차)\n💰 할인가: 2,500만원\n🚗 2023 기아 K5 (중고)\n💰 할인가: 2,200만원\n🚗 2024 제네시스 G80 (신차)\n💰 할인가: 8,500만원\n🚗 2022 BMW 3시리즈 (중고)\n💰 할인가: 4,800만원"
  },
  {
    title: "특별 혜택",
    icon: "🎁",
    content: "신차 구매 시 5년 무상 A/S, 첫 해 보험료 50% 할인, 정기점검 무료 서비스를 제공합니다."
  }
];

// ========================= 🚀 ProfilePage 컴포넌트 =========================
function ProfilePage() {
  const [openSections, setOpenSections] = useState([]);
  const [portfolioImages, setPortfolioImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
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

  const toggleSection = (index) => {
    setOpenSections(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const nextImage = () => {
    if (portfolioImages.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % portfolioImages.length);
    }
  };

  const prevImage = () => {
    if (portfolioImages.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? portfolioImages.length - 1 : prev - 1
      );
    }
  };

  const handleContactClick = (type, value) => {
    switch (type) {
      case 'email':
        window.open(`mailto:${value}`, '_blank');
        break;
      case 'phone':
        window.open(`tel:${value}`, '_blank');
        break;
      case 'website':
      case 'linkedin':
      case 'github':
        window.open(value, '_blank');
        break;
    }
  };

  const handleContact = () => {
    alert("상담 요청이 접수되었습니다. 곧 연락드리겠습니다!");
  };

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      maxWidth: '100%',
      mx: 'auto',
      position: 'relative',
      bgcolor: 'background.default'
    }}>
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

      {/* 상단 배경 이미지 영역 */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '400px',
        backgroundImage: theme.palette.background.image,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: 0
      }} />
      
      {/* 상단 콘텐츠 (로고, 프로필, 전화번호 버튼) */}
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Container 
          maxWidth="sm" 
          sx={{ 
            px: isMobile ? 2 : 3,
            py: 3
          }}
        >
          <CompanyLogo />
          <ProfileSection personalInfo={PERSONAL_INFO} />
          
          <ContactButton 
            icon={Phone}
            text={PERSONAL_INFO.phone}
            onClick={() => handleContactClick('phone', PERSONAL_INFO.phone)}
          />
          
          <ContactButton 
            icon={Email}
            text={PERSONAL_INFO.email}
            onClick={() => handleContactClick('email', PERSONAL_INFO.email)}
            variant="outline"
          />
          
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, justifyContent: 'center' }}>
            <LocationOn sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              {PERSONAL_INFO.location}
            </Typography>
          </Box>
          
          <Divider sx={{ mb: 3 }} />
          
          <SocialLinks 
            socialLinks={SOCIAL_LINKS}
            onContactClick={handleContactClick}
          />
        </Container>
      </Box>
      
      {/* 하단 영역 */}
      <Box sx={{ 
        bgcolor: 'background.paper', 
        position: 'relative', 
        zIndex: 1,
        mt: 0
      }}>
        <Container 
          maxWidth="sm" 
          sx={{ 
            px: isMobile ? 2 : 3,
            py: 3
          }}
        >
          {/* 확장 가능한 섹션들 */}
          {EXPANDABLE_SECTIONS.map((section, index) => (
            <ExpandableSection
              key={index}
              section={section}
              isOpen={openSections.includes(index)}
              onToggle={() => toggleSection(index)}
            />
          ))}
          
          {/* 자기소개 섹션 */}
          <Paper sx={{ mb: 3, borderRadius: 3, p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              소개
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              {PERSONAL_INFO.bio}
            </Typography>
          </Paper>
          
          <ImageGallery
            portfolioImages={portfolioImages}
            currentImageIndex={currentImageIndex}
            onPrevImage={prevImage}
            onNextImage={nextImage}
          />
          
          <ContactButton 
            text="견적문의"
            onClick={handleContact}
          />
        </Container>
      </Box>
    </Box>
  );
}

export default ProfilePage;
