import "./style.css";
import { pacientes, Pacientes, NumeroPacientesPorEspecialidad } from "./model";

console.log(pacientes);

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  return pacientes.reduce(
    (acc, paciente) => {
      if (paciente.especialidad === "Medico de familia") {
        acc.medicoDeFamilia++;
      } else if (paciente.especialidad === "Pediatra") {
        acc.pediatria++;
      } else {
        acc.cardiologia++;
      }
      return acc;
    },
    { medicoDeFamilia: 0, pediatria: 0, cardiologia: 0 }
  );
};

console.log(cuentaPacientesPorEspecialidad(pacientes));

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
  pacientes.forEach((paciente) => {
    if (paciente.especialidad === "Pediatra") {
      return true;
    } else {
      return false;
    }
  });
  return false;
};

console.log(HayPacientesDePediatria(pacientes));
