import "./style.css";
import { calculaTicket, calcularTicketFinal } from "./motor";
import { productos } from "./model";

const ticket = calculaTicket(productos);

const ticketFinal = calcularTicketFinal(ticket);

console.log(ticketFinal);
