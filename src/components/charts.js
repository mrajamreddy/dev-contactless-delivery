import React, { Component } from "react";
import HorinontalTree from '../d3Files/d3HorizontalTree';
import FirstLevel from '../static/jsonData/firstLevel.json';

class EmployeeOrgChart extends Component {

  componentDidMount() {
    this.HorinontalTree = new HorinontalTree();
    this.renderHorizontalTree(FirstLevel);
  }

  nodeClick = node => {
    console.log('data', node)
    const val = node.data.name.toLowerCase();
    if (node.data.level < 2) {
      this.renderHorizontalTree(require("../static/jsonData/" + val));
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
    return (<div id="orgchart-container"></div>)
  }
}

export default EmployeeOrgChart;