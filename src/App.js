import 'rsuite/dist/styles/rsuite-default.css';
import { InputPicker } from 'rsuite';

function App() {
  const nameList = [
    {
      "a": "Pearlie",
      "b": "Pearlie",
    },
    {
      "a": "Tyrel",
      "b": "Tyrel",
    },
    {
      "a": "Jaylen",
      "b": "Jaylen",
    },
    {
      "a": "Rogelio",
      "b": "Rogelio",
    }
  ]

  const handleChange = (v, e) => {
    console.log(v)
  }

  return (
    <div className="App">
      <InputPicker labelKey={'a'} valueKey={'b'} data={nameList} onChange={handleChange} style={{ width: 224 }} />
    </div>
  );
}

export default App;
