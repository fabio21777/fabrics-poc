
Referencias

https://github.com/rodrigopandini/articles-fabric.js/tree/master pt-br

http://fabricjs.com/docs/ :referencia para implementação

http://fabricjs.com/demos/  : Demos


introdução

http://fabricjs.com/fabric-intro-part-1
http://fabricjs.com/fabric-intro-part-2
http://fabricjs.com/fabric-intro-part-3
http://fabricjs.com/fabric-intro-part-4
http://fabricjs.com/fabric-intro-part-5


[Exemplo básico em angular no StackBlitz](https://stackblitz.com/edit/2toad-angular-fabric?file=app%2Fapp.component.ts)
[Exemplo que pode ser útil no CodePen](https://codepen.io/r-w-c/pen/Jjwrbxa)
http://fabricjs.com/loadfonts

## o que é como funciona

Fabric.js é uma biblioteca JavaScript que facilita o trabalho com o elemento canvas do HTML5, permitindo uma manipulação mais complexa e interativa dos gráficos. Ela oferece um modelo de objeto robusto e métodos que permitem a interação com gráficos como se fossem objetos reais no canvas. Além disso, inclui suporte para SVG e uma variedade de ferramentas que ajudam no desenvolvimento de aplicativos gráficos ricos. Fabric.js é particularmente útil para aplicações que necessitam de interatividade gráfica detalhada e controle sobre os elementos do canvas.

## Instalação


```sh
npm i fabric
npm i @types/fabric
```



Utilização exemplo básico em angular 

```html
<div>
	<canvas id="myCanvas" width="2000" height="1000"></canvas>
</div>
```

```js
import { Component, OnInit } from '@angular/core';

import { fabric } from 'fabric';

@Component({

selector: 'app-Fabrics',

templateUrl: './Fabrics.component.html',

styleUrls: ['./Fabrics.component.css']

})

export class FabricsComponent implements OnInit {

	canvas: any;
	
	constructor() { }
	
	  
	
	ngOnInit() {
	
	this.canvas = new fabric.Canvas('myCanvas', );
	
	  
	
	this.canvas.add(new fabric.IText('Hello Fabric!'));
	
	}
}

```




## Como é a saida dele(exportação) ?

http://fabricjs.com/fabric-intro-part-3, no final dessa documentação existe os parses 
  
### toCanvasElement

Cria um novo elemento HTMLCanvas pintado com o conteúdo atual do canvas. Não é necessário redimensionar o canvas atual ou repintá-lo. Transferirá a propriedade do objeto para um novo canvas, o pintará e reconfigurará tudo.

### toDataURL

Exporta o elemento canvas para uma imagem em formato data URL. Note que, quando o multiplicador é usado, o recorte é escalonado apropriadamente.

### ToJson ou toObject

exporta o elemento canvas para objeto 

### toSVG

exporta a representação canvas para um svg


## É possível enviar vários de entrada para ele (Importação)

É possível importar um objeto para o canvas gerado pelo método loadFromJSON

```ts
exportToJSON() {

console.log(this.canvas.toObject());

let json = JSON.stringify(this.canvas.toJSON());

  

this.canvas.clear();

  

setTimeout(() => {

this.canvas.loadFromJSON(json);

}, 2000);

}
```

## Adicionando elementos no canvas utilizando o Fabric.js

O primeiro passo é ter uma instância do canvas para iniciarmos a adição de elementos. Precisamos ter uma referência de um elemento canvas no HTML, a partir desse elemento adicionaremos novos elementos ao canvas.



```ts
this.canvas = new fabric.Canvas('myCanvas', );
```

```html
<div>
<canvas id="myCanvas" width="2000" height="500"></canvas>
</div>
```

#### Adicionando novos elementos 

```ts
ngOnInit() {

	this.canvas = new fabric.Canvas('myCanvas');
	
	
	// Adicionando um objeto IText
	
	this.canvas.add(new fabric.IText('Hello Fabric!'));

  

// Adicionando um retângulo

	this.canvas.add(new fabric.Circle({
	
		radius: 20,
		
		fill: 'green',
		
		left: 100,
		
		top: 100
	
	}));

  

// Adicionando um triângulo

	this.canvas.add(new fabric.Triangle({

		width: 20,
		
		height: 30,
		
		fill: 'blue',
		
		left: 50,
		
		top: 50

	}));

  

// Adicionando a imagem local

const imgURL = '/assets/itexto-1.png'; // URL relativa

fabric.Image.fromURL(imgURL, (img) => {

	img.set({
	
		left: 200,
		
		top: 200,
		
		angle: 0,

	});

		this.canvas.add(img);

	});

  

	console.log(this.canvas.getObjects());

}
```


#### O resultado do canvas é similar a esse 

![[Pasted image 20240506094139.png]]