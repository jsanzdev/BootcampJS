import "./style.css";
import { pacientes, Pacientes, NumeroPacientesPorEspecialidad } from "./model";

console.log(pacientes);

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pacientesPediatra: Pacientes[] = [];
  pacientes.forEach((paciente) => {
    if (paciente.especialidad === "Pediatra") {
      pacientesPediatra.push(paciente);
    }
  });
  return pacientesPediatra;
};

console.log(obtenPacientesAsignadosAPediatria(pacientes));

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pacientesPedriataMenores: Pacientes[] = [];
  const pacientesPediatra = obtenPacientesAsignadosAPediatria(pacientes);
  pacientesPediatra.forEach((paciente) => {
    if (paciente.edad < 10) {
      pacientesPedriataMenores.push(paciente);
    }
  });
  return pacientesPedriataMenores;
};

console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;
  pacientes.forEach((paciente) => {
    if (paciente.temperatura > 39 && paciente.frecuenciaCardiaca > 100) {
      activarProctolo = true;
    }
  });

  return activarProctolo;
};

console.log(activarProtocoloUrgencia(pacientes));

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pacientesMedicoFamilia: Pacientes[] = [];
  pacientes.forEach((paciente) => {
    if (paciente.especialidad === "Pediatra") {
      paciente.especialidad = "Medico de familia";
      pacientesMedicoFamilia.push(paciente);
    }
  });
  return pacientesMedicoFamilia;
};

console.log(reasignaPacientesAMedicoFamilia(pacientes));

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let hayPacientesDePedriatria = false;
  pacientes.forEach((paciente) => {
    if (paciente.especialidad === "Pediatra") {
      hayPacientesDePedriatria = true;
    }
  });
  return hayPacientesDePedriatria;
};

console.log(HayPacientesDePediatria(pacientes));

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  let medicoDeFamilia = 0;
  let pediatria = 0;
  let cardiologia = 0;
  pacientes.forEach((paciente) => {
    if (paciente.especialidad === "Medico de familia") {
      medicoDeFamilia++;
    } else if (paciente.especialidad === "Pediatra") {
      pediatria++;
    } else {
      cardiologia++;
    }
  });
  const numeroPacientesPorEspecialidad: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: medicoDeFamilia,
    pediatria: pediatria,
    cardiologia: cardiologia,
  };
  return numeroPacientesPorEspecialidad;
};

console.log(cuentaPacientesPorEspecialidad(pacientes));
