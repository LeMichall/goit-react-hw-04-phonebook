import { Component } from 'react';
import css from './Filter.module.css';
export class Filter extends Component {
  render() {
    const { filter, setFilter } = this.props;
    return (
      <div className={css.filterWrapper}>
        <p>Find contacts by name</p>
        <input type="text" value={filter} onChange={setFilter}></input>
      </div>
    );
  }
}
