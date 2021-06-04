import axios from "axios";

const clientHttp = axios.create({
    baseURL:  "http://apifortbrasil.devwithme.site/api/"
})

export default clientHttp