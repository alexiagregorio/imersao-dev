/*
var filmeAri = 'https://upload.wikimedia.org/wikipedia/pt/9/9e/Just_Go_with_it_P%C3%B4ster.jpg'

var filmeAlexia = 'https://static.wikia.nocookie.net/vvikipedia/images/d/d8/Poster_Harry_Potter_e_o_C%C3%A1lice_de_Fogo.jpg/revision/latest?cb=20200413041610&path-prefix=pt'

var filmeAntonio = 'https://upload.wikimedia.org/wikipedia/pt/thumb/f/f1/TFF-TokyoDrift-p%C3%B4ster.jpg/255px-TFF-TokyoDrift-p%C3%B4ster.jpg'
*/

var listaFilmes = [
    'https://upload.wikimedia.org/wikipedia/pt/9/9e/Just_Go_with_it_P%C3%B4ster.jpg', 
    'https://static.wikia.nocookie.net/vvikipedia/images/d/d8/Poster_Harry_Potter_e_o_C%C3%A1lice_de_Fogo.jpg/revision/latest?cb=20200413041610&path-prefix=pt',
                
    'https://upload.wikimedia.org/wikipedia/pt/thumb/f/f1/TFF-TokyoDrift-p%C3%B4ster.jpg/255px-TFF-TokyoDrift-p%C3%B4ster.jpg',

    'https://upload.wikimedia.org/wikipedia/pt/7/76/10_Things_I_Hate_About_You.jpg',

    'https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080'

]
/*
listaFilmes[0] = 'https://upload.wikimedia.org/wikipedia/pt/9/9e/Just_Go_with_it_P%C3%B4ster.jpg'

listaFilmes[1] ='https://static.wikia.nocookie.net/vvikipedia/images/d/d8/Poster_Harry_Potter_e_o_C%C3%A1lice_de_Fogo.jpg/revision/latest?cb=20200413041610&path-prefix=pt'

listaFilmes[2] = 'https://upload.wikimedia.org/wikipedia/pt/thumb/f/f1/TFF-TokyoDrift-p%C3%B4ster.jpg/255px-TFF-TokyoDrift-p%C3%B4ster.jpg' 
*/

for (var i = 0; i < listaFilmes.length; i++) {
    document.write('<img src=' + listaFilmes[i] + '>')
}

/*
window.document.write('<img src=' + listaFilmes[0] + '>')
document.write('<img src=' + listaFilmes[1] + '>')
document.write('<img src=' + listaFilmes[2] + '>')
*/