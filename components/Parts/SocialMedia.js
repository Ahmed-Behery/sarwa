import style from"./social.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter  } from "next/router";
import {  faFacebookF ,faTwitter,   faLinkedinIn ,faInstagram} from '@fortawesome/free-brands-svg-icons';
import useTranslation from 'next-translate/useTranslation';
import { useEffect, useState } from "react";

const SocialMedia = () => {
  const {t,lang} = useTranslation("common");
  const location = useRouter();
  const [bgIcon, setbgIcon] = useState("social_icons_1");
  
  useEffect(()=>{
    if  ( location.pathname.includes("/sarwa-Life")) {
      setbgIcon("social-icons-1") 
    }
  },[location])

  return (

    <div className={style.social_container }>
      <div className="row w-100" >
      <div className="col-lg-12 mx-0 px-0" >
        { location.pathname.includes("/sarwa-insurance") ?
        <ul className={style.social_icons}>
          <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/sarwa-insurance/"><i><FontAwesomeIcon icon={faLinkedinIn} /></i></a></li>
          <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/sarwainsurance"><i className={style.face_c} ><FontAwesomeIcon icon={faFacebookF}   /></i></a></li>
          <li><a target="_blank" rel="noreferrer" href="https://twitter.com/sarwainsurance"><i ><FontAwesomeIcon icon={faTwitter}   /></i></a></li>
          <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/sarwa.insurance/"><i ><FontAwesomeIcon icon={faInstagram}   /></i></a></li>
        </ul> :
        
        <ul className={style.social_icons + " " + style.social_icons_1 }>
          <li><a href="https://www.linkedin.com/company/sarwa-life-insurance/"><i  ><FontAwesomeIcon icon={faLinkedinIn} /></i></a></li>
          <li><a href="https://www.facebook.com/sarwalife"><i className={style.face_c}><FontAwesomeIcon icon={faFacebookF}   /></i></a></li>
          <li><a href="https://twitter.com/sarwalife"><i ><FontAwesomeIcon icon={faTwitter}   /></i></a></li>
          <li><a href="https://www.instagram.com/sarwa.life/"><i ><FontAwesomeIcon icon={faInstagram}   /></i></a></li>
        </ul>}
 
       </div>
    </div>
  </div>

  ); 
};

export default SocialMedia;
