import React from 'react';

const InputArea = (props) => {
  return (
    <div>
      <textarea 
        value={props.value}
        className="form-control" 
        onChange={(event) => props.onTextChange(event.target.value)}
      />
    </div>
  );
}

export default InputArea;