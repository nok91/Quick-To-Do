import React from 'react';
import { render, screen } from '@testing-library/react';
import QuoteBlock from '..';
import useQuoteBlock from '../hooks/useQuoteBlock';

jest.mock('../hooks/useQuoteBlock');

describe('<QuoteBlock />', () => {
  it('should have have the same provided content', () => {
    useQuoteBlock.mockReturnValue({
      quote: 'This is a <b> Random Text </b>'
    });
    render(<QuoteBlock />);
    expect(screen.getByRole('heading', { name: /this is a random text/i })).toBeTruthy();
  });
});
