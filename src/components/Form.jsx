import { useState } from "react";

const Form = () => {
  const [titulo, setTitulo] = useState("");
  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    /*if ([titulo, fecha, descripcion].includes("")) {
      alert("Campos aún sin diligenciar");
    } else {
      alert("Campos completos");
    }
  };*/

    if ([titulo, fecha, descripcion].includes("")) {
      setError(true);
      return;
    }
    setError(false);
  };

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className='font-blank text-3xl text-center mb-10'>
        Creación de Tareas
      </h2>

      <form
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'
      >
        {error && (
          <div className='bg-red-600 font-bold uppercase text-center text-white p-3 mb-5 rounded-md'>
            <p>Faltan campos por diligenciar</p>
          </div>
        )}
        <div className='mb-5'>
          <label
            htmlForm='titulo'
            className='block text-gray-700 uppercase font-bold'
          >
            Titulo
          </label>
          <input
            id='titulo'
            type='text'
            placeholder='Titulo de la tarea'
            className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400'
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label
            htmlForm='fecha'
            className='block text-gray-700 uppercase font-bold'
          >
            Fecha
          </label>
          <input
            id='fecha'
            type='date'
            className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400'
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label
            htmlForm='descripcion'
            className='block text-gray-700 uppercase font-bold'
          >
            Descripción
          </label>
          <textarea
            id='descripcion'
            type='text'
            placeholder='Descripción de la tarea'
            className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400'
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        <input
          type='submit'
          className='bg-blue-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-blue-800 transition-colors cursor-pointer'
          value='Crear Tarea'
        />
      </form>
    </div>
  );
};

export default Form;
