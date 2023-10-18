import React ,{useContext} from 'react'
import styles from './EventCard.module.scss'
import Link from 'next/link'
import UserContext from '@/context/UserContext'

const EventCard = ({eventData}:any) => {
   const {user}:any = useContext(UserContext)
  
  return (
    <Link href={`/event-details/${eventData?._id}`} className={styles["wrapper"]}>

<img src={eventData?.images[0]} width={100} height={100} alt="no" />

<div className={styles["eventcard-content"]}>
    <h4>{eventData?.name} </h4>
    <main  style={{display:'flex',flexWrap:'wrap',gap:5,height:24,overflow:'hidden'}}>
    {eventData?.tags?.map((tag:any)=>{

      return <span className='grey-tag' >{tag}</span>
    })}
    </main>
 
    
    <div >
        <span>unplugged court yard , udyog vihar </span>
        <span style={{color:'#EB5757'}}>₹{eventData?.min_price}/-</span>
    </div>
</div>
    </Link>
  )
}

export default EventCard