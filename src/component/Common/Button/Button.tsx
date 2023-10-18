import React from 'react'
import styles from './Button.module.scss'

const Button = ({title,bgColor,color,onClick,fullWidth}:any) => {
  return (
    <>
    <button className={styles["button-wrapper"]} style={{background:bgColor,color:color,width:fullWidth ? "100%":""}} onClick={onClick}>{title} </button>
    </>
  )
}

export default Button