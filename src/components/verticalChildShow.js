import React, { Component } from 'react';
import VerticalTree from '../d3Files/d3VerticalAlignment';
import HOC from '../utils/hoc';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import './treeNode.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { breadCrumbDetails } from '../redux/actions/breadCrumb';
import BreadCrumbContent from './breadCrumb';

class VerticalChild extends Component {

    state = {
        targetList: '',
        breadCrumbData: []
    }

    componentDidMount() {
        this.setState({ breadCrumbData: this.props.breadCrumbData });
        const { node } = this.props.location;
        if (node) {
            const val = node.data.name.toLowerCase();
            this.VerticalTree = new VerticalTree();
            this.renderVerticalTree(require("../static/jsonData/" + val));
        } else {
            this.props.history.push('/home');
        }

    }

    updateBreadCrumb = node => {
        const breadCrumbData = [...this.state.breadCrumbData];
        breadCrumbData.push(node);
        this.props.breadCrumbDetails(breadCrumbData);
    }

    nodeClick = node => {
        const list = require('../static/jsonData/' + node.data.name.toLowerCase());
        const targetList = _.map(list, data => {
            return (
                <Link
                    key={data.fileName}
                    to={{
                        pathname: "/targetDetails",
                        target: data // your data array of objects
                    }}
                    onClick={(data) => this.updateBreadCrumb(data)}
                >
                    <img
                        className="targetImage"
                        src={require('../static/images/expand_grey/' + data.fileName)}
                        alt={data.fileName}
                        height="70px"
                        width="440px" />
                </Link>
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
        return (
            <HOC>
                <BreadCrumbContent />
                <div id="contactless-vertical"></div>
                <div className="targetList">{this.state.targetList}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(VerticalChild);