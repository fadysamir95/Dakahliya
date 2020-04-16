import React from 'react';
import { render } from '@testing-library/react';
import DakahliyaApp from './DakahliyaApp';

test('renders learn react link', () => {
  const { getByText } = render(<DakahliyaApp />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
