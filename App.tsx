import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';

import { Loading } from '@components/Loading';

import { Routes } from './src/routes';
import theme from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        style='dark'
        backgroundColor='transparent'
        translucent
      />

      { fontsLoaded ? <Routes /> : <Loading /> }

    </ThemeProvider>
  );
}
