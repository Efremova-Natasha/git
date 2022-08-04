export function calculator(firstPar: number, secondPar: number, operation: '+' | '-' | '*' | '/' | '+-') {
    switch (operation) {
        case '+':
            if (operation == '+') {
                return firstPar + secondPar
            }
            break;
        case '-':
            if (operation == '-') {
                return firstPar - secondPar
            }
            break;
        case '*':
            if (operation == '*') {
                return firstPar * secondPar
            }
            break;
        case '/':
            if (operation == '/') {
                return firstPar / secondPar
            }
            break;
        case '+-':
            if (operation == '+-') {
                return (firstPar + firstPar) - secondPar
            }
            break;
    }
}
