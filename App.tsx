import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';

import { Loading } from '@components/Loading';

import theme from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        style='auto'
        backgroundColor='transparent'
        translucent
      />

      { fontsLoaded ? (
          <View style={[{
            flex: 1, alignItems: 'center', justifyContent: 'center'
          }]}>
            <Text>Fonte carregada!</Text>
          </View>
        ) : (
          <Loading />
        )}

    </ThemeProvider>
  );
}
