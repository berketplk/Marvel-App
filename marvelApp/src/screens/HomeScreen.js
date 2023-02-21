import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
import Loading from '../components/Loading';
import useFetch from '../hooks/useFetch';
import ProductCard from '../components/ProductCard';
import Carousel from 'react-native-snap-carousel';
import Helper from '../constants/Helper';

const URL = 'https://fakestoreapi.com/products/';
export default function HomeScreen({navigation}) {
  const {data, loading} = useFetch(URL);

  const handleProductSelect = id => {
    navigation.navigate('ProductDetail', {id});
  };

  const renderCards = ({item}) => (
    <ProductCard
      data={item}
      onSelectProduct={() => handleProductSelect(item.id)}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <View style={styles.loading}>
          <Loading />
        </View>
      ) : (
        <>
          <View style={styles.headerCont}>
            <Text style={styles.headerText}>Home</Text>
          </View>
          <View style={{flex: 8}}>
            <ScrollView>
              <View style={styles.cardsCont}>
                <View style={{marginLeft: 12}}>
                  <TouchableOpacity onPress={()=> navigation.navigate('ProductList')}>
                    <View>
                      <Text style={styles.cardsTitle}>Product List</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <Carousel
                  data={data}
                  renderItem={renderCards}
                  sliderWidth={Helper.width.full}
                  itemWidth={Helper.width.full - 90}
                />
              </View>
            </ScrollView>
          </View>
        </>
      )}
    </SafeAreaView>
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
  headerCont: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 12,
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 26,
  },
  cardsTitle: {
    color: 'white',
    fontSize: 18,
    marginVertical: 12,
  },
  cardsCont: {
    marginVertical: 12,
  },
});
