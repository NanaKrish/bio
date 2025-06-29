import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navigation from './Navigation';
const Layout = ({ children }) => {
    return (_jsxs("div", { className: "min-h-screen", children: [_jsx(Navigation, {}), _jsx("main", { children: children })] }));
};
export default Layout;
