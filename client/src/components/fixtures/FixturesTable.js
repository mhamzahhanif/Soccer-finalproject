import React, { Component } from 'react'
//import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { Jumbotron } from 'react-bootstrap'
import Fixture from './fixtures';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import ErrorBoundary from '../../components/errorboundaries';


class FixtureTable extends Component {
    render() {  

      return (
          <ErrorBoundary>
          <Jumbotron>
            <div>
                <p style={{ fontWeight: "bold", textAlign: "center"}}>
                    Upcoming Matches
                </p>
            </div>
              <Fixture/>
          </Jumbotron>
      </ErrorBoundary>
      )
  }
}

export default FixtureTable;