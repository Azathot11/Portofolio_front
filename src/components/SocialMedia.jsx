import React from 'react';
import {BsTwitter,BsInstagram} from 'react-icons/bs';
import {FaFacebook} from 'react-icons/fa';
import {ImLinkedin} from 'react-icons/im';
import { FacebookShareButton,WhatsappShareButton,LinkedinShareButton,TwitterShareButton } from 'react-share';


export const SocialMedia = () => {
    const linkHandler =(link)=>{
        window.open(link, "_blank");
    }
  return (
    <div className="app__social">
      <div>
        <FacebookShareButton
          url={"https://web.facebook.com/profile.php?id=100088137210911"}
        >
          <FaFacebook />
        </FacebookShareButton>
      </div>
      <div>
        <LinkedinShareButton
          url={`https://www.linkedin.com/in/paul-nji-bb9294204`}
        >
          <ImLinkedin />
        </LinkedinShareButton>
        {/* <ImLinkedin onClick={()=>{linkHandler('https://www.linkedin.com/in/paul-nji-bb9294204/')}}/> */}
      </div>
      <div>
        <BsInstagram />
      </div>

      <div>
        <BsTwitter />
      </div>
    </div>
  );
}
export default SocialMedia