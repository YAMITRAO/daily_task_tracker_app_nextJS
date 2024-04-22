import TaskList from "../task_of_the_day/TodayTaskList"
import style from "./Layout.module.css"
import MainHeader from './MainHeader'

const Layout = (props) => {
  return (
    <>
     <MainHeader/>
     <main className={style.container}>
        {props.children}
        </main>
    </>
   
  )
}

export default Layout