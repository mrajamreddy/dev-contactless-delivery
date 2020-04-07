import React, { Component } from "react";
import HorinontalTree from '../d3Files/d3HorizontalTree';
import VerticalTree from '../d3Files/d3VerticalAlignment';
import FirstLevel from '../static/jsonData/firstLevel.json';

class EmployeeOrgChart extends Component {

  componentDidMount() {
   this.HorinontalTree = new HorinontalTree();
   this.renderHorizontalTree(this.orgChartDetails);
 }

  renderHorizontalTree = (orgChartDetails) => {
    console.log('FirstLevel', FirstLevel);
    this.HorinontalTree.initHorizontalTree({
      id: "#orgchart-container",
      data: FirstLevel,
      modus: "diagonal",
      current_head_node: "home",
      width: window.innerWidth,
      height: window.innerHeight
    })

  }

  render() {
    return (<div id="orgchart-container"></div>)
  }
}

export default EmployeeOrgChart;