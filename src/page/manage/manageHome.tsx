import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Manage.css';

interface HistoryItem {
    no: string;
    buyer1: string;
    buyer2: string;
    phone: string;
    seller: string;
    total: number;
    when: string;
}

function ManageHome() {
    const [history, setHistory] = useState<HistoryItem[]>([]);

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const response = await axios.get('/api/history');
                setHistory(response.data);
            } catch (error) {
                console.error('거래 내역을 가져오는데 실패했습니다:', error);
            }
        };

        fetchHistory();
    }, []);

    return (
        <div className="container">
            <br />
            <div className="d-flex justify-content-between align-items-center menudiv mb-3">
                <div className="title leftborder">
                    &nbsp;&nbsp;전체 거래 통계
                </div>
                <button type="button" className="btn btn-dark">
                    거래내역 바로가기
                </button>
            </div>

            <div className="d-flex text-center">
                {/* 전체 거래현황 */}
                <div className="flex-fill border-start">
                    <div className="menudiv title mb-2">전체 거래현황</div>
                    <div className="d-flex justify-content-around">
                        <div style={{"width":"36%"}}>
                            <div className="subject">총 거래건수</div>
                            <div className="content">0</div>
                        </div>
                        <div style={{"width":"54%"}}>
                            <div className="subject">총 거래액</div>
                            <div className="content">0</div>
                        </div>
                    </div>
                </div>

                {/* 거래상태 현황 */}
                <div className="flex-fill border-center">
                    <div className="menudiv title mb-2">거래상태 현황</div>
                    <div className="d-flex justify-content-around">
                        <div style={{"width":"18%"}}>
                            <div className="subject">입금대기</div>
                            <div className="content">0</div>
                        </div>
                        <div style={{"width":"18%"}}>
                            <div className="subject">입금완료</div>
                            <div className="content">0</div>
                        </div>
                        <div style={{"width":"18%"}}>
                            <div className="subject">배송준비</div>
                            <div className="content">0</div>
                        </div>
                        <div style={{"width":"18%"}}>
                            <div className="subject">배송중</div>
                            <div className="content">0</div>
                        </div>
                        <div style={{"width":"18%"}}>
                            <div className="subject">배송완료</div>
                            <div className="content">0</div>
                        </div>
                    </div>
                </div>

                {/* 클레임 현황 */}
                <div className="flex-fill border-end">
                    <div className="menudiv title mb-2">클레임 현황</div>
                    <div className="d-flex justify-content-around">
                        <div style={{"width":"30%"}}>
                            <div className="subject">배송준비</div>
                            <div className="content">0</div>
                        </div>
                        <div style={{"width":"30%"}}>
                            <div className="subject">배송중</div>
                            <div className="content">0</div>
                        </div>
                        <div style={{"width":"30%"}}>
                            <div className="subject">배송완료</div>
                            <div className="content">0</div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <div className="d-flex justify-content-between align-items-center menudiv mb-3">
                <div className="title leftborder">
                    &nbsp;&nbsp;최근 거래내역
                </div>
                <button type="button" className="btn btn-dark">
                    거래내역 바로가기
                </button>
            </div>
            <div>
                <table style={{"width":"100%"}}>
                    <thead>
                        <tr>
                            <th>거래번호</th>
                            <th>구매자명</th>
                            <th>수령자명</th>
                            <th>전화번호</th>
                            <th>판매자명</th>
                            <th>총거래액</th>
                            <th>주문일시</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((item, index) => (
                            <tr key={index}>
                                <td>{item.no}</td>
                                <td>{item.buyer1}</td>
                                <td>{item.buyer2}</td>
                                <td>{item.phone}</td>
                                <td>{item.seller}</td>
                                <td>{item.total}</td>
                                <td>{item.when}</td>
                            </tr>
                        ))}
                        <tr>
                            <td>000000000000</td>
                            <td>ㅁㅁㅁ</td>
                            <td>ㅁㅁㅁ</td>
                            <td>010-1234-5678</td>
                            <td>ㅇㅇㅇ</td>
                            <td>89,000</td>
                            <td>2025-05-27 09:25 (화)</td>
                        </tr>
                        <tr>
                            <td>000000000000</td>
                            <td>ㅁㅁㅁ</td>
                            <td>ㅁㅁㅁ</td>
                            <td>010-1234-5678</td>
                            <td>ㅇㅇㅇ</td>
                            <td>89,000</td>
                            <td>2025-05-27 09:25 (화)</td>
                        </tr>
                        <tr>
                            <td>000000000000</td>
                            <td>ㅁㅁㅁ</td>
                            <td>ㅁㅁㅁ</td>
                            <td>010-1234-5678</td>
                            <td>ㅇㅇㅇ</td>
                            <td>89,000</td>
                            <td>2025-05-27 09:25 (화)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ManageHome;