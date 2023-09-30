import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from 'react';
import Circles from '../components/circles'


export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
          <title>Circles!</title>
          
      </Head>

      <Circles/>

      
    </div>
  );
}
