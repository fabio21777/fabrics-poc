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
    //add outro texto
    this.canvas.add(new fabric.IText('Hello Fabric!'));
    //add outro texto
    this.canvas.add(new fabric.IText('Hello Fabric!'));
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
