import React, { useState } from 'react';
import MainPageLayout from '../Components/MainPageLayout';
import { apiGet } from '../misc/config';
import ShowGrid from '../Components/show/ShowGrid';
import ActorGrid from '../Components/actor/ActorGrid';

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');
  const isShowSearch = searchOption === 'shows';

  const onSearch = () => {
    apiGet(`/search/${searchOption}?q=${input}`).then((result) => {
      setResults(result);
      console.log(result)
    });
  };

  const onKeyDown = (ev) => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  const onInputChange = (ev) => {
    setInput(ev.target.value);
  };

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No results</div>;
    }
    if (results && results.length > 0) {
      return results[0].show ? (
        <ShowGrid data={results} />
      ) : (
        <ActorGrid data={results} />
      );
    }
  };

  const onRadioChange = (ev) => {
    setSearchOption(ev.target.value);
  };

  return (
    <MainPageLayout>
      <input
        type={'text'}
        placeholder="Search For Something"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <div>
        <label htmlFor="shows-search">
          Shows
          <input
            type="radio"
            id="shows-search"
            value="shows"
            onChange={onRadioChange}
            checked={isShowSearch}
          />
        </label>
        <label htmlFor="actors-search">
          Actors
          <input
            type="radio"
            id="actors-search"
            value="people"
            onChange={onRadioChange}
            checked={!isShowSearch}
          />
        </label>
      </div>
      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
