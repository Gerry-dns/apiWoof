
// querySelector vient séléctionner l'id qui porte le nom 'fetch-dog'
// addEventListenner est une méthode vient 'écouter' le click.
// async await à chercher sur le net...
document.querySelector('#fetch-dog').addEventListener('click', async () => {
    // on appelle la fonction refreshDog
    refreshDog()
})

async function refreshDog() {
     // on stock le résultat dans une variable
     var fetchResult = await fetch('https://random.dog/woof.json')
     // on va convertir le résultat en format json et on le stock dans la variable data
     var data = await fetchResult.json()
    
     // si mon api contient un .mp4 dedans
     if (data.url.includes('.mp4')) {
        // on appel la fonction refresh
        refreshDog()
        return
     }
      // on vient séléction l'id de l'image et on lui attribue un url. 
      document.querySelector('#img-dog').src = data.url
}
// on appelle la fonction dès le début
refreshDog()