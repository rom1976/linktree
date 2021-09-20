import './Page1.css'
import Instagram from './media/instagrm.png';
import Eventbr from './media/eventbr.png';
import Pinterest from './media/pinterest.png';
import Yout from './media/yout.png'; 
import MobileOutLine from './media/mobileoutline.png';
import LinkrMarketing from './media/linktree-marketing-website-profile-images.gif';
const Page1 = () =>{
     
      const Ani = () =>{
          const images = [
                     {src:Instagram, alt:'Instagram', ani:7},
                     {src:Eventbr, alt:'Eventbrite',ani:4},
                     {src:Pinterest, alt:'Pinterest', ani:5},
                     {src:Yout, alt:'Youtube',ani:6},
        ];

           let aniLeft = 10;
           let aniRight = 10;

          return (
              <>
              {
                 images.map((image, id) =>{
                    let output;
                    
                    if(image.ani === 6 || 7)
                        output =   <img src={image.src} alt={image.alt} style={{right:`{${aniRight+=20}%`}}/>;
                             console.log(output);
                        output = <img src={image.src} alt={image.alt} style={{left:`{${aniLeft+=20}%`}}/>;
                        


                     return (
                        
                         <div key={id} className={`fly an${image.ani}`}>
                            
                            {output}     
                            {console.log(output)}
                            
                         </div>
                     )
                 })
                
                }
          
             
              
              </>
          )
      } 


      const Mobile  = () => {
          return(
              <div className='row-1'>
                  <div className='mobile'>
                  <img className='mobile-marketing' src={LinkrMarketing} alt='Lintree logo' />
                   <img className='mobile-img' src={MobileOutLine} alt='mobile border' />
                   <div className='mob-txt-div'>
                       <div className='mob-txt'> </div>
                       <div className='mob-txt'> </div>
                       <div className='mob-txt'> </div>
                       <div className='mob-txt'> </div>
                       <div className='mob-txt'> </div>
                    
                   </div>
                   
                   
              </div>
              </div>
              
          )
      }

      const MobileBottom = () => {    
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

