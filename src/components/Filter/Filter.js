import s from './Filter.module.scss';
import { ReactComponent as Icon } from './search.svg';

function Filter({ inputFilterName, changeFilter }) {
  return (
    <div className={s.wrapper}>
      <input
        name="filter"
        id="filter"
        type="text"
        value={inputFilterName}
        onChange={changeFilter}
        className={s.input}
        placeholder=" "
      />
      <label htmlFor="filter" className={s.label}>
        Поиск авторов по имени
      </label>
      <Icon className={s.logo} />
    </div>
  );
}
export default Filter;
