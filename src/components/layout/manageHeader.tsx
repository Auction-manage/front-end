import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ManageHeader.css';

function ManageHeader() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="manageHeader">
            <div className="d-flex justify-content-between">
                <h1 type="button" onClick={() => navigate('/manage')} className="text">Administrator</h1>
                <div className="menudiv">
                    <ul className="menuul">
                        <li type="button" onClick={() => navigate('/')} className="text">
                            거래페이지
                        </li>
                        <li type="button" className="logout">로그아웃</li>
                    </ul>
                </div>
            </div>

            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <button
                        className={`nav-link text ${location.pathname.startsWith('/manage/members') ? 'active-tab' : ''}`}
                        onClick={() => navigate('/manage/members')}
                    >
                        회원관리
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className={`nav-link text ${location.pathname.startsWith('/manage/transactions') ? 'active-tab' : ''}`}
                        onClick={() => navigate('/manage/transactions')}
                    >
                        거래관리
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className={`nav-link text ${location.pathname.startsWith('/manage/support') ? 'active-tab' : ''}`}
                        onClick={() => navigate('/manage/support')}
                    >
                        고객지원
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className={`nav-link text ${location.pathname.startsWith('/manage/design') ? 'active-tab' : ''}`}
                        onClick={() => navigate('/manage/design')}
                    >
                        디자인관리
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default ManageHeader;
