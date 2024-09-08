import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementNum, DecrementNum, incrementNum5, DecrementNum5, setText } from './reduser';

const Button = () => {
  const dispatch = useDispatch();
  
  const text = useSelector((state) => state.text);

  const [inputText,InputText] = useState(text);

  const Change = (e) => {
   InputText(e.target.value);
  };

  const Update = () => {
    if (inputText === undefined || inputText.trim() === '') {
      return;
    }
      dispatch(setText(inputText));
  };

  return (
    <div>
     
        <button  onClick={() => {
            
            dispatch (incrementNum())
        }}>+1</button>

        <button  onClick={() =>{
            
            dispatch(DecrementNum())
            
            
            }}>-1</button>
        <button  onClick={() => 
            
            {dispatch(incrementNum5())
                
            }}>+5</button>
        <button  onClick={() => {
            dispatch(DecrementNum5())
            }}>-5</button>
      
      
       
        
          <input type="text" value={inputText} onChange={Change}
            
            
          />
          <button onClick={Update}>asd</button>
          
           
        

          

    </div>
  );
};




export default Button;
