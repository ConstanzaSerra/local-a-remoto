// crear las clases Edificio, Piso y Departamento aquí

class Departamento {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  getName() {
    return this.nombre;
  }
}

class Piso {
  nombreDePiso: string;
  departamentos: Departamento[];

  constructor(nombreDePiso: string) {
    this.nombreDePiso = nombreDePiso;
    this.departamentos = []; // Inicializa departamentos como un arreglo vacío
  }

  pushDepartamento(unDepartamento: Departamento) {
    //tengo que agregar un departamento al vector
    this.departamentos.push(unDepartamento);
  }

  getDepartamentos() {
    return this.departamentos;
  }
}

class Edificio {
  pisos: Piso[];

  constructor(pisos: Piso[]) {
    this.pisos = pisos;
  }

  addDepartamentoToPiso(nombreDePiso: string, departamento: Departamento) {
    // Busco el piso
    const pisoAEditar = this.pisos.find((p) => p.nombreDePiso === nombreDePiso);

    // Evaluo si el piso existe
    if (pisoAEditar) {
      pisoAEditar.departamentos.push(departamento);
    } else {
      throw new Error("No existe un piso con ese nombre");
    }
  }

  getDepartamentosByPiso(nombreDePiso: string): Departamento[] {

    const pisoBuscado = this.pisos.find((p) => p.nombreDePiso === nombreDePiso);

    if(pisoBuscado) {
        return pisoBuscado.departamentos
    } else {
        throw new Error("No existe un piso con ese nombre");
    }
    
    
  }
}

// no modificar este test
function testClaseEdificio() {
  const unPiso = new Piso("planta baja");
  const otroPiso = new Piso("primer piso");
  const unEdificio = new Edificio([unPiso, otroPiso]);
  const deptoUno = new Departamento("depto uno");
  const deptoDos = new Departamento("depto dos");
  const deptoTres = new Departamento("depto tres");
  unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
  unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
  unEdificio.addDepartamentoToPiso("planta baja", deptoTres);

  const deptos = unEdificio.getDepartamentosByPiso("planta baja");
  const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");

  if (
    Array.isArray(deptosEmpty) &&
    deptosEmpty.length == 0 &&
    deptos.length == 3 &&
    deptos[2].getName() == "depto tres"
  ) {
    console.log("testClaseBandaApartment passed");
  } else {
    throw "testClaseBandaApartment not passed";
  }
}

function main() {
  testClaseEdificio();
  console.log("Cambio desde git hub para hacer pruebas")
}
main();
