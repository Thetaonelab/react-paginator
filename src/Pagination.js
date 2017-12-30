import React, { Component } from 'react'
import PaginationBody from './PaginationBody'


class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPage: this.props.selectedPage || 1,
      paginationCount: this.props.count || 6,
      paginationStart: 1,
      paginationEnd: this.props.totalPages || 21

    }
    this.handlePageChange = this.handlePageChange.bind(this)
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      selectedPage: nextProps.selectedPage,
      paginationCount: nextProps.count,
      paginationEnd: nextProps.totalPages
    })
  }
  handlePageChange(pageInd) {
    this.setState({ selectedPage: pageInd })
    var divitionPoint = Math.floor(this.state.paginationCount / 2);
    var pageStartPoint = pageInd - divitionPoint
    if (pageStartPoint < 1) {
      pageStartPoint = 1;
    }
    if (pageStartPoint + this.state.paginationCount > this.state.paginationEnd + 1) {
      pageStartPoint = Math.abs((this.state.paginationEnd + 1) - this.state.paginationCount)
    }

    if (this.state.paginationEnd > pageInd) {
      this.setState({ paginationStart: pageStartPoint })
    }
    // console.log("divitionPoint==", divitionPoint,
    // "-------pageStartPoint==", pageStartPoint, "=====pageInd=", pageInd, "--===****paginationEnd=", this.state.paginationEnd)
    this.props.onPagination(pageInd)
  }

  render() {
    return (
      <div className="Pagination">
        {
          <PaginationBody count={this.state.paginationCount} pageNo={this.state.selectedPage}
            pageStart={this.state.paginationStart} pageEnd={this.state.paginationEnd}
            onPageChange={this.handlePageChange} />
        }

      </div >
    )
  }
}

export default Pagination
