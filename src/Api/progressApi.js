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

import { push, ref, set } from "firebase/database";
import { query, get } from "firebase/database";
import { getDatabase } from "firebase/database";

export const updateProgress = async (userId, workoutId, exerciseNumber, progress) => {
  const db = getDatabase();
  try {
    const exerciseId = `${workoutId}_exercise${exerciseNumber}`;

    // Ссылка на документ в коллекции "userProgress"
    const userProgressRef = ref(db, "userProgress", userId);

    // Добавляем или обновляем прогресс для конкретного упражнения
    // await update(userProgressRef, { [exerciseId]: progress });
    await set(
      userProgressRef,
      {
        [userId]: {
          [exerciseId]: progress
        }
      },
      { merge: true }
    );

    console.log("Прогресс обновлен успешно!");
  } catch (error) {
    console.error("Ошибка при обновлении прогресса:", error);
  }
};

export async function getProgressAll() {
  const oSnapshot = await get(
    //5. функция get вернет 'снимок '- объект, хранящий добавленный документ и некоторые сведения о нем
    query(
      //4. вызовом функции query() преобразуем ссылку на новоый документ в запрос, который перададим функции get(), последняя  вернет снимок - объект, хранящий добавленный документ и некоторые сведения о нем
      ref(
        //2. полученную базу данных передаем первым параметром функции ref()
        getDatabase(), //1. сначала получаем объект  базы данных вызва функцию getDatabase() (первый параметр функции ref())
        `userProgress`
      )
    )
  ); //3. вторым параметром функции ref() указываем путь, по которому будет храниться база курсов
  const oArr = [];
  let oDeed;
  oSnapshot.forEach((oDoc) => {
    //6. перебираем элементы полученного 'снимка ' с помощью метода forEach()
    oDeed = oDoc.val(); // 7. извлечь сам документ, представленный в виде простого объекта из 'снимка 'можно вызва метод val()
    oDeed.key = oDoc.key; //8. поскольку извлеченный из базы документ не содержит идентификатора, последний получаем отдельно , обратившись к свойству key объекта ссылки и заносим в одноименное свой-во документа
    oArr.push(oDeed); //9. заносим каждое дело (в нашем случае курс) в заранее созданный массив, который возвращаем в качестве результата
  });
  return oArr;
}

export const updateProgress2 = async (userId, workoutId, exerciseNumber, progress) => {
  const oRef = await push(
    ref(getDatabase(), `workouts/${workoutId}/exercises/${exerciseNumber}/progress/${userId}`)
  );
  await set(oRef, progress);
  const oSnapshot = await get(query(oRef));
  const oArr = [];
  let oDeed;
  oSnapshot.forEach((oDoc) => {
    //6. перебираем элементы полученного 'снимка ' с помощью метода forEach()
    oDeed = oDoc.val(); // 7. извлечь сам документ, представленный в виде простого объекта из 'снимка 'можно вызва метод val()
    // oDeed.key = oDoc.key; //8. поскольку извлеченный из базы документ не содержит идентификатора, последний получаем отдельно , обратившись к свойству key объекта ссылки и заносим в одноименное свой-во документа
    oArr.push(oDeed); //9. заносим каждое дело (в нашем случае курс) в заранее созданный массив, который возвращаем в качестве результата
  });
  return oArr;
};

// export const updateProgress3 = async ({ userId, workoutId, exerciseNumber, progress }) => {
//   const db = getDatabase();
//   try {
//     //получаем ссылку на объект курса в firebase
//     const courseRef = ref(
//       db,
//       `workouts/${workoutId}/exercises/${exerciseNumber}/progress/${userId}`
//     );
//     console.log("courseRef", courseRef);

//     const snapshot = await get(courseRef);
//     const courseFirebase = snapshot.val();

//     // courseFirebase.progress = [progress];

//     if (courseFirebase && Array.isArray(courseFirebase)) {
//       courseFirebase.push(progress);
//     } else {
//       courseFirebase = [progress];
//     }

//     // Обновляем объект курса в базе данных
//     await update(courseRef, courseFirebase);
//   } catch (error) {
//     console.error("Ошибка при добавлении пользователя курс", error);
//   }
// };
