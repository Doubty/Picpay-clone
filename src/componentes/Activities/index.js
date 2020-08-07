import React from 'react'; 
import {
    Container,
    Header,
    Title,
    Card,
    CardHeader,
    Avatar,
    Description,
    Bold,
    CardBody,
    UserName,
    CardFooter,
    Details,
    Value,
    Divider,
    Date,
    Actions, 
    Option,
    OptionLabel,
    ContentAct,
    Selected,
    TextAct

} from './styles';
import {Feather, MaterialCommunityIcons, AntDesign} from '@expo/vector-icons'; 

import avatar from '../../images/avatar.png';


export default function Activities(){

    return (
   
        <Container> 
            
            <Header>
        <Title>Atividade</Title>

       <ContentAct>
        <Selected> Todas</Selected>
        <TextAct> Minhas</TextAct>

       </ContentAct>
            </Header>

            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você</Bold> Pagou a <Bold> @goantonio80</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>
                       Antônio Galvão
                    </UserName>
                </CardBody>

              <CardFooter>
              <Details>
                  <Value>RS 100,00</Value>
                  <Divider/>
                
                      <Feather name="lock" color="#ccc" size={14} />
                     <Date> Há 2 anos</Date>
                 
              </Details>

              <Actions>
                  <Option>
                      <MaterialCommunityIcons name="comment-outline" size={14} color="#fff" />
                      <OptionLabel>0</OptionLabel>
                  </Option>
                  <Option>
                      <AntDesign name="hearto" size={14} color="#fff" />
                      <OptionLabel>0</OptionLabel>
                  </Option>
              </Actions>

              </CardFooter>

            </Card>
        </Container>
    );
}