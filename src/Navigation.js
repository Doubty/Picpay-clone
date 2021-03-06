import React from 'react'; 
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AntDesign, Ionicons} from '@expo/vector-icons';
import PayButton from './componentes/PayButton';
import HomePage from './pages/Home';
import PayPage from './pages/Pay';
import WalletPage from './pages/Wallet';

const Tab = createBottomTabNavigator();

const icons = {

    Home: {
        lib: AntDesign, 
        name: 'home'
    }, 

    Wallet: {
        lib: AntDesign, 
        name: 'creditcard'
    }

}

export default function Nativation(){


    return (  
       
        <Tab.Navigator 
        
        screenOptions={({ route, navigation}) => ({ 
              
            tabBarIcon: ({ color, size, focused}) => {
               
                if(route.name === "Pay"){
                    return <PayButton  
                     onPress={() => navigation.navigate('Pay')}
                     focused={focused}
                    />
                }
               const {lib: Icon, name} = icons[route.name];
               return <Icon name={name} size={size} color={color} />; 
            },
        })}

        tabBarOptions={{
            style: {
                backgroundColor: "#131418",
                borderTopColor: 'rgba(255,255,255,0.2)'
            }, 
            activeTintColor: '#fff',
            inactiveTintColor: '#92929c'
        }}
        
        >

         <Tab.Screen  name="Home" component={HomePage} options={{ title: "Inicio"}} />
         <Tab.Screen  name="Pay" component={PayPage}  options={{ title: ""}} />
         <Tab.Screen  name="Wallet" component={WalletPage} options={{ title: "Carteira"}} />
         
      


        </Tab.Navigator>

    );
}