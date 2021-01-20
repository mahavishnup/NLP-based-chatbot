import React from 'react';
import "./card.css";

const Message = (props) => {
    return (
      <div
        className="col s12 m8 offset-m2 l6 offset-l3"        
      >
        <div className="card-panel">
          <div className="row valign-wrapper">
            {props.speaks === "bot" && (
              <div className="col s2">
                <a
                  href="/"
                  className="btn-floating btn-large waves-effect waves-light red"
                >
                  {props.speaks}
                </a>
              </div>
            )}
            <div className="col s10">
              <span className="">{props.text}</span>
            </div>
            {props.speaks === "user" && (
              <div className="col s2">
                <a
                  href="/"
                  className="btn-floating btn-large waves-effect waves-light red"
                >
                  {props.speaks}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    );
};

export default Message;
