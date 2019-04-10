import React, { useState, useContext } from 'react';
import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';
import Autocomplete from 'react-autocomplete';
import Router from 'next/router';
import upperFirst from 'lodash.upperfirst';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import config from '../config';
import LoadingContext from '../context/LoadingContext';
import '../css/player-search.css';

const autocompleteUrl = config.AUTOCOMPLETE_URL;
const playerUrl = config.PLAYER_URL;

const fetchSuggestions = val => fetch(`${autocompleteUrl}${val}`);
const debouncedFetch = AwesomeDebouncePromise(fetchSuggestions, 200);

const PlayerSearch = ({ id }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [value, setValue] = useState('');

  const context = useContext(LoadingContext);

  // Update text field and get autocomplete suggestions
  const update = async (e) => {
    let val = e.target.value;
    setValue(val);

    val = val.split(' ').map(word => upperFirst(word.toLowerCase())).join(' ');

    if (val.length >= 3) {
      try {
        const res = await debouncedFetch(val);
        const json = await res.json();
        const sug = json.suggestions.map(item => ({
          label: item,
        }));

        // Only set state if there are suggestions
        if (sug && sug.length > 0) {
          setSuggestions(sug);
        }
      } catch {
        setSuggestions([]);
      }
    } else {
      setSuggestions([]);
    }
  };

  // Find player id by name and redirect to corresponding player page
  const select = async (val) => {
    try {
      setValue(val);

      const res = await fetch(`${playerUrl}${val}`);
      const { player } = await res.json();
      const playerId = player.id.toString();

      setMenuOpen(false);

      Router.push(`/player?id=${playerId}`);
      context.setLoading();
    } catch (err) {
      setValue(val);
    }
  };

  const input = props => (
    <input
      className="input player-search"
      type="text"
      id={id}
      placeholder="Search players"
      {...props}
    />
  );

  const menuStyle = {
    maxHeight: '200px',
    overflow: 'auto',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
    position: 'fixed',
  };

  return (
    <Autocomplete
      open={value.length >= 3}
      getItemValue={item => item.label}
      items={suggestions}
      renderItem={(item, isHighlighted) => (
        <div
          key={item.label}
          style={{
            background: isHighlighted ? 'lightgray' : 'white',
            color: 'black',
          }}
        >
          {item.label}
        </div>
      )}
      value={value}
      onChange={update}
      onSelect={select}
      renderInput={input}
      menuStyle={menuStyle}
    />
  );
};

PlayerSearch.propTypes = {
  id: PropTypes.string.isRequired,
};

export default PlayerSearch;
