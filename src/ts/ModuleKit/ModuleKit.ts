
export class ModuleKit {

  public module: ModuleKit;

  public shadow: ShadowRoot;
  public template: HTMLElement;




  constructor () {
    this.module = this;
    this.template = document.createElement( 'div' );
  }

  static init (): ModuleKit {
    return new ModuleKit();
  }

}