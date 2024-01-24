import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between h-screen bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform transition-transform duration-200 ease-in-out">
      <div>
        <h2 className="text-2xl font-extrabold tracking-tighter mb-5 ml-6">Token Calendar</h2>
        <nav>
          <Link to="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            Home
          </Link>
          <Link to="/event" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            Evento
          </Link>
        </nav>
      </div>
      <Link to="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
        Sair
      </Link>
    </div>
  );
};

export default Sidebar;