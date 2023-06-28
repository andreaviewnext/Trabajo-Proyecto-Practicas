(() => {

    // función para obtener información de una película por Id
    function getMovieById(movieId: string) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastById(id: string) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById(ActorId: string) {
        console.log({ ActorId });
    }

    // Crear una película
    interface Movie {
        cast: string[];
        description: string,
        rating: number,
        title: string,

    }
    function createMovie({ title, description, rating, cast }: Movie) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor(fullName: string, birthdate: Date): boolean {

        // tarea asincrona para verificar nombre
        // ..
        // ..
        if (fullName === 'fernando') return false;

        console.log('Crear actor', birthdate);
        return true;
    }

    //continuar 
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {

        if (isDead) return 1500;

        if (isSeparated) return 2500;

        //preguntamos si esta retirado, si es true devuelve 3000, en caso contrario 4000. Es un condicional ternario (se ve como un if corto)
        return (isRetired) ? 3000 : 4000;
    }

    /**
       const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
            let result;
            if ( isDead ) {
                result = 1500;
            } else {
                if ( isSeparated ) {
                    result = 2500;
                } else {
                    if ( isRetired ) {
                        result = 3000;
                    } else {
                        result = 4000; 
                    }
                }
            }
            
            return result;
        }
     */


})();




