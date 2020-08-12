import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles'
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'
import Teacher from '../../interfaces/Teacher_interface';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

interface TeacherItemProps {
    teacher: Teacher;
    favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = (props) => {
    const { teacher, favorited } = props
    const [isfavorited, setIsFavorited] = useState(favorited)
    
    function handleLinkToWhatsapp() {
        api.post("connections", {
            user_id: teacher.id
        })
        .then(response => {
            console.log('inserida nova conexão');
        })
        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
    }

    async function handleToggleFavorited() {
        let favoritesArray = []
        const favorites = await AsyncStorage.getItem('favorites')        
        if(favorites) {
            favoritesArray = JSON.parse(favorites)
        }
        
        if(isfavorited) {
            const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
                return teacherItem.id === teacher.id
            })
            
            favoritesArray.splice(favoriteIndex, 1)
            setIsFavorited(false)
        } else {
            favoritesArray.push(teacher)
            setIsFavorited(true)
        }
        await AsyncStorage.setItem('favorites', favoritesArray.length > 0 ? JSON.stringify(favoritesArray) : '')
    }
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: teacher.avatar }}
                />

                <View style={styles.profileInfo}>
                <Text style={styles.name}>{ teacher.name }</Text>
                    <Text style={styles.subject}>{ teacher.subject }</Text>
                </View>
            </View>
            
            <Text style={styles.bio}>{ teacher.bio }</Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/Hora {'   '} 
                    <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
                </Text>
                
                <View style={styles.buttonsContainer}>
                    <RectButton 
                        style={[
                            styles.favoriteButton,
                            isfavorited ? styles.favorited: {}
                        ]}
                        onPress={handleToggleFavorited}
                    >
                        { isfavorited 
                            ? <Image source={unfavoriteIcon} />
                            : <Image source={heartOutlineIcon} /> 
                        }
                    </RectButton>

                    <RectButton 
                        style={styles.contactButton} 
                        onPress={handleLinkToWhatsapp}
                    >
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>    
    )
}

export default TeacherItem
