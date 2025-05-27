import React from 'react';
import ManageHeader from './ManageHeader.tsx';
import ManageSidebar from './ManageSidebar.tsx';
import { Outlet, useLocation } from 'react-router-dom';

function ManageLayout() {
    const location = useLocation();
    const showSidebar = location.pathname.startsWith('/manage');

    return (
        <div>
            <ManageHeader />
            <div style={{ display: 'flex' }}>
                {showSidebar && <ManageSidebar />}
                <div style={{ flex: 1, padding: '20px' }}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default ManageLayout;
