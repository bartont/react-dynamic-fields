/** @jsx React.DOM */
'use strict'

const React = require('react')
const DynamicFieldsAddition = require('./../react_components')

window.React = React

var App = React.createClass({
  render () {
    var fields = []
    fields.push('<input type="text" name="link" placeholder="http://"">')

    var newField = document.createElement('input')
    newField.type = 'text'
    newField.name = ''
    newField.value = ''
    newField.placeholder = 'http://'

    return (
      <div>
        <DynamicFieldsAddition fields={fields} newField={newField} actionName={'Add an additional field'}/>
      </div>
    )
  }
})

React.renderComponent(new App(), document.getElementById('react-dynamic-fields'))
