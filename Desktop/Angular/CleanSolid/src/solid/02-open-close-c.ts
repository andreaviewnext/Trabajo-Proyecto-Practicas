//import axios from "axios";

//SE CREA ESTA CLASE PORQUE ASI LAS DEMAS LLAMANDA A ESTA Y SOLO SE MODIFICA UNA CLASE, DEL MODO QUE ESTABA ANTES SE TENIAN QUE MODIFICAR TODAS LAS CLASES 
export class HttpClient {

    /*
    async get(url: string) {
        const { data, status } = await axios.get(url);
        console.log({ status });
        return { data, status };
    }/ */
    async get(url: string) {
        const resp = await fetch(url);
        const data = await resp.json();


        return { data, status: resp.status }

    }

}