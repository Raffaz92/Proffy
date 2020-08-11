import React from 'react';

import { View, Image, Text } from 'react-native'
import styles from './styles';
import { BorderlessButton } from 'react-native-gesture-handler'

import logoImg from '../../assets/images/logo.png'
import backIcon from '../../assets/images/icons/back.png'
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = (props) => {
    const navigation = useNavigation()
    const { title } = props
    function handleGoBack() {
        navigation.navigate('Landing')
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={backIcon}  resizeMode="contain" />
                </BorderlessButton>
                <Image source={logoImg} resizeMode="contain" />
            </View>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default Header