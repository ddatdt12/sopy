# Sopy App

## 1. Setting up the development evironment in windows:

- Install Java:
https://www.oracle.com/java/technologies/downloads/

- Add JAVA_HOME Enviromental Variable to User variable with the value is the path to the java jdk

- Install Node 12 LTS or greater at:
https://nodejs.org/en/download/

- Install React Native CLI: 

```bash
npm install -g react-native-cli
```

- Install yarn:

```bash
npm install --global yarn
```

## 2. Run app in Android studio:

- Install:
https://developer.android.com/studio

- Install Android 11 SDK

- Add ANDROID_HOME to User Variable with the value is the path to the sdk folder of Android folder

- Open terminal on the project directory and run: 

```bash
yarn start
```

- In that terminal: 

```bash
yarn run android
```

# 3. Run app in real Android device:

- To get the .apk file, from project directory, go to android folder and run: 

```bash
./gradlew assembleRelease

```