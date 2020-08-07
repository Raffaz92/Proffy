import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css'
import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'

interface HeaderProps {
    title: string;
    description?: string
}

const Header: React.FC<HeaderProps> = (props) => {
    const { title, children, description } = props
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar"/>
                </Link>
                <img src={logoImg} alt="Proffy"/>
            </div>

            <div className="header-content">
                <strong>{title}</strong>
                { description && <p>{description}</p>}
                {children}
            </div>
            
        </header>    
    )
}

export default Header
