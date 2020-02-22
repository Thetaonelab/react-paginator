import React, { Component } from "react";
import Pagination from "./Pagination";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this._onPagination = this._onPagination.bind(this);
  }
  _onPagination(pageNo) {
    console.log("pageNo=", pageNo);
  }
  render() {
    return (
      <div className="Page">
        <Pagination
          selectedPage={1}
          count={7}
          //totalPages={15}
          recordsPerPage={15}
          totalRecords={200}
          onPagination={this._onPagination}
        />
      </div>
    );
  }
}
export default App;
