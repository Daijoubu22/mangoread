import React, { useEffect } from 'react';
import { Modal } from 'antd';
import SortSelect from 'components/MangaSearch/FiltersModal/SortSelect/SortSelect';
import useAppSelector from 'hooks/useAppSelector';
import useAppDispatch from 'hooks/useAppDispatch';
import { updateModalParams, updateParams } from 'redux/slices/mangaSearchSlice';

interface FiltersModalProps {
  isOpen: boolean;
  handleModal: () => void;
  className?: string;
}

function FiltersModal({ isOpen, handleModal, className }: FiltersModalProps) {
  const { params, modalParams } = useAppSelector((state) => state.mangaSearchReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isOpen) {
      dispatch(updateModalParams(params));
    }
  }, [isOpen]);

  const handleOk = () => {
    dispatch(updateParams(modalParams));
    handleModal();
  };

  const handleCancel = () => {
    handleModal();
  };

  return (
    <Modal
      className={className}
      onOk={handleOk}
      onCancel={handleCancel}
      open={isOpen}
      title="Set filters"
    >
      <SortSelect />
    </Modal>
  );
}

FiltersModal.defaultProps = {
  className: undefined,
};

export default FiltersModal;
