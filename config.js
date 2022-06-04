import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAiljd0dVVx-m8KmZIQwgmtV3jpRU6vExg',
  authDomain: 'school-attendance-app-d5fda.firebaseapp.com',
  databaseURL:
    'https://school-attendance-app-d5fda-default-rtdb.firebaseio.com',
  projectId: 'school-attendance-app-d5fda',
  storageBucket: 'school-attendance-app-d5fda.appspot.com',
  messagingSenderId: '471649533900',
  appId: '1:471649533900:web:7edd7e2879f1877f25a769',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase.database();
