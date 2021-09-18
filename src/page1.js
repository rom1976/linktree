import './Page1.css'
import Eventbr from './media/eventbr.png';
import Pinterest from './media/pinterest.png';
import Yout from './media/yout.png'; 
import MobileOutLine from './media/mobileoutline.png';
import LinkrMarketing from './media/linktree-marketing-website-profile-images.gif';
const Page1 = () =>{
     
      const Ani = () =>{
          return (
              <>
              <div className='fly an4'>
               <img src={Eventbr} />
              </div>
               <div className='fly an5'>
               <img src={Pinterest} />
              </div>
              <div className='fly an6'>
               <img src={Yout} />
              </div>
              </>
          )
      } 


      const Mobile  = () => {
          return(
              <div className='mobile'>
                  <img className='mobile-marketing' src={LinkrMarketing} />
                   <img className='mobile-img' src={MobileOutLine} />
                   
              </div>
          )
      }

      const mobileBottom = () => {    
         return(
             <>
                <div className='mobile-bottom'>
                    <div className='left-div'></div>
                    <div className='right-div'></div> 
                    <input className='input-b' placeholder='yourname'></input>
                </div>
             </>
         )

      }

    return(
        <div className='page1'>
        <h1>
        The Only Link You’ll Ever Need
        </h1>
        <h3>
        Connect audiences to all of your content with just one link
        </h3>
        <button className='page1-button'> GET STARTED FOR FREE</button>
        <p>
        Already on Linktree? Log in
        </p>
        <Ani />
        <Mobile />
        <mobileBottom />
        </div>
       

    )
}

export default Page1;

