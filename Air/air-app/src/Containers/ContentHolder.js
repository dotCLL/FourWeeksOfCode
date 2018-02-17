import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContentData from '../Resources/ContentData.js';

import Content from '../Components/Content';

class ContentHolder extends Component {
  constructor(props) {
    super(props);

    console.log(this.props.activeCont);
  }

  render() {
    return (
      <div id="ContentHolder">
        {/* Do an if (!arr.find()) { render lander version } */}
        {Object.keys(ContentData).map((e, index) => {
          if (this.props.activeCont === e) {
            return <Content key={index} state={e} type={ContentData[e].type} t1={ContentData[e].t1} t2={ContentData[e].t2} content={ContentData[e].content} />
          }
        })}
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state.activeCont);
  return {
    activeCont: state.activeCont
  };
}

export default connect(mapStateToProps)(ContentHolder);
