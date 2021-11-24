import React from 'react';



const InfoDisplayComponent = (props) => {
  return (
    <>
      <div className="user-info-div">
        <div className="user-info-value">
          {props.data}
        </div>
        <div>

          <button
            type="primary"
            className="user-info-change-button"
            onClick={props.requestChange}
          >수정</button>
        </div>
      </div>



    </>
  )

}

export default InfoDisplayComponent