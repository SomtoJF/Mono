'use client';

import { InputNumber, Button } from 'antd';
import axios from 'axios';
import { useState } from 'react';

export function Form() {
  const [counter, setCounter] = useState(0);

  const onChange = (value: number) => {
    setCounter(value);
  };

  const postNewCounterValue = (value: number) => {
    try {
      axios
        .post('http://localhost:8080/counter', { value: value })
        .then((response) => console.log(response));
    } catch (err) {
      throw err;
    }
  };

  return (
    <form action="">
      <InputNumber
        min={1}
        defaultValue={counter}
        onChange={onChange}
        type="primary"
      />
      <Button onClick={() => postNewCounterValue(counter)}>
        Update Counter
      </Button>
    </form>
  );
}
