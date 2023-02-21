import {
  View,
  Text,
  Image,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React from 'react';
import useFetch from '../hooks/useFetch';
import Loading from '../components/Loading';
import Icon from 'react-native-vector-icons/Entypo';
import Colors from '../constants/Colors';
import Helper from '../constants/Helper';

const URL = 'https://fakestoreapi.com/products/';

export default function ProductDetail({route, navigation}) {
  const {id} = route.params;
  const {loading, data} = useFetch(URL + id);
  console.log(id);
  return (
    <>
      {loading ? (
        <View style={styles.loading}>
          <Loading />
        </View>
      ) : (
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <View style={styles.imageCont}>
              <ImageBackground
                source={{uri: data.image}}
                style={styles.background}
                imageStyle={styles.backImage}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <View style={styles.backIconCont}>
                    <Icon name="chevron-thin-left" size={30} color={'white'} />
                  </View>
                </TouchableOpacity>
              </ImageBackground>
            </View>
            <View style={{flex: 1, margin: 12}}>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 12,
                  alignItems: 'center',
                }}>
                <View style={{marginLeft: 15}}>
                  <Text style={styles.boldText}>Price: {data.price} $</Text>
                  <Text style={styles.greyText}>
                    Category : {data.category}
                  </Text>
                </View>
              </View>
              <View style={{margin: 12, marginTop: 25}}>
                <Text
                  style={[
                    styles.boldText,
                    {alignSelf: 'center', textAlign: 'center'},
                  ]}>
                  {data.title} $
                </Text>
                <View style={{marginVertical: 8}}>
                  <Text style={styles.greyText}>s
                    {data.description}
                    {data.description}
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.firstly,
    flex: 1,
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: Colors.firstly,
  },
  imageCont: {
    flex: 2,
    alignItems: 'center',
  },
  background: {
    width: Helper.width.full - 70,
    height: Helper.height.half + 60,
  },
  backImage: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  boldText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
  },
  greyText: {
    fontSize: 16,
    color: 'grey',
    fontWeight: '500',
  },
  backIconCont: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: Colors.grey,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
