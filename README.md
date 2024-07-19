# BoldBI Embedding Flutter Sample

This Bold BI Flutter sample contains the Dashboard embedding sample. This sample demonstrates the rendering of dashboard available in your Bold BI server.

This section guides you in using the Bold BI dashboard in your Flutter sample application.

* [Requirements to run the demo](#requirements-to-run-the-demo)
* [Using the Flutter sample](#using-the-flutter-sample)
* [Online Demos](#online-demos)
* [Documentation](#documentation)

## Requirements to run the demo

The samples require the following to run:

* [Flutter SDK] (<https://docs.flutter.dev/get-started/install/windows>)
* [Visual Studio Code](https://code.visualstudio.com/download)

## Using the Flutter sample

* Open the Flutter embed sample in Visual studio code or any respective IDE.

* Open the index.html file in the following location, /build/flutter_assets/index.html.

* Please change the following properties in the `index.html` file as per your Bold BI Server.

    | Parameter        | Description |
    |------------------|-------------|
    | **RootUrl**      | Dashboard Server URL (e.g., <http://localhost:5000/bi>, <http://demo.boldbi.com/bi>). |
    | **SiteIdentifier** | For the Bold BI Enterprise edition, it should be like `site/site1`. For Bold BI Cloud, it should be an empty string. |
    | **Environment**  | Your Bold BI application environment. (If Cloud, you should use `cloud`, if Enterprise, you should use `enterprise`). |
    | **UserEmail**    | UserEmail of the Admin in your Bold BI, which would be used to get the dashboard list. |
    | **EmbedSecret**  | Get your EmbedSecret key from the Embed tab by enabling the `Enable embed authentication` on the [Administration page](https://help.boldbi.com/embedded-bi/site-administration/embed-settings/). |
    | **dashboardId**  | ID of the dashboard you want to embed. |

* Now run the Flutter sample by using the following command.

```bash
flutter run
```

Please refer to the [help documentation](https://help.boldbi.com/embedded-bi/javascript-based/samples/v3.3.40-or-later/flutter-with-javascript/#how-to-run-the-sample) to know how to run the sample.

## Online Demos

Look at the Bold BI Embedding sample to live demo [here](https://samples.boldbi.com/embed).

## Documentation

A complete Bold BI Embedding documentation can be found on [Bold BI Embedding Help](https://help.boldbi.com/embedded-bi/javascript-based/).
