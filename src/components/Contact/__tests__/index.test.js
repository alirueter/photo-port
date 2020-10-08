import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact form is rendering', () => { 
    it('renders', () => {
        render(<Contact />); 
    });
    
    it('matches snapshot', () => {
        const { asFragment } = render(<Contact />);
        expect(asFragment()).toMatchSnapshot();
    }); 
});

describe('match Contact me', () => {
    it('inserts text into links', () => {
        const {getByTestId} = render(<Contact/>);
        expect(getByTestId('contact')).toHaveTextContent('Contact me');
    });
});

describe('match submit button', () => {
    it('inserts text into the links', () => {
        const {getByTestId} = render(<Contact/>);
        expect(getByTestId('submit-button')).toHaveTextContent('Submit');
    });
});