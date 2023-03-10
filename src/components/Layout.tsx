import Head from 'next/head';
import { FC, ReactNode } from 'react';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const NAME = 'shincode';
export const siteTitle = 'Next,js blog';

type Props = {
  children: ReactNode;
  home: boolean;
};

const Layout: FC<Props> = (props) => {
  const { children, home } = props;
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`}
              src='/images/profile.png'
            />
            <h1 className={utilStyles.heading2Xl}>{NAME}</h1>
          </>
        ) : (
          <>
            <img
              className={utilStyles.borderCircle}
              src='/images/profile.png'
            />
            <h1 className={utilStyles.heading2Xl}>{NAME}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href='/'>←ホームへ戻る</Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
