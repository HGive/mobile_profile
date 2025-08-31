import React, { useState, createContext, useContext } from 'react';
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Box
} from '@mui/material';
import ProfilePage from './pages/ProfilePage';
import './App.css';

// ========================= 🌙 테마 컨텍스트 =========================
const ThemeContext = createContext();

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

// ========================= 🎨 테마 생성 함수 =========================
const createAppTheme = (mode) => createTheme({
  palette: {
    mode,
    ...(mode === 'light' ? {
      // 라이트 모드
      primary: {
        main: '#82101F',
      },
      background: {
        default: '#f5f5f5',
        paper: '#ffffff',
        image: 'url(/src/assets/images/프로필배경light.jpeg)',
        pattern: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.03) 10px, rgba(0,0,0,0.03) 20px)'
      },
      text: {
        primary: '#000000',
        secondary: '#666666',
      },
      divider: '#e0e0e0',
      logo: '/src/assets/images/a1-logo-trans.png'
    } : {
      // 다크 모드
      primary: {
        main: '#ff6b6b',
      },
      background: {
        default: '#000000',
        paper: 'rgba(27, 27, 27, 0.97)',
        image: 'url(/src/assets/images/profile_bg1-trans.png)',
        pattern: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px)'
      },
      text: {
        primary: '#ffffff',
        secondary: '#cccccc',
      },
      divider: '#444444',
      logo: '/src/assets/images/a1-logo-white.png'
    }),
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

function App() {
  const [mode, setMode] = useState('dark');

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  // 테마 생성
  const theme = createAppTheme(mode);

  return (
    <ThemeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProfilePage />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
