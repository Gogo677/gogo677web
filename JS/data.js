// Colección de tecnologías
technologies =
[
    {
        img:"./tech-icons/c-sharp.svg",
        name:"C#"
    },
    {
        img:"./tech-icons/dotnet.svg",
        name:".NET"
    },
    {
        img:"./tech-icons/java.svg",
        name:"Java"
    },
    {
        img:"./tech-icons/Python.svg",
        name:"Python"
    },
    {
        img:"./tech-icons/html.svg",
        name:"HTML"
    },
    {
        img:"./tech-icons/css.svg",
        name:"CSS"
    },
    {
        img:"./tech-icons/Javascript.svg",
        name:"JavaScript"
    },
    {
        img:"./tech-icons/react.svg",
        name:"React"
    },
    {
        img:"./tech-icons/nodejs-square.svg",
        name:"NodeJS"
    },
    {
        img:"./tech-icons/sql.svg",
        name:"SQL"
    },
    {
        img:"./tech-icons/git.svg",
        name:"Git"
    }
]

function generateCard(img, name){
    return `<div class="tech-card"><img src="${img}" alt=""><p>${name}</p></div>`;
}

function generateCards(){

    const container = document.querySelector('.tech-container');
    let techHTML = '';

    technologies.forEach(element => {
        techHTML+= generateCard(element.img,element.name)
    })
    container.innerHTML=techHTML;
}

generateCards();