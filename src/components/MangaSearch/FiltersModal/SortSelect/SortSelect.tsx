import React from 'react';
import { Select } from 'antd';
import useAppSelector from 'hooks/useAppSelector';
import OrderWithDirection from 'services/enums/OrderWithDirection';
import useAppDispatch from 'hooks/useAppDispatch';
import { updateModalParams } from 'redux/slices/mangaSearchSlice';
import styles from './SortSelect.module.scss';

const sortOptions = [
  {
    value: OrderWithDirection.RATING_DESCENDING,
    label: 'Rating descending',
  },
  {
    value: OrderWithDirection.RATING_ASCENDING,
    label: 'Rating ascending',
  },
  {
    value: OrderWithDirection.FOLLOWS_DESCENDING,
    label: 'Follows descending',
  },
  {
    value: OrderWithDirection.FOLLOWS_ASCENDING,
    label: 'Follows ascending',
  },
];

function SortSelect() {
  const { modalParams } = useAppSelector((state) => state.mangaSearchReducer);
  const dispatch = useAppDispatch();

  const handleChange = (value: OrderWithDirection): void => {
    dispatch(updateModalParams({
      order: value,
      offset: 0,
    }));
  };

  return (
    <>
      <span className={styles.label}>Order: </span>
      <Select
        className={styles.select}
        style={{ width: '180px' }}
        options={sortOptions}
        value={modalParams.order}
        onChange={handleChange}
      />
    </>
  );
}

export default SortSelect;
