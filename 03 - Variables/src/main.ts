import "./style.css";

// Styles
const BandName = "font-weight: bold; font-size: 20px; background-color: green;";

const PopRock: string = "🎵 Pop Rock";
const Rock: string = "🎸 Rock";
const HardRock: string = "🤘 Hard Rock";
const Classical: string = "🎼 Classical";

interface Band {
    Name: string;
    Year: number;
    Active: boolean;
    Genre: string;
}

let band1: Band = {
    Name: "The Beatles",
    Year: 1960,
    Active: false,
    Genre: PopRock
};

let band2: Band = {
    Name: "Queen",
    Year: 1970,
    Active: false,
    Genre: Rock
};

let band3: Band = {
    Name: "The Rolling Stones",
    Year: 1962,
    Active: true,
    Genre: Rock
};

let band4: Band = {
    Name: "AC/DC",
    Year: 1973,
    Active: true,
    Genre: HardRock
};

let band5: Band = {
    Name: "Ludwig van Beethoven",
    Year: 1770,
    Active: false,
    Genre: Classical
};

let bandArray: Band[] = [band1, band2, band3, band4, band5];

bandArray.forEach(band => {
    console.log(`%c${band.Name}`, BandName);
    console.log(`Year: ${band.Year}`);
    console.log(`Active: ${band.Active}`);
    console.log(`Genre: ${band.Genre}`);
});