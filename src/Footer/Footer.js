import React from 'react'
import footerStyles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
        <div className=' container'>
        <div className=' row'>
            <div className=' col-12'>
                <p>&copy; 2024 Elearn Infotech</p>
            </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer