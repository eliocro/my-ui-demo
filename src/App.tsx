import { useState } from 'react';
import { Button, RadioGroup, Switch } from '@eliocro/my-ui';

function App() {
  const [active, setActive] = useState(false);
  const [mode, setMode] = useState('light');

  return (
    <>
      <h1>My-UI Components Demo</h1>
      <Button onClick={() => window.alert('Hello World!')}>
        This is a button
      </Button>
      <Switch
        name="active"
        label="Device active"
        checked={active}
        onChange={setActive}
      />
      <RadioGroup
        name="mode"
        label="Mode"
        options={RADIO_OPTIONS}
        value={mode}
        onChange={setMode}
      />
    </>
  );
}

export default App;

const RADIO_OPTIONS = [
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
];
