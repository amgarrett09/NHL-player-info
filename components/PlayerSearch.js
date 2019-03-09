import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch';
import Autocomplete from 'react-autocomplete';
import Router from 'next/router';

import config from '../config';

const autocompleteUrl = config.AUTOCOMPLETE_URL;
const playerUrl = config.PLAYER_URL;

const PlayerSearch = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [value, setValue] = useState('');

  // Update text field and get autocomplete suggestions
  const update = async (e) => {
    const val = e.target.value;
    setValue(val);

    // If input is three characters or more, get suggestions from API
    if (val.length >= 3) {
      try {
        const res = await fetch(`${autocompleteUrl}${val}`);
        const json = await res.json();
        const sug = json.suggestions.map(item => ({
          label: item,
        }));

        // Don't crash if suggestions is undefined
        if (sug) {
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
      Router.push(`/player?id=${playerId}`);
    } catch (err) {
      setValue(val);
    }
  };

  return (
    <Autocomplete
      getItemValue={item => item.label}
      items={suggestions}
      renderItem={(item, isHighlighted) => (
        <div
          key={item.label}
          style={{ background: isHighlighted ? 'lightgray' : 'white' }}
        >
          {item.label}
        </div>
      )}
      value={value}
      onChange={update}
      onSelect={select}
    />
  );
};

export default PlayerSearch;
