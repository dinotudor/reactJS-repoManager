import React, { useState, useEffect } from "react";
import api from './services/api';

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(()=>{
    api.get('repositories').then(response => {
      setRepositories(response.data);
    });
  }, []);

  async function handleAddRepository() {
    const response = await api.post('repositories', {
      title: 'Repo',
      url: 'www.github.com',
      techs: 'React'
    });

    const repository = response.data;

    setRepositories([...repositories, repository])
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <ul data-testid="repository-list">
          {repositories.map(repo => <li key={repo.id}>{repo.title}</li>)}
      </ul>
      <button onClick={() => handleRemoveRepository(1)}>Remover</button>
      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
