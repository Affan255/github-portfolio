import React, { Component } from "react";
import Link from "../../components/Link/Link.js";
import List from "../../components/List/List.js";
import "./Profile.css";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      repositories: [],
      data: {},
      error: "",
    };
  }

  async componentDidMount() {
    try {
      const profile = await fetch("https://api.github.com/users/octocat");
      const profileJSON = await profile.json();
      if (profileJSON) {
        const repositories = await fetch(profileJSON.repos_url);
        const repositoriesJSON = await repositories.json();

        this.setState({
          loading: false,
          repositories: repositoriesJSON,
          data: profileJSON,
        });
      }
    } catch (error) {
      this.setState({ loading: false, error: error.message });
    }
  }
  render() {
    const { loading, repositories, data, error } = this.state;
    if (loading || error) {
      return <div>{loading ? "Loading..." : error}</div>;
    }
    const items = [
      {
        label: "html_url",
        value: <Link url={data.html_url} title="Github URL" />,
      },
      { label: "repos_url", value: data.repos_url },
      { label: "name", value: data.name },
      { label: "company", value: data.company },
      { label: "location", value: data.location },
      { label: "email", value: data.email },
      { label: "bio", value: data.bio },
    ];
    const projects = repositories.map((project) => ({
      label: project.name,
      value: <Link url={project.html_url} title="Github URL" />,
    }));

    return (
      <div className="Profile-container">
        <img className="Profile-avatar" src={data.avatar_url} alt="avatar" />
        <List items={items} title="Profile" />
        <List items={projects} title="Projects" />
      </div>
    );
  }
}

export default Profile;
