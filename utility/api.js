import React,{useState} from 'react'
import 'react-native-get-random-values';
import { v4 } from 'uuid';

const mapContact=contact=>{
    const{
        name,picture,phone,cell,email,
    }=contact;
    return {
        id :v4(),
        name:name.first+""+name.last,
        avatar:picture.large,
        phone,
        cell,
        email,
        favorite:Math.random()>=0.5
    }
}
export const fechRandomContact =async()=>{
    const [data,setdata]=useState([])
    const api= 'https://randomuser.me/api';
    fetch(api).then((res)=>res.json()).then((resjson)=>setdata(mapContact(resjson.results[0])))
    return data;
}
export const fectchContacts=async ()=>{
    const response =await fetch('https://randomuser.me/api/?results=100&seed=fullstackio');
    const contactData=await response.json()
    return contactData.results.map(mapContact)
}



