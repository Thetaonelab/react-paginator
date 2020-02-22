import React, { Component } from "react";
import times from "lodash/times";
import "./index.css";
import {
  EzFrame,
  EzCenter,
  EzInput,
  EzButton,
  EzLabelStyle
} from "./utility.js";

class PaginationBody extends Component {
  render() {
    return (
      <div className="Pagination">
        <EzFrame big={true}>
          <EzCenter>
            <div className="pagination">
              {
                <span
                  className="previous-btn"
                  onClick={
                    this.props.pageNo > 1
                      ? evt => this.props.onPageChange(this.props.pageNo - 1)
                      : () => {}
                  }
                  style={{ opacity: this.props.pageNo > 1 ? 0.7 : 0.5 }}
                >
                  Previous
                </span>
              }
              {times(this.props.count, ind => (
                // ind start from 0
                <EzInput
                  key={ind + "i"}
                  type="radio"
                  name="nav"
                  id={`input-${ind + this.props.pageStart}`}
                  className="input"
                  checked={this.props.pageNo === ind + this.props.pageStart}
                  onChange={evt =>
                    this.props.onPageChange(ind + this.props.pageStart)
                  }
                />
              ))}
              {times(this.props.count, ind => (
                // ind start from 0
                <EzButton
                  key={ind + "l"}
                  htmlFor={`input-${ind + this.props.pageStart}`}
                  className={`button`}
                  forChecked={this.props.pageNo === ind + this.props.pageStart}
                >
                  {ind + this.props.pageStart}
                </EzButton>
              ))}
              {
                <span
                  className="next-btn"
                  onClick={
                    this.props.pageEnd > this.props.pageNo
                      ? evt => this.props.onPageChange(this.props.pageNo + 1)
                      : () => {}
                  }
                  style={{
                    opacity: this.props.pageEnd > this.props.pageNo ? 0.7 : 0.5
                  }}
                >
                  Next
                </span>
              }
            </div>
            <div
              style={{
                textAlign: "center",
                marginTop: 10,
                fontSize: 12,
                fontWeight: 600,
                opacity: 0.7
              }}
            >
              {" "}
              [ Showing {this.props.recordStartThisPage} -{" "}
              {this.props.recordEndThisPage} ]
            </div>
          </EzCenter>
        </EzFrame>
      </div>
    );
  }
}

export default PaginationBody;
