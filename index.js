const{select}= require('@inquirer/prompts')

const start = async () => {
   
    while(true){
     
        const opcao = await select({
            message: "Menu >",
            choices: [
                {
                    name: "CADASTRAR METAS", 
                    value: "cadastrar"
                },
                {
                    name: "LISTAR METAS",
                    value: "listar"
                },
                {
                    name: "SAIR", 
                    value: "sair"
                },
            ]
        })


      switch(opcao){
        case "cadastrar":
            console.log("Vamos cadastrar")
            break
        case "listar":
            console.log("Vamos listar!")
            break
        case "sair":
            console.log("Até a próxima! Tchaau!")
            return

      }
    }
}

start()