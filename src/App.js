import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
// import AddProduct from './components/Product/AddProduct';
// import ProductTable from './components/Product/ProductTable';
// import AddBlog from './components/Blog/AddBlog';
import AddUser from './components/User/AddUser';
// import AddPartner from './components/Partner/AddPartner';
// import AddForms from './components/Forms/AddForms';
// import AddLogin from './components/Login/AddLogin';
// import Register from './components/Login/Register';
import Datacard from './components/Datacard/Datacard';
import Dth from './components/Dth/Dth';
import Electricity from './components/Electricity/Electricity';
import Landline from './components/Landline/Landline';
import Mobile from './components/Mobile/Mobile';
import AddSubject from './components/Subject/AddSubject';
import AddQuestion from './components/Question/AddQuestion';
import { Route } from 'react-router-dom';
import Formfirebase from './components/Forms/Formfirebase';


class App extends Component {
  render() {
    return (
     
        <div>
        <Header />
        <Sidebar />
        <Route path = "/" exact component = {Home} />
        {/* <Route path = "/AddProduct" exact = {true} component = {AddProduct} />
        <Route path = "/ProductTable" exact = {true} component = {ProductTable} />
        <Route path="/AddBlog" exact = {true} component = {AddBlog} />
        <Route path = "/AddPartner" exact = {true} component = {AddPartner} />  
        <Route path = "/AddForms" exact = {true} component = {AddForms} />
        <Route path = "/AddLogin" exact = {true} component = {AddLogin} />
        <Route path = "/Register" exact = {true} component = {Register} /> */}
        <Route path = "/Datacard" exact component = {Datacard}/>
        <Route path = "/Dth" exact component = {Dth}/>
        <Route path = "/Electricity" exact component = {Electricity}/>
        <Route path = "/Landline" exact component = {Landline}/>
        <Route path = "/Mobile" exact component = {Mobile}/>
        <Route path = "/AddUser" exact = {true} component = {AddUser} />
        <Route path = "/Formfirebase" exact component = {Formfirebase}/>
        <Route path = "/AddSubject" exact component = {AddSubject}/>
        <Route path = "/AddQuestion" exact component = {AddQuestion}/>

         

          <Footer />
          
          </div>
     
    );
  }
}

export default App;
