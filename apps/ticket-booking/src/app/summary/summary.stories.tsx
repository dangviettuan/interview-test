import React from 'react';
import { Summary, SummaryProps } from './summary';

export default {
  component: Summary,
  title: 'Summary',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: SummaryProps = {};

  return (
    <Summary
      location="CGV Crescent Mall"
      date="08/07/2019"
      from="09:10"
      to="11:10"
      total={18000}
    />
  );
};
