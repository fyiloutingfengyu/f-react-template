import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementAsync1,
  incrementIfOdd,
  selectCount,
  selectCount1,
  getData
} from '@/redux/features/counter/counterSlice';
import styles from './counter.module.scss';
import { showFailToast } from '@/utils/package-antd-mobile';

export default function Counter() {
  const count = useSelector(selectCount);
  const count1 = useSelector(selectCount1);
  // todo f
  const data = useSelector(getData);
  console.log(677, data);
  const initPageRef = useRef<boolean>();
  // todo f
  useEffect(() => {
    // 非页面初始化时才对数据进行操作
    if (initPageRef.current) {
      if (data.code !== 200) {
        console.log(678, data);
        showFailToast(data.message);
      }
    } else {
      initPageRef.current = true;
    }
  }, [data]);

  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>

      <div className={styles.row}>
        <span className={styles.value}>{count1}</span>
      </div>

      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync1(incrementValue))}
        >
          Add Async 1
        </button>
      </div>
    </div>
  );
}
