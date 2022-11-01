import { render } from "@testing-library/react";
import { describe, test} from 'vitest';
import App from "./App";
import React from 'react'

describe('App', () => {
  test('O App esta renderizando', () => {
    const { debug } = render(<App />);

    debug();
  })
})
