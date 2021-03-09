import React from 'react'
import { Route, Switch } from "react-router-dom";
import './App.css';
import Contact_us from './component/Contact_us';
// import Contact_us from './component/Contact_us';
import Dashboard from './component/Dashboard';
import FormikContainer from './component/Formik/formikCantainer';
import Home from './component/Home';
import Login from './component/login';
import Register from './component/Register';
import TableFormat from './component/TableFormat';
import UpdateProfile from './component/UpdateProfile';
import DashBoardBlog from './component/Blogs/DashBoardBlog';
// import Navbar from './layout/navbar';


function App() {

  const error = () => {
    return (
      <div>
        <h2>Data not found</h2>
      </div>
    );
  };


  return (
    <>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact_us} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/updateprofile" component={UpdateProfile} />
        <Route exact path="/formik" component={FormikContainer} />
        <Route exact path="/tableformat" component={TableFormat} />
        <Route exact path="/dashboard/dashboardblog" component={DashBoardBlog} />
        <Route component={error} />
      </Switch>   
    </>
  );
}

export default App;
