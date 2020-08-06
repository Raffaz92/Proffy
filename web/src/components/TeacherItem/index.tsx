import React from 'react';
import './styles.css'
import wppIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://scontent.fbfh3-2.fna.fbcdn.net/v/t1.0-9/p960x960/89489785_2564817297139361_3519235810807250944_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_eui2=AeG4I4t6wBGPd73_sK_KDb7WIBmLHfdNQR4gGYsd901BHtVy0LqVdi_gqOH-SUx92uxE4MXN470cVI1hoAmrtbPS&_nc_ohc=48grrS89TW8AX-SjwJy&_nc_ht=scontent.fbfh3-2.fna&_nc_tp=6&oh=feb47e42ed0b00ecbdc6c40d2df98537&oe=5F5286F1" alt="foto"/>
                <div>
                    <strong>Thamyres Kinaski Gonçalves</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de química avançada.
                <br /><br />
                Apaixonada por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
                Mais de 0 pessoas já passaram por uma das minhas explosões.
            </p>
            <footer>
                <p>
                    Preço/Hora&nbsp;
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={wppIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem