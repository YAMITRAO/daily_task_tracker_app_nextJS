import Link from "next/link"
import style from "./MainHeader.module.css"

import React from 'react'

const MainHeader = () => {
  return (
    <div className={style.container}>
     <div className={style.logo}><Link href="/">MyToDo</Link></div>
     <ul className={style.navLink}>
      <li><Link href="/">Today's Tasks</Link></li>
      <li><Link href="/">Completed Tasks</Link></li>
      <li><Link href="/">deleted Tasks</Link></li>
     </ul>
     <button className={style.addTask}><Link href="/newentry">Add Task</Link></button>
    </div>
  )
}

export default MainHeader