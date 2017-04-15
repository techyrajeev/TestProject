import React       from 'react';
import Header      from './header';
import CollabTable from './subcomp/collab-table';
import Footer      from './footer';
import MainStore   from '../stores/main-store';
import Reflux      from 'reflux';
import Utils       from '../utils/Utility';
import Actions     from '../actions';
import Modal       from './common/Modal';
import MButton     from './common/simple-button';
import _           from 'lodash';

module.exports   = React.createClass({

    mixins : [
        Reflux.listenTo(MainStore, 'onChange')
    ],

    getInitialState() {
        return {
            data    : [ ],
            rawData : {}
        };
    },

    onChange(event, totalData) {
        this.setState({
            rawData : totalData.rawData,
            data    : totalData.mData
        });
    },

    handleHideDataModal() {
        this.setState({
            showDataModal : false
        });
    },

    content() {

        const dataModal
        = (
            <Modal
                handleHideModal     = {this.handleHideDataModal}
                title               = "Data used to generate matrix"
                id                  = "dm"
                ref                 = "dm"
            >
                <div className="data-modal">
                    <pre>
                    { JSON.stringify(this.state.rawData, null, 4) }
                </pre>
                </div>
            </Modal>
        );

        return (
            <div id = "content">
                <div id="menu">
                    <div className="list-group">
                        <div className="panel-heading">
                            <h2 className="text-center"> Collaboration Matrix </h2>
                            <hr className="star-primary"/>
                            <br/>
                            <CollabTable data = {this.state.data} />
                              <div className="text-center">
                                  <MButton
                                      whenClicked = {() => {this.setState({showDataModal : true})}}
                                      classNames = "btn btn-lg btn-primary"
                                  >
                                      Show Json Data
                                  </MButton>
                              </div>
                              { this.state.showDataModal ? dataModal : null }
                        </div>
                    </div>
                </div>
            </div>
        );
    },

    render() {
        return (
               <div>
                   <Header />
                   {this.content()}
                   <Footer />
               </div>
        );
    }

});
