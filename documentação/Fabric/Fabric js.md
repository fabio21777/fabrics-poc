
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


### Importação (Importação)

é possível importar um objeto para o canvas gerado pelo método loadFromJSON

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

