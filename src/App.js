import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Card from './components/Card';
import './App.css';

const testData = [
];

class App extends React.Component {
  state = {
    profiles: testData
  }
  
  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    })) 
    // console.log()
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Search onSubmit={this.addNewProfile} />

        <div className='wcc-userList'>
          {
            this.state.profiles.map(profile => {
              return (
                <Card key={profile.name} {...profile} />
              )
            })
          }
        </div>
      </div>
    )
  };
}

export default App;
