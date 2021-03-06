import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../../components';

const ModalContext = createContext(null);

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [content, setContent] = useState(null);
  const [type, setType] = useState('');

  const onClose = () => setContent(null);
  const openModal = (value, modalType) => {
    setContent(value);
    setType(modalType || '');
  };

  useEffect(() => {
    setModal(!!content);
  }, [content]);

  return (
    <ModalContext.Provider
      value={{
        content,
        onClose,
        openModal,
        type
      }}
    >
      {children}
      {modal && <Modal />}
    </ModalContext.Provider>
  );
};

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default ModalContext;
