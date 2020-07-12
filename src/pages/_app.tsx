import NextApp from 'next/app';
import AppThemeProvider from '~components/AppThemeProvider/AppThemeProvider';

export default class App extends NextApp {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <AppThemeProvider>
                <Component {...pageProps} />
            </AppThemeProvider>
        );
    }
}
