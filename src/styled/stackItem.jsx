import { Paper, styled } from "@mui/material";

export const StackItem = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  ...theme.typography.body1,
  mx: 2,
  width: '100%',
  py: 2,
  px: 2,
  textAlign: 'center',
  color: theme.palette.text.primary,
  height: 'auto',
  minHeight: '48px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1rem',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  borderRadius: 15,
  boxShadow: '0 1px 4px rgba(255, 255, 255, 0.3), 0 1px 1px rgba(0, 0, 0, 0.1)',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
    transform: 'translateY(-1px)',
    boxShadow: '0 1px 4px rgba(255, 255, 255, 0.4), 0 1px 2px rgba(0, 0, 0, 0.15)',
  },
}));