import React, { useState } from 'react';
import './styles.css'
import Header from '../../components/Header';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

function TeacherForm() {
    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: "", to: "" }
    ])

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: "", to: "" }
        ])
    }

    return (
        <div id="page-teacher-form" className="container">
            <Header 
                title="Que incrível que você quer dar aulas." 
                description="O primeiro passo é preencer este formulário de inscrição."
            />
            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input label="Nome completo" name="name" />
                    <Input label="Avatar" name="avatar" />
                    <Input label="Whatsapp" name="whatsapp" type="time" />
                    <Textarea label="Biografia" name="bio"/>
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>
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
                    <Input label="Custo da sua hora por aula" name="cost" />
                </fieldset>

                <fieldset>
                    <legend>
                        Horários disponíveis
                        <button type="button" onClick={addNewScheduleItem} >+ Novo horário</button>
                    </legend>
                    {
                        scheduleItems.map((item, index) => {
                            return (
                                <div key={`${item.week_day}${index}`} className="schedule-item">
                                    <Select
                                        name="week_day"
                                        label="Dia da Semana"
                                        value={item.week_day}
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
                                    <Input name="from" label="Das" type="time" />
                                    <Input name="to" label="Até" type="time" />
                                </div>
                            )
                        })
                    }
                    
                </fieldset>
                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante"/>
                        Importante!<br />
                        Preencha todos os dados
                    </p>
                    <button type="button">Salvar Cadastro</button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm