import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './../Pages/Home/Home';
import Dashboard from './../Pages/Dashboard/Dashboard';
import Classroom from './../Pages/Classroom/Classroom';
import LoginModal from '../Containers/LoginModal/LoginModal';
import RegisterModal from '../Containers/RegisterModal/RegisterModal';
import AddCourseModal from './../Containers/AddCourseModal/AddCourseModal';
import AddLectureModal from '../Containers/AddCourseModal/AddLectureModal';
import BrowseClasses from '../Pages/BrowseClasses/BrowseClasses';

export default (
  <Switch>
      <Route path='/browseclasses/:subject' component={BrowseClasses}/>
      <Route path='/browseclasses' component={BrowseClasses}/>
      <Route path='/dashboard' component={Dashboard}/>
      <Route path='/classroom/:course_id' component={Classroom}/>
      <Route path='/addCourse' component={AddCourseModal}/>
      <Route path='/addLecture' component={AddLectureModal} />
      <Route path='/' component={Home}/>
  </Switch>
);
