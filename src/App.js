import 'rsuite/dist/styles/rsuite-default.css';
import { InputPicker, Tree } from 'rsuite';
import { JsonEditor as Editor } from 'jsoneditor-react';
import 'jsoneditor-react/es/editor.min.css';
import React from 'react';

class App extends React.Component {
  state = {
    data: {
      "id": 10,
      "img_url": "https://storage.googleapis.com/taxigo-misc/202006/0630_ctbt/ctbt-4.jpg",
      "title": "中信LINE Pay卡沁涼享5%",
      "content": "中信LINE Pay卡於大苑子條碼支付享LINE POINTS 5%回饋",
      "reminder": "",
      "button": "[{\"type\":\"button\",\"style\":\"primary\",\"color\":\"#00bc55\",\"action\":{\"type\":\"uri\",\"uri\":\"https://lihi1.com/UWcTL\",\"label\":\"了解更多\"}}]",
      "point": {
      "x": 121.554194,
      "y": 25.029556
      },
      "start_time": 0,
      "end_time": 1601481599,
      "action": "justShow",
      "trigged_range": null
    }
  }

  shouldComponentUpdate () {
    return false;
  }

	render() {

    return (
      <div className="App">
        {<Editor
            mode={'tree'}
            value={this.state.data}
            onChange={(value) => {
              this.setState({data: value})
            }}
            onEditable={(node) => {
              switch (node.field) {
                case 'id':
                  return {
                    field: false,
                    value: true
                  };
      
                default:
                  return false;
              }
            }}
          />}
      </div>
    );
  }
}

export default App;
