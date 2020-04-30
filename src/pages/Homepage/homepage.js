import React, { useState, useEffect } from 'react';
import styles from './homepage.module.css'
import {Link} from 'react-router-dom'



const Homepage = () =>  {

    return (
      <div>
          <h1 className={styles.h1}>Hello</h1>
          <ul>
            <Link to="/aboutme">About Me</Link>
            <Link to="/Projects">Projects</Link>
          </ul>
      </div>
    );
}

export default Homepage;