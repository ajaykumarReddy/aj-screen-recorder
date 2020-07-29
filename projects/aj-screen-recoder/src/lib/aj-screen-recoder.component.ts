import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
declare var RecordRTC;
declare var invokeSaveAsDialog;
@Component({
  selector: 'aj-screen-recoder',
  template: ``,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AjScreenRecoderComponent implements OnInit {
  private recorder: any;
  constructor() { }

  ngOnInit() { }

  startRecorder() {
    this.captureScreen((screen) => {
      this.recorder = RecordRTC(screen, {
          type: 'video'
      });

      this.recorder.startRecording();

      // release screen on stopRecording
      this.recorder.screen = screen;
    });
  }

  captureScreen(callback) {
    this.invokeGetDisplayMedia((screen) => {
        this.addStreamStopListener(screen, () => {
            document.getElementById('btn-stop-recording').click();
        });
        callback(screen);
    }, (error) => {
        console.error(error);
        alert('Unable to capture your screen. Please check console logs.\n' + error);
    });
}

invokeGetDisplayMedia(success, error) {
  const displaymediastreamconstraints = {
      video: {
          displaySurface: 'monitor', // monitor, window, application, browser
          logicalSurface: true,
          cursor: 'always' // never, always, motion,
      }
  };

  if ((navigator.mediaDevices as any).getDisplayMedia) {
      (navigator.mediaDevices as any).getDisplayMedia(displaymediastreamconstraints).then(success).catch(error);
  }
  else {
       (navigator as any).getDisplayMedia(displaymediastreamconstraints).then(success).catch(error);
  }
}

addStreamStopListener(stream, callback) {
  stream.addEventListener('ended', () => {
      callback();
      callback = () => {};
  }, false);
  stream.addEventListener('inactive', () => {
      callback();
      callback = () => {};
  }, false);
  stream.getTracks().forEach((track) => {
      track.addEventListener('ended', () => {
          callback();
          callback = () => {};
      }, false);
      track.addEventListener('inactive', () => {
          callback();
          callback = () => {};
      }, false);
  });
}

stopRecording() {
  this.recorder.stopRecording(this.stopRecordingCallback.bind(this));
}

stopRecordingCallback() {
 
  this.recorder.screen.stop();
  // this.stopRecord.emit(URL.createObjectURL(blob));
}

getBlobObject() {
  const blob = this.recorder.getBlob();
  return blob;
}

getVideoStreamURL() {
  const blob = this.recorder.getBlob();
  return URL.createObjectURL(blob);
}

pauseVideo() {
   this.recorder.pauseRecording();
}

resumeVideo() {
  this.recorder.resumeRecording();
}

destroyRecorder() {
this.recorder.destroy();
this.recorder = null;
}

download(type = 'video.webm') {
  invokeSaveAsDialog(this.recorder.getBlob(), type);
}



}
