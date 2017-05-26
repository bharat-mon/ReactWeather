import React, {Component} from 'react';

class ErrorModal extends React.Component {
  render () {
    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal>
        <h4>Some Title</h4>
        <p>Some error</p>
        <p><button className="button hollow" data-close>Okay</button></p>
      </div>
    );
  }
}

module.exports = ErrorModal;
