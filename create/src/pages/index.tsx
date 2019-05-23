import React from 'react';
import styles from './index.css';
import { formatMessage } from 'umi-plugin-locale';
import Link from 'umi/link'
import router from 'umi/router'
export default function() {
  return (
    <div className={styles.normal}>
    <Link to="/counter">link去Counter页面</Link>
    <Link to="/list">link去list页面</Link>
      <div className={styles.welcome} />
      <button onClick={()=>router.push('/counter')}>counter页面</button>
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            {formatMessage({id:"xi"})}
            {formatMessage({ id: 'index.start' })}
          </a>
        </li>
      </ul>
    </div>
  );
}
