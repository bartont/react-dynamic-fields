/** @jsx React.DOM */

const React = require('react')
const Field = require('./Field')

const FieldList = React.createClass({
  render () {
    var fields = this.props.fields.map(function (field) {
      return (<Field inputMarkup={field}/>)
    })

    return (
      <div className='field-list field-input'>
        {fields}
      </div>
    )
  }
})

module.exports = FieldList
