import React from 'react';
import {
    BrowserRouter,
    Route,
    BrowserRouter as Router,
    Routes,
    useLocation,
  } from "react-router-dom";
import ManageHome from './page/manage/manageHome';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/manage" element={<ManageHome />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
