import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from 'react';
import RecursiveTriangles from '../components/recursive_triangles'


export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
          <title>Triangles!</title>
          
      </Head>

      <RecursiveTriangles/>

      
    </div>
  );
}
