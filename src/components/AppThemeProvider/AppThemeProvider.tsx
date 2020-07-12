import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import theme from './theme';

const AppThemeProvider: React.FC = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <Normalize />
            {children}
        </ThemeProvider>
    );
};

export default AppThemeProvider;
