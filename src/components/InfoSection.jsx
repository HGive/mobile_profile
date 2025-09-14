import { Button, Paper, Stack, Typography } from "@mui/material";
import SectionContainer from "./SectionContainer";
import { CarRental, DirectionsCar } from "@mui/icons-material";
import { StackItem } from "../styled/stackItem";
import { useState } from "react";
import { 
  newCarContent, 
  noticeContent, 
  buyingTipsContent, 
  lowCreditGuideContent 
} from "../assets/contents/infoSectionContent";
import CommonModal from "./CommonModal";

const InfoSection = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  const handleOpenModal = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <SectionContainer>
        <Typography variant="h6" component="h6" sx={{ fontWeight: 'bold', color: 'text.primary', mb: 2 }}>
          신차 장기렌트,리스,할부,일시불 전차종 상담
        </Typography>
        <Stack spacing={2}>
          <StackItem onClick={() => handleOpenModal("신차는 왜 A1 Auto?", newCarContent)}>
            🚘 신차는 왜 A1 Auto?
          </StackItem>
          <StackItem onClick={() => handleOpenModal("유의사항", noticeContent)}>
            📋 유의사항
          </StackItem>
          <StackItem onClick={() => handleOpenModal("구매 팁", buyingTipsContent)}>
            💡 구매 팁
          </StackItem>
          <StackItem onClick={() => handleOpenModal("저신용자를 위한 가이드", lowCreditGuideContent)}>
            💳 저신용자를 위한 가이드
          </StackItem>
        </Stack>
      </SectionContainer>

      {/* CommonModal 사용 */}
      <CommonModal
        open={openModal}
        onClose={handleCloseModal}
        title={modalTitle}
        content={modalContent}
      />
    </>
  )
}

export default InfoSection;