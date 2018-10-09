import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import {
  FileTransfer,
  FileTransferObject,
} from '@ionic-native/file-transfer';
import { File, FileEntry } from '@ionic-native/file';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, 
    private document: DocumentViewer, private fileTransfer: FileTransfer,
    private file: File) {

  }

  openPdf() {
    const options: DocumentViewerOptions = {
      title: 'My PDF'
    }

    const localDirectory = this.file.tempDirectory;
    const downloadUrl = 'http://www.pdf995.com/samples/pdf.pdf';

    const fileTransfer: FileTransferObject = this.fileTransfer.create();
    fileTransfer.download(downloadUrl, localDirectory + 'document/myfile.pdf').then(
      (entry: FileEntry) => {
        this.document.viewDocument(
          entry.nativeURL,
          'application/pdf',
          options
        );
      }
    );
    
  }
}
