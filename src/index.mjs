import express, { request, response } from 'express';

const app = express();
import bodyParser from 'body-parser';

//middleware
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000

// const mockusers = ([
//     {id: 1, username: "anson", displayName:"John "},
//     {id: 2, username: "james", displayName: "Jane"},
//     {id: 3, username: "john", displayName: "John"},
//     {id: 4, username: "Adena", displayName: "Adena"},
// ])
const mockusers = ([
    {id: 1, username: "anson", displayName:"John "},
    {id: 2, username: "james", displayName: "Jane"},
    {id: 3, username: "john", displayName: "John"},
    {id: 4, username: "Adena", displayName: "Adena"},
    {id: 5, username: "michael", displayName: "Michael"},
    {id: 6, username: "sarah", displayName: "Sarah"},
    {id: 7, username: "david", displayName: "David"},
    {id: 8, username: "emma", displayName: "Emma"},
    {id: 9, username: "daniel", displayName: "Daniel"},
    {id: 10, username: "olivia", displayName: "Olivia"},
    {id: 11, username: "liam", displayName: "Liam"},
    {id: 12, username: "sophia", displayName: "Sophia"},
    {id: 13, username: "noah", displayName: "Noah"},
    {id: 14, username: "isabella", displayName: "Isabella"},
    {id: 15, username: "lucas", displayName: "Lucas"},
    {id: 16, username: "mia", displayName: "Mia"},
    {id: 17, username: "ethan", displayName: "Ethan"},
    {id: 18, username: "amelia", displayName: "Amelia"},
    {id: 19, username: "alexander", displayName: "Alexander"},
    {id: 20, username: "harper", displayName: "Harper"},
    {id: 21, username: "jackson", displayName: "Jackson"},
    {id: 22, username: "evelyn", displayName: "Evelyn"},
    {id: 23, username: "aiden", displayName: "Aiden"},
    {id: 24, username: "abigail", displayName: "Abigail"}
   
]);

// ...

app.get("/api/user", (req, res) => {
    console.log(req.query)
    const { query: { filter, value } } = req;
    //filters 
    if (!filter && !value) {
        return res.send(mockusers);
    }
    const filteredUsers = mockusers.filter((user) => user[filter] && user[filter].includes(value));
    return res.send(filteredUsers);
});app.listen(PORT, () => {

    console.log(`Affordable is sleeping  ${PORT}`);
});


//CLient API
app.post('/api/user', (req, res) => {
    const {body} = req; 
    const newUser = { id: mockusers[mockusers.length - 1].id +1, ...body}; 
    mockusers.push(newUser);
    return res.status(201).send(newUser);  
});

// app.post('/api/user', (req, res) => {
//     console.log(req.body);
//     const newUser = { id: mockusers.length + 1, ...req.body };
//     mockusers.push(newUser);
//     return res.send(200);
// });

app.get('/', (req, res) => {
    res.status(201).send({msg: 'Welcome'})
});

// ...

// app.get("/api/user", (req, res) => {
//     console.log(request.query)
//     response.send(muckusers);
// });

app.get("/api/user/:id", (req, res) =>{
    console.log(req.params);
    const parsedId = parseInt(req.params.Id);
    console.log(parsedId);
    if (isNaN(parsedId)) 
        return res.status(400).send( {msg: "Bad Reguest . Invalid ID"} );

    const findUsers = mockusers.find((user) => user.id === parsedId);
    if (!findUsers) return res.status(404).send( {msg: " not found"} );
    return res.send(findUsers);
});
app.get("/api/products", (req, res) => {
    res.send([
        {id: "1", displayName: "John"}
    ]);
});


// app.listen(3000);





