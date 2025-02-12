const API_URL = 'http://localhost:5000/seminars';

export const fetchSeminars = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Ошибка загрузки данных');
  return response.json();
};

export const deleteSeminar = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
};

export const updateSeminar = async (id, updatedData) => {
 const data = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedData),
  }); 
  console.log(data)
  return data
};

