import './Root.module.css';
import MainNaviagtion from '../components/MainNavigation';
const RootLayout = () => {
    return <>
        <MainNaviagtion />
        <main>
            <p>An Error Occured!</p>
            <p>Page doesn't exist</p>
        </main>
    </>
}
export default RootLayout;