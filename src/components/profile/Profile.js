import React, { Component } from 'react';
import { render } from 'react-dom';
import '../../App.css';
import TestSection from './TestSection'
import Spinner from '../Home/Spinner' 
import { API_URL } from '../../config'
class App extends Component {
  render() {
    return (
      <Profile className='Profile'/>
    );
  }
}


class Profile extends Component {
    
    constructor(props) {
        super(props);
        this.state = {file: '',imagePreviewUrl: ''};
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
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
        $imagePreview = (<img className='imgpre' src={imagePreviewUrl} />);
      } else {
        $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
      }
    const content = () => {

      if (this.state.loading) 
      {
        return <div className='spinner'><Spinner size='10x' spinning='spinning' /><br/></div>
      }
      return (
        <div className='Profile'>
            <div className='profileinformation'>
            <ul className='nav'>
            <li>
            <label className ='NameOfFaculty'></label><br/><button className='but'>Name of Faculty</button>
            </li>
            <li>
            <div className="EditPhoto">{$imagePreview}</div><br/>
            <input className ='buta' type="file" 
            onChange={(e)=>this._handleImageChange(e)} />
            </li>
            <li>
            <label className ='Patronus'></label><br/><button className='but'>Patronus</button>
            </li>
            <li>
            <label className ='Wand'></label><br/><button className='but'>Wand</button>
            </li>
            </ul>
            </div>
            <br/>
            <div className='account'>
                <form>
                  <div className='wrapper1'>
                  <div className='form-wrapper1'>
                    <div className="email">
                        <label htmlFor="email">E-mail</label>
                        <input required name="email" type="email" />
                    </div>
                    <div className="fullName">
                        <label htmlFor="password">Username</label>
                        <input required name="password" type="password" />
                    </div>
                    <div className="password">
                        <label htmlFor="email">Password</label>
                        <input required name="email" type="email" />
                    </div>
                    <div className="repeatpassword">
                        <label htmlFor="email">Repeat Password</label>
                        <input required name="email" type="email" />
                    </div>
                    <div className="change">
                        <button  className='butaa' type="submit" >Change</button>
                    </div>
                    </div>
                    </div>
                </form>
        </div>
        </div>
      )
    }
    return (
      <div>
        <main>
          {content()}
          <TestSection/>
        </main>
      </div>
    )
  }
}
render(<App />, document.getElementById('root'));
export default App;