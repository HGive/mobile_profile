import { Modal, Box, IconButton, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";

const CommonModal = ({ open, onClose, title, content }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-content"
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '97%',
        maxWidth: '400px',
        height: '70vh',
        bgcolor: 'background.paper',
        borderRadius: 3,
        boxShadow: 24,
        p: 2,
        overflow: 'hidden',
      }}>
        {/* 모달 헤더 */}
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2,
          pb: 2,
          borderBottom: 1,
          borderColor: 'divider'
        }}>
          <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
            {title}
          </Typography>
          <IconButton onClick={onClose} sx={{ color: 'text.secondary' }}>
            <Close />
          </IconButton>
        </Box>

        {/* 모달 내용 */}
        <Box sx={{
          height: 'calc(70vh - 80px)',
          overflowY: 'auto',
          pr: 1,
          // 스크롤바 스타일링
          '&::-webkit-scrollbar': {
            width: '4px', // 스크롤바 너비를 4px로 설정
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent', // 트랙 배경 투명
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'rgba(0, 0, 0, 0.2)', // 스크롤바 색상
            borderRadius: '2px', // 둥근 모서리
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: 'rgba(0, 0, 0, 0.4)', // 호버 시 더 진한 색상
          },
          // Firefox용 스크롤바 스타일링
          scrollbarWidth: 'thin', // 얇은 스크롤바
          scrollbarColor: 'rgba(0, 0, 0, 0.2) transparent', // 색상 설정
        }}>
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'text.primary',
              whiteSpace: 'pre-line',
              lineHeight: 1.6
            }}
          >
            {content}
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
};

export default CommonModal;
