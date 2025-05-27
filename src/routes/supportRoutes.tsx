import React from 'react';
import Inquries from '../page/manage/support/Inqueries.tsx';
import Notice from '../page/manage/support/Notice.tsx';
import Faq from '../page/manage/support/Faq.tsx';

export const supportRoutes = [
  { path: "support/support/0", element: <Inquries /> },
  { path: "support/support/1", element: <Notice /> },
  { path: "support/support/2", element: <Faq /> },
];
