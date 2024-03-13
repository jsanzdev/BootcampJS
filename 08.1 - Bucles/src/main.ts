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
  return pacientes.filter((paciente) => paciente.especialidad === "Pediatra");
};

console.log(obtenPacientesAsignadosAPediatria(pacientes));

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const pacientesPediatra = obtenPacientesAsignadosAPediatria(pacientes);
  return pacientesPediatra.filter((paciente) => paciente.edad < 10);
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
  return pacientes.map((paciente) => {
    if (paciente.especialidad === "Pediatra") {
      return { ...paciente, especialidad: "Medico de familia" };
    }
    return paciente;
  });
};

console.log(reasignaPacientesAMedicoFamilia(pacientes));

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  return pacientes.some((paciente) => paciente.especialidad === "Pediatra");
};

console.log(HayPacientesDePediatria(pacientes));
