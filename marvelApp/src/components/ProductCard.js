import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Helper from '../constants/Helper';
import LinearGradient from 'react-native-linear-gradient';
import Colors from "../constants/Colors"

export default function ProductCard({data, onSelect, onSelectProduct}) {
  
  return (
    <View
    style={{
      width: '100%',
      height: '100%',
    }}>
    <TouchableOpacity onPress={onSelectProduct}>
      <ImageBackground
        style={{
          width: Helper.width.full - 90,
          height: Helper.height.half + 80,
          alignSelf: 'center',
          justifyContent: 'flex-end',
        }}
        imageStyle={{borderRadius: 20}}
        source={{uri: data.image}}>
          <LinearGradient
            style={{
              height: 300,
              width: '100%',
              bottom: 0,
              position: 'absolute',
              alignItems: 'center',
              borderRadius: 10,
            }}
            colors={[
              'rgba(20,20,20,0.01)',
              'rgba(20,20,20,0.8)',
              'rgba(20,20,20,1)',
              'rgba(20,20,20,1)',
            ]}></LinearGradient>
          <View
            style={{
              width: Helper.width.full - 90,
              alignItems: 'center',
              justifyContent: 'space-evenly',
              marginBottom: 5,
            }}>
            <Text style={{marginHorizontal:4,fontSize: 18, color: 'white',textAlign:'center'}}>
               {data.title}
            </Text>
            <Text style={{fontSize: 16, color: Colors.grey,margin:4,fontSize: 18,textAlign:'center'}}>
               {data.description.substring(0, 60)}...
            </Text>
          </View>
      </ImageBackground>
    </TouchableOpacity>
  </View>
  );
}

