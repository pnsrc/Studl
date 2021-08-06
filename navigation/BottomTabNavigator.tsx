import { Ionicons, Fontisto, FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import Tab4Screen from '../screens/Tab4Screen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList, TabThreeParamList, Tab4ParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Дневник.РУ"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome size={25} name="book" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Educon"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome size={25} name="pencil-square" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="EXPEREMENTAL"
        component={Tab4Navigator}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome size={25} name="gear" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="О приложении"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => <Fontisto size={25} name="laboratory" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Дневник.Ру' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Educon' }}
      />
    </TabTwoStack.Navigator>
  );
}
const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="TabThreeScreen"
        component={TabThreeScreen}
        options={{ headerTitle: 'О приложении' }}
      />
    </TabThreeStack.Navigator>
  );
}

const Tab4Stack = createStackNavigator<TabThreeParamList>();

function Tab4Navigator() {
  return (
    <Tab4Stack.Navigator>
      <Tab4Stack.Screen
        name="Tab4Screen"
        component={Tab4Screen}
        options={{ headerTitle: 'EXPEREMENTAL' }}
      />
    </Tab4Stack.Navigator>
  );
}

