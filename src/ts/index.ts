import './_core/css';
import { ModuleKit } from "./ModuleKit/ModuleKit";

class Index {

  constructor () {

    const m = ModuleKit.init();

    console.log( m );

  }

}

new Index();
