import React, { useState } from 'react';
import { Modal } from 'antd';

const CustomModal = ({ modalTitle, modalContents, renderButton }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {renderButton && renderButton(showModal)}
      <Modal title={modalTitle || 'error'} visible={isModalOpen}  onCancel={handleCancel}  footer={null} width={1000} >
        {modalContents || (
            <p>Sorry there is no content</p>
        )}
      </Modal>
    </>
  );
};

export default CustomModal;
