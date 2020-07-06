import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Login from '~/pages/Login';
import Profile from '~/pages/Profile';
import Dashboard from '~/pages/Deliveries/Dashboard';
import Detail from '~/pages/Deliveries/Detail';
import Problem from '~/pages/Deliveries/Problem';
import ViewProblems from '~/pages/Deliveries/ViewProblems';
import ConfirmDelivery from '~/pages/Deliveries/ConfirmDelivery';

const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabDeliveries({ navigation }) {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTintColor: '#333',
        headerTitleStyle: {
          alignSelf: 'center',
        },
        headerLeftContainerStyle: {
          marginLeft: 20,
        },
      }}
      initialRouteName="Dashboard"
    >
      <AppStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
          headerTitleStyle: {
            marginLeft: 20,
          },
        }}
      />
      <AppStack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#fff',
          },
          headerTitle: 'Detalhes da encomenda',
          headerLeft: () => (
            <>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Dashboard');
                }}
              >
                <Icon name="chevron-left" size={25} color="#FFF" />
              </TouchableOpacity>
            </>
          ),
        }}
      />
      <AppStack.Screen
        name="Problem"
        component={Problem}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#fff',
          },
          headerTitle: 'Informar Problema',
          headerLeft: () => (
            <>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Detail');
                }}
              >
                <Icon name="chevron-left" size={25} color="#FFF" />
              </TouchableOpacity>
            </>
          ),
        }}
      />
      <AppStack.Screen
        name="ViewProblems"
        component={ViewProblems}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#fff',
          },
          headerTitle: 'Visualizar problemas',
          headerLeft: () => (
            <>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Detail');
                }}
              >
                <Icon name="chevron-left" size={25} color="#FFF" />
              </TouchableOpacity>
            </>
          ),
        }}
      />
      <AppStack.Screen
        name="ConfirmDelivery"
        component={ConfirmDelivery}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#fff',
          },
          headerTitle: 'Confirmar entrega',
          headerLeft: () => (
            <>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Detail');
                }}
              >
                <Icon name="chevron-left" size={25} color="#FFF" />
              </TouchableOpacity>
            </>
          ),
        }}
      />
    </AppStack.Navigator>
  );
}

export default Rotas = ({ isSignedIn = false, navigation }) => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{ cardStyle: { backgroundColor: '#f0f0f5' } }}
      >
        {isSignedIn ? (
          <AppStack.Screen name="Home">
            {() => (
              <Tab.Navigator
                screenOptions={({ route }) => ({
                  unmountOnBlur: true,
                  tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'TabDeliveries') {
                      iconName = focused ? 'menu' : 'menu';
                    } else if (route.name === 'Profile') {
                      iconName = focused ? 'person' : 'person';
                    }
                    return <Icon name={iconName} size={size} color={color} />;
                  },
                })}
                tabBarOptions={{
                  keyboardHidesTabBar: true,
                  activeTintColor: '#7159c1',
                  inactiveTintColor: '#999',
                  style: {
                    backgroundColor: '#fff',
                  },
                }}
              >
                <Tab.Screen
                  name="TabDeliveries"
                  component={TabDeliveries}
                  options={({ route }) => ({
                    tabBarLabel: 'Entregas',
                  })}
                />

                <Tab.Screen
                  name="Profile"
                  component={Profile}
                  options={{
                    tabBarLabel: 'Meu perfil',
                  }}
                />
              </Tab.Navigator>
            )}
          </AppStack.Screen>
        ) : (
          <AppStack.Screen name="Login" component={Login} />
        )}
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
