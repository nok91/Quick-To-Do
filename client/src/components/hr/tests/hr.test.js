import React from 'react';
import { render } from '@testing-library/react';
import Hr from '../';

describe('<Hr />', () => {
    it('should have a profile image', () => {
        const { container } = render(<Hr />);
        expect(container.firstChild).toMatchSnapshot()
    });
});
