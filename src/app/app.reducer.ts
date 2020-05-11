import {Todo} from "./todos/models/todo.model";
import {ActionReducerMap} from "@ngrx/store";
import {todoReducer} from "./todos/todo.reducer";
import {filtrosValidos} from "./filtros/filtro.actions";
import {filtroReducer} from "./filtros/filtro.reducer";

export interface AppState {
  todos: Todo[],
  filtro: filtrosValidos
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filtroReducer
}
