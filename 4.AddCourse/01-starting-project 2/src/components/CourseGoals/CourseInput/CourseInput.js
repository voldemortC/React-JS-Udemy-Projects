import React, { useState } from 'react';
// import styled  from 'styled-components';
import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

/*
const FormControl = styled.div`
  
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    color: ${props => props.isValid ? 'red' : 'black'};
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props => props.isValid ? 'red' : '#ccc'};
    background: ${props => props.isValid && '#fad0d0'};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0d0;
    border-color: #8b005d;
  }

  &.InValid label{
    color: red;
  } 

  &.InValid Input{
    outline: none;
    background: #eea4a4;
    border-color: #911717;
  }
`

*/

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if(enteredValue.trim().length === 0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0){
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };
  return (
    // <form onSubmit={formSubmitHandler}>
    //   <FormControl isValid = {!isValid} >
    //     <label >Course Goal</label>
    //     <input type="text" onChange={goalInputChangeHandler} />
    //   </FormControl>
    //   <Button type="submit">Add Goal</Button>
    // </form>

    <form onSubmit={formSubmitHandler}>
      <div className= {`${styles['form-control']} ${!isValid && styles.InValid} `} >
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
