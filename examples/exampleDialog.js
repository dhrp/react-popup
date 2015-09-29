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

// 'example' here functions as a namespace, so you can have different flavors of windows with events
var ExampleDialog = Dialog(DialogContent, 'example');

module.exports = ExampleDialog;
