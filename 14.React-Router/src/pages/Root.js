import { Outlet } from 'react-router-dom';
import './Root.module.css';
import MainNaviagtion from '../components/MainNavigation';
const RootLayout = () => {
    return <>
        <MainNaviagtion />
        <main>
            <Outlet />
        </main>
    </>
}
export default RootLayout;