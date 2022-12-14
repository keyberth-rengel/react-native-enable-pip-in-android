import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-enable-pip-in-android' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

/**
 * validate modules
 */
const EnablePipInAndroid = NativeModules.EnablePipInAndroid
  ? NativeModules.EnablePipInAndroid
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function enterPictureInPictureMode(): Promise<void> {
  return EnablePipInAndroid.enterPictureInPictureMode();
}
