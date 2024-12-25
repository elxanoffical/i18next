import React from 'react'
import './style.scss'
import { useTranslation } from 'react-i18next'


const Nav = () => {

  
  const { t, i18n } = useTranslation()

  return (
    <div className='container'>
        <h1>Lorem ipsum dolor sit.</h1>
        <div className="txt">
            <h1>{t('home')}</h1>
            <h1>{t('haqqimizda')}</h1>
            <h1>{t('lahiye')}</h1>
            <h1>{t('contact')}</h1>
        </div>
        <button>{t('login')}</button>

    </div>
  )
}

export default Nav