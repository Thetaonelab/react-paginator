# react-paginator
A Simple react-paginator in [react.js](https://reactjs.org/)

<img src="logo.png" height="150px">

### Usage

App.js
```javascript
import React, { Component } from 'react'
import Pagination from './Pagination'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this._onPagination = this._onPagination.bind(this)
  }
  _onPagination(pageNo) {
    console.log("pageNo=", pageNo)
  }
  render() {
    return (
      <div className="Page">
        <Pagination selectedPage={1} count={7} totalPages={15} onPagination={this._onPagination} />
      </div>
    )
  }
}
export default App;
```

#### API

##### Props
<table>
  <thead>
    <tr><th>Prop</th><th>Default Value</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td>selectedPage</td><td>1</td><td>Current page</td></tr>
    <tr><td>count</td><td>7</td><td>Number of pages appear at a time</td></tr>
    <tr><td>totalPages</td><td>15</td><td>Total number of pages</td></tr>
    <tr><td>onPagination</td><td></td><td>Callback for page change</td></tr>
  </tbody>
</table>

<img src="paginator.gif" height="150px">