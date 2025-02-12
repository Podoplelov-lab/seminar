import React from 'react';

const List = ({ seminars, onDelete, onEdit }) => {
  return (
    <ul>
      {seminars.map((seminar) => (
        <li key={seminar.id}>
          <h2>{seminar.title}</h2>
          <p>{seminar.description}</p>
          <p>Дата: {seminar.date}, Время: {seminar.time}</p>
          <img src={seminar.photo} alt={seminar.title} width="150px" />
          <button onClick={() => onDelete(seminar.id)}>Удалить</button>
          <button onClick={() => onEdit(seminar)}>Редактировать</button>
        </li>
      ))}
    </ul>
  );
};

export default List;
