import React from 'react';
import { Explain, ExplainProps } from './explain';

export default {
  component: Explain,
  title: 'Explain',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: ExplainProps = {};

  return <Explain />;
};
