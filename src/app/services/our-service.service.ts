import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData} from '@angular/fire/firestore';
import { OurService } from '../models/our-service.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OurServiceService {

  constructor(private firestore: Firestore) {}

  getServices(): Observable<OurService[]> {
    const collectionRef = collection(this.firestore, 'our-services');
    return collectionData(collectionRef, { idField: 'id' }) as Observable<OurService[]>;
  }

}
