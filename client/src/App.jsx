import React from 'react'
import { useTranslation } from 'react-i18next'
import Nav from './Nav'


const App = () => {

    const { t, i18n } = useTranslation()
    return (
        <div>
            <Nav/>
            <h2>Current language: {i18n.language} </h2>
            <button onClick={async ()=> await i18n.changeLanguage('az')}>az</button>
            <button onClick={async ()=> await i18n.changeLanguage('en')}>en</button>
            <button onClick={async ()=> await i18n.changeLanguage('ru')}>ru</button>
            <h1>{t('welcome')}</h1>
            <h1>{t('text')}</h1>
        </div>
    )
}

export default App