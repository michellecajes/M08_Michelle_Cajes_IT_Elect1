import React from ’ react ’;
import { View , Text } from ’ react - native ’;
 const UserCard = ( props ) = > {
return (
<View >
< Text > Name : { props . name } </ Text >
 < Text > Age : { props . age } </ Text >
</ View >
 ) ;
};
 const App = () = > {
 return (
 <View >
 < UserCard name =" Alice " age ={25} / >
 < UserCard name =" Bob " age ={