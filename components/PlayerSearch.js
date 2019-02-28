import fetch from 'isomorphic-unfetch';
import Autocomplete from 'react-autocomplete';

import config from '../config';

const apiUrl = config.AUTOCOMPLETE_URL;

class PlayerSearch extends React.Component { // eslint-disable-line no-undef
  state = {
    suggestions: [],
    value: '',
  };

  // Update text field and get autcomplete suggestions
  update = async (e) => {
    const { value } = e.target;
    this.setState({
      value,
    });

    // If input is three characters or more, get suggestions from API
    if (value.length >= 3) {
      try {
        const res = await fetch(`${apiUrl}${value}`);
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
        onSelect={val => this.setState({ value: val })}
      />
    );
  }
}

export default PlayerSearch;
