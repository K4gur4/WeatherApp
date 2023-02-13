
import {Container,MainData,NavBar,Wrapper} from './mainBarstyle'
import {Link,Outlet} from  'react-router-dom' 
import { Suspense } from 'react';
import Sidebar from '../sidebar/sideBar';
const MainBar= ()=>{
    const setClass = (e)=>{
        console.log();
    }
return ( 
    <Container>
        <Sidebar/>
    <Wrapper>
   <NavBar>
    <Link id='0' className='item' to={'/'}>Day</Link>
    <Link id='1' className='item' to={'/week'}>Week</Link>
    <Link id='2' className='item' to={'/hour'}>Hour</Link>
   </NavBar>
<MainData>
    <Suspense fallback={<div>Loading...</div>}>
    <Outlet/>
    </Suspense>
</MainData>
    </Wrapper>
    </Container>
)
}

export default MainBar