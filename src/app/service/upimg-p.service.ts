import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';
import { getExperimentalSetting } from '@firebase/util';

@Injectable({
  providedIn: 'root'
})
export class UpImgPService {
  url: string = "";
  img: string[];

  constructor(private storage: Storage) {
    this.img = [];
   }


  public upImage($event: any) {
    const file = $event.target.files[0];
    console.log(file);
    const imgRef = ref(this.storage, `img/${file.name}`);
    uploadBytes(imgRef, file)
      .then(response => { console.log(response) 
        this.getImage() })
      .catch(error => console.log(error)
      )
  }

  getImage() {
    const imageRef = ref(this.storage, 'img');
    list(imageRef)
    .then(async response => {
      console.log(response);
      this.img = [];      
       for(let item of response.items){
         this.url = await getDownloadURL(item);
         console.log(this.url);
         this.img.push(this.url);
        }
    })
    .catch(error => console.log(error))
  }
}


