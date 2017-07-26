var React = require('react');
var marked = require('marked');

class Markdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markDownText: ''
    }
    this.getMarkdownText = this.getMarkdownText.bind(this)
  }

  getMarkdownText(event) {
    var rawMarkup = marked(event.target.value, {sanitize: true});
    this.setState(function() {
      return {
        markDownText: rawMarkup
      }
    })
  }
  render() {
    return (
      <div className="row">
        <div className='input-left'>
            <textarea
              type="text"
              name="markdown-input"
              onChange={this.getMarkdownText}
            />
        </div>
        <div className='output-right' dangerouslySetInnerHTML={{__html: this.state.markDownText}} />
      </div>
    )
  }
}

module.exports = Markdown
