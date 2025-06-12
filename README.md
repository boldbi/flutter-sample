# BoldBI Embedding Flutter Sample

This project demonstrates how to embed a Bold BI dashboard in a Flutter web app with a simple nodejs backend.

## Dashboard view

![Dashboard View](/images/image.png)

## Requirements to run the demo

The samples require the following to run:

- [VS Code](https://code.visualstudio.com/)
- [Flutter SDK](https://docs.flutter.dev/get-started/install)
- [Node.js and npm](https://nodejs.org/)
- Google Chrome (for Flutter web)

## Configuration

* Please ensure you have enabled embed authentication on the `embed settings` page. If it is not currently enabled, please refer to the following image or detailed [instructions](https://help.boldbi.com/site-administration/embed-settings/#get-embed-secret-code?utm_source=github&utm_medium=backlinks) to enable it.

    ![Embed Settings](/images/enable-embedsecretkey.png)

* To download the `embedConfig.json` file, please follow this [link](https://help.boldbi.com/site-administration/embed-settings/#get-embed-configuration-file?utm_source=github&utm_medium=backlinks) for reference. Additionally, you can refer to the following image for visual guidance.

     ![Embed Settings Download](/images/download-embedsecretkey.png)
     ![EmbedConfig Properties](/images/embedconfig-file.png)

* Copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/aspnet-core-sample/tree/master/BoldBI.Embed.Sample) within the application. Please ensure you have placed it in the application, as shown in the following image.

    ![EmbedConfig image](/images/embedconfig-location.png)


## Running the Express Backend

1. Open Project in VS Code
2. Navigate to backend `nodejs` folder and install dependencies.
```bash
    cd nodejs
    npm install
```
3. Start the server using the command below.
```bash
    node app.js
```
> **Note**: The server will run on port 8080. If you want to change the port, you can do so in the `app.js` file.


## Running the Flutter Web App

1. Open Project in VS Code
2. Navigate to the `flutter` folder and install dependencies.
```bash
    cd flutter-sample
    flutter pub get
```
3. Make sure you have web support enabled.
```bash
    flutter devices
```
4. Run the app using the command below to open it in Chrome.
```bash
    flutter run -d chrome
```

Please refer to the [help documentation](https://help.boldbi.com/embedding-options/embedding-sdk/samples/flutter-with-javascript/) to know more about the steps and sample explanation.

## Online Demos

Look at the Bold BI Embedding sample to live demo [here](https://samples.boldbi.com/embed?utm_source=github&utm_medium=backlinks).

## Documentation

A complete Bold BI Embedding documentation can be found on [Bold BI Embedding Help](https://help.boldbi.com/embedded-bi/javascript-based/?utm_source=github&utm_medium=backlinks).
