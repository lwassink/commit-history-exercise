import React from 'react';

export default ({ events }) => {
  let commits = [];
  events.forEach(event => {
    console.log(event);

    if (event.type === "PushEvent"){
      const repoUrl = `https://github.com/${event.repo.name}`
      const newCommits = event.payload.commits;
      newCommits.forEach(commit => { commit.repoUrl = repoUrl; });
      commits = commits.concat(newCommits);
    }
  });

  return (
    <ul>
      { commits.map((commit, idx) => (<CommitItem
        key={ idx }
        commit={ commit } />)) }
    </ul>
  );
}

const CommitItem = ({ commit }) => {
  return (
    <li>
      {commit.author.name}: {commit.message},&nbsp;
      <a href={ commit.repoUrl } target="blank">GitHub Link</a>
    </li>
  );
}
