import shortid from 'shortid';

export class Todo {
  public id: string;
  public texto: string;
  public completado: boolean;

  constructor(texto: string) {
    this.texto = texto;
    this.id = shortid.generate();
    this.completado = false;
  }

}
