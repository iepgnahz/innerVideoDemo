import React, {Component} from 'react';
import ReactDom from 'react-dom';
import '../style/index.less';
class App extends Component {
  render() {
    return (
      <div>
        <embed src="http://player.youku.com/player.php/sid/XMjUzNDIyNjM3Ng==/v.swf"
               width="480" height="400"
               type="application/x-shockwave-flash">
        </embed>
      </div>
    )
  }
}

ReactDom.render(
  <App />,
  document.getElementById('app')
);