import React from 'react';

const PanelHeader = () =>
    (
        <div className="row hidden-xs">
            <div className="col-sm-3">
                <h5>Changelist / Build</h5>
            </div>

            <div className="col-sm-2">
                <h5>Owner</h5>
            </div>

            <div className="col-sm-2">
                <h5>Time Started</h5>
            </div>

            <div className="col-sm-1">
                <h5>State</h5>
            </div>

            <div className="col-sm-1">
                <h5>Metrics</h5>
            </div>

            <div className="col-sm-1">
                <h5>Build</h5>
            </div>

            <div className="col-sm-1">
                <h5>Unit Test</h5>
            </div>

            <div className="col-sm-1">
                <h5>Functional Test</h5>
            </div>
        </div>
    );

export default PanelHeader;
