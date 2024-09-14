const{select, input, checkbox}= require('@inquirer/prompts')

let meta = {
    value: "Tomar 3L de água por dia",
    checked: false
}
let metas = [meta]

const cadastrarMeta = async () => {
    const meta = await input({ 
        message: "DIGITE A META:"})

        if(meta.length == 0) {
            console.log("A meta não pode ser vazia! Se liga!")
            return
        }

        metas.push({
            value: meta,
            checked: false, 
        })

}

const listarMetas = async() => { 
    const respostas = await checkbox ({
        message: "Use as setas para mudar de meta, o espaço para marcar e desmarcar e o ENTER para finalizar essa etapa",
        choices: [...metas],
        instructions: false,
    })

    metas.forEach((m) => {
        m.checked = false
      })

  if(respostas.length == 0 ) {
    console.log("Nenhuma meta selecionada")
    return
  }

  respostas.forEach((resposta) => {
    const meta = metas.find((m) => {
        return m.value == resposta
    })
    
  meta.checked = true
 })

 console.log("Meta(s) marcadas como concluída(s)!")

}

const metasRealizadas = async () => {
    const realizadas = metas.filter((meta) => {
        return meta.checked
    })

    if (realizadas.length == 0) {
        console.log('Não existe(m) meta(s) realizada(s) :(')
        return
    }

    await select({
        message: "Metas Realizadas:" + realizadas.length,
        choices:[...realizadas]
    })
}


const metasAbertas = async () => { 
    const abertas = metas.filter((meta)=> {
        return meta.checked != true //!meta.checked == meta.checked != true//
    })

    if(abertas.length == 0){
        console.log('Parabéns! Você concluiu todas as metas!! :)')
    }

    await select ({
        message: "Metas Abertas:" + abertas.length,
        choices: [...abertas],
    })
}

const deletarMetas = async () => { 
    const metasDesmarcadas = metas.map((meta) => { 
        return {value: meta.value, checked: false }
    })
    const itemsADeletar = await checkbox ({
        message: "Use as setas para mudar de meta, o espaço para marcar e desmarcar e o ENTER para finalizar essa etapa",
        choices: [...metasDesmarcadas],
        instructions: false,
    })

    if(itemsADeletar.length==0){
        console.log("Nenhuma meta selecionada")
        return
    }

    itemsADeletar.forEach((item)=> { 
        metas = metas.filter((meta) => { 
            return meta.value != item 
        })
    })

    console.log('Meta(s) deletada(s) com sucesso!')
}


const start = async () => {
   
    while(true){
     
        const opcao = await select({
            message : "Menu >",
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
                    name: "METAS REALIZADAS",
                    value: "realizadas"
                },
                {
                    name: "METAS ABERTAS",
                    value: "abertas"
                },
                {
                    name: "DELETAR METAS",
                    value: "deletar"
                },
                {
                    name: "SAIR", 
                    value: "sair"
                },
             
            ]
        })


      switch(opcao){

        case "cadastrar":
           await  cadastrarMeta ()
           console.log(metas)
            break

        case "listar":
            await listarMetas()
            break

        case "realizadas":
            await metasRealizadas()
            break

        case "abertas":
            await metasAbertas()
            break

        case "deletar": 
            await deletarMetas()
            break
        case "sair":
            console.log("Até a próxima! Tchaau!")
            return

      }
    }
}

start()