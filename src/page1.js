import { useState,useEffect} from 'react';
import { useTransition, animated } from 'react-spring';

import './Page1.css'
import Instagram from './media/instagrm.png';
import Eventbr from './media/eventbr.png';
import Pinterest from './media/pinterest.png';
import Yout from './media/yout.png'; 
import MobileOutLine from './media/mobileoutline.png';
import LinkrMarketing from './media/linktree-marketing-website-profile-images.gif';
const Page1 = () =>{
         const [items, setItems] = useState([]);
         const transition  = useTransition(items,{
            from:{ y:0, height: 10,width:50, opacity: 0},
            enter: item => async (next) => {
                await next({  y:item.y, opacity:1,width: item.width, height: 60, delay:item.delay});
            },
            
            }  
         )

      const Ani = () =>{
          const images = [
                     {src:Instagram, alt:'Instagram', ani:6,width:'5%',},
                     {src:Eventbr, alt:'Eventbrite',ani:3,width:'15%'},
                     {src:Pinterest, alt:'Pinterest', ani:5,width:'15%'},
                     {src:Yout, alt:'Youtube',ani:4,width:'15%'},
        ];
          
            
           let aniLeft = 10;
           let aniRight = 10;
          
    


          return (
              <>
              {
                    images.map((image, id) =>{
                    let output;
                    aniLeft=(image.ani*2)+'%';
                    aniRight=(image.ani*2)+'%';
                    let imageWidth = image.width; 
                    //let im = Math.floor((Math.random() * animCycle.length)+1)
                    
    
                    if(image.ani === 6 || image.ani === 5){
                        
                        output =  <img src={image.src} alt={image.alt} style={{ width:imageWidth,
                        top:'40%',
                        right:aniRight,
                        opacity: .9,
                        animation: `mymovel ${image.ani}s infinite`}}/>;
                    }else{
                        
                        output = <img src={image.src} alt={image.alt} style={{  width:imageWidth,
                        top:'40%',
                        left: aniLeft,
                        opacity: .9,
                        animation: `mymove ${image.ani}s infinite`}}/>;
                    }
                        

                     return (
                        
                         <div key={id} className='fly'>
                            
                            {output}   
                            
                         </div>
                     )
                 })
                
                }
          
             
              
              </>
          )
      } 


      const Mobile  = () => {
          return(
              <div className='row-1' onMouseEnter ={ ()=>{ setItems( v => v.length ? [] :
                 [
                 { y: 10,width: 350, delay:100},
                 {y: 10,width: 350,delay:200},
                 {y: 10,width: 350,delay:300},
                 {y: 10,width: 350,delay:400},
                 {y: 10,width: 350,delay:500}

                 ]); }}>

                  <div className='mobile'>
                    <img className='mobile-marketing' src={LinkrMarketing} alt='Lintree logo' />
                    <img className='mobile-img' src={MobileOutLine} alt='mobile border' />
                   <div className='mob-txt-container'>
                      {
                        transition((style,item)=> item && <animated.div style={style} className='mob-txt'/> 
                        )
                       }

                    
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
                </div>
                <div className='row-input'>
                    <div className='div-input'>
                      <span className='prefix'>Linktr.ee/</span>
                      <input className='input-area' placeholder='yournamehere'></input>
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

