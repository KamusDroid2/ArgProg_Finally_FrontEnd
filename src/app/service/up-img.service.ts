import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';
import { getExperimentalSetting } from '@firebase/util';
@Injectable({
  providedIn: 'root'
})
export class UpImgService {
  url: string = "";

  constructor(private storage: Storage) { }
  public upImage($event: any, name: string) {
    const file = $event.target.files[0]
    console.log(file);
    const imgRef = ref(this.storage, 'img/' + name);
    uploadBytes(imgRef, file)
      .then(response => { this.getImage() })
      .catch(error => console.log(error)
      )
  }

  getImage() {
    const imageRef = ref(this.storage, 'img')
    list(imageRef)
    .then(async response => {
       for (let item of response.items) {
         this.url = await getDownloadURL(item);
         console.log(this.url);
        }
    })
    .catch(error => console.log(error))
  }
}


