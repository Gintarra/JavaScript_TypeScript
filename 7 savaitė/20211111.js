const jokes = [
    {
        "category": "anekdotai-apie-blondines",
        "joke": "Prie lifto stovi brunetė ir blondine. Brunetė sako:\n-Kviesk lifta. \n-Lifte, lifte! -šaukia blondinė. \n-Naudok mygtuka,kvaile.\n-Mygtuk,mygtuk!"
    },
    {
        "category": "anekdotai-apie-blondines",
        "joke": "Važiuoja blondinė ekskalatoriumi, staiga, šis sugedo. \nRašo post'a į facebook'a - jau dešimt minučiu, stoviu ir laukiu kada ekskalatoriu sutvarkys! :D"
    },
    {
        "category": "anekdotai-apie-blondines",
        "joke": "Į daktarą kreipėsi blondinė, nukritusi nuo laiptų. Sako:\n- Lipau laiptais ir nukritau. Susimušiau. Skauda.\n- Imkite šio tepalo ir sutepkite vietas, kur kritote, - sako daktaras.\nPraeina diena ir pas daktarą ateina visas būrys žmonių su sumušimais:\n- Daktare, kažkokia kvaiša ištepė laiptus tepalu...\t"
    },
    {
        "category": "anekdotai-apie-blondines",
        "joke": "Blondinė mokosi vairuoti.Tik įlipa į automobilį, instruktorius sako:\n-Jūs neišlaikėte.\nBlondinė:\n- Bet aš tik ką tik įlipau.\nInstruktorius:\n- Jūs atsisėdote ant galinės sedynės"
    },
    {
        "category": "anekdotai-apie-blondines",
        "joke": "Dve blondinės sėdi medyja ir pjauna šaką, ant kurios sėdi. Eina pro šalį brunetė ir sako:\n-Jūs išprotėjote? Nukrisite ir susilaužysite kojas!\nBlondinės nusijuokia ir toliau pjauna šaka. Tada nukrinta ir susilaužo kojas. Abi patenka į ligoninę.\nKitą dieną atsidaro palatos durys ir pasirodo toji brunetė, nes ji čia dirba sesele. Ir tada viena blondinė piktai sako:\n-Žiūrėk, ateina ta pranašautoja!"
    },
    {
        "category": "anekdotai-apie-blondines",
        "joke": "Ką gausime sukryžminę haskį ir blondinę.? Arba labai kvailą šunį, arba šalčiui atsparią kalę."
    },
    {
        "category": "anekdotai-apie-blondines",
        "joke": "Žmona sako vyrui:\n- Nueik į parduotuvę.\n Vyras ruošiasi eiti, žmona vėl sako:\n-Nu jau eini į lauką tai ir šiukšles išnešk, dar ir šunį pavedžiok.\nVyras neiškentęs sako:\n- Tai dar šluotą į subinę įkišk, eidamas laiptus nuošluosiu..."
    },
    {
        "category": "anekdotai-apie-blondines",
        "joke": "Kaip galima užimti ilgam laikui blondinę:\npaimti popieriaus lapą ir ant abiejų pusių užrašyti žiūrėti kitoje pusėje."
    },
    {
        "category": "anekdotai-apie-blondines",
        "joke": "Blondinė gražiu nauju “mersu” važiuoja per raudoną šviesą ir žinoma, į jos mašiną įsirėžia “zapukas”. Blondinė išlipa iš savo mašinos ir, išsproginusi akis, taškydamasi seilėmis bei kitaip rodydama įniršį, eina prie “zapuko”. O iš “zapuko” išlipa senyvas dėdulė, kuris, blondinei dar nieko nespėjus pasakyti, liūdnai klausia:\n- Panele, o jūs bent vairavimo egzamine esate buvusi?\n- Taip, – užrėkia blondinė, – ir skirtingai nuo tavęs, daugybę kartų, ožy!!!"
    },
    {
        "category": "anekdotai-apie-blondines",
        "joke": "Į daktarą kreipėsi blondinė, nukritusi nuo laiptų. Sako:\n- Lipau laiptais ir nukritau. Susimušiau. Skauda.\n- Imkite šio tepalo ir sutepkite vietas, kur kritote, – sako daktaras.\nPraeina diena ir pas daktarą ateina visas būrys žmonių su sumušimais:\n- Daktare, kažkokia kvaiša ištepė laiptus tepalu…"
    },
    {
        "category": "anekdotai-apie-blondines",
        "joke": "Važioja mašina Gabrielius, staiga ją sustapdo policija. Pareigūnas priėjęs prie blondinės sako:\n- Laba diena, prašom parodyti teises,- blondine duoda technikini.\n- Teises man teises duokit,- blondine:\n- Atsiprašau paregūnas man pirma diena kaip teises išsilaikiau, dar nieko nežinau.\nNu pareigunas nueina prie mašinos pasiema racija pasako situacija ir klausia ką daryt, iš racijos kitas pareigunas sako:\n- Blondinė su raudonu mersu?\n- Jo, ką daryt?\n- Nusimauk kelnes ir eik prie mašinos.\n- Ką tu gal durnas kaip čia aš..\n- Sakau maukis kelnes ir eik pamatysi viskas gerai.\nNu pareigunas taip ir padare nusimovė kelnes ir eina link blondines, ta per veidrodėli pamačius kad ateina pareigūnas sako:\n- Nu nach*i ir vėl su alkotesteliu ateina."
    }
]

const box = document.querySelector(".box");
// sukuriam html elementus per JS
for (let i = 0; i < jokes.length; i++) {
    box.innerHTML += `
            <div class="card">
                <h2>${jokes[i].joke}</h2>
            </div>
        `
}

// prideti apacioj mygtuka, kuri paspaudus - joke yra konsolej
for (let i = 0; i < jokes.length; i++) {
    const card = document.querySelectorAll(".card");
    card[i].innerHTML += `<button>Joke</button>`
    const btn = document.querySelectorAll("button");
    btn[i].onclick = () => {
        console.log(jokes[i].joke)
    }
}

//sukuriam html elementus kitu budu, sitas reciau naudojamas
// for (let i = 0; i < jokes.length; i++) {
//     const box1 = document.createElement("div");
//     box1.classList.add('card');
//
//     const h = document.createElement("h2");
//     h.innerText = jokes[i].joke;
//     box1.appendChild(h);
//     box.appendChild(box1);
// }