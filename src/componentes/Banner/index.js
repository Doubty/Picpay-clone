import React from 'react'; 
import {Container, Details, Img, Title, Description} from './styles';
import img13 from '../../images/13.png';
export default function Banner(){
    return(
    <Container>
   <Details> 
     <Title>Cobre um amigo</Title>
     <Description>Mantenha sus parcerias em dia, use o Picpay para fazer suas compras </Description>
   </Details>
   <Img source={img13}  />

    </Container>);
}