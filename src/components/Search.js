import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  state = { userName: 'wilo087' }

  handleSubmit = async (e) => {
    e.preventDefault();
    
    const res = await axios.get(`https://api.github.com/users/${this.state.userName}`);
    this.props.onSubmit(res.data);
    this.setState({userName: ''});
    // console.log(res.data);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name='username'
          placeholder='Enter the user name'
          value={this.state.userName}
          onChange={e => this.setState({userName: e.target.value})} />
        <button type='submit'>Buscar</button>
      </form>
    )
  }
}

export default Search