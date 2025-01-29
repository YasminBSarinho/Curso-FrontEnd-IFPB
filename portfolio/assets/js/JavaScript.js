const projectsData = [
    {
        title: "Projeto 1",
        image: "",
        description: "bla bla aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        datails:"ddddddddddddddddddddd"
    },
    {
        title: "Projeto 2",
        image: "",
        description: "bla bla aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        datails:"ddddddddddddddddddddd"
    },
    {
        title: "Projeto 3",
        image: "",
        description: "bla bla aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        datails:"ddddddddddddddddddddd"
    }
]

function createProjectCard(){
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <div class="card-face card-front">
            <img src="${projectsData.image}" alt="${projectsData.title}">
            <h3>${projectsData.title}</h3>
            <p>${projectsData.description}</p>
        </div>

        <div class="card-face card-back">
            <img src="${projectsData.image}" alt="${projectsData.title}">
            <h3>${projectsData.title}</h3>
            <p>${projectsData.description}</p>
        </div>

    `
}