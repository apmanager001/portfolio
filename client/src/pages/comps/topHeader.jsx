import React from 'react'
import {Link} from 'react-router-dom'
import styles from '../css/header.module.css'

const TopHeader = () => {
  return (
    <div className={styles.proHeader}>
          <Link to='/'>Professional</Link>
          <Link to='/personal'>Personal</Link>
    </div>
  )
}

export default TopHeader