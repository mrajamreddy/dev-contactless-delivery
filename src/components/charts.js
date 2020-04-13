import React, { Component } from "react";
import HorinontalTree from '../d3Files/d3HorizontalTree';
import FirstLevel from '../static/jsonData/firstLevel.json';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { breadCrumbDetails } from '../redux/actions/breadCrumb';
import BreadCrumbContent from './breadCrumb';
import HOC from '../utils/hoc';

class ContactlessDeliveryChart extends Component {

  state = {
    breadcrumb: [],
  }

  componentDidMount() {
    this.HorinontalTree = new HorinontalTree();
    this.renderHorizontalTree(FirstLevel);
  }

  nodeClick = node => {
    const val = node.data.name.toLowerCase(),
      breadcrumb = [...this.state.breadcrumb];
    breadcrumb.push(node);
    this.props.breadCrumbDetails(breadcrumb);

    if (node.data.level < 2) {
      this.setState({ breadcrumb });
      this.renderHorizontalTree(require("../static/jsonData/" + val));
    } else if (node.data.level === 2) {
      this.props.history.push({
        pathname: '/contactlessTarget',
        node: node
      })
    }
  }

  renderHorizontalTree = (data) => {
    this.HorinontalTree.initHorizontalTree({
      id: "#orgchart-container",
      data: data,
      modus: "diagonal",
      current_head_node: "home",
      width: window.innerWidth,
      height: window.innerHeight,
      selectNodeFunc: this.nodeClick
    })

  }

  render() {
    console.log('breadCrumbData', this.props.breadCrumbData);
    return (
      <HOC>
        <BreadCrumbContent data={this.props.breadCrumbData}/>
        <div id="orgchart-container"></div>
      </HOC>
    )
  }
}

const mapStateToProps = state => ({
  breadCrumbData: state.BreadCrumb.breadcrumb
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      breadCrumbDetails,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(ContactlessDeliveryChart);