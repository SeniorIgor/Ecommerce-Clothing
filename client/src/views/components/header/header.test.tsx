import { BrowserRouter } from 'react-router-dom';
import * as redux from 'react-redux';

import {
  render,
  getMockProvider,
  fireEvent,
  RenderResult,
} from '../../../test-utils';
import { Header } from './header';

describe('Header component', () => {
  describe('if currentUser is null', () => {
    const { MockProvider } = getMockProvider();

    let utils: RenderResult;

    beforeEach(() => {
      utils = render(
        <MockProvider>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </MockProvider>
      );
    });

    it('render a sign-in Link', () => {
      expect(utils.getByText(/Sign in/i)).toBeInTheDocument();
    });
  });

  describe('if currentUser is present', () => {
    const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
    const mockDispatchFn = jest.fn();
    let utils: RenderResult;

    beforeEach(() => {
      useDispatchSpy.mockReturnValue(mockDispatchFn);

      utils = render(
        <MockProvider>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </MockProvider>
      );
    });

    afterEach(() => {
      useDispatchSpy.mockClear();
    });

    const { MockProvider } = getMockProvider({
      user: {
        currentUser: {
          displayName: 'user',
          createdAt: new Date(),
          email: 'user',
          id: 'user',
        },
      },
    });

    it('render a sign-out Link', () => {
      expect(utils.getByText(/Sign out/i)).toBeInTheDocument();
    });

    it('should call signOutStart method when link is clicked', () => {
      fireEvent(
        utils.getByText(/Sign out/i),
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        })
      );

      expect(mockDispatchFn).toHaveBeenCalledTimes(1);
    });
  });

  describe('render CartDropdown', () => {
    it('should not render CartDropdown', () => {
      const { MockProvider } = getMockProvider();

      const utils = render(
        <MockProvider>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </MockProvider>
      );

      expect(utils.queryByText(/Go to checkout/i)).not.toBeInTheDocument();
    });

    it('should render CartDropdown', () => {
      const { MockProvider } = getMockProvider({
        cart: { hidden: false },
      });

      const utils = render(
        <MockProvider>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </MockProvider>
      );

      expect(utils.queryByText(/Go to checkout/i)).toBeInTheDocument();
    });
  });
});
