export default class ImageApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    fetchImage() {
        
        const KEY = '19004736-c04aed371878a699e1304a28f';
        const URL = `https://pixabay.com/api/?key=${KEY}&q=${this.searchQuery}&image_type=photo&orientation=gorizontal&per_page=12&page=${this.page}`;

        return fetch(URL)
            .then(response => response.json())
            .then(({ hits })=> {
                this.incrementPage();
                
                return hits;
            });
    }
    
    incrementPage() {
        this.page += 1
    }

    resetPage() {
        this.page = 1;
    }
    
    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
    
}