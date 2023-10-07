import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { fectchContacts } from '../utility/api';
import { FlatListComponent } from 'react-native';
import 'react-native-get-random-values';
import colors from '../utility/colors';
import { v4 } from 'uuid';
import { Profile } from './Profile';

const Contact = ({navigation}) => {
  const KeyExtractor = ({ phone }) => phone;
  const mapContact = (contact) => {
    const { name, picture, phone, cell, email } = contact;
    return {
      id: v4(),
      name: name.first + ' ' + name.last,
      avatar: picture.large,
      phone,
      cell,
      email,
      favorite: Math.random() >= 0.5,
    };
  };
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const listdata = () => {
    const api = 'https://randomuser.me/api/?results=100&seed=fullstackio';
    fetch(api)
      .then((res) => res.json())
      .then((resjson) => setContacts(resjson.results.map(mapContact)))
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    listdata();
  }, []);

  const renderitem = ({ item }) => {
    const { name, avatar, phone } = item;
    return (
      <TouchableOpacity
        underlayColor={colors.grey}
        style={styles.container}
        onPress={() => {
          // Define onPress behavior here
          navigation.navigate('Profile',{ screen: 'Profile',params:{
            name,avatar,phone
          } })
        }}>
        <View style={styles.contactInfor}>
          <Image style={styles.avatar} source={{ uri: avatar }} />
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{phone}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList data={contacts} keyExtractor={KeyExtractor} renderItem={renderitem} />
    </View>
  );
};

export default Contact;
const styles=StyleSheet.create({
    container:{
        padding:24,
    },
    contactInfor:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        paddingTop:16,
        paddingBottom:16,
        paddingRight:24,
        borderBottomColor:colors.grey,
        borderBottomWidth:StyleSheet.hairlineWidth,

    },
    avatar:{
        borderRadius:22,
        width:44,
        height:44,

    },
    details:{
        justifyContent:'center',
        flex:1,
        marginLeft:20,
    },
    title:{
        justifyContent:'center',
        flex:1,
        marginLeft:20,
    },
    title:{
        color:colors.black,
        fontWeight:'bold',
        fontStyle:16,

    },
    subtitle:{
        color:colors.blue,
        fontSize:15,
        marginTop:4,
    }
})