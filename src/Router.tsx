import React, { Fragment } from 'react';
import {
    BrowserRouter,
    Route,
    Routes,
  } from "react-router-dom";
import ManageHome from './page/manage/manageHome.tsx';
import MemberManage from './page/manage/memberManage.tsx';
import ProductManage from './page/manage/productManage.tsx';
import UserManage from './page/manage/userManage.tsx';
import DesignManage from './page/manage/designManage.tsx';
import ManageLayout from './components/layout/ManageLayout.tsx';
import { memberRoutes } from './routes/memberRoutes.tsx';
import { transactionRoutes } from './routes/transactionRoutes.tsx'
import { supportRoutes } from './routes/supportRoutes.tsx';
import { designRoutes } from './routes/designRoutes.tsx';

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/manage" element={<ManageLayout />}>
                <Route index element={<ManageHome />} />
                <Route path="members" element={<UserManage />} />
                {memberRoutes.map((route, idx) => (
                    <Fragment key={idx}>
                        <Route path={route.path} element={route.element} />
                    </Fragment>
                ))}
                <Route path="transactions" element={<ProductManage />} />
                {transactionRoutes.map((route, idx) => (
                    <Fragment key={idx}>
                        <Route path={route.path} element={route.element} />
                    </Fragment>
                ))}
                <Route path="support" element={<MemberManage />} />
                {supportRoutes.map((route, idx) => (
                    <Fragment key={idx}>
                        <Route path={route.path} element={route.element} />
                    </Fragment>
                ))}
                <Route path="design" element={<DesignManage />} />
                {designRoutes.map((route, idx) => (
                    <Fragment key={idx}>
                        <Route path={route.path} element={route.element} />
                    </Fragment>
                ))}
            </Route>
            <Route path="/" element={<div>Home</div>} />
        </Routes>
    </BrowserRouter>
    );
};

export default Router;
