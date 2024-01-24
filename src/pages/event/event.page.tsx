import React, { useState } from 'react';
import Api from '../../services/api.service';
// import { useAuth } from '../../services/authentication.service';


interface Event {
    title: string
    description: string
    startTime: string
    endTime: string
    createdByUserId: string
}

const EventRegisterPage: React.FC = () => {
//   const {user} = useAuth();
  const [event, setEvent] = useState<Event>({ title: '', description: '', startTime: '', endTime: '', createdByUserId: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    Api.post('/events', event);
  };

  return (
    <div className="bg-gray-200 min-h-screen p-5">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Nome do Evento:
          <input type="text" name="title" value={event.title} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Descrição:
          <input type="text" name="title" value={event.title} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Início do Evento:
          <input type="datetime-local" name="startTime" value={event.startTime} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Fim do Evento:
          <input type="datetime-local" name="endTime" value={event.endTime} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </label>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Cadastrar Evento</button>
      </form>
    </div>
  );
};

export default EventRegisterPage;