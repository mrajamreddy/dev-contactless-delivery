import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { breadCrumbDetails } from '../redux/actions/breadCrumb';
import BreadCrumbContent from './breadCrumb';
import HOC from '../utils/hoc';

class TargetDetails extends Component {

    componentDidMount() {
        const { target } = this.props.location;
        console.log('data', target);
        if (target) {
            console.log('data from target details page')
        } else {
            this.props.history.push('/home');
        }

    }

    breadcrumbClick = node => {
        console.log('in click', node);
        const breadcrumb = [...this.props.breadCrumbData];

        for (let i = breadcrumb.length; i > 0; i--) {
            const breadcrumbData = breadcrumb[i - 1].data || breadcrumb[i - 1];
            if (breadcrumbData.name === node.data.name) {
                break;
            }
            breadcrumb.pop();
        }
        this.props.breadCrumbDetails(breadcrumb);

        this.props.history.push({
            pathname: '/' + node.data.page,
            node: node
        })
    }

    render() {
        return (
            <HOC>
                <BreadCrumbContent breadcrumbClick={this.breadcrumbClick} />
                <div>This is a placeholder for details page</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(TargetDetails);