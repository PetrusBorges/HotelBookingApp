// Expo
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

// Main
import { Main } from './src/main';

// Intl
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export default function App() {

  const [isFontsLoaded] = useFonts({
    'Oxanium-200': require('./src/assets/fonts/Oxanium-ExtraLight.ttf'),
    'Oxanium-400': require('./src/assets/fonts/Oxanium-Regular.ttf'),
    'Oxanium-600': require('./src/assets/fonts/Oxanium-SemiBold.ttf'),
  });

  if(!isFontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style='dark'/>
      <Main />
    </>
  );
}

