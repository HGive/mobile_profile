import { Modal, Box, IconButton, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageModal = ({ open, onClose, images, currentIndex, onIndexChange }) => {
  if (!images || images.length === 0) return null;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentIndex,
    beforeChange: (oldIndex, newIndex) => {
      console.log('Slider beforeChange:', oldIndex, newIndex);
      if (onIndexChange) {
        onIndexChange(newIndex);
      }
    },
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    swipe: true,
    draggable: true,
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="image-modal-title"
      aria-describedby="image-modal-content"
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '95%',
        maxWidth: '600px',
        height: '70vh',
        bgcolor: 'background.paper',
        borderRadius: 3,
        boxShadow: 24,
        p: 2,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* 모달 헤더 */}
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
          pb: 2,
          borderBottom: 1,
          borderColor: 'divider'
        }}>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
            출고차량
          </Typography>
          <IconButton onClick={onClose} sx={{ color: 'text.secondary' }}>
            <Close />
          </IconButton>
        </Box>

        {/* 슬라이더 영역 */}
        <Box sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          mb: 2
        }}>
          <Slider {...settings} style={{ width: '100%', height: '100%' }}>
            {images.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  width: '100%',
                  outline: 'none'
                }}
              >
                {/* 이미지 */}
                <Box sx={{
                  width: '350px',
                  height: '250px',
                  borderRadius: 2,
                  boxShadow: 3,
                  mb: 2,
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: 'background.paper'
                }}>
                  <Box
                    component="img"
                    src={item.img}
                    alt={item.title}
                    sx={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'cover',
                      borderRadius: 2,
                    }}
                  />
                </Box>
                
                {/* 이미지 정보 */}
                <Box sx={{
                  textAlign: 'center',
                  p: 2,
                  bgcolor: 'background.default',
                  borderRadius: 2,
                  width: '350px',
                  height: '100px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary', mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
                    {item.area}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {index + 1} / {images.length}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </Modal>
  );
};

export default ImageModal;
