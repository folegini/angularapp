import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Jogo do Filipe';

	public appEmAndamento: boolean = true
	public fimDoApp: boolean

	public encerrarApp(tipo: boolean): void{
		this.appEmAndamento = false
		this.fimDoApp = tipo
	}

	public reiniciarApp(): void {
		this.appEmAndamento = true
		this.fimDoApp = undefined
	}
}
