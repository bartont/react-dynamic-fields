/** @jsx React.DOM */

const React = require('react')
const FieldList = require('./FieldList')

const DynamicFieldsAddition = React.createClass({
  getInitialState () {
    return {fields: []}
  },
  componentDidMount () {
    this.setState({fields: this.props.fields})
  },
  handleClick (e) {
    e.preventDefault()
    var fields = this.state.fields

    var newFields = fields.concat([this.props.newField.outerHTML])
    this.setState({fields: newFields})
  },
  render: function () {
    return (
      <div className='container'>
        <FieldList fields={this.state.fields}/>
        <a href='' className='bonus-field add' onClick={this.handleClick}>
          <i className='icon icon-plus'></i>
          {this.props.actionName}
        </a>
      </div>
    )
  }
})

module.exports = DynamicFieldsAddition
