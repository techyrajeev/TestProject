import React            from 'react';

const TableRow = ({author, colNames, rowData}) =>
{
    return (
        <tr className="table-row">

            <td className="author-col">{author}</td>
            {
                colNames.map((col, idx) =>
                    {
                        return (
                            <td key={`trd${idx}`}>{rowData[col] || 0}</td>
                            )
                    }
                )
            }
        </tr>
    );

}

export default TableRow;


