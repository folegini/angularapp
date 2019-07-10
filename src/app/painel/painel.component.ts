import { Component, OnInit, EventEmitter, Output, OnDestroy} from '@angular/core';
import { Frase } from '../shared/frase.model';
import { afrases } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {
	public instrucao: string = 'Traduza a frase:'
	public frases: Frase[] = afrases
	public resposta: string = ''

	public rodada: number = 0
	public rodadeFrase: Frase

	public progressoA: number = 0

	public tentativas: number = 3

	@Output() public encerrar: EventEmitter<boolean> = new EventEmitter()

  	constructor() { 
		this.atualizaRodada()
	}

  	ngOnInit() { }

	ngOnDestroy() { }

	atualizaResposta(resposta: Event): void {
		this.resposta = (<HTMLInputElement>resposta.target).value
	}

	verificaResposta(): void {
		
		if(this.rodadeFrase.fraseBR == this.resposta){
			
			//realizo o incremento da barra de progresso
			this.progressoA = this.progressoA + (100 / this.frases.length)
			
			this.rodada ++
			if(this.rodada === 4){
				this.encerrar.emit(true)
			}else {
				this.atualizaRodada()
			}

		}else{
			this.tentativas --

			if(this.tentativas === -1){
				this.encerrar.emit(false)
			}

		}
	}

	public atualizaRodada(): void{
		this.rodadeFrase = this.frases[this.rodada]
		this.resposta = ''
	}

}
