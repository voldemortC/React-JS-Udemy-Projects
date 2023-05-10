import Button from "./components/UI/Button/Button";
import React, {useState, useCallback, useMemo} from 'react';
import DemoOutput from "./DemoOutput";
import ShowList from "./ShowList";
import './App.css';

function App() {

  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("List");
  
  const onClickHandler = useCallback(() => {
    // const onClickHandler = () => {
      setShow((show)=> !show);
    // }
  }, [show]) 

  let listItems = useMemo(()=>[1,7,6,4,6,7,1],[]);
  console.log("INSIDE APP COMPONENT");
  return (
    <div className="app">
      <ShowList text = {title} items = {listItems} />
      <h1>Hi there!</h1>
      <DemoOutput show = {false} />
      <Button onClick = {onClickHandler}>Toggle</Button>
    </div>
  );
}

export default App;
