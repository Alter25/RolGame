import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

interface Resultado {
  resultado: string;
}

export default async function LeerEntrada(msj: string): Promise<Resultado> {
  const rl = readline.createInterface({ input, output });

  const resultado = await rl.question(msj);
  console.log(`🧙 Bienvenido, ${resultado}`);

  rl.close();
  return { resultado };
}
