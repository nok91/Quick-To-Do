import React from 'react';
import { render, screen } from '@testing-library/react';
import Skeleton from '../';

describe('<Skeleton />', () => {
    it('should match snapshot', () => {
        let component = render(<Skeleton />);
        expect(component.container.firstChild).toMatchSnapshot();

        component = render(
            <Skeleton>
                <Skeleton.Head>Head Content</Skeleton.Head>
                <Skeleton.Body>Body Content</Skeleton.Body>
                <Skeleton.Footer>Footer Content</Skeleton.Footer>
            </Skeleton>
        );
        expect(component.container.firstChild).toMatchSnapshot();

        expect(screen.getByText(/Head Content/i)).toBeInTheDocument();
        expect(screen.getByText(/Body Content/i)).toBeInTheDocument();
        expect(screen.getByText(/Footer Content/i)).toBeInTheDocument();
    });

});
