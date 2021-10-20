import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import '@firebase/storage';
import * as DATAMAPS from './datamaps';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

class Firebase {
  constructor() {
    this.project = app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.database();    
    this.storage = app.storage();

    /* Helper */
    this.serverValue = app.database.ServerValue;
  }

  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) => this.auth.currentUser.updatePassword(password);

  doSendEmailVerification = () =>
    this.auth.currentUser.sendEmailVerification({
      url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
    });

  // *** User API ***
  user = (uid) => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');

  spec = (specname) => this.db.ref(`specs/${specname}`);

  specs = () => this.db.ref('specs');

  estates = () => this.db.ref('estates');

  estate = (name)=> this.db.ref(`estates/${name}`);

  areas = () => this.db.ref('areas');

  area = (uid) => this.db.ref(`areas/${uid}`);

  chat = (chatId) => this.db.ref(`chats/${chatId}`);  

  members = (chatId) => this.db.ref(`members/${chatId}`);

  //  ** Message API ***

  message = (chatId, messageId) => this.db.ref(`messages/${chatId}/${messageId}`);

  messages = (chatId) => this.db.ref(`messages/${chatId}`);

  // Storage API

  storageRef = () => this.storage.ref();

  getUserUpdates = (userData) => {
    const updates = {};

    updates[`users/${userData.uid}`] = userData;

    const specs = Object.keys(userData.specs);
    
    specs.forEach(name => {        
      updates[`specs/${name}/${userData.uid}`] = userData.specs[name];
    });   
    
    const areas = Object.keys(userData.areas);

    areas.forEach(area => {
      updates[`areas/${area}/${userData.uid}`] = userData.areas[area];
    });       

    return updates;
  }

  // Merge auth and DB user API

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        this.user(authUser.uid)
          .once('value')
          .then((snapshot) => {
            const dbUser = snapshot.val();          

            // merge auth and db user
            const mergedUser = {
              uid: authUser.uid,
              email: authUser.email,
              emailVerified: authUser.emailVerified,
              providerData: authUser.providerData,
              ...dbUser,
            };

            next(mergedUser);
          });
      } else {
        fallback();
      }
    });
}

export default Firebase;
