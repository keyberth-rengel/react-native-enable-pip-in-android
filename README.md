# react-native-enable-pip-in-android

enable picture-in-picture in android

## Installation

```sh
npm install react-native-enable-pip-in-android
```

## Android Setup

If you want support PIP in your app, register your video activity in your manifest by setting `android:supportsPictureInPicture` and `android:resizeableActivity` to `true`. Edit your `AndroidManifest.xml` :

```
<activity
    android:name=".MainActivity"
    android:label="@string/app_name"
    android:resizeableActivity="true"
    android:supportsPictureInPicture="true"
    android:configChanges="keyboard|keyboardHidden|orientation|screenSize|uiMode|locale|layoutDirection|fontScale|screenLayout|density|smallestScreenSize"
    android:launchMode="singleTask"
    ...
```

### Autoinstall react-native >= 0.60.

### Version of react-native < 0.60 use the following command.

`$ react-native link react-native-enable-pip-in-android`

## Usage

```javascript
import { enterPictureInPictureMode } from 'react-native-enable-pip-in-android';
function pipHandler() {
  enterPictureInPictureMode();
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
