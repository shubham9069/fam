import Link from 'next/link';
import React, { useState } from 'react'
import styles from './Discover.module.scss'
import Button from '@/component/Common/Button/Button';



const DiscoverNow = ({content}:any) => {
  const {title,desc,sub_green,sub_text} = content
  const item_per_Slide=4;
  const [previndex,setprevindex] = useState(0)
  const [nextindex,setnextindex] = useState(item_per_Slide)
   var dataArr=['/GAME.png','/GAME-1.png','/GAME-2.png','/GAME-3.png','/GAME-4.png','/GAME-5.png']




  const paginationNext=()=>{
    
    var prev= nextindex

if(nextindex+item_per_Slide > dataArr.length){

  setnextindex(nextindex+item_per_Slide);
  setprevindex(dataArr.length-item_per_Slide)
  return 
}else
{
setprevindex(prev)
setnextindex(nextindex+item_per_Slide)
}

  }

  const paginationPrev=()=>{
    
    var next= previndex

if(previndex-item_per_Slide < 0){
console.log("hello ")
setnextindex(item_per_Slide);
setprevindex(0)
  return 
}else{
setprevindex(previndex-item_per_Slide)
setnextindex(next)
}

  }
  return (
    <div className="padding-2rem">


    <div className={styles['discover-container']} >

    <div className={styles["discover-left"]}>
    <div className="">
        <p className={styles["section-heading"]} style={{marginBottom:'0.5rem'}}> {title}</p>
        <p className={styles["section-subheading"]}> <span >{sub_green}</span> {sub_text}</p>
    
    <p className={styles["desc"]}>{desc}</p>
        
        <Button title={"Discover Now "} />
      </div>
    </div>
    <div className={styles["discover-right"]}>

    {dataArr?.slice(previndex,nextindex)?.map((element:any, i) => {

        return   <Link href="/"   className={styles["discover-div "]}>
    <img src={element} id='discover_img'></img>
    <p style={{ }}>Games <span style={{fontWeight:500}}>&#8377;1299/-</span></p>
        </Link>
    })}
    {/* <div className={styles["discover-navigate-icon"]}>
    <img src="images/slick-left.png" onClick={paginationPrev}></img>
    <img src="images/slick-right.png" onClick={paginationNext}></img>
    </div> */}
       
    </div>





    </div>

    </div>
  )
}

export default DiscoverNow