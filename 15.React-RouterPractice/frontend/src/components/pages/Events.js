import { useLoaderData, json } from 'react-router-dom';
import EventsList from '../EventsList';

function EventsPage() {
  const events = useLoaderData();

  return (
    <>
        {/* 
          <div style={{ textAlign: 'center' }}>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
          </div> 
        */}
      <EventsList events={events} />
    </>
  );
}

export async function loader(){
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
      // return throw new Response(JSON.stringify({ message : 'Could not fetch events.'}), ({status : 500, }));
      return json(
        { message : 'Could not fetch events.'},
        { status : 500 }
      )
    } else {
      const resData = await response.json();
      return resData.event;
    }
  }
  
//hooks can't be used inside loader function
export default EventsPage;