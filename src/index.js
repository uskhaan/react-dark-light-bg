import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";


function Room(){
  const [isLit, setLit]=React.useState(true);
  const colorizing= isLit ? "lightMode" : "darkMode";
  
  return (
    <div className={`room ${colorizing}`}>{colorizing}
    <br/>
    <button onClick={() => setLit(!isLit)}>
    Change
    </button>
    </div>
  );
}
ReactDOM.render(<Room/>,document.getElementById('root'));