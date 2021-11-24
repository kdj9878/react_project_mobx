import React, { useEffect } from 'react';



const InfoChangeComponent = (props) =>{

  const inputRef = React.useRef(null);

  useEffect(() =>{
    if(props.siblingNode !== undefined){
      const divDisplay = props.siblingNode.style.display;
      if(divDisplay === "block"){
        inputRef.current.focus();
      }
    }
  }, [props]);

  const checkOut = () => {
    alert("수정사항을 변경해주세요.");
    return;
  }

  return (
    <>
      <div
        style={{display:"none"}}>
        <div>
          <input
          ref={inputRef}
          onBlur={checkOut}
          type="text" 
          placeholder={props.data}
          />
        </div>
          <button>
            변경
          </button>
      </div>
    </>
  );

}

export default InfoChangeComponent;

