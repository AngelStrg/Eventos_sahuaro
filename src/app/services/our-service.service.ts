import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, setDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { OurService } from '../models/our-service.interface';
@Injectable({
  providedIn: 'root'
})
export class OurServiceService {

  constructor(private firestore: Firestore) {}

  addService(service: OurService) {
    const docRef = doc(this.firestore, `additional-services/${service.id}`);
    return setDoc(docRef, service);
  }

  getServices(): Observable<OurService[]> {
    const collectionRef = collection(this.firestore, 'additional-services');
    return collectionData(collectionRef, { idField: 'id' }) as Observable<OurService[]>;
  }

}
