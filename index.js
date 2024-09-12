const start = () => {
    let count = 0
    while(true){
      let opcao = "cadastrar"  
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