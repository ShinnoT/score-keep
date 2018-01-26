import React from "react";
import PropTypes from "prop-types";

export class TitleBar extends React.Component {
  //render is the same as classic constructor() for classes but
  //its for React and renders JSX
  render() {
    return (
      <div className="title-bar">
        <div className="wrapper">
          <h1>{this.props.title}</h1>
        </div>
      </div>
    );
  }
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired
};

//you can even set defaults for props through:
// TitleBar.defaultProps = {
//   title: "some default title"
// };
