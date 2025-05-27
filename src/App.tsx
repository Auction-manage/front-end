import React from 'react';
import './App.css';
import AppRouter from './Router.tsx';
//import { AuthProvider } from './context/AuthContext.tsx';

function App() {
    return (
        //<AuthProvider>
            <AppRouter />
        //</AuthProvider>
    );
}

export default App;
