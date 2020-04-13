import React, { Component } from 'react';
import _ from 'lodash';
import HOC from '../utils/hoc';
import './breadcrumb.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class breadcrumb extends Component {

    breadCrumb = () => {
        const breadcrumb = (
            <ul className="breadcrumb">
                {
                    _.map(this.props.breadCrumbData, (node, index) => {
                        const name = node.name || node.data.name;
                        if (index === this.props.breadCrumbData.length - 1) {
                            return (<li key={name}><span>{name}</span></li>)
                        } else {
                            return (
                                <li onClick={() => this.props.breadcrumbClick(node)} key={name} className="listItem">
                                    <span>
                                        {name}
                                    </span>
                                </li>
                            )
                        }
                    })
                }
            </ul>
        )

        return breadcrumb;
    }

    render() {
        return (
            <HOC> {this.breadCrumb()}</HOC>
        )
    }

}

const mapStateToProps = state => ({
    breadCrumbData: state.BreadCrumb.breadcrumb
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {

        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(breadcrumb);