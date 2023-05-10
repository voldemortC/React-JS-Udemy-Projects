import EventsNavigation from "../EventsNavigation";
import { Outlet } from "react-router-dom";
const Root = () => {
    return(
        <>
            <EventsNavigation />
            <Outlet />
        </>
    );
}
export default Root;