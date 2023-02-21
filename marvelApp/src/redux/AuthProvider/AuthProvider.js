import React, {useState,useEffect} from 'react';
import {Provider} from 'react-redux';
import {legacy_createStore as createStore} from 'redux';
import reducers from './reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [isAuthLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('@USER').then(
      userSessions => userSessions && setUser(JSON.parse(userSessions)),
      setAuthLoading(false),
    );
  }, []);

  const store = createStore(reducers,{user,isAuthLoading});
  return <Provider store={store}>{children}</Provider>;
};


export default AuthProvider;