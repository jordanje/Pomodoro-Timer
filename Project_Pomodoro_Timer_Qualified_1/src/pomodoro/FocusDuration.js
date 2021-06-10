import React from "react";
import { minutesToDuration } from "../utils/duration/index"

function FocusDuration({focusDuration, setFocusDuration, setDisplay, disableButton}){
  
   const IncreaseFocus = () => {
    setFocusDuration(prevCount => Math.min(60, prevCount + 5))
    setDisplay(focusDuration+1)
   }
  
  const DecreaseFocus = () => {
    setFocusDuration(prevCount => Math.max(5, prevCount - 5))
    setDisplay(focusDuration-1)
  } 
  
 return (
    <div className="input-group input-group-lg mb-2">
      <span className="input-group-text" data-testid="duration-focus">
        {/* TODO: Update this text to display the current focus session duration */}
          Focus Duration: {minutesToDuration(focusDuration)}
      </span>
      <div className="input-group-append">
        {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="decrease-focus"
          onClick={DecreaseFocus}
          disabled={disableButton}
          
        >
          <span className="oi oi-minus" />
        </button>
        {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="increase-focus"
          onClick={IncreaseFocus}
          disabled={disableButton}
        >
          <span className="oi oi-plus" />
        </button>
      </div>
    </div>
  );
}



export default FocusDuration;