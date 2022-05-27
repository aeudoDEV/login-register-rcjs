const express = require('express');
const app = express();
const mysql = require('mysql2');
var cors = require('cors');

const db = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "senha",
    database: "login",
});

app.use(express.json());
app.use(cors());


app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    
    db.query("SELECT * FROM usuario WHERE email = ?", [email], (err, result) => {
        if(err){
            res.send(err);
        }if(result == 0){
            db.query(
                "INSERT INTO usuario (usuario, senha) VALUES (?, ?)",[email, password],
                function (error, results, fields) {
                    if (error) {
                        console.log("Falha ao inserir"+error);
                    }
                  }
                );
        }
    });
    
    return res.json({
        message: "Sucesso!"
    })

})

//app.get("/", async (req, res) => {
//db.query(
//    "INSERT INTO usuario (usuario, senha) VALUES ('aeudo.pds@gmail.com', 'aeudo12345')",
//    function (error, results, fields) {
//        if (error) {
//            console.log("Falha ao inserir"+error);
//        }
//      }
//    );
//  });

app.listen(3000, ()=>{
    console.log('Working 3k1')
});
