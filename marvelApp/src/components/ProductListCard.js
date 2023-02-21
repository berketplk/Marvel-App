import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Helper from '../constants/Helper';
import Images from '../constants/Images';
import Icon from 'react-native-vector-icons/Entypo';

export default function ProductListCard({data,onSelectProduct}) {
  return (
    <View style={{marginVertical: 25}}>
      <View style={{marginBottom: 15, width: Helper.width.full - 20}}>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 12,
              alignItems: 'center',
            }}>
            <View style={{marginLeft: 15}}>
              <Text style={{fontSize: 20, color: 'white'}}>{data.title}</Text>
              <Text style={{fontSize: 16, color: 'grey'}}>
                {data.description.substring(0, 60)}...
              </Text>
            </View>
          </View>
      </View>
      <TouchableWithoutFeedback onPress={onSelectProduct}>
        <ImageBackground
          style={{
            width: Helper.width.full - 30,
            alignSelf: 'center',
            height: 260,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}
          source={{uri: data.image}}
          imageStyle={{borderRadius: 20}}>
          <ImageBackground
            style={{right: 15, bottom: 10}}
            source={Images.bckImage.blur}
            imageStyle={{borderRadius: 12}}>
            <View
              style={{
                backgroundColor: 'transparent',
                width: 130,
                height: 50,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <Text style={{fontSize: 20, color: 'white'}}>{data.price} $</Text>
            </View>
          </ImageBackground>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
}
