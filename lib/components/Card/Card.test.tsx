import { expect, test, describe } from 'vitest';

import { render } from '@testing-library/react';

import { Card } from './Card';

describe('Card', () => {
  test('should match snapshot', () => {
    const { container } = render(<Card title="Card Title" description="This is a card" />);
    expect(container).toMatchSnapshot();
  });
});
