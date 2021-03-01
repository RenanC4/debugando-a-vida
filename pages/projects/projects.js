import {useState, useEffect} from 'react'
import Card from '../../components/card/card'
import styles from '../../styles/Projects.module.css'


function Projects() {
  return (
    <div className={styles.container}>
      <span className={styles.title}> Meus projetos </span>
      <div className={styles.content}> 
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}

export default Projects