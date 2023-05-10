import {useLoaderData, json} from 'react-router-dom';
import EventItem from '../EventItem';
const EventDetailPage = () => {
    const data = useLoaderData();
    console.log(data, "datadatadata")
    return(
        <EventItem event = {data.event}/>
    );
}
export default EventDetailPage;

export async function loader({request, params}){
    const id = params.eventId;
    const response= await fetch('http://localhost:8080/events/' + id);
    console.log(response, "responseresponse");
    if(!response.ok){
        throw json({message : 'Could not fetch detauils'}, { status : 500})
    } else {
        return response;
    }
}