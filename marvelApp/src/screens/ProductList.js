import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../constants/Colors';
import Loading from '../components/Loading';
import useFetch from '../hooks/useFetch';
import ProductListCard from '../components/ProductListCard';
import Helper from '../constants/Helper';
import filter from 'lodash.filter';

const URL = 'https://fakestoreapi.com/products/';

export default function ProductList({navigation}) {
  const {data, loading} = useFetch(URL);
  const [query, setQuery] = useState('');
  
  
  const handleProductSelect = id => {
    navigation.navigate('ProductDetail', {id});
  };

  const renderCards = ({item}) => (
    <ProductListCard
      data={item}
      onSelectProduct={() => handleProductSelect(item.id)}
    />
  );
  function renderHeader() {
    return (
      <View>
        <TextInput
          style={styles.searchBar}
          placeholder={'Search'}
          placeholderTextColor={Colors.secondGrey}
          value={query}
          onChangeText={queryText => handleSearch(queryText)}
        />
      </View>
    );
  }
  const handleSearch = text => {
    const formattedQuery = text.toLowerCase();
    const filteredData = filter(data, user => {
      return contains(user, formattedQuery);
    });
    setData(filteredData);
    setQuery(text);
  };

  const contains = ({p}, query) => {
    const {title} = p;

    if (title.includes(query)) {
      return true;
    }

    return false;
  };
  return (
    <SafeAreaView style={{backgroundColor: Colors.firstly, flex: 1}}>
      {loading ? (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Loading />
        </View>
      ) : (
        <>
          <View style={styles.headerCont}>
            <Text style={styles.headerText}>Product List</Text>
          </View>
          <View style={{flex: 8}}>
            <FlatList
              data={data}
              ListHeaderComponent={renderHeader}
              renderItem={renderCards}
              keyExtractor={item => item.id}
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

/*



*/

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
  searchBar: {
    alignSelf: 'center',
    width: Helper.width.full - 20,
    height: 50,
    borderRadius: 12,
    backgroundColor: Colors.secondly,
    padding: 8,
    color: Colors.grey,
  },
});
