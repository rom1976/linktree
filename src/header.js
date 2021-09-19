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
             { list.map((lst1,listId) => <li key={listId}> <a href='/#'>{lst1}</a></li> )    }
            </ul>
            <button className='s-button'>SIGN UP FREE</button>
            <div className='login'><ul><li key={'login'}> <a href='/#'> Login</a></li></ul>
           
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
