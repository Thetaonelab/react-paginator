import React, { Component } from 'react';
import times from 'lodash/times';
import './index.css';
import { EzFrame, EzCenter, EzInput, EzButton, EzLabelStyle } from './utility.js'

class PaginationBody extends Component {

  render() {
    return (
      <div className="Pagination">
        <EzFrame big={true}>
          <EzCenter>
            <div className="pagination">
              {this.props.pageNo > 1 ?
                <span className="previous-btn" onClick={(evt) => this.props.onPageChange(this.props.pageNo - 1)}>Previous</span> : ''}
              {times(this.props.count, (ind) =>
                // ind start from 0
                <EzInput key={ind + 'i'} type="radio" name="nav" id={`input-${ind + this.props.pageStart}`} className="input"
                  checked={this.props.pageNo === ind + this.props.pageStart}
                  onChange={(evt) => this.props.onPageChange(ind + this.props.pageStart)} />
              )}
              {times(this.props.count, (ind) =>
                // ind start from 0
                <EzButton key={ind + 'l'}
                  htmlFor={`input-${ind + this.props.pageStart}`}
                  className={`button`}
                  forChecked={this.props.pageNo === ind + this.props.pageStart} >{ind + this.props.pageStart}</EzButton>)}
              {this.props.pageEnd > this.props.pageNo ?
                <span className="next-btn" onClick={(evt) => this.props.onPageChange(this.props.pageNo + 1)}>Next</span> : ''}
            </div>
          </EzCenter>
        </EzFrame>
      </div>
    );
  }
}

export default PaginationBody;
