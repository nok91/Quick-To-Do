import React from 'react';
import { render, screen } from '@testing-library/react';
import RandomIcon from '..';

describe('<RandomIcon />', () => {
  it('should have a task image', () => {
    render(<RandomIcon />);

    expect(
      screen.getByRole('img', {
        name: /task/i
      })
    ).toBeInTheDocument();
  });
});
