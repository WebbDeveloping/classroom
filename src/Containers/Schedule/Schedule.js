import React,{memo} from 'react';
import './Schedule.scss';
import Calendar from '../../Components/Schedule/Calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

function Schedule() {
  return (
    <div className='scheduleContainer'>
      <Calendar/>
    </div>
  )
}

export default memo(Schedule)
