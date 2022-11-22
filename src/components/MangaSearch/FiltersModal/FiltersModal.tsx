import React from 'react';
import { Modal } from 'antd';

interface FiltersModalProps {
  isOpen: boolean;
  handleModal: () => void;
  className?: string;
}

function FiltersModal({ isOpen, handleModal, className }: FiltersModalProps) {
  const handleOk = () => {
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
    />
  );
}

FiltersModal.defaultProps = {
  className: undefined,
};

export default FiltersModal;
