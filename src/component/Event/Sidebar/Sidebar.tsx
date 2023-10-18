import React from 'react'
import styles from './Sidebar.module.scss'

const Sidebar = () => {
  return (
    <div className={styles["wrapper"]}>
        <div className={styles["category-section"]}>
            <div className={styles["heading"]}>
            <h3>Planing For  
                
            </h3>
            <div/>
            </div>
            <div className={styles["category-item"]}>
                <span>Today</span>
                <span>Tommarow</span>
                <span>This WeekEnd</span>
                <span>Choose Date </span>
            </div>
        </div>
        <div className={styles["category-section"]}>
            <div className={styles["heading"]}>
            <h3>Type 
                
            </h3>
            <div/>
            </div>
            <div className={styles["category-item"]}>
                <span>Dj 🔈</span>
                <span>Concert </span>
                <span>Live Music 🎙️</span>
                <span>Night Life & Clubing 🥂 </span>
                <span>Family Dining 👩‍👩‍👦 </span>
                <span>Stag </span>
                <span> Stand Up Comedy 🎫 </span>
            </div>
        </div>
        <div className={styles["category-section"]}>
            <div className={styles["heading"]}>
            <h3>Planing For  
                
            </h3>
            <div/>
            </div>
            <div className={styles["category-item"]}>
                <span>Today</span>
                <span>Tommarow</span>
                <span>This WeekEnd</span>
                <span>Choose Date </span>
            </div>
        </div>
    </div>
  )
}

export default Sidebar