import s from './HomeTab.module.scss';
import React from 'react';
import { updateTransactions } from 'redux/finance/financeOperation';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { financeSelectors } from 'redux/finance/financeSelectors';
import { useSelector } from 'react-redux';

const HomeTab = () => {
  const dispatch = useDispatch();

  const transactions = useSelector(financeSelectors.getTransactions);
  const sortedTransactions = [...transactions].sort(function (a, b) {
    return (
      Number(b.date.replace(/^(\d+)-(\d+)-(\d+)\D.+$/, '$1$2$3')) -
      Number(a.date.replace(/^(\d+)-(\d+)-(\d+)\D.+$/, '$1$2$3'))
    );
  });

  function colorOfSum(item) {
    if (item.transactionType === true) {
      return `${s.tableRowItem} ${s.sum} ${s.sumColorIncome}`;
    } else {
      return `${s.tableRowItem} ${s.sum} ${s.sumColorExpense}`;
    }
  }

  function typeChanger(item) {
    if (item.transactionType === true) {
      return '+';
    } else {
      return '-';
    }
  }
  useEffect(() => {
    dispatch(updateTransactions());
  }, [dispatch]);
  return (
    <table className={s.table}>
      <thead className={s.tableHeaderTh}>
        <tr className={s.tableHeader}>
          <th className={`${s.tableTitle} ${s.date}`}>Date</th>
          <th className={`${s.tableTitle} ${s.type}`}>Type</th>
          <th className={`${s.tableTitle} ${s.category}`}>Category</th>
          <th className={`${s.tableTitle} ${s.comment}`}>Comment</th>
          <th className={`${s.tableTitle} ${s.sum}`}>Sum</th>
          <th className={`${s.tableTitle} ${s.balance}`}>Balance</th>
        </tr>
      </thead>
      <tbody className={s.tableContent}>
        {sortedTransactions.map(item => (
          <tr key={item._id} className={s.tableRow}>
            <th className={`${s.tableRowItem} ${s.date}`}>
              {item.date.replace(/^(\d+)-(\d+)-(\d+)\D.+$/, '$3.$2.$1')}
            </th>
            <th className={`${s.tableRowItem} ${s.type}`}>
              {typeChanger(item)}
            </th>
            <th className={`${s.tableRowItem} ${s.category}`}>
              {item.category.name}
            </th>
            <th className={`${s.tableRowItem} ${s.comment}`}>{item.comment}</th>
            <th className={colorOfSum(item)}>{item.amount}</th>
            <th className={`${s.tableRowItem} ${s.balance}`}>
              {item.remainingBalance}
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HomeTab;
