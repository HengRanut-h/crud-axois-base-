import axios from "axios";

class Api {
    constructor(baseURL) {
        this.baseURL = baseURL;
        this.header = {
            "Content-Type": "application/json",
        };
    }

    async get(url) {
        const res = await axios({
            url: this.baseURL +"/"+ url,
            method: "GET",
            headers: this.header,
        });

        return res.data;
    }

    async getById(url, id) {
        const res = await axios({
            url: this.baseURL + url + "/" + id,
            method: "GET",
            headers: this.header,
        });

        return res.data;
    }

    async post(url, data) {
        const res = await axios({
            url: this.baseURL +"/"+  url,
            method: "POST",
            headers: this.header,
            data: data,
        });

        return res.data;
    }

    async put(url, id, data) {
        const res = await axios({
            url: this.baseURL + url + "/" + id,
            method: "PUT",
            headers: this.header,
            data: data,
        });

        return res.data;
    }

    async delete(url, id) {
        const res = await axios({
            url: this.baseURL + url + "/" + id,
            method: "DELETE",
            headers: this.header,
        });

        return res.data;
    }
}

export default Api;