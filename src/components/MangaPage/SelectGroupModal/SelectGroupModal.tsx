import React from 'react';
import { Modal } from 'antd';
import useAppDispatch from 'hooks/useAppDispatch';
import { setIsModalOpen } from 'redux/slices/mangaPageSlice';

interface SelectGroupModalProps {
  isOpen: boolean,
}

function SelectGroupModal({ isOpen }: SelectGroupModalProps) {
  const dispatch = useAppDispatch();

  const handleCancel = () => {
    dispatch(setIsModalOpen(false));
  };

  const handleOk = () => {
    dispatch(setIsModalOpen(false));
  };

  return (
    <Modal
      open={isOpen}
      title="Select group"
      onCancel={handleCancel}
      onOk={handleOk}
    >
      1
    </Modal>
  );
}

export default SelectGroupModal;
