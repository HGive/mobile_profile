import { Box, Typography, Button, IconButton, Stack } from "@mui/material";
import { ContentCopy, Directions } from "@mui/icons-material";
import SectionContainer from "./SectionContainer";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const MapSection = () => {
  const address = "경기 의정부시 신흥로 181";
  
  // 마커 위치 (의정부시 중심)
  const markerPosition = {
    lat: 37.7323,
    lng: 127.0432
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address);
    console.log("주소가 복사되었습니다:", address);
  };

  const handleDirections = () => {
    // 자동차로 현재 위치에서 목적지까지 길찾기
    const kakaoMapUrl = `https://map.kakao.com/link/to/A1Auto,${markerPosition.lat},${markerPosition.lng}`;
    window.open(kakaoMapUrl, '_blank');
  };

  return (
    <SectionContainer>
      <Typography variant="h6" component="h6" sx={{ fontWeight: 'bold', color: 'text.primary', mb: 2 }}>
        위치
      </Typography>

      {/* 카카오 지도 영역 */}
      <Box sx={{
        width: '100%',
        height: '240px',
        borderRadius: 2,
        mb: 2,
        overflow: 'hidden'
      }}>
        <Map
          center={markerPosition}
          style={{
            width: "100%",
            height: "100%",
          }}
          level={3}
        >
          {/* 마커 추가! */}
          <MapMarker
            position={markerPosition}
            clickable={true}
            onClick={() => {
              console.log('마커 클릭됨!');
            }}
          />
        </Map>
      </Box>

      {/* 하단 정보 영역 - 한 줄로 배치 */}
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}>
        {/* 주소 */}
        <Typography variant="body1" sx={{ 
          color: 'text.primary', 
          fontWeight: 500,
          flex: 1,
          minWidth: 0 // 텍스트 오버플로우 방지
        }}>
          📍 {address}
        </Typography>

        {/* 복사 버튼 */}
        <IconButton
          onClick={handleCopyAddress}
          sx={{
            bgcolor: 'primary.secondary',
            color: 'white',
            minWidth: '15px',
            height: '15px',
            fontSize: '10px',
            mr: 2,
            '&:hover': {
              bgcolor: 'primary.dark',
            }
          }}
        >
          <ContentCopy sx={{ fontSize: '1.1rem' }} />
        </IconButton>

        {/* 길찾기 버튼 */}
        <Button
          variant="contained"
          startIcon={<Directions />}
          onClick={handleDirections}
          sx={{
            bgcolor: 'background.paper',
            color: 'white',
            px: 2,
            '&:hover': {
              bgcolor: 'primary.dark',
            }
          }}
        >
          길찾기
        </Button>
      </Box>
    </SectionContainer>
  );
};

export default MapSection;