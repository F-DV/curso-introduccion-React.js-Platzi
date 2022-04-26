import React from "react";
import {TodoCounter} from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import {TodoContext} from '../TodoContext';
import {Modal} from '../Modal/index';

function AppUI(){

    const {
        error,
        loading,
        searchTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return(
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
        <TodoList>
            {error && <p>Tuvimos un error</p>}
            {loading && <p>Estamos Cargando, No Desesperes</p>}
            {(!loading && !searchTodos.length) && <p>!Crea Tú primer TODO¡</p>}

            {searchTodos.map(todo => (
            <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={()=>completeTodo(todo.text)}
            onDelete ={() => deleteTodo(todo.text)}     
            />
            ))}
        </TodoList>
          {!!openModal && (
            <Modal>
              <p>TELETRANSPORTACION</p>
            </Modal>
          )}
      <CreateTodoButton
        setOpenModal={setOpenModal}
        openModal={openModal}
      />      
    </React.Fragment>
    );
}
export {AppUI};