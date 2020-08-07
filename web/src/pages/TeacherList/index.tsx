import React from 'react';

import './styles.css'
import Header from '../../components/Header'
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input';
import Select from '../../components/Select';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <Header title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <Select 
                        label="Matéria" 
                        name="subject"
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Ciências', label: 'Ciências' },
                            { value: 'Educação Física', label: 'Educação Física' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'Química', label: 'Química' },
                            { value: 'História', label: 'História' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Português', label: 'Português' },
                            { value: 'Inglês', label: 'Inglês' }
                        ]}
                    />
                     <Select
                        name="week_day"
                        label="Dia da Semana"
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' },
                        ]}
                    />
                    <Input label="Hora" name="time" type="time" />
                </form>
            </Header>
            
            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList