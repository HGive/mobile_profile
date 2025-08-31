import React from 'react';
import { Box, Typography, useTheme, Container, Divider } from '@mui/material';
import { Phone } from '@mui/icons-material';
import ContactButton from './ContactButton';

// ========================= 👤 개인정보 설정 =========================
const PERSONAL_INFO = {
  name: "정재광",
  title: "과장",
  company: "A1 Auto",
  phone: "+82 10-8826-7858",
  email: "jaekwang@a1auto.co.kr",
  location: "서울시 강남구",
  greeting: "즐거운 상담, 똑똑한 견적 \n항상 최선을 다하겠습니다!",
  website: "https://a1auto.co.kr",
  profileImage: "/src/assets/images/profile_image_main.png"
};

const ProfileSection = () => {
  const theme = useTheme();

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

  return (
    <>
      {/* 상단 배경 이미지 영역 */}
      < Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '300px',
        mt: '50px',
        backgroundImage: theme.palette.background.image,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: 0
      }
      } />

      < Box sx={{ position: 'relative', zIndex: 1 }}>
        <Container
          disableGutters
          sx={{
            px: 1,
            py: 1,
            pt: 12
          }}
        >
          <Box sx={{ textAlign: 'center', mb: 3, pt: 2 }}>
            <Box
              component="img"
              src={PERSONAL_INFO.profileImage}
              alt={PERSONAL_INFO.name}
              sx={{
                width: 200,
                height: 200,
                mx: 'auto',
                mb: 3,
                borderRadius: 2, // 네모 모양 (약간의 둥근 모서리)
                objectFit: 'cover', // 이미지가 컨테이너를 꽉 채우도록
                borderColor: 'background.paper', // 테마에 맞는 테두리 색상
                boxShadow: 3
              }}
            />

            <Typography
              variant="h6"
              component="h6"
              sx={{
                fontWeight: 'bold',
                color: 'text.primary',
                mb: 1,
                mt: 2
              }}
            >
              {PERSONAL_INFO.name} {PERSONAL_INFO.title}
            </Typography>

            <Typography
              component="p"
              sx={{
                color: 'text.primary',
                mb: 3,
                whiteSpace: 'pre-line',
                textAlign: 'center'
              }}
            >
              {PERSONAL_INFO.greeting}
            </Typography>
          </Box>

          <ContactButton
            icon={Phone}
            text={PERSONAL_INFO.phone}
            onClick={() => handleContactClick('phone', PERSONAL_INFO.phone)}
          />

          {/* <SocialLinks 
          socialLinks={SOCIAL_LINKS}
          onContactClick={handleContactClick}
        /> */}
        </Container>
      </Box >
    </>
  );
}

export default ProfileSection;
