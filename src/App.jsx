import useSeminars from './hooks/useSeminars';
import List from './components/List/list.jsx';
import List2 from './components/List/List2.jsx';
import Modal from './components/modal/Modal.jsx';
import EditSeminar from './components/EditSeminar/editSeminar.jsx';
import { useState } from 'react';
import SeminarItem from './components/SeminarItem/SeminarItem.jsx';

function App() {
  const { seminars, loading, error, handleDelete, handleUpdate } = useSeminars();

  const [selectedSeminar, setSelectedSeminar] = useState(null);

  // const openModal = (seminar) => {
  //   setSelectedSeminar(seminar);
  // };

  const closeModal = () => {
    setSelectedSeminar(null);
  };

  if (error) {
    return <p>{error}</p>
  }

  return (
    <div className="App">
      {loading && <p>Загрузка...</p>}
      <h1>Семинары</h1>
      <List2 dataSource={seminars} renderItem={(item) => {
        return(
          <SeminarItem seminar={item} onDelete={handleDelete} onEdit={setSelectedSeminar}/>
        )
      }}/>
      {/* <List seminars={seminars} onDelete={handleDelete} onEdit={openModal} /> */}
      {!!selectedSeminar && (<Modal>
        <EditSeminar seminar={selectedSeminar} onSubmit={handleUpdate} onCancel={closeModal} />
      </Modal>)}

    </div>
  );
}

export default App;
