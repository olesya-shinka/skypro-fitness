/* eslint-disable prettier/prettier */
import firebase from "firebase/compat/app";
import { getAuth, createUserWithEmailAndPassword, reauthenticateWithCredential, EmailAuthProvider, verifyBeforeUpdateEmail, updatePassword } from "firebase/auth";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
export async function register(email, password) {
  try {
    const oUC = await createUserWithEmailAndPassword(
      // ф-ция createUserWithEmailAndPassword регистрирует в firebase нового пользователя с емейл и паролем, заданными вторыым и третьим параметрами
      //первым параметром указывают обект подсистемы разграничения доступа, полученный ранее
      getAuth(),
      email,
      password
    );
    return oUC.user;
  } catch (err) {
    return err.code;
  }
}

export async function login(email, password) {
  try {
    const oUC = await signInWithEmailAndPassword(getAuth(), email, password);
    return oUC.user;
  } catch (err) {
    return err.code;
  }
}
export async function logout() {
  await signOut(getAuth());
}


//изменение эмейла 
export async function changeLogin(login, valueOldPass) {
  const auth = getAuth();
  CheckCredential(auth, valueOldPass)
await firebaseEmailReset(auth.currentUser, login).then(() => {
  console.log('done');
}).catch((error) => {
  console.error(error.message);
  });
}

async function CheckCredential(auth, valueOldPass) {

  const credential = EmailAuthProvider.credential(
      auth.currentUser.email,
      valueOldPass
 );
 await reauthenticateWithCredential(auth.currentUser, credential);
}
async function firebaseEmailReset(user, newEmail) {
    
  try {
      await verifyBeforeUpdateEmail(user, newEmail);
      await firebase.auth().signOut();
      window.location.reload();
  } catch (error) {
      console.error(error.message);
  }
}

//изменение пароля
async function CheckCredentialPass(valueOldPass, user) {
  const oldPassword = valueOldPass;
  const credential = EmailAuthProvider.credential(
    user.currentUser.email,
    oldPassword
 );
 await reauthenticateWithCredential(user.currentUser, credential);
}




export async function changePassword(valueOldPass, newPassword) {
  const user = getAuth()
  await CheckCredentialPass(valueOldPass, user)
  await updatePassword(user.currentUser, newPassword);
}