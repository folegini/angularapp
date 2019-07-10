import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {
	
	@Input() public tentativasB: number
	
	//poderia fazer um arquivo mock como foi feito com as frases
	public coracoes: Coracao[] = [
		new Coracao(true),
		new Coracao(true),
		new Coracao(true)
	]

	constructor() { }

	ngOnChanges() { 

		if(this.tentativasB !== this.coracoes.length){
			let indice = this.coracoes.length - this.tentativasB
			this.coracoes[indice - 1].cheio = false 
		}
	}

	ngOnInit() { }

}
