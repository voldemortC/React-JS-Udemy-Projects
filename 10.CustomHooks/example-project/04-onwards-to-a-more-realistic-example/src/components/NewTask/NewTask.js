import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../../hooks/use-http';

const NewTask = (props) => {

  const {error, isLoading, sendRequests : sendTasks} = useHttp();

  const enterTaskHandler = async (taskText) => {

    const applyData = (data) => {
      const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };
  
      props.onAddTask(createdTask);
    }

    sendTasks({
      url : 'https://react-http-14ebb-default-rtdb.firebaseio.com/tasks.json',
      method : 'POST',
      body : {text: taskText},
      header: {
        "Content-Type" : "application/json",
      }
    }, applyData);
  }
    // setIsLoading(true);
    // setError(null);
    // try {
    //   const response = await fetch(
    //     'https://react-http-14ebb-default-rtdb.firebaseio.com/tasks.json',
    //     {
    //       method: 'POST',
    //       body: JSON.stringify({ text: taskText }),
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     }
    //   );

    //   if (!response.ok) {
    //     throw new Error('Request failed!');
    //   }

    //   const data = await response.json();

    //   const generatedId = data.name; // firebase-specific => "name" contains generated id
    //   const createdTask = { id: generatedId, text: taskText };

    //   props.onAddTask(createdTask);
    // } catch (err) {
    //   setError(err.message || 'Something went wrong!');
    // }
    // setIsLoading(false);
  console.log(error, "jllk");
  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
