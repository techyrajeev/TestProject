import React       from 'react';
import TableRow    from './table-row';
import TableHeader from './table-header';

export default class CollabTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authorData    : [],
            authorNames   : [],
            showDataModal : false
        }

        this.generateAuthorTable = this.generateAuthorTable.bind(this);
        this.generateTableHeader = this.generateTableHeader.bind(this);

    }

    componentWillMount() {
        const authorNames = Object.keys(this.props.data);
        this.setState({
            authorData  : this.props.data || [],
            authorNames : authorNames || []
        });
    }

    componentWillReceiveProps(nextProps) {

        const authorNames = Object.keys(nextProps.data);
         this.setState({
            authorData  : nextProps.data || [],
            authorNames : authorNames || []
        });
    }


    generateAuthorTable() {
        return (
                <tbody>
                    {
                        this.state.authorNames.map((author, idx) =>
                            <TableRow
                                key      = {`mr${idx}`}
                                author   = {author}
                                colNames = {this.state.authorNames}
                                rowData  = {this.state.authorData[author]}
                            />
                        )
                    }
                </tbody>
        );
    }

    generateTableHeader() {
        return <TableHeader authorNames = {this.state.authorNames} />
    }

    render() {

        return (
            <div className="container">
              <h3 className="text-center">Authors and their contributions</h3>
              <p className="text-center">Below matrix shows the name of authors and their contributions with fellow authors.</p>
              <div className="table-responsive">
                  <table className="table table-bordered">
                      { this.generateTableHeader() }
                      { this.generateAuthorTable() }
                  </table>
              </div>
            </div>
        );
    }
}


