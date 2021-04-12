//--------------------------1)PAGINA_DINAMICA---------------------------------------------------------------------------------------

for(treno in TRENI)
{
    const sezione = document.querySelector('#treni');

    const div = document.createElement('div');
    sezione.appendChild(div);

    const h1 = document.createElement('h1');
    h1.textContent = TRENI[treno].h1;
    div.appendChild(h1);

    const img = document.createElement('img');
    img.src = TRENI[treno].img;
    div.appendChild(img);

    const p = document.createElement('p');
    p.textContent = TRENI[treno].p;
    div.appendChild(p);
    p.classList.add('hidden');

    const a = document.createElement('a');
    a.textContent = TRENI[treno].a;
    div.appendChild(a);
    a.classList.add('button');

    const img2 = document.createElement('img');
    img2.src= TRENI[treno].img2;
    div.appendChild(img2);
    img2.classList.add('star');
}



//-----------------------2)AGGIUNGI/TOGLI_INFO------------------------------------------------------------------------------------------

const infos = document.querySelectorAll('a.button');
for(info of infos)
{
    info.addEventListener('click', mostra_info);
}

function mostra_info(event) {

    const ps = event.currentTarget.parentNode.querySelectorAll('p');
    for(p of ps)
    {
        p.classList.remove('hidden');
    }

    event.currentTarget.textContent = 'back';
    event.currentTarget.addEventListener('click', chiudi_info);
    event.currentTarget.removeEventListener('click', mostra_info);
}


function chiudi_info(event) {

    const ps = event.currentTarget.parentNode.querySelectorAll('p');
    for(p of ps)
    {
        p.classList.add('hidden');
    }

    event.currentTarget.textContent = 'info';
    event.currentTarget.addEventListener('click', mostra_info);
    event.currentTarget.removeEventListener('click', chiudi_info);
}



//-----------------3)SELEZIONA_PREFERITI------------------------------------------------------------------------------------------------

const stars = document.querySelectorAll(".star");
for(star of stars)
{
    star.addEventListener('click', selectstar);
}

function selectstar(event) 
{
    const pss = event.currentTarget.parentNode.querySelectorAll('h1');
    for(ps of pss)
    {
        for(treno in TRENI)
        {
            const sezione = document.querySelector('#preferiti');
            if(ps.textContent === TRENI[treno].h1)
            {
                const div = document.createElement('div');
                sezione.appendChild(div);
                div.classList.add('hidden');
            
                const h1 = document.createElement('h1');
                h1.textContent = TRENI[treno].h1;
                div.appendChild(h1);
            
                const img = document.createElement('img');
                img.src = TRENI[treno].img;
                div.appendChild(img);
            
                const p = document.createElement('p');
                p.textContent = TRENI[treno].p;
                div.appendChild(p);
                p.classList.add('hidden');
            
                const a = document.createElement('a');
                a.textContent = TRENI[treno].a;
                div.appendChild(a);
                a.classList.add('button');
            
                const img2 = document.createElement('img');
                img2.src = "stella_gialla.jpg";
                div.appendChild(img2);
                img2.classList.add('star');
            }
        }
    }
    event.currentTarget.src = "../2/stella_gialla.jpg";
    event.currentTarget.addEventListener('click', deselectstar);
    event.currentTarget.removeEventListener('click', selectstar);
}

function deselectstar(event) 
{
    const pss = event.currentTarget.parentNode.querySelectorAll('h1');
    for(ps of pss)
    {
        const sezione = document.querySelector('#preferiti div');
        sezione.remove();
    }

    event.currentTarget.src = "stella_grigia.jpg";
    event.currentTarget.addEventListener('click', selectstar);
    event.currentTarget.removeEventListener('click', deselectstar);
}




//--------------------4)MOSTRA/NASCONDI_PREFERITI---------------------------------------------------------------------------------------------

const preferiti = document.querySelector('nav a');
preferiti.addEventListener('click', mostra_preferiti);



function mostra_preferiti(event) 
{
    const sezioni = document.querySelectorAll('#preferiti div');
    for(sezione of sezioni)
    {
        sezione.classList.remove('hidden');
    }
    event.currentTarget.addEventListener('click', chiudi_preferiti);
    event.currentTarget.removeEventListener('click', mostra_preferiti);
}

function chiudi_preferiti(event) 
{
    const sezioni = document.querySelectorAll('#preferiti div');
    for(sezione of sezioni)
    {
        sezione.classList.add('hidden');
    }

    event.currentTarget.addEventListener('click', mostra_preferiti);
    event.currentTarget.removeEventListener('click', chiudi_preferiti);
}


//------------------------5)BARRA_RICERCA-----------------------------------------------------------------------------------------

const input = document.querySelector('#barra-ricerca');
input.addEventListener('keyup', ricerca);

function ricerca(event) {
    console.log(input.value);

    const divv = document.querySelectorAll('#treni div');
    for(div of divv)
    {
        h1 = div.querySelector('h1');

        if(h1.textContent.toLowerCase().search(input.value.toLowerCase()) === -1)
        {
            div.classList.add('hidden');
        }

        if(h1.textContent.toLowerCase().search(input.value.toLowerCase()) !== -1)
        {
            div.classList.remove('hidden');
        }
    }
}




