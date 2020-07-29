# AjScreenRecoder

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.12.

## Documentation

step1: `npm i aj-screen-recoder`
step2:  Include module called `AjScreenRecoderModule` in your project main module called app.module.ts
step3: 

```typescript 
import { AjScreenRecoderModule } from 'aj-screen-recoder';
@NgModule({
    imports: [
        ...
    AjScreenRecoderModule
  ],
```
## Usage 
Include this any one of your component and get the instance of this component using as below
`<aj-screen-recoder #screenRecorder></aj-screen-recoder>`
 ```typescript 
 @ViewChild(AjScreenRecoderComponent) startRecordElm: AjScreenRecoderComponent;
   /** Call this method for start record your screen*/
   this.startRecordElm.startRecorder();

    /** Call this method for stop recording the screen*/
    this.startRecordElm.stopRecording();

     /** After stop call this method for download the video file*/
    this.startRecordElm.download();

    /** After stop call this method to get  the video blob file*/
    this.startRecordElm.getBlob();

    /** After stop recodering this method to get  the video data stream url to play recorded video*/
    this.startRecordElm.getVideoStreamURL();

    /**To pause the screen recording*/
    this.startRecordElm.pauseVideo();

 ```


## Code scaffolding

Run `ng generate component component-name --project aj-screen-recoder` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project aj-screen-recoder`.
> Note: Don't forget to add `--project aj-screen-recoder` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build aj-screen-recoder` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build aj-screen-recoder`, go to the dist folder `cd dist/aj-screen-recoder` and run `npm publish`.

## Running unit tests

Run `ng test aj-screen-recoder` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
