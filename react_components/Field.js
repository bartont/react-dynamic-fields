/** @jsx React.DOM */

const React = require('react')

var Field = React.createClass({
  propTypes: {
    inputMarkup: React.PropTypes.string
  },

  handleClick (e) {
    e.preventDefault()
    var parentDiv = e.target.parentNode.parentNode
    parentDiv.parentNode.removeChild(parentDiv)
  },

  render () {
    return (
      <div className='input-prepend'>
        <div className='add-item'>
          <div dangerouslySetInnerHTML={{
            __html: this.props.inputMarkup
          }}/>
        </div>
        <a href='' className='delete' onClick={this.handleClick}>
          <i className='icon icon-times'></i>
        </a>
      </div>
    )
  }
})

module.exports = Field
