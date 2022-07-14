let secaoFrutas  = document.querySelector(".fruits")
let secaoBebidas = document.querySelector(".drinks")
let secaoHigiene = document.querySelector(".hygiene")

function listarProdutos(listaProdutos, departamentoSecao){
    
   
    let tagUl       = document.createElement("ul")

   
    for(let i = 0; i<listaProdutos.length; i++){
        
        let produto             = listaProdutos[i]
        let departamentoProduto = produto.category
    

    if(departamentoProduto == departamentoSecao){
        let cardProduto    = criarCardProduto(produto)
        tagUl.appendChild(cardProduto)
    }

    }
    if(departamentoSecao == 'Frutas'){
        secaoFrutas.appendChild(tagUl)
    }else if(departamentoSecao == 'Bebidas'){
        secaoBebidas.appendChild(tagUl)
    }else if(departamentoSecao == 'Higiene'){
        secaoHigiene.appendChild(tagUl)
    }
    
}
   

    function criarCardProduto(produto){

         
        let nome        = produto.title
        let preco       = `R$ ${produto.price}`.replace('.',',')
        let categoria   = produto.category
        let imgeUrl     = produto.image
    
        
        if(produto.image == undefined){

            imgeUrl = './img/products/no-img.svg'
        }
        
        
        let tagLi      = document.createElement('li')
        let tagImg     = document.createElement('img')
        let tagMain    = document.createElement('main')
        let tagH1      = document.createElement('h1')
        let tagH5      = document.createElement('h5')
        let tagStrong  = document.createElement('strong')

        tagLi.classList.add('product')
        tagImg.classList.add('product-img')
        tagMain.classList.add('product-main')
        tagH1.classList.add('product-title')
        tagH5.classList.add('product-category')
        tagStrong.classList.add('product-price')

        tagImg.src     = imgeUrl
        tagImg.alt     = nome
        tagH1.innerText = nome
        tagH5.innerText = categoria
        tagStrong.innerText  = preco

        tagLi.appendChild(tagImg)
        tagLi.appendChild(tagMain)
        tagMain.appendChild(tagH1)
        tagMain.appendChild(tagH5)
        tagMain.appendChild(tagStrong)

        return tagLi
    }
listarProdutos(products, "Frutas")
listarProdutos(products, "Bebidas")
listarProdutos(products, "Higiene")