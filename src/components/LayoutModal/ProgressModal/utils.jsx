export const getCurrentExercises = () => {};

export const getUserProgress = (data, exercises) => {
  const progress = [];
  for (const name in data) {
    exercises.map((ex) =>
      ex.name === name
        ? progress.push({
            exercisesDone: data[name],
            count: ex.count,
            name: ex.name
          })
        : ""
    );
  }

  return progress;
};

export const getCurrentCourseDetails = (userProfile, courseName, exercises) => {
  let currentCourseId;
  let currentCourse;
  let currentWorkoutIndex;

  for (const courseId in userProfile) {
    if (userProfile[courseId].name === courseName) {
      currentCourseId = courseId;
      currentCourse = userProfile[courseId];
    }
  }

  currentCourse.workouts.map((wo, woIndex) =>
    wo.exercises.map((ex) =>
      exercises.map((userEx) => (userEx.name === ex.name ? (currentWorkoutIndex = woIndex) : ""))
    )
  );

  return currentCourseId, currentWorkoutIndex;
};
