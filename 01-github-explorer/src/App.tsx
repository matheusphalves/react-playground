import './styles/global.scss';
import React, { useState } from 'react';
import { Search } from 'components/Search/Search';
import { GlobalStyle } from 'styles/global';
import { RepositoryList, Repository } from 'components/Repository/RepositoryList/RepositoryList';

function App() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  return (
    <>
      <Search/>
      <RepositoryList/>
      <GlobalStyle />
    </>
);
}

export default App;
