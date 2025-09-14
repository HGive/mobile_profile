import React, { useState } from 'react';
import { Box, Button, useTheme, Modal, Typography, TextField, IconButton } from '@mui/material';
import { Phone, Help, Close } from '@mui/icons-material';

const BottomNavi = () => {
  const theme = useTheme();
  const [openInquiry, setOpenInquiry] = useState(false);
  const [inquiryData, setInquiryData] = useState({
    title: '',
    content: '',
    phone: '',
    email: '',
    name: ''
  });
  
  const [errors, setErrors] = useState({
    title: false,
    content: false,
    phone: false,
    email: false,
    name: false
  });
  
  const handleCall = () => {
    window.open('tel:+821088267858', '_self');
  };

  const handleInquiry = () => {
    setOpenInquiry(true);
  };

  const handleCloseInquiry = () => {
    setOpenInquiry(false);
  };

  const validateField = (field, value) => {
    switch (field) {
      case 'title':
      case 'name':
        return value.trim() === '';
      case 'content':
        return value.trim().length < 20;
      case 'phone':
        const phoneRegex = /^010-\d{4}-\d{4}$/;
        return !phoneRegex.test(value);
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value);
      default:
        return false;
    }
  };

  const formatPhoneNumber = (value) => {
    // 숫자만 추출
    const numbers = value.replace(/\D/g, '');
    
    // 010으로 시작하는 11자리 숫자인지 확인
    if (numbers.startsWith('010') && numbers.length === 11) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7)}`;
    }
    
    // 010으로 시작하지 않거나 11자리가 아닌 경우
    if (numbers.length <= 3) {
      return numbers;
    } else if (numbers.length <= 7) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    } else if (numbers.length <= 11) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7)}`;
    }
    
    // 11자리를 초과하는 경우 11자리까지만
    return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
  };

  const handleInputChange = (field) => (event) => {
    let value = event.target.value;
    
    // 휴대폰번호 필드인 경우 자동 포맷팅
    if (field === 'phone') {
      value = formatPhoneNumber(value);
    }
    
    setInquiryData({
      ...inquiryData,
      [field]: value
    });
    
    // 실시간 validation
    const hasError = validateField(field, value);
    setErrors({
      ...errors,
      [field]: hasError
    });
  };

  const handleSubmitInquiry = () => {
    // 모든 필드 validation
    const newErrors = {};
    let hasAnyError = false;
    
    Object.keys(inquiryData).forEach(field => {
      const hasError = validateField(field, inquiryData[field]);
      newErrors[field] = hasError;
      if (hasError) hasAnyError = true;
    });
    
    setErrors(newErrors);
    
    if (!hasAnyError) {
      const { title, content, phone, email, name } = inquiryData;
      
      const subject = `[A1 Auto 문의] ${title}`;
      const body = `
          문의내용: ${content}

          연락처 정보:
          - 휴대폰번호: ${phone}
          - 이메일: ${email}
          - 보낸사람: ${name}

          ---
          이 문의는 A1 Auto 모바일 프로필에서 발송되었습니다.
      `;
      
      const mailtoUrl = `mailto:skyjoon34@naver.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailtoUrl, '_blank');
      
      setOpenInquiry(false);
    } else {
      console.log('입력 오류가 있습니다.');
    }
  };
  
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        bgcolor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider',
        boxShadow: '0 -2px 8px rgba(0,0,0,0.1)'
      }}
    >
      {/* 전화하기 버튼 */}
      <Button
        fullWidth
        variant="contained"
        startIcon={<Phone />}
        onClick={handleCall}
        sx={{
          bgcolor: 'rgba(0,0,0,0.05)',
          color: 'text.secondary',
          py: 1.2,
          borderRadius: 0,
          fontSize: '1rem',
          fontWeight: 'bold',
          border: '1px solid',
          borderColor: 'rgba(0,0,0,0.05)',
          borderRight: '1px solid rgba(136, 136, 136, 0.58)',
          '&:hover': {
            bgcolor: 'primary.main',
            color: 'white',
          }
        }}
      >
        전화하기
      </Button>

      {/* 문의하기 버튼 */}
      <Button
        fullWidth
        variant="contained"
        startIcon={<Help />}
        onClick={handleInquiry}
        sx={{
          bgcolor: 'rgba(0,0,0,0.05)',
          color: 'text.secondary',
          py: 1.2,
          borderRadius: 0,
          fontSize: '1rem',
          fontWeight: 'bold',
          border: '1px solid',
          borderColor: 'rgba(0,0,0,0.05)',
          '&:hover': {
            bgcolor: 'primary.main',
            color: 'white',
          }
        }}
      >
        문의하기
      </Button>

      {/* 문의하기 모달 */}
      <Modal
        open={openInquiry}
        onClose={handleCloseInquiry}
        aria-labelledby="inquiry-modal-title"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '400px',
          height: '100vh',
          bgcolor: 'background.default',
          borderRadius: 0,
          boxShadow: 24,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}>
          {/* 헤더 */}
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 2,
            borderBottom: 1,
            borderColor: 'divider'
          }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
              전차종 상담
            </Typography>
            <IconButton onClick={handleCloseInquiry} sx={{ color: 'text.secondary' }}>
              <Close />
            </IconButton>
          </Box>

          {/* 폼 영역 */}
          <Box sx={{
            flex: 1,
            p: 3,
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }}>
            {/* 문의제목 */}
            <TextField
              fullWidth
              label="문의제목"
              placeholder="문의제목을 입력해주세요"
              value={inquiryData.title}
              onChange={handleInputChange('title')}
              helperText={errors.title ? "문의제목을 입력해주세요" : ""}
              sx={{
                '& .MuiOutlinedInput-root': {
                  bgcolor: 'background.paper'
                },
                '& .MuiInputLabel-root': {
                  color: errors.title ? 'red' : 'text.primary',
                  '&::before': {
                    content: '"*"',
                    color: 'red',
                    marginRight: '4px'
                  }
                }
              }}
            />

            {/* 문의내용 */}
            <TextField
              fullWidth
              multiline
              rows={4}
              label="문의내용"
              placeholder="문의내용을 입력해주세요"
              value={inquiryData.content}
              onChange={handleInputChange('content')}
              helperText={errors.content ? "문의내용을 20자 이상 입력해주세요" : ""}
              sx={{
                '& .MuiOutlinedInput-root': {
                  bgcolor: 'background.paper'
                },
                '& .MuiInputLabel-root': {
                  color: errors.content ? 'red' : 'text.primary',
                  '&::before': {
                    content: '"*"',
                    color: 'red',
                    marginRight: '4px'
                  }
                }
              }}
            />

            {/* 휴대폰번호 */}
            <TextField
              fullWidth
              label="휴대폰번호"
              placeholder="010-1234-5678"
              value={inquiryData.phone}
              onChange={handleInputChange('phone')}
              helperText={errors.phone ? "010으로 시작하는 11자리 숫자를 입력해주세요" : ""}
              sx={{
                '& .MuiOutlinedInput-root': {
                  bgcolor: 'background.paper'
                },
                '& .MuiInputLabel-root': {
                  color: errors.phone ? 'red' : 'text.primary',
                  '&::before': {
                    content: '"*"',
                    color: 'red',
                    marginRight: '4px'
                  }
                }
              }}
            />

            {/* 이메일 */}
            <TextField
              fullWidth
              label="이메일"
              placeholder="이메일을 입력해주세요"
              value={inquiryData.email}
              onChange={handleInputChange('email')}
              helperText={errors.email ? "올바른 이메일 형식을 입력해주세요" : ""}
              sx={{
                '& .MuiOutlinedInput-root': {
                  bgcolor: 'background.paper'
                },
                '& .MuiInputLabel-root': {
                  color: errors.email ? 'red' : 'text.primary',
                  '&::before': {
                    content: '"*"',
                    color: 'red',
                    marginRight: '4px'
                  }
                }
              }}
            />

            {/* 보낸사람 */}
            <TextField
              fullWidth
              label="보낸사람"
              placeholder="보낸사람을 입력해주세요"
              value={inquiryData.name}
              onChange={handleInputChange('name')}
              helperText={errors.name ? "보낸사람을 입력해주세요" : ""}
              sx={{
                '& .MuiOutlinedInput-root': {
                  bgcolor: 'background.paper'
                },
                '& .MuiInputLabel-root': {
                  color: errors.name ? 'red' : 'text.primary',
                  '&::before': {
                    content: '"*"',
                    color: 'red',
                    marginRight: '4px'
                  }
                }
              }}
            />

            {/* 제출 버튼 */}
            <Button
              fullWidth
              variant="contained"
              onClick={handleSubmitInquiry}
              sx={{
                bgcolor: 'background.paper',
                color: 'white',
                py: 1.5,
                mt: 2,
                '&:hover': {
                  bgcolor: 'background.paper',
                }
              }}
            >
              문의하기
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default BottomNavi;
