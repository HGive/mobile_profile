import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Button,
  Grid,
  Paper,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  ExpandMore,
  ExpandLess,
  LinkedIn,
  GitHub,
  Email,
  Phone
} from '@mui/icons-material';
import './App.css';

function App() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [experienceOpen, setExperienceOpen] = useState(false);
  const [portfolioImages, setPortfolioImages] = useState([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // portfolio 폴더의 이미지들을 자동으로 가져오기
  useEffect(() => {
    const importImages = async () => {
      try {
        // Vite의 import.meta.glob을 사용해서 portfolio 폴더의 이미지들을 가져옴
        const imageModules = import.meta.glob('/src/portfolio/*', { eager: true });
        const images = Object.values(imageModules).map(module => module.default);
        setPortfolioImages(images);
      } catch (error) {
        console.log('Portfolio 이미지를 가져오는 중 오류:', error);
        // 이미지가 없을 경우 기본 이미지들 사용
        setPortfolioImages([
          'https://via.placeholder.com/300x200/FF5722/FFFFFF?text=Project+1',
          'https://via.placeholder.com/300x200/4CAF50/FFFFFF?text=Project+2',
          'https://via.placeholder.com/300x200/9C27B0/FFFFFF?text=Project+3'
        ]);
      }
    };

    importImages();
  }, []);

  // 샘플 데이터
  const profile = {
    name: "김현준",
    title: "Frontend Developer",
    avatar: "https://via.placeholder.com/120x120/2196F3/FFFFFF?text=김",
    about: "안녕하세요! 프론트엔드 개발자 김현준입니다. React와 Vue.js를 주로 사용하며, 사용자 경험을 중시하는 개발을 지향합니다. 새로운 기술을 배우는 것을 좋아하고, 깔끔하고 효율적인 코드 작성을 위해 노력합니다.",
    experience: [
      "2023-2024: ABC Tech - Frontend Developer",
      "2022-2023: XYZ Startup - Junior Developer",
      "2021-2022: DEF Company - Intern"
    ],
    contact: {
      email: "kim@example.com",
      phone: "010-1234-5678",
      linkedin: "linkedin.com/in/kimhyunjun",
      github: "github.com/kimhyunjun"
    }
  };

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      bgcolor: '#f5f5f5',
      maxWidth: '100%',
      mx: 'auto'
    }}>
      <Container 
        maxWidth="md" 
        sx={{ 
          px: isMobile ? 2 : 4,
          py: 3
        }}
      >
        {/* 프로필 헤더 */}
        <Card sx={{ mb: 3, borderRadius: 3, boxShadow: 3 }}>
          <CardContent sx={{ textAlign: 'center', py: 4 }}>
            <Avatar
              src={profile.avatar}
              sx={{ 
                width: 120, 
                height: 120, 
                mx: 'auto', 
                mb: 2,
                border: '4px solid #fff',
                boxShadow: 2
              }}
            />
            <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
              {profile.name}
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              {profile.title}
            </Typography>
            
            {/* 소셜 링크 */}
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 2 }}>
              <IconButton color="primary" size="large">
                <LinkedIn />
              </IconButton>
              <IconButton color="primary" size="large">
                <GitHub />
              </IconButton>
              <IconButton color="primary" size="large">
                <Email />
              </IconButton>
              <IconButton color="primary" size="large">
                <Phone />
              </IconButton>
            </Box>
          </CardContent>
        </Card>

        {/* 자기소개 섹션 */}
        <Paper sx={{ mb: 3, borderRadius: 3, overflow: 'hidden' }}>
          <Button
            fullWidth
            variant="text"
            onClick={() => setAboutOpen(!aboutOpen)}
            sx={{
              py: 2,
              px: 3,
              justifyContent: 'space-between',
              textTransform: 'none',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              color: 'text.primary',
              '&:hover': { bgcolor: 'action.hover' }
            }}
          >
            <Typography variant="h6">자기소개</Typography>
            {aboutOpen ? <ExpandLess /> : <ExpandMore />}
          </Button>
          {aboutOpen && (
            <Box sx={{ px: 3, pb: 3 }}>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                {profile.about}
              </Typography>
            </Box>
          )}
        </Paper>

        {/* 경력 섹션 */}
        <Paper sx={{ mb: 3, borderRadius: 3, overflow: 'hidden' }}>
          <Button
            fullWidth
            variant="text"
            onClick={() => setExperienceOpen(!experienceOpen)}
            sx={{
              py: 2,
              px: 3,
              justifyContent: 'space-between',
              textTransform: 'none',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              color: 'text.primary',
              '&:hover': { bgcolor: 'action.hover' }
            }}
          >
            <Typography variant="h6">경력 및 이력</Typography>
            {experienceOpen ? <ExpandLess /> : <ExpandMore />}
          </Button>
          {experienceOpen && (
            <Box sx={{ px: 3, pb: 3 }}>
              {profile.experience.map((exp, index) => (
                <Typography 
                  key={index} 
                  variant="body1" 
                  sx={{ 
                    mb: 1, 
                    p: 2, 
                    bgcolor: 'grey.50', 
                    borderRadius: 2,
                    borderLeft: '4px solid #2196F3'
                  }}
                >
                  {exp}
                </Typography>
              ))}
            </Box>
          )}
        </Paper>

        {/* 포트폴리오 섹션 */}
        <Paper sx={{ mb: 3, borderRadius: 3, p: 3 }}>
          <Typography variant="h6" gutterBottom sx={{ mb: 2, fontWeight: 'bold' }}>
            포트폴리오
          </Typography>
          {portfolioImages.length > 0 ? (
            <Box sx={{ 
              display: 'flex', 
              gap: 2, 
              overflowX: 'auto',
              pb: 1,
              '&::-webkit-scrollbar': { height: 8 },
              '&::-webkit-scrollbar-track': { bgcolor: 'grey.200', borderRadius: 4 },
              '&::-webkit-scrollbar-thumb': { bgcolor: 'grey.400', borderRadius: 4 }
            }}>
              {portfolioImages.map((img, index) => (
                <Box
                  key={index}
                  component="img"
                  src={img}
                  alt={`Project ${index + 1}`}
                  sx={{
                    minWidth: 280,
                    height: 180,
                    borderRadius: 2,
                    objectFit: 'cover',
                    boxShadow: 2,
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.02)'
                    }
                  }}
                />
              ))}
            </Box>
          ) : (
            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', py: 4 }}>
              src/portfolio 폴더에 이미지를 추가해주세요!
            </Typography>
          )}
        </Paper>

        {/* 마지막 인사 */}
        <Paper sx={{ borderRadius: 3, p: 4, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
            감사합니다! 🙏
          </Typography>
          <Typography variant="body1" color="text.secondary">
            함께 일할 수 있는 기회를 기다리고 있습니다.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
            언제든 연락주세요!
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

export default App;
