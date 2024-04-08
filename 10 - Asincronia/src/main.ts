import "./style.css";
import { fetchData } from "./ui";

// Call fetchData when the input changes

const searchInput = document.getElementById("search");

if (searchInput && searchInput instanceof HTMLInputElement) {
  searchInput.addEventListener("input", fetchData);
}
