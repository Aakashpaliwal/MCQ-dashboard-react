import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './Locations.css';

export class ViewLocations extends Component {
    render() {
        return (
    
            <body className="skin-blue fixed-layout">
            <div className="page-wrapper">
    
                 <div className="container-fluid">
                   
                   <div className="row page-titles">
                       <div className="col-md-5 align-self-center">
                           {/* <h4 className="text-themecolor">Location Table</h4> */}
                           <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Location Table</li>
                            </ol>
                            </nav>
                       </div>
                      
                   </div>
    
    
                </div>
          <div>
              <div className="custom-table-container">
                <div className="container">
                <div className="below-custom-table-container">
                        <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <table id="example" className="table table-striped table-bordered custom-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Number</th>
                    <th>Email</th>
                    <th>Zone</th>
                    <th>Location</th>
                   <th>Address</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>Normal</td>
                    <td>Address</td>
                   
                   
                </tr>
                <tr>
                    <td>Garrett Winters</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>63</td>
                    <td>Critical</td>
                    <td>Address</td>
                   
                   
                </tr>
                <tr>
                    <td>Ashton Cox</td>
                    <td>Junior Technical Author</td>
                    <td>San Francisco</td>
                    <td>66</td>
                   <td>Normal</td>
                   <td>Address</td>
                    
                </tr>
                <tr>
                    <td>Cedric Kelly</td>
                    <td>Senior Javascript Developer</td>
                    <td>Edinburgh</td>
                    <td>22</td>
                    <td>Critical</td>
                    <td>Address</td>
                   
                </tr>
                <tr>
                    <td>Airi Satou</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>33</td>
                   <td>Normal</td>
                   <td>Address</td>
                    
                </tr>
                <tr>
                    <td>Brielle Williamson</td>
                    <td>Integration Specialist</td>
                    <td>New York</td>
                    <td>61</td>
                    <td>Critical</td>
                    <td>Address</td>
                    
                </tr>
                <tr>
                    <td>Herrod Chandler</td>
                    <td>Sales Assistant</td>
                    <td>San Francisco</td>
                    <td>59</td>
                    <td>Normal</td>
                    <td>Address</td>
                    
                </tr>
                <tr>
                    <td>Rhona Davidson</td>
                    <td>Integration Specialist</td>
                    <td>Tokyo</td>
                    <td>55</td>
                   <td>Critical</td>
                   <td>Address</td>
                    
                </tr>
                <tr>
                    <td>Colleen Hurst</td>
                    <td>Javascript Developer</td>
                    <td>San Francisco</td>
                    <td>39</td>
                    <td>Normal</td>
                    <td>Address</td>
                    
                </tr>
                <tr>
                    <td>Sonya Frost</td>
                    <td>Software Engineer</td>
                    <td>Edinburgh</td>
                    <td>23</td>
                    <td>Critical</td>
                    <td>Address</td>
                   
                </tr>
                <tr>
                    <td>Jena Gaines</td>
                    <td>Office Manager</td>
                    <td>London</td>
                    <td>30</td>
                   <td>Critical</td>
                   <td>Address</td>
                   
                </tr>
                <tr>
                    <td>Quinn Flynn</td>
                    <td>Support Lead</td>
                    <td>Edinburgh</td>
                    <td>22</td>
                   <td>Critical</td>
                   <td>Address</td>
                   
                </tr>
                <tr>
                    <td>Charde Marshall</td>
                    <td>Regional Director</td>
                    <td>San Francisco</td>
                    <td>36</td>
                   <td>Normal</td>
                   <td>Address</td>
                   
                </tr>
                <tr>
                    <td>Haley Kennedy</td>
                    <td>Senior Marketing Designer</td>
                    <td>London</td>
                    <td>43</td>
                    <td>Normal</td>
                    <td>Address</td>
                   
                </tr>
                <tr>
                    <td>Tatyana Fitzpatrick</td>
                    <td>Regional Director</td>
                    <td>London</td>
                    <td>19</td>
                    <td>Critical</td>
                    <td>Address</td>
                    
                </tr>
                <tr>
                    <td>Michael Silva</td>
                    <td>Marketing Designer</td>
                    <td>London</td>
                    <td>66</td>
                    <td>Normal</td>
                    <td>Address</td>
                    
                </tr>
                <tr>
                    <td>Paul Byrd</td>
                    <td>Chief Financial Officer (CFO)</td>
                    <td>New York</td>
                    <td>64</td>
                   <td>Critical</td>
                   <td>Address</td>
                    
                </tr>
                <tr>
                    <td>Gloria Little</td>
                    <td>Systems Administrator</td>
                    <td>New York</td>
                    <td>59</td>
                   <td>Normal</td>
                   <td>Address</td>
                   
                </tr>
                <tr>
                    <td>Bradley Greer</td>
                    <td>Software Engineer</td>
                    <td>London</td>
                    <td>41</td>
                   <td>Critical</td>
                   <td>Address</td>
                   
                </tr>
                <tr>
                    <td>Dai Rios</td>
                    <td>Personnel Lead</td>
                    <td>Edinburgh</td>
                    <td>35</td>
                    <td>Normal</td>
                    <td>Address</td>
                    
                </tr>
                <tr>
                    <td>Jenette Caldwell</td>
                    <td>Development Lead</td>
                    <td>New York</td>
                    <td>30</td>
                   <td>Critical</td>
                   <td>Address</td>
                    
                </tr>
                <tr>
                    <td>Yuri Berry</td>
                    <td>Chief Marketing Officer (CMO)</td>
                    <td>New York</td>
                    <td>40</td>
                   <td>Normal</td>
                   <td>Address</td>
                    
                </tr>
                </tbody>
                <tfoot>
                <tr>
                <th>Name</th>
                    <th>Number</th>
                    <th>Email</th>
                    <th>Zone</th>
                    <th>Location</th>
                   <th>Address</th>
                </tr>
            </tfoot>
                </table>
                </div>
                        </div>
                    </div>
                </div>
              </div>
            
              
              
                </div>
                </div>
                </body>
            
         
        )
      }
    }

export default ViewLocations
