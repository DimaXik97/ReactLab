import { Component, ErrorInfo } from "react";

interface ErrorBoundaryState {
  redirect: () => void;
}

class ErrorBoundary extends Component<ErrorBoundaryState> {
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Uncaught error:", error, errorInfo);
    alert("Something went wrong. You have been redirected to the home page");
    this.props.redirect();
  }

  render(): React.ReactNode {
    return this.props.children;
  }
}
export default ErrorBoundary;
