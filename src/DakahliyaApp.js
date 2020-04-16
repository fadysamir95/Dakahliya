import React, { Component } from 'react';
import Header from './Header';
import SearchBox from './SearchBox';
import Card from './Card';
import './DakahliyaApp.css';
import './dist/css/bootstrap.css';
import Reject from './icons/x-circle.svg';
import Shortlisted from './icons/smile.svg';

class DakahliyaApp extends Component {

  render() {
    return (
      <div>

        <Header />

        <SearchBox />

        <div className="container">
          <p className='sec-title mt-60'>Dashboard</p>

          <div className="row mt-30">
            <div className="col-md-3">
              <Card title='Quality Manager' location='Giza, Egypt' period='Full-Time' status='Rejected' statusIcon={Reject}/>
            </div>
            <div className="col-md-3">
              <Card title='IT Manager' location='Cairo, Egypt' period='Part-Time' status='Shortlisted' statusIcon={Shortlisted}/>
            </div>
            <div className="col-md-3">
              <Card title='DevOps Engineer' location='Dumiat, Egypt' period='Full-Time' status='Shortlisted' statusIcon={Shortlisted}/>
            </div>
            <div className="col-md-3">
              <Card title='Web Developer' location='Tanta, Egypt' period='Full-Time' status='Pending'/>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-3">
              <Card title='Accountant' location='Dakahlya, Egypt' period='Full-Time' status='Shortlisted' statusIcon={Shortlisted}/>
            </div>
            <div className="col-md-3">
              <Card title='HR Recruiter' location='Gharbya, Egypt' period='Part-Time' status='Rejected' statusIcon={Reject}/>
            </div>
            <div className="col-md-3">
              <Card title='Software Engineer' location='Alexandria, Egypt' period='Full-Time' status='Pending'/>
            </div>
            <div className="col-md-3">
              <Card title='Photographer' location='Suez, Egypt' period='Full-Time' status='Rejected' statusIcon={Reject}/>
            </div>
          </div>
        </div>

      </div>
    );
  }
  
}

export default DakahliyaApp;