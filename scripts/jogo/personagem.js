class Personagem extends Animacao {
  constructor(
    matriz, 
    imagem, 
    x, 
    variacaoY, 
    largura, 
    altura, 
    larguraSprite, 
    alturaSprite,
  ){
    super(matriz,
      imagem, 
      x, 
      variacaoY, 
      largura, 
      altura, 
      larguraSprite, 
      alturaSprite
    );
    this.variacaoY = variacaoY;    
    this.yInicial = height - this.altura - this.variacaoY;    
    this.y = this.yInicial
    
    this.velocidadeDoPulo = 0;
    this.gravidade = 6;
    this.alturaDoPulo = -50;
    this.qtdPulos = 0;
  }

  pula(){
    if(this.qtdPulos < 2) {
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.qtdPulos++;
    }
  }
  
  aplicaGravidade(){
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
    
    if(this.y > this.yInicial){
      this.y = this.yInicial;
      this.qtdPulos = 0;
    }
  }
  
  estaColidindo(inimigo) {
    // noFill();
    // rect(this.x, this.y, this.largura, this.altura);
    // rect(inimigo.x, inimigo.y, inimigo.largura, inimigo.altura);
    const precisao = .7;
    const colisao = collideRectRect(
      this.x, 
      this.y, 
      this.largura * precisao, 
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    );
    
    return colisao;
  }
}