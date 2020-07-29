import { Component, ViewChild, ElementRef } from '@angular/core';
import { AjScreenRecoderComponent } from 'aj-screen-recoder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(AjScreenRecoderComponent) startRecordElm: AjScreenRecoderComponent;
  @ViewChild('video') video: ElementRef;
  videoData: any;

  startRecord() {
   this.startRecordElm.startRecorder();
  }

  stopRecord() {
    this.startRecordElm.stopRecording();
  }

  downloadVideo() {
    this.startRecordElm.download();
  }

  getTheBlob() {
    this.startRecordElm.getBlobObject();
  }

  play() {
    const videoData = this.startRecordElm.getVideoStreamURL();
    this.video.nativeElement.srcObject = URL.createObjectURL(videoData);
  }


}
