import React  from 'react';
import SimpleButton from './simple-button';

module.exports = React.createClass({

    getInitialState() {
        return {
        };
    },

    componentDidMount() {
        $("#"+this.props.id).modal('show');
        $("#"+this.props.id).on('hidden.bs.modal', this.props.handleHideModal);
        $("#"+this.props.id).on('shown.bs.modal', function () {
            $("[data-modalfocus]", this).focus();
        });
    },

    getCrossButtonComponent() {
        if (this.props.dontShowCrossButton)
            return;

        return (
            <button
                type         = "button"
                className    = "close"
                data-dismiss = "modal"
                aria-label   = "Close"
            >
                <span aria-hidden = "true">&times;</span>
            </button>
        );
    },

    handleConfirm() {
        if (this.props.onConfirm) {
            this.props.onConfirm();
        }
    },

    render() {
        let confirmButton = null;
        let cancelButton  = null;

        if (this.props.confirm) {
            confirmButton = (
                <SimpleButton
                    whenClicked       = {this.handleConfirm}
                    classNames         = "btn-primary"
                    subTitleClassName = "caret"
                >
                    {this.props.confirm}
                </SimpleButton>
            );
        }

        if (this.props.cancel) {
            cancelButton = (
                <button
                    type         = "button"
                    className    = "btn btn-default pull-left"
                    data-dismiss = "modal"
                >
                    <span className = "glyphicon glyphicon-shopping-cart"></span> {this.props.cancel}
                </button>
            );
        }

        let disableDefaultCloseStyles = {};
        if (this.props.disableDefaultClose) {
            disableDefaultCloseStyles = {
                "data-backdrop" : "static",
                "data-keyboard" : "false"
            };
        }

        return (
            <div className = "modal fade" id = {this.props.id} { ...disableDefaultCloseStyles }>
                <div className = "modal-dialog">
                    <div className = "modal-content">
                        <div className = "modal-header">
                            { this.getCrossButtonComponent() }
                            <h2 className = "modal-title text-center">{this.props.title}</h2>
                        </div>
                        <div className = "modal-body">
                            { this.props.children }
                        </div>
                        <div className = "modal-footer">
                            {cancelButton}
                            {confirmButton}
                        </div>
                    </div>
                </div>
            </div>
        );
    },

    propTypes : {
        handleHideModal : React.PropTypes.func.isRequired
    }
});
