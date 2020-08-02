import React, {Component} from "react";
import {Outline, Repositories} from "../../Component"
import Api from "../../Api";
import './style.css';

class Result extends Component {
    constructor() {
        super();
    
        this.state = {
          user: {},
          repos: []
        };
      }
    
      componentDidMount = async () => {
        const { location } = this.props;
    
        const user = location.state.res.login;
    
        const repos = await Api.getRepos(user);
    
        this.setState({ user: location.state.res, repos });
      };
    
      render() {
        const { user, repos } = this.state;
    
        return (
          <main className="result--container">
            <div className="content">
              <Outline
                avatar_url={user.avatar_url}
                name={user.name}
                bio={user.bio}
                company={user.company}
                location={user.location}
                public_repos={user.public_repos}
                followers={user.followers}
                following={user.following}
              />
              {repos.length ? (
                <Repositories repos={repos} />
              ) : (
                <h3>Nenhum repositório encontrado, digite novamente</h3>
              )}
            </div>
          </main>
        );
              }
}




export default Result;