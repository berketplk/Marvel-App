import {
    Dimensions,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const width = {
    full: windowWidth,
    half: windowWidth/2,
    quarter: windowWidth/4,
}

const height = {
    full: windowHeight,
    half: windowHeight/2,
    quarter: windowHeight/4,
}

export default {
    width,
    height,
}
