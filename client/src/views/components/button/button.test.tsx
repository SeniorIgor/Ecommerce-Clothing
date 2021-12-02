import { render, screen, fireEvent } from '@testing-library/react';

import { Button } from './button';

describe('<Button />', () => {
  it('render a title', () => {
    const title = 'Add item';
    const onClick = jest.fn();

    render(<Button onClick={onClick}>{title}</Button>);
    const buttonElement = screen.getByText(title);
    fireEvent.click(buttonElement);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
