import  {useRouteError} from 'react-router-dom';
import PageContent from "../PageContent";

const Error = () => {
    const error = useRouteError();

    let title = 'An error occured!';
    let message = 'Something went wrong';

    if(error.status === 500){ 
        message = error.data.message;
    }
    
    if(error.status === 404){
        title ='Not found!';
        message = 'Could no find resource or page';
    }
    return(
        <PageContent title = {title}>
            <p>{message}</p>
        </PageContent>
    );
}
export default Error;