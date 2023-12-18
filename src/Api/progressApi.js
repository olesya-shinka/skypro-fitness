import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export const updateProgress = async (userId, workoutId, exerciseNumber, progress) => {
  try {
    const exerciseId = `${workoutId}_exercise${exerciseNumber}`;

    // Ссылка на документ в коллекции "userProgress"
    const progressRef = doc(db, "userProgress", userId, "exercises", exerciseId);
    console.log("Trying to update progress:", userId, workoutId, exerciseNumber, progress);

    // Добавляем или обновляем прогресс
    await setDoc(progressRef, { progress }, { merge: true });

    console.log("Прогресс обновлен успешно!");
  } catch (error) {
    console.error("Ошибка при обновлении прогресса:", error);
  }
};

//второй вариант
// import { ref, get, update } from "firebase/database";
// import { getDatabase } from "firebase/database";

// export const updateProgress = async (userId, workoutId, exerciseNumber, progress) => {
//   const db = getDatabase();
//   try {
//     const exerciseId = `${workoutId}_exercise${exerciseNumber}`;

//     // Ссылка на документ в коллекции "userProgress"
//     const progressRef = ref(db, "userProgress", userId, "exercises", exerciseId);
//     console.log("Trying to update progress:", userId, workoutId, exerciseNumber, progress);

//     const snapshot = await get(progressRef);
//     const progressFirebase = snapshot.val();

//     // Добавляем или обновляем прогресс
//     await update(progressRef, progressFirebase);

//     console.log("Прогресс обновлен успешно!");
//   } catch (error) {
//     console.error("Ошибка при обновлении прогресса:", error);
//   }
// };
