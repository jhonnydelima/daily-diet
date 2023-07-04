import { MealStorageDTO } from '@storage/meal/MealStorageDTO';

export function generate(meals: MealStorageDTO[]) {
	const dates = getDates(meals);
	const sortedList = sortMealsByDate(dates, meals);
	return sortedList;
}

function getDates(meals: MealStorageDTO[]) {
	const dates: string[] = [...new Set(meals.map(({ date }) => date))].sort();
  return dates;
}

function sortMealsByDate(dates: string[], meals: MealStorageDTO[]) {
	const sorted = dates.map(date => {
    return {
      date: date,
      data: meals
        .filter(meal => meal.date === date)
        .sort((a, b) => {
          if (a.time < b.time) {
            return -1;
          }
          if (a.time > a.time) {
            return 1;
          }
        
          return 0;
        })
    }
  });
  
  return sorted;
}