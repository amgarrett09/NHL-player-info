import fetch from 'isomorphic-unfetch';
import Autocomplete from 'react-autocomplete';
import Router from 'next/router';

import config from '../config';

const autocompleteUrl = config.AUTOCOMPLETE_URL;
const playerUrl = config.PLAYER_URL;

class PlayerSearch extends React.Component { // eslint-disable-line no-undef
  state = {
    suggestions: [],
    value: '',
  };

  // Update text field and get autocomplete suggestions
  update = async (e) => {
    const { value } = e.target;
    this.setState({
      value,
    });

    // If input is three characters or more, get suggestions from API
    if (value.length >= 3) {
      try {
        const res = await fetch(`${autocompleteUrl}${value}`);
        const json = await res.json();
        const suggestions = json.suggestions.map(item => ({
          label: item,
        }));

        // Don't crash if suggestions is undefined
        if (suggestions) {
          this.setState({
            suggestions,
          });
        }
      } catch {
        this.setState({
          suggestions: [],
        });
      }
    } else {
      this.setState({
        suggestions: [],
      });
    }
  };

  select = async (value) => {
    try {
      const res = await fetch(`${playerUrl}${value}`);
      const { player } = await res.json();
      const playerId = player.id.toString();
      Router.push(`/player?id=${playerId}`);
    } catch (err) {
      this.setState({ value });
    }
  }

  render() {
    const { value, suggestions } = this.state;

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
        onChange={this.update}
        onSelect={val => this.select(val)}
      />
    );
  }
}

export default PlayerSearch;
