import React from 'react';
import {Text} from 'react-native';
import {Wrapper, Header, BalanceContainer,BalanceTitle, Balance, Container} from "./styles";
import { MaterialCommunityIcons, AntDesign} from '@expo/vector-icons'; 
import Suggestions from '../../componentes/Suggestions';
import Activities from '../../componentes/Activities';
import Tips from '../../componentes/Tips';
import Banner from '../../componentes/Banner';
export default function Home(){


    return (
    
    <Wrapper>   
        <Container>
         <Header>
         <MaterialCommunityIcons name="qrcode-scan" color="#10c86c" size={30} />

      <BalanceContainer>

        <BalanceTitle>Meu Saldo</BalanceTitle>
        <Balance>RS 0,00</Balance>
      </BalanceContainer>

        
           <AntDesign name="gift" color="#10c86c" size={30}/>
         </Header>

    <Suggestions/>
    <Activities/>
     <Tips/>
        <Banner/>

         </Container>
     </Wrapper>
 
    
    );
}