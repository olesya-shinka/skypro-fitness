// import { doc, setDoc } from "firebase/firestore";
// import { db } from "../firebase";

// export const updateProgress = async (userId, workoutId, exerciseNumber, progress) => {
//   try {
//     const exerciseId = `${workoutId}_exercise${exerciseNumber}`;

//     // Ссылка на документ в коллекции "userProgress"
//     const progressRef = doc(db, "userProgress", userId, "exercises", exerciseId);
//     console.log("Trying to update progress:", userId, workoutId, exerciseNumber, progress);

//     // Добавляем или обновляем прогресс
//     await setDoc(progressRef, { progress }, { merge: true });

//     console.log("Прогресс обновлен успешно!");
//   } catch (error) {
//     console.error("Ошибка при обновлении прогресса:", error);
//   }
// };

// второй вариант
// import { ref, update } from "firebase/database";
// import { getDatabase } from "firebase/database";

// export const updateProgress = async (userId, workoutId, exerciseNumber, progress) => {
//   const db = getDatabase();
//   try {
//     const exerciseId = `${workoutId}_exercise${exerciseNumber}`;

//     // Ссылка на документ в коллекции "userProgress"
//     const progressRef = ref(db, "userProgress", userId, "exercises", exerciseId);
//     console.log("Trying to update progress:", userId, workoutId, exerciseNumber, progress);

//     // Обновляем прогресс
//     await update(progressRef, { progress });

//     console.log("Прогресс обновлен успешно!");
//   } catch (error) {
//     console.error("Ошибка при обновлении прогресса:", error);
//   }
// };

import { ref, update } from "firebase/database";
import { getDatabase } from "firebase/database";

export const updateProgress = async (userId, workoutId, exerciseNumber, progress) => {
  const db = getDatabase();
  try {
    const exerciseId = `${workoutId}_exercise${exerciseNumber}`;

    // Ссылка на документ в коллекции "userProgress"
    const userProgressRef = ref(db, "userProgress", userId);
    console.log(userProgressRef);

    // Добавляем или обновляем прогресс для конкретного упражнения
    await update(userProgressRef, { [exerciseId]: progress });

    console.log("Прогресс обновлен успешно!");
  } catch (error) {
    console.error("Ошибка при обновлении прогресса:", error);
  }
};
