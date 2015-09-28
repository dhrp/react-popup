/**
 * @jsx React.DOM
 */

'use strict';


var React                  = require('react');
var Dialog                 = require('../index');

var DialogContent = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Hello {this.props.title}</h1>
                <button onClick={this.props.onClose}>close</button>
                <button onClick={this.props.handleButtonClick}>submit</button>
            </div>
        );
    }
});

var LoginDialog = Dialog(DialogContent);

module.exports = LoginDialog;
