import React, { Component } from 'react';
import './App.scss';
import { AboutMe, AboutMeDetail } from './components/AboutMe';
import { EducationDetail, Education } from './components/Education';
import { Photo, Greet, Information, Line } from './components/BasicInformation';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Photo />
        <Greet />
        <Information />
        <Line />
        <AboutMe />
        <AboutMeDetail />
        <Education />
        <EducationDetail />
      </main>
    );
  }
}

export default App;
