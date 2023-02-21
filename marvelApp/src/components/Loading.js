import React from "react";
import Lottie from 'lottie-react-native';


function Loading() {
    return <Lottie style={{width:300,height:300}} source={require('../constants/lotties/loading.json')} autoPlay  />
}

export default Loading;