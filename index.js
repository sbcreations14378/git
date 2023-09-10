const express = require('express');
const app = express();
const port =3000;

app.use(express.json());
app.use(express.urlencoded({extended:false}))

let movies=[
    {
    id:"1",
    title:"Nenulocal",
    director:"Thrinadha Rao",
    released:"2017"
    },
    {
    id:"2",
    title:"Majnu",
    director:"SSR",
    released:"2016"
    },
    {
    id:"3",
    title:"RRR",
    director:"SSR",
    released:"2022"
    }
];

app.get('/movies',(req,res)=>{
    res.json({movies});
})

app.post('/movies',(req,res)=>{
    const movie = req.body;

    console.log(movie);
    movies.push(movie);
    res.send(`Movie Added to list`)
})


app.get('/movies/:id',(req,res)=>{
    const id =( req.params.id);

    for(let movie of movies){
        if (movie.id===id){
            res.json(movie)
            console.log(movie)
            return;
        }
    }
    res.status(404).send("Movie Not Found");
})

// app.get('/movie/:id',(req,res)=>{
//     console.log(req.params.id)
//     const found=movies.some(movie=>movie.title === (req.params.id));
//     if(found){
//         console.log(true)
//         res.json(movies.filter(movie=>movie.title === (req.params.id)))

//     }
//     else{
//         console.log("Movie was not Found");
//         res.status(400).send("Movie was not Found");
//     }
// })


app.delete('/movies/:id',(req,res)=>{
    const id = req.params.id;

    movies= movies.filter(movie=>{
        if (movie.id!==id){
            return true
        }
        return false
    })
    res.send("Movies Deleted from The List")
})

app.listen(port,()=>{
    console.log(`Server Running on Port ${port}`)

})