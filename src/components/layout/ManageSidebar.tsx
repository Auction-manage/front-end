import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ManageSidebar.css';

type MenuItem = string[];
type MenuStructure = { [key: string]: MenuItem };

function ManageSidebar() {
    const location = useLocation();
    const navigate = useNavigate();
    const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

    const menus: { [key: string]: MenuStructure } = {
        '/manage/members': {
            '회원관리': ['회원 정보 관리', '회원 등급 관리', '회원 일괄 메일 발송'],
            '포인트 관리': ['포인트 관리', '포인트 일괄 지급 & 차감'],
            '통계': ['월 별 가입 및 방문 통계', '일 별 가입 및 방문 통계']
        },
        '/manage/transactions': {
            '거래관리': ['거래 리스트(전체)', '입금 대기', '입금 완료', '배송 준비', '배송 중', '배송 완료'],
            '취소/반품/환불 관리': ['입금 전 취소', '배송 전 환불', '배송 후 반품']
        },
        '/manage/support': {
            '고객지원': ['1:1 상담문의', '공지사항 관리', 'FAQ 관리']
        },
        '/manage/design': {
            '디자인관리': ['테마 관리', '배너 관리']
        }
    };

    const menuSlugMap: { [key: string]: string } = {
        '회원관리': 'users',
        '포인트 관리': 'points',
        '통계': 'statistics',
        '거래관리': 'transactions',
        '취소/반품/환불 관리': 'cancel',
        '고객지원': 'support',
        '디자인관리': 'design'
    };

    const currentRoot = Object.keys(menus).find(path => location.pathname.startsWith(path));

    if (!currentRoot) return null;

    const handleMenuClick = (menu: string) => {
        setExpandedMenu(expandedMenu === menu ? null : menu);
    };

    const handleSubMenuClick = (mainMenu: string, subMenu: string, index: number) => {
        const slug = menuSlugMap[mainMenu] || mainMenu; // fallback to menu name if not mapped
        navigate(`${currentRoot}/${slug}/${index}`);
    };

    return (
        <div className="manageSidebar">
            {Object.entries(menus[currentRoot]).map(([mainMenu, subMenus], idx) => (
                <div key={idx} className="sidebar-main-item">
                    <div 
                        className="sidebar-item"
                        onClick={() => handleMenuClick(mainMenu)}
                    >
                        {mainMenu}
                    </div>
                    {expandedMenu === mainMenu && (
                        <div className="sidebar-submenu">
                            {subMenus.map((subMenu, subIdx) => (
                                <div
                                    key={subIdx}
                                    className="sidebar-sub-item"
                                    onClick={() => handleSubMenuClick(mainMenu, subMenu, subIdx)}
                                >
                                    {subMenu}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default ManageSidebar;
