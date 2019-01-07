import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Observable} from 'rxjs';

export class FileUpload {

  key: string;
  name: string;
  file: File;

  constructor(file: File) {
    this.file = file;
  }
}

@Injectable({providedIn: 'root'})
export class FirebaseService {

  private basePath = '/uploads';

  constructor(private db: AngularFireDatabase) {

    const firestore = firebase.firestore();
    const settings = {/* your settings... */ timestampsInSnapshots: true};
    firestore.settings(settings);

  }

  getAll(ref): Observable<any> {
    console.log("out");
    return new Observable((observer) => {
      console.log("in");
      ref.onSnapshot((querySnapshot) => {
        const resultset = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          resultset.push({
            key: doc.id,
            ...data
          });
        });
        observer.next(resultset);
      });
    });
  }

  getById(ref: any, id: string): Observable<any> {
    return new Observable((observer) => {
      ref.doc(id).get().then((doc) => {
        const data = doc.data();
        observer.next({
          key: doc.id,
          ...data
        });
      });
    });
  }

  post(ref: any, data): Observable<any> {
    return new Observable((observer) => {
      ref.add(data).then((doc) => {
        observer.next({
          key: doc.id,
        });
      });
    });
  }

  update(ref, id: string, data): Observable<any> {
    return new Observable((observer) => {
      ref.doc(id).set(data).then(() => {
        observer.next();
      });
    });
  }

  delete( ref, id: string): Observable<{}> {
    return new Observable((observer) => {
      ref.doc(id).delete().then(() => {
        observer.next();
      });
    });
  }

  pushFileToStorage(fileMetadata, fileUpload: FileUpload, progress: { percentage: number }, callBack) {


    fileUpload.file = new File([fileUpload.file], fileMetadata.newFileName);

    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${fileUpload.file.name}`).put(fileUpload.file);

    // uploadTask..pipe(
    //   finalize(() => {
    //     storageRef.getDownloadURL().subscribe(url => {
    //       console.log(url); // <-- do what ever you want with the url..
    //     });
    //   })
    // ).subscribe();

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // in progress
        const snap = snapshot as firebase.storage.UploadTaskSnapshot;
        progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
      },
      (error) => {
        callBack(null);
      },
      () => {
        firebase.storage().ref(`${this.basePath}/${fileUpload.file.name}`).getDownloadURL().then((url) => {
          callBack(url);
        });

        this.saveFileData(fileUpload);
      }
    );
  }

  private saveFileData(fileUpload: FileUpload) {
    // this.db.list(`${this.basePath}/`).push(fileUpload);
  }

  getFileUploads(numberItems): AngularFireList<FileUpload> {
    return this.db.list(this.basePath, ref =>
      ref.limitToLast(numberItems));
  }

  deleteFileUpload(fileUpload: FileUpload) {
    this.deleteFileDatabase(fileUpload.key)
      .then(() => {
        this.deleteFileStorage(fileUpload.name);
      })
      .catch(error => console.log(error));
  }

  private deleteFileDatabase(key: string) {
    return this.db.list(`${this.basePath}/`).remove(key);
  }

  private deleteFileStorage(name: string) {
    const storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/${name}`).delete();
  }
}
