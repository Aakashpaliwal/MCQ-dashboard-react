import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Sidebar.css';

class Sidebar extends Component {
    render() {
        return (
            <body className="skin-blue">
                <div className="left-sidebar">
          
            <div className="scroll-sidebar custom-scroll-sidebar-bg">
               
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        <li className="user-pro"> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><img src={require('../../assets/images/users/1.jpg')} /><span className="hide-menu">Mark Jeckson</span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="javascript:void(0)"><i className="ti-user"></i> My Profile</a></li>
                                <li><a href="javascript:void(0)"><i className="ti-wallet"></i> My Balance</a></li>
                                <li><a href="javascript:void(0)"><i className="ti-email"></i> Inbox</a></li>
                                <li><a href="javascript:void(0)"><i className="ti-settings"></i> Account Setting</a></li>
                                <li><a href="javascript:void(0)"><i className="fa fa-power-off"></i> Logout</a></li>
                            </ul>
                        </li>
                        <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="fa fa-user" aria-hidden="true"></i><span className="hide-menu">User</span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><Link to ="/AddUser"><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Users</Link></li>
                            </ul>
                        </li>
                        <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="fa fa-superpowers" aria-hidden="true"></i><span className="hide-menu">Subject</span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><Link to ="/AddSubject"><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Subject</Link></li>
                                
                            </ul>
                        </li>
                        <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="fa fa-question-circle" aria-hidden="true"></i><span className="hide-menu">Question</span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><Link to ="/AddQuestion"><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Question</Link></li>
                            </ul>
                        </li>
                        {/* <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="fa fa-user" aria-hidden="true"></i><span className="hide-menu">User</span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><Link to ="/AddUser"><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Users</Link></li>
                                <li><a href="pages-blank.html"><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Users</a></li>
                            </ul>
                        </li>
                        <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="fa fa-user-plus" aria-hidden="true"></i><span className="hide-menu">Partner</span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><Link to ="/AddPartner"><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Partner</Link></li>
                                <li><a href="pages-blank.html"><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Partner</a></li>
                            </ul>
                        </li>
                        <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="fa fa-user-plus" aria-hidden="true"></i><span className="hide-menu">Forms</span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><Link to ="/AddForms"><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Forms</Link></li>
                                <li><a href="pages-blank.html"><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Partner</a></li>
                            </ul>
                        </li> */}
                  
                    </ul>
                </nav>
               
            </div>
                   </div>
                   </body>
           
        );
    }
}

export default Sidebar;