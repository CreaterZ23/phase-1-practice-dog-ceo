console.log('%c HI', 'color: firebrick')
let breeds = []



fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((resp)=>resp.json())
    .then(dogs => renderDogs(dogs)) 


function renderDogs(dogs){
    console.log(dogs)
    const dogContainer = document.querySelector('div#dog-image-container');
    dogs.message.forEach(dog => {
    //    console.log(dog)
        const img =document.createElement('img')
        img.src = dog
        
        dogContainer.appendChild(img)
        

    })
}



// function fetchDogBreeds () {
//     return fetch('https://dog.ceo/api/breeds/list/all')
//         .then(resp => resp.json())
//         .then(dogBreeds => renderDogBreed(dogBreeds.message))
// }

// function renderDogBreed(dogBreed){
//     console.log(dogBreed) 
//     breeds = Object.values(dogBreeds.message)
//     console.log(breeds)
//     breeds.forEach(breed => {
//         addsBreeds(breed)
//     })
// }

// function addsBreeds(breed){
//     const ulForDogBreeds = document.querySelector('ul#dog-breeds')
//     const newLi = document.createElement('li')
//     newLi.innerText = breed
//     ulForDogBreeds.appendChild(newLi)
//     console.log(breed)
// }