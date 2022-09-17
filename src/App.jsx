import Header from "./components/Header";
import Form from "./components/Form";
import ListaTareas from "./components/ListaTareas";
import { useState, useEffect } from "react";

function App() {
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState({});

  useEffect(() => {
    const obtenerTareasLocalStorage = () => {
      const tareasLocalStorage =
        JSON.parse(localStorage.getItem("tareas")) ?? [];
      setTareas(tareasLocalStorage);
    };

    obtenerTareasLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const eliminarTarea = (id) => {
    const actualizarTarea = tareas.filter((tarea) => tarea.id !== id);
    console.log(actualizarTarea);
    setTareas(actualizarTarea);
  };

  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <div className='mt-12 md:flex'>
        <Form
          tarea={tarea}
          tareas={tareas}
          setTareas={setTareas}
          setTarea={setTarea}
        />
        <ListaTareas
          tareas={tareas}
          setTarea={setTarea}
          eliminarTarea={eliminarTarea}
        />
      </div>
    </div>
  );
}

export default App;
