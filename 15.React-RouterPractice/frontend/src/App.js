import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Error from './components/pages/Error';
import HomePage from './components/pages/Home';
import EventsPage, {loader as eventLoader} from './components/pages/Events';
import EventDetailPage, {loader as eventDetailsLoader} from './components/pages/EventDetail';
import Root from './components/pages/Root';
import EventsRootLayout from './components/pages/EventsRoot';
import NewEventPage from './components/pages/NewEvent';
import EditEventPage from './components/pages/EditEvent';
function App() {
  const router = createBrowserRouter([
      {path : '/', element : <Root />, errorElement: <Error />, children : [
          {index: true, element : <HomePage />},
          {path : 'events', element : <EventsRootLayout />, children: [
            {
              index: true, 
              element : <EventsPage />,
              loader: eventLoader
            },
            {
              path : ':eventId',
              element : <EventDetailPage />,
              loader: eventDetailsLoader},
            {path : 'new', element : <NewEventPage />},
            {path : ':eventId/edit', element : <EditEventPage />},
          ]}
      ]},
    ])
  return <RouterProvider router = {router} />;
}

export default App;
