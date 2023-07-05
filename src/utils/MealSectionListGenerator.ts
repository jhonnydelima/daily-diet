import { MealStorageDTO } from '@storage/meal/MealStorageDTO';

export class MealSectionListGenerator {
  meals: MealStorageDTO[];
  dates: string[];

  constructor(meals: MealStorageDTO[]) {
    this.meals = meals;
    this.dates = this.getDates();
  }

  generate() {
    const sortedList = this.sortMealsByDate();
    return sortedList;
  }

  private getDates() {
    const dates: string[] = [...new Set(this.meals.map(({ date }) => date))].sort();
    return dates;
  }

  private sortMealsByDate() {
    const sorted = this.dates.map(date => {
      return {
        date: date,
        data: this.meals
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
}