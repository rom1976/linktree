import './Header.css';
import linkr from './media/linkr.jpeg';

const Header = () =>{
    const list =['Blog', 'Pricing','Help'];
            

    const MenuList = () => {
          return(
            <>
            <div className='navbar'> 
            <img src={linkr} alt ='Linktree Logo'/><span className='txt'>linktree</span>
            <ul> 
             { list.map((lst1) => <li> <a>{lst1}</a></li> )    }
            </ul>
            <button className='s-button'>SIGN UP FREE</button>
            <div className='login'><ul><li><a>Login</a></li></ul>
           
            </div>
            
            
            </div>
           
            </>
          );
    }

  return(
      <>
       <div className='left-header'>
           <div className='linkImage'>

           </div>
           <MenuList />

       </div>
      </>
  )

}

export default Header;
