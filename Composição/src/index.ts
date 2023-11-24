import { NotaFiscal } from "./model/NotaFiscal";

const notaF1 = new NotaFiscal(`213578-952`);
notaF1.PessoaF.setNome(`José Mateus`);
notaF1.PessoaF.setCpf(`37589412554-98`);
console.log(`Nome: ${notaF1.PessoaF.getNome()}`);
console.log(`CPF: ${notaF1.PessoaF.getCpf()}`);
console.log(`Nota Fiscal nº: ${notaF1.getNumeroNotaFiscal()}`);

const notaF2v = new NotaFiscal(`547frfr5-22`);
notaF2v.PessoaF.setNome(`Mateus José`);
notaF2v.PessoaF.setCpf(`658142684-98`);
console.log(`Nome: ${notaF2v.PessoaF.getNome()}`);
console.log(`CPF: ${notaF2v.PessoaF.getCpf()}`);
console.log(`Nota Fiscal nº: ${notaF2v.getNumeroNotaFiscal()}`);