import React from "react";

const Form = props => {
  return (
    <form>
      <div className="form-group">
        <input 
          className = "form-control"
          onChange={props.handleInputChange} 
          name="query" 
          type = "text" 
          placeholder= "Search"/> 
          <button onClick={props.searchGoogle}>Search</button>
      </div>
    </form>
  )
}

export default Form;
