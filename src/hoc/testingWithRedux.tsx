import { ReactElement } from 'react';
import { RenderOptions, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { baseTheme } from '../assets/styles/baseTheme';
import { store } from '../redux/store';

const Providers = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={baseTheme}>
    <Provider store={store}>{children}</Provider>
  </ThemeProvider>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';
export { customRender as render };
