import Image from '../models/Image'

//Serve para eu saber o que retorna do banco
//posso personalizar o retorno, ocultando senhas, ou informações desnecessárias 

export default {
    render(image: Image) {
        return {
            id: image.id,
            url: `http://localhost:3333/uploads/${image.path}`,
            
        }
    },
    renderMany(images: Image[]){
        return images.map(image => this.render(image))
    }
}
