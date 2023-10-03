import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from 'react';
import RecursiveQuads2 from '../components/recursive-quads2'


export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
          <title>Triangles!</title>
          
      </Head>

      <RecursiveQuads2/>

      
    </div>
  );
}
