import { Stack, Typography, Button, Box } from "@mui/material";
import SectionContainer from "./SectionContainer";
import { Search, QuestionAnswer, Book, Build } from "@mui/icons-material";
import { StackItem } from "../styled/stackItem";
import { useState } from "react";
import { 
  frequentlyAskedQuestions, 
  purchaseGuide, 
  serviceGuide 
} from "../assets/contents/qnaSectionContent";
import CommonModal from "./CommonModal";

const QnASection = () => {
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

  const handleSearchClick = () => {
    // 질문 검색 기능은 나중에 구현
    console.log("질문 검색 버튼 클릭");
  };

  return (
    <>
      <SectionContainer>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          mb: 2 
        }}>
          <Typography variant="h6" component="h6" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
            Q&A
          </Typography>
          <Button
            variant="outlined"
            startIcon={<Search />}
            onClick={handleSearchClick}
            sx={{
              display: 'none',
              borderColor: 'primary.main',
              color: 'primary.main',
              '&:hover': {
                borderColor: 'primary.dark',
                backgroundColor: 'primary.main',
                color: 'white'
              }
            }}
          >
            질문 검색
          </Button>
        </Box>
        
        <Stack spacing={2}>
          <StackItem onClick={() => handleOpenModal("자주 묻는 질문", frequentlyAskedQuestions)}>
            ❓ 자주 묻는 질문
          </StackItem>
          <StackItem onClick={() => handleOpenModal("구매 가이드", purchaseGuide)}>
            📖 구매 가이드
          </StackItem>
          <StackItem onClick={() => handleOpenModal("서비스 가이드", serviceGuide)}>
            🛠️ 서비스 가이드
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

export default QnASection;