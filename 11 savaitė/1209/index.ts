let n: number = 0;

interface obj {
    photo: string [];
    username: string[];
    age: number[];
    city: string[];
    hobbies: string[][];
    phoneNumber: number[];
    email: string[];
}

const allUsers: obj = {
    photo: ["https://randomuser.me/api/portraits/thumb/men/74.jpg", "https://randomuser.me/api/portraits/thumb/men/93.jpg", "https://randomuser.me/api/portraits/thumb/women/52.jpg", "https://randomuser.me/api/portraits/thumb/women/74.jpg", "https://randomuser.me/api/portraits/thumb/women/82.jpg"],
    username: ["Max", "Caleb", "Katie", "Elif", 'Vilma'],
    age: [28, 39, 35, 25, 30],
    city: ["Hamilton", "Truro", 'Colorado', "Hæen", "Lappajärvi"],
    hobbies: [["3D printing", "Amateur radio", 'Acting'], ["Drama", 'Drawing', 'Cooking'], ['Ice skating', 'Do it yourself'], ['Dance', 'Gambling', 'Magic'], ['Puzzles', 'Writing', 'Yoga', 'Fishing']],
    phoneNumber: [2305375, 863748239, 79878678, 354505940, 476473673],
    email: ["max.wang@example.com", 'caleb.barnes@example.com', 'katie.griffin@example.com', "elif.nyquist@example.com", "vilma.tanner@example.com"]
}
const input = document.createElement('input');
input.type = 'number';
input.min = '1';
input.placeholder = 'write number of random users';
document.body.appendChild(input);

const btn = document.createElement('button');
btn.classList.add("generateBtn");
btn.innerText = 'GENERATE'
document.body.appendChild(btn);

const divOfCards = document.createElement('div');
divOfCards.style.display = 'flex';
divOfCards.style.flexWrap = 'wrap';
document.body.appendChild(divOfCards);


btn.onclick = () => {
    divOfCards.innerHTML = '';
    n = Number(input.value);
    if(n<=0){
        alert("Number must be positive integer");
        return;
    }
    console.log(n);
    while (n !== 0) {
        createCard();
        n--;
    }
}

function createCard() {
    const card = document.createElement('div');
    card.classList.add("card1");
    divOfCards.appendChild(card);
    const photo = document.createElement('img');
    photo.src = allUsers.photo[randomNumberGenerator()];
    photo.style.marginBottom = '15px';
    photo.style.marginTop = '15px';
    const usrName = document.createElement('p');
    usrName.innerText = `Name: ${allUsers.username[randomNumberGenerator()]}`;
    const usrAge = document.createElement('p');
    usrAge.innerHTML = `Age: ${allUsers.age[randomNumberGenerator()]}`;
    const usrCity = document.createElement('p');
    usrCity.innerText = `City: ${allUsers.city[randomNumberGenerator()]}`;
    const usrHobbies = document.createElement('p');
    usrHobbies.innerHTML = `Hobbies: ${allUsers.hobbies[randomNumberGenerator()]}`;
    const usrNumber = document.createElement('p');
    usrNumber.innerHTML = `Phone number: ${allUsers.phoneNumber[randomNumberGenerator()]}`;
    const usrEmail = document.createElement('p');
    usrEmail.innerText = `Email: ${allUsers.email[randomNumberGenerator()]}`;

    card.append(photo, usrName, usrAge, usrCity, usrHobbies, usrNumber, usrEmail)

    usrName.style.margin = '4px 0';
    usrName.style.fontWeight = 'bold';
    usrAge.style.fontWeight = 'bold';
    usrCity.style.fontWeight = 'bold';
    usrEmail.style.margin = '4px 0';
    usrAge.style.margin = '4px 0';
    usrCity.style.margin = '4px 0';
    usrNumber.style.margin = '4px 0';
    usrHobbies.style.margin = '4px 0';
}

//0-4
function randomNumberGenerator(): number {
    return Math.round(Math.random() * 4)
}
