import axios from "axios";

export default {

    getBooks: query => { 
        return axios.get("/api/books", { params: { q: query } });
    },

    getBook: id => { 
        return axios.get(`/api/books/${id}`); 
    },

    deleteBook: id => { 
        return axios.delete(`/api/books/${id}`);
    },

    saveBook: bookData => { 
        return axios.post(`/api/books`, bookData);
    }

}
