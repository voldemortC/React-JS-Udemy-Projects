import MainNavigation from "../MainNavigation";
import { Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom";
const Root = () => {
    const navigation = useNavigation();
    return(
        <>
            <MainNavigation />
            {navigation === 'loading' && <p>Loading...</p>}
            <Outlet />
        </>
    );
}
export default Root;