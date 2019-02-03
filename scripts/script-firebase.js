
// Initialize Firebase
var config = {
    apiKey: "AIzaSyASg3O8h1ZDVUWVLL-A-eGb0Az7i0gJBb8",
    authDomain: "rispostebelomonte.firebaseapp.com",
    databaseURL: "https://rispostebelomonte.firebaseio.com",
    projectId: "rispostebelomonte",
    storageBucket: "rispostebelomonte.appspot.com",
    messagingSenderId: "209808074135"
};
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
this.database = firebase.database();

let userRef = this.database.ref('risposte/' + 'no');
