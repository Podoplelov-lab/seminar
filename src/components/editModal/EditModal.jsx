import Modal from '../modal/Modal.jsx';

const EditModal = ({
  isOpen,
  seminar,
  newTitle,
  newDescription,
  closeModal,
  handleTitleChange,
  handleDescriptionChange,
  onUpdate,
}) => {
  const handleSave = () => {
    if (newTitle && newDescription) {
      onUpdate(seminar.id, { ...seminar, title: newTitle, description: newDescription });
      closeModal();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      selectedSeminar={seminar}
      newTitle={newTitle}
      newDescription={newDescription}
      closeModal={closeModal}
      handleTitleChange={handleTitleChange}
      handleDescriptionChange={handleDescriptionChange}
      handleUpdate={handleSave}
    />
  );
};

export default EditModal;
