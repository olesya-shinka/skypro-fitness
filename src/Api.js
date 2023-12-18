import { getDatabase, ref, query, get } from "firebase/database";
import { createAsyncThunk } from "@reduxjs/toolkit";

export async function getCourses() {
  const oSnapshot = await get(
    //5. функция get вернет 'снимок '- объект, хранящий добавленный документ и некоторые сведения о нем
    query(
      //4. вызовом функции query() преобразуем ссылку на новоый документ в запрос, который перададим функции get(), последняя  вернет снимок - объект, хранящий добавленный документ и некоторые сведения о нем
      ref(
        //2. полученную базу данных передаем первым параметром функции ref()
        getDatabase(), //1. сначала получаем объект  базы данных вызва функцию getDatabase() (первый параметр функции ref())
        `courses`
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
  //console.log("courses", oArr);
  return oArr;
}
//второй вариант получения данных из апи, более привычный для нас
export async function getCourses2() {
  const response = await fetch(
    "https://fitness-pro-d307e-default-rtdb.europe-west1.firebasedatabase.app/courses.json"
  );
  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const courses = await response.json();
  console.log(courses);
  return courses;
}

export async function getWorkouts() {
  const oSnapshot = await get(query(ref(getDatabase(), `workouts`)));
  const oArr = [];
  let oDeed;
  oSnapshot.forEach((oDoc) => {
    oDeed = oDoc.val();
    oDeed.key = oDoc.key;
    oArr.push(oDeed);
  });
  return oArr;
}

export const getUserProgress = (data, exercises) => {
  const progress = [];
  for (const name in data) {
    exercises.map((ex) =>
      ex.name === name
        ? progress.push({
            exercisesDone: data[name],
            quantity: ex.count,
            name: ex.name
          })
        : ""
    );
  }
  return progress;
};

export const addProgress = createAsyncThunk(
  "progress",
  async ({ workoutId, progress }, { extra: { databaseURL, api }, rejectWithValue }) => {
    try {
      const response = await databaseURL.patch(api.ADD_PROGRESS(workoutId), {
        progress
      });

      if (response.statusText !== "OK") {
        throw new Error("Что-то пошло не так");
      }
      const { data } = await response;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// ------------------------------------------------------
// ------------------------------------------------------

export const getProgress = async () => {
  const response = await fetch(
    "https://fitness-pro-d307e-default-rtdb.europe-west1.firebasedatabase.app/progress.json",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
  console.log(response);
};

export const postProgress = async ({ workouts_id }) => {
  const response = await fetch(
    "https://fitness-pro-d307e-default-rtdb.europe-west1.firebasedatabase.app/progress.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        workouts_id
      })
    }
  );
  console.log(response);
};
