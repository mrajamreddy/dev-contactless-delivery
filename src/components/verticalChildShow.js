import React, { Component } from 'react';
import VerticalTree from '../d3Files/d3VerticalAlignment';
import MOD from '../static/jsonData/mod.json';
import HOC from '../utils/hoc';
import _ from 'lodash';
import './treeNode.css'

class VerticalChild extends Component {

    state = {
        list: {
            "MOD": MOD,
        },
        targetList: ''
    }

    componentDidMount() {
        this.VerticalTree = new VerticalTree();
        this.renderVerticalTree(this.state.list["MOD"]);
    }

    nodeClick = node => {
        console.log('is this it??', node.data.name.toLowerCase());
        const list = require('../static/jsonData/' + node.data.name.toLowerCase());
        const targetList = _.map(list, data => {
            return (
                <img 
                    className="targetImage"
                    src={require('../static/images/expand_grey/' + data)} 
                    alt={data} 
                    key={data}
                    height="70px"
                    width="440px"/>
            )
        });
        const targetHeader = (<h3 className="targetHeader">TARGET - CONTACTLESS DELIVERY</h3>);
        const target = (
            <HOC>
                {targetHeader}
                {targetList}
            </HOC>
        )
        this.setState({
            targetList: target
        })
    }

    renderVerticalTree = (data) => {
        this.VerticalTree.initVerticalTree({
            id: "#contactless-vertical",
            data: data,
            modus: "diagonal",
            current_head_node: "home",
            width: window.innerWidth,
            height: window.innerHeight,
            selectNodeFunc: this.nodeClick
        })
    }

    render() {
        console.log('this.state.list.targetList', this.state.targetList);
        return (
            <HOC>
                <div id="contactless-vertical"></div>
                <div className="targetList">{this.state.targetList}</div>
            </HOC>
        )
    }
}

export default VerticalChild;