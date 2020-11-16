import './styles.css';
import ImageApiService from './js/apiService';
import imageCardTpl from './template/photo-card.hbs';
import onOpenLightBox from './js/lightbox';




const refs = {
    searchForm: document.querySelector('.search-form'),
    galleryImage: document.querySelector('.gallery'),
    sentinel: document.querySelector('#sentinel'),
    // galleryLink: document.querySelector('.gallery__link'),
}

const imageApiServise = new ImageApiService();


refs.searchForm.addEventListener('submit', onSearch);
refs.galleryImage.addEventListener('click', onOpenLightBox)



function onSearch(e) {
    e.preventDefault();

    imageApiServise.query = e.currentTarget.elements.query.value;
    imageApiServise.resetPage();
    clearImageGallery();
    imageApiServise.fetchImage().then(hits => {
        appendImage(hits);
        imageApiServise.incrementPage();
    });
    
};

function appendImage(hits) {
    refs.galleryImage.insertAdjacentHTML('beforeend', imageCardTpl(hits));
}

function clearImageGallery(hits) {
    refs.galleryImage.innerHTML = '';
}

const onEntry = entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && imageApiServise.query !== '') {
    
        imageApiServise.fetchImage().then(hits => {
        appendImage(hits);
            imageApiServise.incrementPage();
            });
        }
    });
};

const options = {
    rootMargin: '300px',
};

const observer = new IntersectionObserver(onEntry, options);
observer.observe(refs.sentinel);



    