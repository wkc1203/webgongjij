
import React from 'react';
import style from './index.module.scss';
import { ReactZeroClipboard } from 'react-zeroclipboard';

export const Clipboard = () => (
  <ReactZeroClipboard text="Hello, world!"><button>Copy</button></ReactZeroClipboard>
)
