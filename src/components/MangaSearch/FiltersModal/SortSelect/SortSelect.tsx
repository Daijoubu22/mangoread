import React from 'react';
import { Select } from 'antd';
import useAppSelector from 'hooks/useAppSelector';
import OrderWithDirection from 'services/enums/OrderWithDirection';
import useAppDispatch from 'hooks/useAppDispatch';
import { updateModalParams } from 'redux/slices/mangaSearchSlice';

interface SortSelectProps {
  className?: string;
}

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

function SortSelect({ className }: SortSelectProps) {
  const { modalParams } = useAppSelector((state) => state.mangaSearchReducer);
  const dispatch = useAppDispatch();

  const handleChange = (value: OrderWithDirection): void => {
    dispatch(updateModalParams({
      order: value,
    }));
  };

  return (
    <Select
      className={className}
      style={{ width: '200px' }}
      options={sortOptions}
      value={modalParams.order}
      onChange={handleChange}
    />
  );
}

SortSelect.defaultProps = {
  className: undefined,
};

export default SortSelect;
