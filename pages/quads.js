import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from 'react';
import RecursiveQuads from '../components/recursive-quads'


export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
          <title>Triangles!</title>
          
      </Head>

      <RecursiveQuads/>

      
    </div>
  );
}
