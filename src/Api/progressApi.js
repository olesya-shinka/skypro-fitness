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
