import React from 'react';
import { 
    View, 
    Image, 
    Text
} from 'react-native';

import styles from './styles'
import Header from '../../components/Header'

function TeacherList() {
    return (
        <View style={styles.container}>
            <Header title="Proffys Disponíveis" />
        </View>
    )
}

export default TeacherList