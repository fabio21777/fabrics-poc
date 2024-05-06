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


  exportToSVG() {
    let svg = this.canvas.toSVG();
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'canvas.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  exportToPNG() {
    let pngUrl = this.canvas.toDataURL({
      format: 'png',
      quality: 1.0
    });
    const link = document.createElement('a');
    link.href = pngUrl;
    link.download = 'canvas.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  exportToJSON() {
    console.log(this.canvas.toObject());
    let json = JSON.stringify(this.canvas.toJSON());

    this.canvas.clear();

    setTimeout(() => {
      this.canvas.loadFromJSON(json);
    }, 2000);
  }

}
