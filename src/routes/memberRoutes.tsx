import React from 'react';
import UserInfo from '../page/manage/user/UserInfo.tsx';
import UserRank from '../page/manage/user/UserRank.tsx';
import UserMail from '../page/manage/user/UserMail.tsx';
import Points from '../page/manage/user/Points.tsx';
import PointsSend from '../page/manage/user/PointsSend.tsx';
import MonthStatistics from '../page/manage/user/MonthStatistics.tsx';
import DayStatistics from '../page/manage/user/DayStatistics.tsx';

export const memberRoutes = [
  { path: "members/users/0", element: <UserInfo /> },
  { path: "members/users/1", element: <UserRank /> },
  { path: "members/users/2", element: <UserMail /> },
  { path: "members/points/0", element: <Points /> },
  { path: "members/points/1", element: <PointsSend /> },
  { path: "members/statistics/0", element: <MonthStatistics /> },
  { path: "members/statistics/1", element: <DayStatistics /> },
];
