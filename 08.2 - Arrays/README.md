# typescript-sandbox

Para la parte de cada módulo en la que te planteamos ejercicios con JavaScript puedes usar este sandbox.

Pasos:

- Clonate el proyecto.
- Instala las dependencias con `npm install`.
- Ejecuta el sandbox con `npm run dev`.
- Abre el navegador en `http://localhost:5173/` (si ese puerto no te funciona, mira en la consola donde has hecho el build, puede que este ocupado y se haya abierto en otro puerto).
- Puedes empezar a meter tu código en el fichero:

# Ejercicio 08.1 - Bucles.
## Enunciado
El objetivo de estos ejercicios es que te familiarices con los bucles _for_ y _while_, no implementes arrays methods, estos los veremos en el siguiente laboratorio.

# Introducción

Estamos desarrollando un software hospitalario, y el cliente nos pide poder realizar una serie se operaciones sobre una lista de pacientes.

El set de datos inicial:

```
type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];
```

# Apartados obligatorios

## Apartado 1

a) Queremos extraer la lista de paciente que están asignados a la especialidad de _Pediatría_

Firma de la función:

```
const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  // Tu implementación aquí :)
};
```

b) Queremos extraer la lista de pacientes asignados a _Pediatría_ y que tengan una edad menor de 10 años.

```
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  // Tu implementación aquí :)
};
```

## Apartado 2

Queremos activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados.

Es decir, crear una función que devuelve true/false dependiendo si se da la condición, algo así como:

```
const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;

  // Tu implementación aquí :)

  return activarProctolo;
};
```

## Apartado 3

El pediatra no puede atender hoy a los pacientes, queremos reasignar los pacientes asignados a la especialidad de pediatría a la de _medico de familia_.

```
const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  // Tu implementación aquí :)
};
```

## Apartado 4

Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados), comprobar si en la lista hay algún paciente asignado a _pediatría_

```
const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  // Tu implementación aquí :)
};
```

# Apartados opcionales

## Apartado 5

Queremos calcular el número total de pacientes que están asignados a la especialidad de _Medico de familia_, y lo que están asignados a _Pediatría_ y a _cardiología_

```
interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  // Tu implementación aquí :)
};
```



# Solucion.

## Apartado 1

a) Usando filter devolvemos un array con los pacientes de _Pediatria_

Firma de la función:

```
const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.filter((paciente) => paciente.especialidad === "Pediatra");
};
```

b) Usando la funcion anterior, ya tenemos el primer filtro, usamos el mismo metodo para chequear si el paciente es menor de 10 años y lo asignamos al nuevo array.

```
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pacientesPediatria = obtenPacientesAsignadosAPediatria(pacientes);
  return pacientesPediatria.filter((paciente) => paciente.edad < 10);
};
```

## Apartado 2

Usando some, chequeamos si hay algun paciente que cumpla las condiciones y retornamos si es true or false

```
const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  return pacientes.some(
    (paciente) => paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39
  );
};
```

## Apartado 3

Usando un .map sobre el array chequeamos si hay algun paciente de _Pediatria_ le cambiamos el valor de asignacion de especialidad.

```
const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.map((paciente) => {
    if (paciente.especialidad === "Pediatra") {
      paciente.especialidad = "Medico de familia";
    }
    return paciente;
  });
};
```

## Apartado 4

Misma solucion que el ejercicio 4, tenemos una variable bool hayPacientesDePediatria y con un .some() chequeamos si hay algun paciente para pediatria. Si es asi devolvemos un true.

```
const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  return pacientes.some((paciente) => paciente.especialidad === "Pediatra");
};
```

# Apartados opcionales

## Apartado 5

Creamos tres variables para cada especialidad. Usando un .filter creamos nuevos arrays solo con los pacientes en la especialidad.

Despues creamos una variable numeroPacientesPorEspecialidad e la iniciamos usando las variables.

```
interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  let medicoDeFamilia = pacientes.filter(
    (paciente) => paciente.especialidad === "Medico de familia"
  ).length;
  let pediatria = pacientes.filter(
    (paciente) => paciente.especialidad === "Pediatra"
  ).length;
  let cardiologia = pacientes.filter(
    (paciente) => paciente.especialidad === "Cardiólogo"
  ).length;
  const numeroPacientesPorEspecialidad: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: medicoDeFamilia,
    pediatria: pediatria,
    cardiologia: cardiologia,
  };

  return numeroPacientesPorEspecialidad;
};
```