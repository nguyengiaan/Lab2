import React,{useState,useEffect} from 'react'
import {StyleSheet,View,Text,Image} from 'react-native'
export const Profile =({navigation,route})=>
{
    return(
        <View style={{flex:1,flexDirection:'column'}} >
            <View style={{flex:1,backgroundColor:'#99FFFF',width:400,height:1000,alignItems:'center',justifyContent:'center'}}>
                <Image source={{uri:avatar} } style={{width: 170, height: 150 ,borderRadius:100 ,marginBottom:30}}/>
                <Text style={style.Text_style}>route.params.name</Text>
                <Text style={style.Text_style}>route.params.phone</Text>
            </View>
            <View style={{flex:1.5,backgroundColor:'white'}}>
            <Text style={style.Text_style}>Email:</Text>
            <Text style={style.Text_style}>NguyenA@gmail.FlatListComponent</Text>
                <Text style={style.Text_style}>Số điện thoại</Text>
                <Text style={style.Text_style}>12356484654</Text>
                <Text style={style.Text_style}>Personal</Text>
                <Text style={style.Text_style}>hehehloal</Text>
            </View>
        </View>
    )
 }
const style=StyleSheet.create({
  Text_style:{
    marginBottom:20,
    fontWeight:'bold',
    color:'black'
  }, 
})