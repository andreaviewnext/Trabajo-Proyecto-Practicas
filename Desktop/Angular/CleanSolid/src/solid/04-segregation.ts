//SEGREGAR PARA QUE SI UN AVE SOLO UNA UN FUNCION NO TENGA QUE IMPLEMENTAR NADA ADICIONAL 

//Todas las aves comen 
interface Bird {
    eat(): void;
}

//Estas interfaces solo son implementadas por aquellas aves que hagan dichas funciones

interface FlyingBird {
    fly(): number;
}

interface RunningBird {
    run(): void;
}

interface SwimmerBird {
    swin(): void;
}

class Tucan implements Bird, FlyingBird {
    public fly() { return 100; }
    public eat() { }
}

class Colibri implements Bird, FlyingBird {
    public fly() { return 200; }
    public eat() { }
}

class Avestruz implements Bird, RunningBird {
    public eat() { }
    public run() { }
}

class Pinguino implements Bird, SwimmerBird {
    public eat() { }
    public swin() { }
}
