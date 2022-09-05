import { useEffect } from "react";

const Tarea = ({ tarea, setTarea }) => {
  const { titulo, fecha, descripcion } = tarea;

  useEffect(() => {
    console.log(tarea);
  }, [tarea]);

  return (
    <div className='bg-white shadow-md px-5 py-10 rounded-lg'>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Titulo: <span className='font-normal normal-case'>{titulo}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Fecha: <span className='font-normal normal-case'>{fecha}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Descripción:{" "}
        <span className='font-normal normal-case'>{descripcion}</span>
      </p>

      <div className='flex justify-between'>
        <button
          className='bg-green-600 hover:bg-green-700 mt-4 py-2 px-10 rounded-md text-white font-bold'
          type='button'
          onClick={() => setTarea(tarea)}
        >
          Actualizar
        </button>
        <button
          className='bg-red-600 hover:bg-red-700 mt-4 py-2 px-10 rounded-md text-white font-bold'
          type='button'
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Tarea;
