import React from "react";

export default React.createClass({

  render: function() {
    return (
      <div className="greeting">
        hi, {this.props.name}!
      </div>    
    );
  },  

});
