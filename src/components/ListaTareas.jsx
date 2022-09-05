import { useEffect } from "react";
import Tarea from "./Tarea";

const ListaTareas = ({ tareas, setTarea }) => {
  useEffect(() => {
    if (tareas.length > 0) {
      console.log("Iniciando... :)");
    }
  }, [tareas]);

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5 mb-10 md:h-screen overflow-scroll'>
      {tareas && tareas.length ? (
        <>
          <h2 className='font-blank text-3xl text-center mb-10'>
            Tareas pendientes
          </h2>

          {tareas.map((tarea) => {
            return (
              <Tarea
                //key={index}
                key={tarea.id}
                tarea={tarea}
                setTarea={setTarea}
              />
            );
          })}
        </>
      ) : (
        <h2 className='font-blank text-3xl text-center mb-10'>
          No tengo tareas pendientes
        </h2>
      )}
    </div>
  );
};

export default ListaTareas;
