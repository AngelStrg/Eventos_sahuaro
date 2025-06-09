import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "eventos-sahuaro", appId: "1:927912995819:web:87ef942c7a02df24b3c7ae", storageBucket: "eventos-sahuaro.firebasestorage.app", apiKey: "AIzaSyDvjLsLxS2EYq-oCl5fh_bWx1lrb54478M", authDomain: "eventos-sahuaro.firebaseapp.com", messagingSenderId: "927912995819" })), provideFirestore(() => getFirestore())]
}
).catch((err) => console.error(err));

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
