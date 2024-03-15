import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

export async function loadFontsAndSetup() {
  try {
    await SplashScreen.preventAutoHideAsync();
    await Font.loadAsync({
      'DiaClone': require('./assets/fonts/DiaClone.otf'),
    });
  } catch (e) {
    console.warn(e);
  } finally {
    await SplashScreen.hideAsync();
  }
}