import React, { useState, useEffect } from 'react';
import { 
    View, 
    Text,
    ScrollView,
    TextInput,
    Animated
} from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'

import AsyncStorage from '@react-native-community/async-storage'

import styles from './styles'
import Header from '../../components/Header'
import TeacherItem from '../../components/TeacherItem';
import api from '../../services/api';

import Teacher from '../../interfaces/Teacher_interface';
import { useFocusEffect } from '@react-navigation/native';

function TeacherList() {
    const opacityValue = new Animated.Value(0);
    const [isFiltersVisible, setIsFiltersVisible] = useState(true)
    const [subject, setSubject] = useState('Química');
    const [week_day, setWeekDay] = useState('1');
    const [time, setTime] = useState('15:00');
    const [teachers, setTeachers] = useState([])
    const [favorites, setFavorites] = useState<number[]>([])

    useEffect(() => {
        Animated.timing(opacityValue, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true
        }).start();
    }, [isFiltersVisible])

    useFocusEffect(() => {
        // loadFavorites()
        // loadTeachers()    
    })

    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible)
    }

    async function loadFavorites() {
        const favorites = await AsyncStorage.getItem('favorites')        
        if(favorites) {
            const favoritedTeachers = JSON.parse(favorites)
            const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => teacher.id)        
            setFavorites(favoritedTeachersIds) 
        }
    }

    async function loadTeachers() {
        const response = await api.get("classes",{
            params: {
                subject, week_day, time
            }
        })
        setIsFiltersVisible(false)
        setTeachers(response.data);
    }

    function handleFiltersSubmit() {
        loadFavorites()
        loadTeachers()
    }

    return (
        <View style={styles.container}>
            <Header 
                title="Proffys Disponíveis" 
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather name="filter" size={25} color={isFiltersVisible ? '#000' : "#fff"} />
                    </BorderlessButton>
                )}
            >
                {isFiltersVisible && (
                    <Animated.View style={[styles.searchForm, { opacity: opacityValue }]}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput
                            value={subject}
                            onChangeText={text => setSubject(text)}
                            placeholderTextColor="#c1bccc" 
                            style={styles.input}
                            placeholder="Qual a matéria"
                        />
                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput
                                    value={week_day}
                                    onChangeText={text => setWeekDay(text)}
                                    placeholderTextColor="#c1bccc" 
                                    style={styles.input}
                                    placeholder="Qual o dia?"
                                />
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput
                                    value={time}
                                    onChangeText={text => setTime(text)}
                                    placeholderTextColor="#c1bccc" 
                                    style={styles.input}
                                    placeholder="Qual horário?"
                                />
                            </View>
                        </View>

                        <RectButton 
                            style={styles.searchButton}
                            onPress={handleFiltersSubmit}
                        >
                            <Text style={styles.searchButtonText}>Filtrar</Text>
                        </RectButton>
                    </Animated.View>
                )}
                
            </Header>

            {teachers.length > 0 ? (
                 <ScrollView
                 style={styles.teacherList}
                 contentContainerStyle={{
                     paddingHorizontal: 16,
                     paddingBottom: 16
                 }}
             >
                {teachers.map((teacher: Teacher) => {
                    return (
                        <TeacherItem 
                            key={teacher.id} 
                            teacher={teacher} 
                            favorited={favorites.includes(teacher.id)}
                        /> 
                    )
                })}
             </ScrollView>
            ) : (
                <View style={styles.emptyTeacher}>
                    <Text style={styles.emptyTeacherText}>Nenhum proffy listado.</Text>
                </View>
            )}
           
        </View>
    )
}

export default TeacherList