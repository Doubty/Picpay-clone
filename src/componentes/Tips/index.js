import React from 'react';
import {Container, Option, Title, Img} from './styles';

import img8 from '../../images/08.png';
import img9 from '../../images/09.png';
import img10 from '../../images/10.png';
import img11 from '../../images/11.png';
import img12 from '../../images/12.png';



export default function Tips(){

    return (
    
    <Container>
     <Option bgColor="#172c4a"> 
         <Title> Pague suas contas sem sair de casa</Title>
         <Img source={img8}/>
     </Option>

     <Option bgColor="#6a0159"> 
         <Title> Pague suas contas sem sair de casa</Title>
         <Img source={img9}/>
     </Option>

     <Option bgColor="#4139c8"> 
         <Title> Pague suas contas sem sair de casa</Title>
         <Img source={img10}/>
     </Option>

     <Option bgColor="#00ab4b"> 
         <Title> Pague suas contas sem sair de casa</Title>
         <Img source={img11}/>
     </Option>

     <Option bgColor="#ba2f76"> 
         <Title> Pague suas contas sem sair de casa</Title>
         <Img source={img12}/>
     </Option>

    </Container>);
}