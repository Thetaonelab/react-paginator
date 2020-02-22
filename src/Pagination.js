import React, { Component } from "react";
import PaginationBody from "./PaginationBody";

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPage: 1,
      paginationCount: 6,
      paginationStart: 1,
      paginationEnd: 21
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }
  componentDidMount() {
    const paginationEnd = Math.ceil(
      this.props.totalRecords / this.props.recordsPerPage
    );
    this.setState({
      paginationEnd,
      paginationCount: this.props.count,
      selectedPage: this.props.selectedPage
    });
  }
  componentWillReceiveProps(nextProps) {
    const paginationEnd = Math.ceil(
      nextProps.totalRecords / nextProps.recordsPerPage
    );
    this.setState({
      paginationEnd,
      paginationCount: nextProps.count,
      selectedPage: nextProps.selectedPage
    });
  }
  handlePageChange(pageInd) {
    this.setState({ selectedPage: pageInd });
    var divitionPoint = Math.floor(this.state.paginationCount / 2);
    var pageStartPoint = pageInd - divitionPoint;
    if (pageStartPoint < 1) {
      pageStartPoint = 1;
    }
    if (
      pageStartPoint + this.state.paginationCount >
      this.state.paginationEnd + 1
    ) {
      pageStartPoint = Math.abs(
        this.state.paginationEnd + 1 - this.state.paginationCount
      );
    }

    if (this.state.paginationEnd > pageInd) {
      this.setState({ paginationStart: pageStartPoint });
    }
    // console.log("divitionPoint==", divitionPoint,
    // "-------pageStartPoint==", pageStartPoint, "=====pageInd=", pageInd, "--===****paginationEnd=", this.state.paginationEnd)
    this.props.onPagination(pageInd);
  }

  render() {
    const { totalRecords, recordsPerPage } = this.props;
    const remainderRecordsAtLastPage =
      totalRecords % recordsPerPage || recordsPerPage;
    const recordStartThisPage =
      (this.state.selectedPage - 1) * recordsPerPage + 1;
    const recordEndThisPage =
      this.state.paginationEnd == this.state.selectedPage
        ? recordStartThisPage + remainderRecordsAtLastPage - 1
        : recordStartThisPage + recordsPerPage - 1;
    console.log(
      recordsPerPage,
      remainderRecordsAtLastPage,
      recordStartThisPage,
      recordEndThisPage
    );
    return (
      <div className="Pagination">
        {
          <PaginationBody
            count={this.state.paginationCount}
            pageNo={this.state.selectedPage}
            pageStart={this.state.paginationStart}
            pageEnd={this.state.paginationEnd}
            onPageChange={this.handlePageChange}
            recordStartThisPage={recordStartThisPage}
            recordEndThisPage={recordEndThisPage}
          />
        }
      </div>
    );
  }
}

export default Pagination;
