import React, { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from './Searchbar/Searchbar';
import Api from './Api/Api'

class App extends Component  {
  state = {
    picture: ''
}

  onSubmitForm = e => {
    e.preventDefault();
    if (e.currentTarget.name.value.trim() === '') {
      toast.error("Поле пусте");
      return
    }
    this.setState({ picture: e.currentTarget.name.value })
}

  render() {
    return (
    <div>
        <Searchbar onSubmit={this.onSubmitForm} />
        <Api picture={ this.state.picture} />
          <ToastContainer />
    </div>
  );
  }
  
};

export default App;