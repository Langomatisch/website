import {Component, Inject} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {faSignInAlt, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public fireAuth: AngularFireAuth) {
    AppComponent.appComponent = this;
  }

  static appComponent;
  title = 'website';

  content: any = 'Work in Progess';
  otherSite = false;
  signInIcon = faSignInAlt;
  signOutIcon = faSignOutAlt;
  showLoginField = false;
  email = '';
  password = '';

  login() {
    this.showLoginField = false;
    this.fireAuth.signInWithEmailAndPassword(this.email, this.password);
    // this.fireAuth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.fireAuth.signOut();
  }

  openLoginField() {

  }

}
