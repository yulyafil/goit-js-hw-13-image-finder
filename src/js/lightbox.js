import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

export default function onOpenLightBox(e) {
    if (e.target.nodeName !== 'IMG') {
        return;
    }
    console.log(e.target);
    console.log(e.target.dataset.src);
    const instance = basicLightbox.create(
        `<img src="${e.target.dataset.src}" alt="image"/>`);
    instance.show();
}



