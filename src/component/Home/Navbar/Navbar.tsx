import React,{use, useContext, useEffect, useState} from 'react'
import styles from './Navbar.module.scss'
import Image from 'next/image'
import Button from '@/component/Common/Button/Button'
import Link from 'next/link'
import { Modak } from 'next/font/google'
import Modal from '@/component/Common/Modal/Modal'
import { useRouter } from 'next/router'
import UserContext from '@/context/UserContext'
import { login } from '@/services/customerService'
import { verifyOtp } from '@/services/integrationsService'
import toast from 'react-hot-toast'

const navbar = () => {
  const userContext: any = useContext(UserContext);
  const router: any = useRouter();

let prevoius =router.query.path;
  const [show, setShow] = useState(false);
  const [formToggle,setFormToggle] = useState(false)
  const [email,setEmail] = useState("")
  const [enterOtp, setEnterOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const [showProfileMenu,setShowProfileMenu] = useState(false);

  const sendOtp = async () => {
   
    if (!email) {
      alert("Please enter your email address");
      return;
    }
    const response: any = await login(email);
    // console.log(response.response.status);
    if (response.response.status === 201) {
      setEnterOtp(true);
    } else {
      alert("Invalid email address");
    }
  };

  const verifyOtpHandler = async () => {
    const response: any = await verifyOtp(email, otp);

    if (response?.response?.code === 200) {
    
      const toastId = toast.loading("Fetching User details...");
      localStorage.setItem("userId", response?.response.customerDetails._id);
      localStorage.setItem("token", response?.response?.token);
      userContext.setUserId(response?.response.customerDetails._id);
      userContext.setToken(response?.response?.token);
      userContext.setUser(response?.response?.customerDetails);
      if (!userContext?.user) {
        toast.success("Logged in Successfully!", {
          id: toastId,
        });
        setEnterOtp(false)
        setShow(false)
        return router.push(prevoius  );
      }

    } else {
      alert("Bad request");
      router.push("/");
    }
  };



  const handleOtpInput = (event: any) => {
   
    if(event.target.value<=999999){
      setOtp(event.target.value);
    }
      
     
    
   
  };
  useEffect(()=>{
    if(otp.length==6){
      verifyOtpHandler()
    }
  },[otp])

  
  function timer(){
   var element:any = document.getElementById("count-down")

    const myInterval = setInterval(function () {
    
      element.innerHTML =Number(element.innerHTML)-1
      if(element.innerHTML==0){
        clearInterval(myInterval);
        return 
      }
    
    }, 1000);
  
  
  }
  useEffect(()=>{
    if(enterOtp){
      timer()
    }

  },[enterOtp])

  return (
    <>
    <div className={`${styles['wrapper']} spaceBetween-div`}>

      <Link href="/" className={styles["logo"]}>
        <Image src="https://www.zalon.in/_next/image?url=%2Fzalon.png&w=128&q=75" width={50} height={50}alt="Zalon" />
        {/* <h1 style={{color:'white',letterSpacing:'2px'}} >SHUBH</h1> */}
      </Link>
      <div className={styles["middle"]}>
      <svg className={styles["search-svg"]} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 22 22" fill="none">
<path d="M10.7864 19.0259C15.3369 19.0259 19.0259 15.3369 19.0259 10.7864C19.0259 6.23583 15.3369 2.54688 10.7864 2.54688C6.23583 2.54688 2.54688 6.23583 2.54688 10.7864C2.54688 15.3369 6.23583 19.0259 10.7864 19.0259Z" stroke="#cf6262" stroke-opacity="1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5156 16.9453L19.746 20.1673" stroke="#cf6262" stroke-opacity="1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      <input placeholder='search' ></input>
      </div>

      {userContext?.userId ? 
      <div className={styles["user-profile"]} onClick={()=>setShowProfileMenu(!showProfileMenu)}>
        <span>S</span>
      
      {showProfileMenu && (
          <div className={styles["profile-menu"]}>
            <Link href={`/profile`}>
              <div className={styles["profile-menu-item"]}>Profile</div>
            </Link>
            <Link href={`/referral-page`}>
              <div className={styles["profile-menu-item"]}>Referral Code </div>
            </Link>
            <Link href={`/order-history`}>
              <div className={styles["profile-menu-item"]}>Orders</div>
            </Link>
            <Link href={`/my-address`}>
              <div className={styles["profile-menu-item"]}>Addresses</div>
            </Link>
            <div className={styles["profile-menu-item"] + " " + styles["border-b-none"]} >
              Logout
            </div>
          </div>
        )}
      
      </div>:
      <Button title={"Login"} onClick={()=>setShow(true)}/>
      }
      
  


    </div>
   
   {show && (

formToggle ? 
<Modal headerTitle="Create New Account" onClick={()=>setShow(false)}>
<div className={styles["form"]}>
    <div className={styles["form-input"]} >
      <label className={styles["signin-label"]}>Email address</label>
      <input type="email" placeholder="Enter email" value={email} onChange={(e) =>setEmail(e.target.value)} />
      <p className="grey-text"  style={{fontSize:'0.75rem'}}>
        We'll never share your email with anyone else.
      </p>
    </div>
    <div className='spaceBetween-div'  style={{ marginTop: '0.5rem'}} >
      <p  > </p>
      
      <div className="grey-text" style={{color:'#EB5757'}} onClick={()=>{setFormToggle(!formToggle)}}>Login into Existing Account </div>
    </div>


<div className={styles["form-btn"]}>
<Button title={' Create New Account '} fullWidth={true} onClick={()=>setShow(false)}></Button>

<h2 className='grey-text' style={{margin:'0.7rem 0',textAlign:'center'}}>OR</h2>

<button className='google-btn center-div'>
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
<path d="M12 2C6.4772 2 2 6.44801 2 12C2 17.552 6.4772 22.0001 12 22.0001C16.7943 22.0001 21.9895 18.193 22 11.938V10H12V14H17.5938C16.7655 16.322 14.6064 18 12 18C8.68631 18 6 15.314 6 12C6 8.68602 8.68631 6.00001 12 6.00001C13.4053 6.00001 14.7089 6.47103 15.7155 7.29103C16.0431 6.96403 18 5.00003 18.6338 4.49403C16.8703 2.91402 14.5644 2 12 2Z" fill="black"/>
</svg>
Google </button>
</div>

    

  </div>
</Modal>
:

enterOtp ? 
<Modal headerTitle="Verify otp " onClick={()=>setShow(false)}>
<div className={styles["form"]}>
    <div className={styles["form-input"]} >
      <label className={styles["signin-label"]}>Otp</label>
      <input type="number" placeholder="Enter otp" value={otp} onChange={handleOtpInput} />
    
    </div>
 
    <div className='spaceBetween-div'  style={{ marginTop: '0.5rem'}} >
      <p  className='grey-text' >Resend in <span id="count-down">30</span> secound  </p>
      
      <div className="grey-text" style={{color:'#EB5757'}} onClick={()=>{sendOtp}}>Resend </div>
    </div>


<div className={styles["form-btn"]}>
<Button title={'Submit OTP'} fullWidth={true} onClick={verifyOtpHandler}></Button>
</div>
</div>
</Modal>
:
<Modal headerTitle="Sign in" onClick={()=>setShow(false)}>
<div className={styles["form"]}>
    <div className={styles["form-input"]} >
      <label className={styles["signin-label"]}>Email address</label>
      <input type="email" placeholder="Enter email" value={email} onChange={(e) =>setEmail(e.target.value)} />
      <p className="grey-text"  style={{fontSize:'0.75rem'}}>
        We'll never share your email with anyone else.
      </p>
    </div>
 
    <div className='spaceBetween-div'  style={{ marginTop: '0.5rem'}} >
      <p  className='grey-text'>if Account is not exits </p>
      
      <div className="grey-text" style={{color:'#EB5757'}} onClick={()=>{setFormToggle(!formToggle)}}> Create New Account  ?</div>
    </div>


<div className={styles["form-btn"]}>
<Button title={'Sign in '} fullWidth={true} onClick={sendOtp}></Button>
<h2 className='grey-text' style={{margin:'0.7rem 0',textAlign:'center'}}>OR</h2>
<button className='google-btn center-div'>
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
<path d="M12 2C6.4772 2 2 6.44801 2 12C2 17.552 6.4772 22.0001 12 22.0001C16.7943 22.0001 21.9895 18.193 22 11.938V10H12V14H17.5938C16.7655 16.322 14.6064 18 12 18C8.68631 18 6 15.314 6 12C6 8.68602 8.68631 6.00001 12 6.00001C13.4053 6.00001 14.7089 6.47103 15.7155 7.29103C16.0431 6.96403 18 5.00003 18.6338 4.49403C16.8703 2.91402 14.5644 2 12 2Z" fill="black"/>
</svg>
Google </button>
</div>

    

  </div>
</Modal>

 
   )}
    </>
  )
}

export default navbar