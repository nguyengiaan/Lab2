import React from 'react'
import { StyleSheet,View,Text } from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialIcons'
import Proptypes from 'props-types';
import colors from '../ultility/colors'
const DetailListItem=({icon,title,subtitle})=>{
    return(
        <View style={styles.contentContainer} >
            <Text style={styles.title}>
                {title}
            </Text>
            {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
    )
}
export default DetailListItem
const styles=StyleSheet.create({
    borderContainer:{
        paddingLeft:24,
    },
    wrapper:{
        flexDirection:'row',
        paddingTop:16,
        paddingBottom:16,
        paddingRight:24,
        borderBottomColor:colors.grey,
        borderBottomWidth:StyleSheet.hairlineWidth,
    },
    container:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
    },
    contentContainer:{
        justifyContent:'center',
        flex:1,
    },
    title:{
        color:colors.black,
        fontWeight:'bold',
        fontSize:16,

    },
    subtitle:{
        color:colors.blue,
        fontSize:15,
        marginTop:4,
    }
});
