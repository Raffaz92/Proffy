import React from 'react';
import './styles.css'
import wppIcon from '../../assets/images/icons/whatsapp.svg'
import api from '../../services/api';

interface TeacherItemProps {
    teacher: {
        id: number,
        name: string,
        avatar: string,
        subject: string, 
        bio: string, 
        cost: number,
        whatsapp: string
    }
}

function TeacherItem(props: TeacherItemProps) {
    const { teacher } = props

    function createNewConnection() {
        api.post("connections", {
            user_id: teacher.id
        })
        .then(response => {
            console.log('inserida nova conexão');
        })
    }
    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt="foto"/>
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>
            <p>
                {teacher.bio}
            </p>
            <footer>
                <p>
                    Preço/Hora&nbsp;
                    <strong>R$ {teacher.cost}</strong>
                </p>
                <a onClick={createNewConnection} >
                    <img src={wppIcon} alt="Whatsapp"/>
                    Entrar em contato
                </a>
            </footer>
        </article>
    )
}

export default TeacherItem