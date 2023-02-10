
import {Container,MainData,NavBar,Wrapper} from './mainStyle'
import {Link,Outlet} from  'react-router-dom' 
import { Suspense } from 'react';
import Sidebar from '../sidebar/sideBar';
const Main= (city)=>{
return ( 
    <Container>
        <Sidebar/>
    <Wrapper>
   <NavBar>
    <Link className='item' to={'/'}>Day</Link>
    <Link className='item' to={'/week'}>Week</Link>
    <Link className='item' to={'/hour'}>Hour</Link>
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

export default Main