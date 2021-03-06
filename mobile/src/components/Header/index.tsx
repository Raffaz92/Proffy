import React, { ReactNode } from 'react';

import { View, Image, Text } from 'react-native'
import styles from './styles';
import { BorderlessButton } from 'react-native-gesture-handler'

import logoImg from '../../assets/images/logo.png'
import backIcon from '../../assets/images/icons/back.png'
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
    title: string;
    headerRight?: ReactNode
}

const Header: React.FC<HeaderProps> = (props) => {
    const navigation = useNavigation()
    const { title, children, headerRight } = props
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
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                {headerRight}
            </View>
            { children }
        </View>
    )
}

export default Header