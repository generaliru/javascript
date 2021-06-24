fetch('https://thecatapi.com/v1/images?api_key=705f5b22-186b-4a90-b58c-2ba15cf25aff ')
.then(response => response.json())
.then(data => {
    console.log(data);
})