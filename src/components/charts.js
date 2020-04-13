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
    let location = FirstLevel;
    if (this.props.location.node) {
      location = require("../static/jsonData/" + this.props.location.node.data.name.toLowerCase());
    }
    console.log(this.props.location.node)
    this.HorinontalTree = new HorinontalTree();
    this.renderHorizontalTree(location);
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

  breadcrumbClick = node => {
    const location = this.props.location.pathname,
      val = node.data.name.toLowerCase(),
      breadcrumb = [...this.props.breadCrumbData];

      for(let i = breadcrumb.length; i > 0; i--) {
        if(breadcrumb[i-1].data.name === node.data.name) {
          break;
        }
        breadcrumb.pop();
      }
      this.props.breadCrumbDetails(breadcrumb);

    if (location.indexOf(node.data.page) > -1) {
      this.renderHorizontalTree(require("../static/jsonData/" + val));
    }
  }

  render() {
    return (
      <HOC>
        <BreadCrumbContent breadcrumbClick={this.breadcrumbClick}/>
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