import React from 'react';
import TransactionsList from '../page/manage/transactions/TransactionsList.tsx';
import DepositWait from '../page/manage/transactions/DepositWait.tsx';
import DepositComplete from '../page/manage/transactions/DepositComplete.tsx';
import DeliveryWait from '../page/manage/transactions/DeliveryWait.tsx';
import Delivering from '../page/manage/transactions/Delivering.tsx';
import DeliveryEnd from '../page/manage/transactions/DeliveryEnd.tsx';
import Cancel from '../page/manage/transactions/Cancel.tsx';
import Refund from '../page/manage/transactions/Refund.tsx';
import Return from '../page/manage/transactions/Return.tsx';

export const transactionRoutes = [
  { path: "transactions/transactions/0", element: <TransactionsList /> },
  { path: "transactions/transactions/1", element: <DepositWait /> },
  { path: "transactions/transactions/2", element: <DepositComplete /> },
  { path: "transactions/transactions/3", element: <DeliveryWait /> },
  { path: "transactions/transactions/4", element: <Delivering /> },
  { path: "transactions/transactions/5", element: <DeliveryEnd /> },
  { path: "transactions/cancel/0", element: <Cancel /> },
  { path: "transactions/cancel/1", element: <Return /> },
  { path: "transactions/cancel/2", element: <Refund /> },
];
