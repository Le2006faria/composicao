import { PessoaFisica } from "./PessoaFisica";
import { PessoaJuridica } from "./PessoaJuridica";

export class NotaFiscal{

    private numeroNotaFiscal: string;
    public PessoaF = new PessoaFisica(``,``);
    public PessoaJ = new PessoaJuridica(``,``);

    public constructor(_numeroNotaFiscal: string){
        this.numeroNotaFiscal = _numeroNotaFiscal;
    }

    public setNumeroNotaFiscal(_numeroNotaFiscal:string):void{
        this.numeroNotaFiscal = _numeroNotaFiscal;
    }

    public getNumeroNotaFiscal(): string{
        return this.numeroNotaFiscal;
    }
    
}