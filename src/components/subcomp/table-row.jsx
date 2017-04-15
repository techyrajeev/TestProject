import React            from 'react';

const TableRow = ({author, colNames, rowData}) =>
{
    console.log(colNames);
    return (
        <tr className="table-row">

            <td className="author-col">{author}</td>
            {
                colNames.map((col) =>
                    {
                        return (
                            <td>{rowData[col] || 0}</td>
                            )
                    }
                )
            }
        </tr>
    );

}

export default TableRow;


