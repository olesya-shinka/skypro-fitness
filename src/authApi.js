/* eslint-disable prettier/prettier */
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
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
