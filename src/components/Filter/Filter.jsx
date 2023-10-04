import css from './Filter.module.css';
import PropTypes from 'prop-types';
export const Filter = ({ filter, setFilter }) => {
  return (
    <div className={css.filterWrapper}>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={setFilter}></input>
    </div>
  );
};
Filter.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func,
};
