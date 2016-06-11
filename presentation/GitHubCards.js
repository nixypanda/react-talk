import React from 'react';
const API = 'https://api.github.com/users';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'jckdrpr',
      name:'',
      avatar:'',
      bio:'',
      repos:'',
      followers: '',
      following:'',
      homeUrl:'',
      notFound:''
    }
  }
  fetchProfile(username) { 
    let url = `${API}/${username}`;
    fetch(url)
      .then((res) => res.json() )
      .then((data) => {
        this.setState({
          username: data.login,
          name: data.name,
          avatar: data.avatar_url,
          bio: data.bio,
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          homeUrl: data.html_url,
          notFound: data.message
        })
      })
      .catch((error) => console.log('Oops! . There Is A Problem') )
  }
  componentDidMount() {
    this.fetchProfile(this.state.username);
  }
  render() {
    return (
       <section id="card">
         <SearchProfile fetchProfile={this.fetchProfile.bind(this)}/>
         <Profile data={this.state} />
       </section>
    );
  }
}

class SearchProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchProfile(this.state.username);
    this.setState({ username: "" });
  }

  render() {
    return (
      <form className="search--box" onSubmit={this.handleSubmit}>
       <label>
         <input
           type="search"
           onChange={(e) => this.setState({ username: e.target.value })}
           value={this.state.username}
           placeholder="Type Username + Enter" />
       </label>
     </form>
    );
  }
}

const Profile = ({ data }) => (
  (data.notFound === 'Not Found')
              ?
   <div className="notfound">
      <h2>Oops !!!</h2>
      <p>Couldn't Find The You Were Looking For. Try Again </p>
   </div>
              : 
  <section className="github--profile">
    <div className="github--profile__info">
      <img src={data.avatar} alt={data.username}/>
      <h2>{data.username}</h2>
      <h3>{data.bio || 'I Live In My Mind'}</h3>
    </div>
    <div className="github--profile__state">
      <ul>
         <li><i>{data.followers}</i><span>Followers</span></li>
         <li><i>{data.repos}</i><span>Repositoriy</span></li>
         <li><i>{data.following}</i><span>Following</span></li>
      </ul>
    </div>
  </section>
);
