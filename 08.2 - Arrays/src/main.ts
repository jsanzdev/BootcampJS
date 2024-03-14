import "./style.css";
import { pacientes, Pacientes, NumeroPacientesPorEspecialidad } from "./model";

console.log(pacientes);

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.filter((paciente) => paciente.especialidad === "Pediatra");
};

console.log(obtenPacientesAsignadosAPediatria(pacientes));

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pacientesPediatria = obtenPacientesAsignadosAPediatria(pacientes);
  return pacientesPediatria.filter((paciente) => paciente.edad < 10);
};

console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  return pacientes.some(
    (paciente) => paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39
  );
};

console.log(activarProtocoloUrgencia(pacientes));

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

console.log(reasignaPacientesAMedicoFamilia(pacientes));

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  return pacientes.some((paciente) => paciente.especialidad === "Pediatra");
};

console.log(HayPacientesDePediatria(pacientes));

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

console.log(cuentaPacientesPorEspecialidad(pacientes));
