// import { createUserWithEmailAndPassword, GoogleAuthProvider,sendEmailVerification, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth";
// import Home from "../../Container/Home/Home ";


// export const signUpapi = (data) => {

//     console.log("signUpapi", data);

//     return new Promise((resolve, reject) => {
//         createUserWithEmailAndPassword(Home, data.email, data.password)
//             .then((userCredential) => {
//                 const user = userCredential.user;
//                 console.log(user);

//                 onAuthStateChanged(Home, (user) => {
//                     sendEmailVerification(Home.currentUser)
//                         .then(() => {
//                             resolve({ payload: "Check your emails" });
//                         })
//                         .catch((e) => {
//                             reject({ payload: e });
//                         })
//                 });
//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;

//                 if (errorCode.localeCompare("home/email-already-exists") === 0) {
//                     reject({ payload: "Email is already verified" });
//                 }
//                 else {
//                     reject({ payload: errorCode });
//                 }
//             });
//     })
// }
// export const SignInapi = (data) => {
//     console.log("SignInapi", data);

//     return new Promise((resolve, reject) => {

//         signInWithEmailAndPassword(Home, data.email, data.password)
//             .then((userCredential) => {
//                 const user = userCredential.user;

//                 if (user.emailVerified) {

//                     reject({ payload: user });
//                 }
//                 else {
//                     resolve({ payload: "Please Varify Your Email." });
//                 }

//                 console.log(user);
//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;

//                 if (errorCode.localeCompare("home/user-not-found") === 0) {
//                     resolve({ payload: "Please Check Your Email And Password." });
//                 }
//                 else {
//                     reject({ payload: errorCode });
//                 }
//             });
//     })
// }
// export const SignOutapi = () => {

//     console.log("SignOutapi");

//     return new Promise((resolve, reject) => {

//         signOut(Home)
//             .then(() => {
//                 resolve({ payload: "Logout Is SuccessFully." })
//             })
//             .catch(() => {
//                 reject({ payload: "SomeThing Is Worng." });
//             })
//     })
// }


// export const googleWithSigninApi = () => {
//     console.log("data");

//     return new Promise((resolve, reject) => {
//         const provider = new GoogleAuthProvider();

//         signInWithPopup(Home, provider)
//             .then((result) => {
//                 const credential = GoogleAuthProvider.credentialFromResult(result);
//                 const token = credential.accessToken;
//                 const user = result.user;
//                 resolve({ payload: user })
//             }).catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 const email = error.customData.email;
//                 const credential = GoogleAuthProvider.credentialFromError(error);
//                 reject({ payload: error })
//             });
//     })
// }



// export const ForgotPassApi = (data) => {
//     console.log(data);
// }