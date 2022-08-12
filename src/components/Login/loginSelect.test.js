import{render,screen} from '@testing-library/react';
import loginSelect from './loginSelect';

test('renders learn react link', () => {
   render(<loginSelect />);
   screen.debug();
    expect(screen.getByText(/login/i)).toBeInTheDocument();
} );