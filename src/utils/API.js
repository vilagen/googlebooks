import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {

    getBooks: () => {
        return axios.get("/api/books")
    },

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
