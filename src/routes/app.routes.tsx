import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Feedback } from '@screens/Feedback';
import { Home } from '@screens/Home';
import { Meal } from '@screens/Meal';
import { NewMeal } from '@screens/NewMeal';
import { Summary } from '@screens/Summary';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name='home'
        component={Home}
      />
      <Screen
        name='summary'
        component={Summary}
      />
      <Screen
        name='new'
        component={NewMeal}
      />
      <Screen
        name='feedback'
        component={Feedback}
      />
      <Screen
        name='meal'
        component={Meal}
      />
    </Navigator>
  );
}