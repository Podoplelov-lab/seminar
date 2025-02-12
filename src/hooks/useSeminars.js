import { useState, useEffect } from 'react';
import { fetchSeminars, deleteSeminar, updateSeminar } from '../api/api.js';

const useSeminars = () => {
  const [seminars, setSeminars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadSeminars = async () => {
      try {
        const data = await fetchSeminars();
        setSeminars(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadSeminars();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Вы уверены, что хотите удалить этот семинар?')) {
      try {
        await deleteSeminar(id);
        setSeminars((prev) => prev.filter((s) => s.id !== id));
      } catch {
        setError('Ошибка удаления семинара');
      }
    }
  };

  const handleUpdate = async (id, updatedSeminar, onSuccess) => {
    try {
      await updateSeminar(id, updatedSeminar);
      setSeminars((prev) =>
        prev.map((s) => (s.id === id ? {id, ...updatedSeminar} : s))
      );
      onSuccess?.()
    } catch {
      setError('Ошибка обновления данных');
    }
  };

  return { seminars, loading, error, handleDelete, handleUpdate };
};

export default useSeminars;
