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
              <div className='fly an4' >
               <img src={Eventbr} alt='Eventbrite'/>
              </div>
               <div className='fly an5' >
               <img src={Pinterest} alt ='Pinterest'/>
              </div>
              <div className='fly an6'>
               <img src={Yout} alt ='Youtube'/>
              </div>
              </>
          )
      } 


      const Mobile  = () => {
          return(
              <div className='row-1'>
                  <div className='mobile'>
                  <img className='mobile-marketing' src={LinkrMarketing} alt='Lintree logo' />
                   <img className='mobile-img' src={MobileOutLine} alt='mobile border' />
                   
              </div>
              </div>
              
          )
      }

      const MobileBottom = () => {    
          const prefix = 'linktr.ee';
         return(
             <>
                <div className='mobile-bottom'>
                    <div className='div-left'></div>
                    <div className='div-right'></div> 

                <div className='row-input'>
                    <div className='div-input'>
                      <span className='prefix'>Linktr.ee/</span>
                      <input className='input-area' placeholder='yournamehere'></input>
                    </div>
                </div>
                    
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
        <MobileBottom />
        </div>
       

    )
}

export default Page1;

