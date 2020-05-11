import {createAction, props} from "@ngrx/store";


export const crear = createAction('[TODO] Crea todo', props<{texto: string}>());
export const toggle = createAction('[TODO] Toggle todo', props<{id: string}>());
export const editar = createAction('[TODO] Editar todo', props<{id: string, texto: string}>());
export const borrar = createAction('[TODO] Borrar todo', props<{id: string}>());
export const borrarCompletados = createAction('[Todo] Limpiar todos');

// toggleAll
export const toggleAll = createAction('[TODO] ToggleAll todo', props<{completado: boolean}>());
