import React from 'react';

const TableHeader = ({authorNames}) =>
    (
        <thead>
            <tr>
                <th>{'#'}</th>
                {
                    authorNames.map(
                        (authorName, idx) => <th key={`an${idx}`}> {authorName}</th>
                   )
                }
            </tr>
        </thead>
    );

export default TableHeader;


