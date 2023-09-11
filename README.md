# Palabrarium

[Github Repository](https://github.com/christianamenos/palabrarium).

Side project build in React Native to create a mobile application to keep track of new words found in your language or other languages, and help you remember them in a gamified way.

## Prerequisites

### Git tool installation

In order to manage changes in the repository and make collaborate, you should install [Git](https://git-scm.com/downloads) in your system, if you don't already have it.

### NVM or Node installation

Requires to use Node version 20, as specified in the file `.nvmrc`. You can use [NVM](https://github.com/nvm-sh/nvm) (recommended approach) or you can install [Node and NPM](https://nodejs.org/es/) manually.

Assuming you used nvm, if you are in a not Windows environment, you just need to run:

```bash
# To install Node version
nvm install
# To use the installed Node version
nvm use
```

Otherwise, you will need to specify the version:

```bash
# To install Node version
nvm install 20
# To use the installed Node version
nvm use 20
```

### IDE installation

You are free to use any IDE that you prefer, however, the project has been initially configured using [VSCode](https://code.visualstudio.com/).

### Expo installation

You can use your device or simulator to test your application. To facilitate the development process, we will be using [Expo](https://expo.dev/), that acts as a proxy to run your React Native code in your smartphone, without having to reinstall it, and automatically reacting to latest changes in the project.

You can install expo application from the [App Store](https://apps.apple.com/us/app/expo-go/id982107779) or [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en&gl=US).

## Create the application

We could create our ReactNative application using the [ReactNative CLI](https://github.com/react-native-community/cli), but since we will be using Expo, we can use the [Expo Go CLI](https://docs.expo.dev/tutorial/create-your-first-app/) instead, which will add additional dependencies to run the application in Expo.

```bash
npx create-expo-app palabrarium -t expo-template-blank-typescript

cd  palabrarium

npm start
```

## Confugure `eslint` and `prettier`

## Run the project

```bash
# Install NodeJS dependencies
npm install
# Start React Native bundler to make the code ready to run on any device
npm start
```

The start command will output a QR code and a local IP address that you can use in the Expo application to test it on your device.

**NOTE:** The Expo application will take some time to load the application.

Once the application is loaded, any change in the project will be propagated to the application as a hot-reload. If this does not happen, close the Expo app and scan again the QR code.

## Run the tests

## References
