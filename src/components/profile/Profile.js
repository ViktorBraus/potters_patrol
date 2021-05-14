import React, { Component } from 'react';
import { render } from 'react-dom';
import '../../App.css';
import TestSection from './TestSection'
import Spinner from '../Home/Spinner'
import { API_URL } from '../../config'
import { useAuth0 } from "@auth0/auth0-react";
import User from '../Authentication/User'
class App extends Component {
  render() {
    return (
      <Profile className='Profile' />
    );
  }
}
const Photo = () =>
{
  const {isLoading, user} = useAuth0();
  return(
    <img className='imgpre' src={isLoading ? null : user.picture}></img>
  )
}
const Accaunt = () =>
    {
      const {isLoading, isAuthenticated, user} = useAuth0();
      return(
      <div className='account'>
      <form>
        <div className='wrapper1'>
          <div className='form-wrapper1'>
            <div className="email">
              <label htmlFor="email">E-mail</label>
              <input required name="email" type="email"  placeholder={isAuthenticated ? user.email : ""}/>
            </div>
            <div className="fullName">
              <label htmlFor="name">Username</label>
              <input required name="name" type="name" placeholder={isAuthenticated ? user.nickname : ""}/>
            </div>
            <div className="password">
              <label htmlFor="passwordl">Password</label>
              <input required name="password" type="password" />
            </div>
            <div className="repeatpassword">
              <label htmlFor="password">Repeat Password</label>
              <input required name="password" type="password" />
            </div>
            <div className="change">
              <button className='buta' type="submit" >Change</button>
            </div>
          </div>
        </div>
      </form>
    </div>
      )
    }

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { file: ''};
  }
  state = {
    loading: true
  }
  componentDidMount = () => {
    fetch(`${API_URL}/wake-up`)
      .then(res => res.json())
      .then(() => {
        this.setState({ loading: false })
      })
      .catch(err => console.log(err))
  }
  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render = () => {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img className='imgpre' src={imagePreviewUrl}></img> );
    }
    else {
      $imagePreview = (<Photo/>);
    }
    
    const Content = () => {
      if (this.state.loading) {
        return <div className='spinner'><Spinner size='10x' spinning='spinning' /><br /></div>
      }
      return (
        <div className='Profile'>
          <br/>
          <div className='profileinformation'>
            <div className='profilecontent'>
              <div className="EditPhoto">
                {$imagePreview}
              </div>
                <br/>
                 <input className='butaa' type="file"
                  onChange={(e) => this._handleImageChange(e)} />
            </div>
            <div>
            <Accaunt/>
            </div>
            </div>
            <br/>
            <br/>
            <br/>
            <div className='profileinformation'>
              <div className='profilecontent'>
                <div className='NameOfFaculty'>
                </div>
                  <br />
                <div className='labell'>
                  Name of Faculty
                </div>
              </div>
              <div className='profilecontent'>
                <div className='Patronus'>
                </div>
                  <br />
                <div className='labell'>
                  Patronus
                </div>
              </div>
              <div className='profilecontent'>
                <div className='Wand'>
                </div>
                 <br />
                <div className='labell'>
                  Wand
                </div>
              </div>
              </div>
          <br/>
        </div>
      )
    }
    return (
      <div>
        <main>
          {Content()}
          <label className='Passed'>Passed Tests</label>
          <TestSection />
        </main>
      </div>
    )
  }
}
render(<App />, document.getElementById('root'));
export default App;