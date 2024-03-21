import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { onAuthStateChanged ,getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut } from "firebase/auth";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
private uid?: string;
  constructor(private router:Router) {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        this.uid=uid;
        console.log('user Logged in as',user.email)
      } else {
        this.uid =undefined
        console.log("user is not logged in")
      }
    });

   }

   registerUser(email: string, password: string){
    

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
     this.router.navigate(['/']);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
   }

   loginUser(email: string, password: string){
    const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
     this.router.navigate(['/']);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Incorrect Credentials")
  });


   }
   usersignout(){
    const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
})
   }

   isAuthenticated(){
    return this.uid ? true: false;
   }
   getUid(){
    return this.uid;
   }
}
