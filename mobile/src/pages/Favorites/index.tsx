import React from 'react';
import { 
    View, 
    Image, 
    Text
} from 'react-native';

import styles from './styles'
import Header from '../../components/Header'

function Favorites() {
    return (
        <View style={styles.container}>
            <Header title="Meus proffys favoritos" />
        </View>
    )
}

export default Favorites