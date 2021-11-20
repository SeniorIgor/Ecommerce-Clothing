/**
 * В случае ошибки getDerivedStateFromError()сначала будет вызван метод
 * границы ошибки (для обновления состояния), затем метод render ()
 * (для фактического рендеринга резервного пользовательского интерфейса),
 * а затем componentDidCatch(после того, как резервный пользовательский
 * интерфейс будет зафиксирован в DOM).
 *  */

/** ====================== 404 Images ======================
 * https://www.kapwing.com/404-illustrations?ref=producthunt
 */

import { Component, ErrorInfo } from 'react';

import { ErrorBoundaryProps, ErrorBoundaryState } from './error-boundary.types';
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from './error-boundary.styles';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    // Используйте static getDerivedStateFromError() при рендеринге запасного UI
    // в случае отлова ошибки.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Используйте componentDidCatch() при написании кода для журналирования
    // информации об отловленной ошибке.
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/yW2W9SC.png" />
          <ErrorImageText>Sorry this page is broken</ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
