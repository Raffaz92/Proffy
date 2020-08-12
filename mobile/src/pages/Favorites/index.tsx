import React, { useState } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

import styles from './styles'
import Header from '../../components/Header'
import TeacherItem from '../../components/TeacherItem';
import Teacher from '../../interfaces/Teacher_interface';

function Favorites() {
    const [favorites, setFavorites] = useState([]);

    async function loadFavorites(){
        const favoritedTeachers = await AsyncStorage.getItem('favorites');
        if(favoritedTeachers) {
            setFavorites(JSON.parse(favoritedTeachers));
        } else {
            setFavorites([])
        }
    }

    useFocusEffect(() => {
        loadFavorites();
    });

    return (
        <View style={styles.container}>
            <Header title='Meus proffys favoritos.'/>

            {favorites.length > 0 ? (
                <ScrollView
                    style={styles.teacherList}
                    contentContainerStyle={{
                        paddingHorizontal: 16,
                        paddingBottom: 16,
                    }}
                >
                    {favorites.map((teacher: Teacher) => {
                        return (
                            <TeacherItem
                                key={teacher.id}
                                teacher={teacher}
                                favorited
                            />
                        )
                    })}
                </ScrollView>
            ) : (
                <View style={styles.emptyTeacher}>
                    <Text style={styles.emptyTeacherText}>Nenhum proffy favoritado.</Text>
                </View>
            )}

        </View>
    );
}

export default Favorites;