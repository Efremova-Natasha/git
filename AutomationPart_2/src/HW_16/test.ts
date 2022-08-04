import { calculator } from "./calc"
export function test(firstPar: number, secondPar: number, operation: '+' | '-' | '*' | '/' | '+-', result: number) {
    if (calculator(firstPar, secondPar, operation) == result) {
        console.log("Test done ✔✔✔");
    } else {
        console.log("Test faild ×××");
    }
}