const objs = [
    {
        "nome": "Altair",
        "idade": 30,
        "esta_trabalhando": false,
        "detalhes_profissao": {
            "profissao": "Programador",
            "empresa": "Empresa X"
        },
        "hobbies": ["Programar", "Correr", "Ler"]
    },
    {
        "nome": "joao",
        "idade": 25,
        "esta_trabalhando": false,
        "detalhes_profissao": {
            "profissao": null,
            "empresa": null,
        },
        "hobbies": ["jogar", "Academia"],
    },

]

 //  JSON
 // Converter objeto para json
const jsonData = JSON.stringify(objs)

console.log(jsonData)
console.log(typeof jsonData)

// Converter json para objeto
const objData = JSON.parse(jsonData);

console.log(objData)
console.log(typeof objData)


objData.map((pessoa) => {
    console.log(pessoa.nome)
})