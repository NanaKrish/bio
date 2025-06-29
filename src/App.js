import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Education from './pages/Education';
import Research from './pages/Research';
import Experience from './pages/Experience';
import Miscellaneous from './pages/Miscellaneous';
function App() {
    return (_jsx(Layout, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/bio", element: _jsx(Home, {}) }), _jsx(Route, { path: "/education", element: _jsx(Education, {}) }), _jsx(Route, { path: "/research", element: _jsx(Research, {}) }), _jsx(Route, { path: "/experience", element: _jsx(Experience, {}) }), _jsx(Route, { path: "/miscellaneous", element: _jsx(Miscellaneous, {}) })] }) }));
}
export default App;
