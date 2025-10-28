let carouselArr = [];


class Carousel {
    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }

    static Start(arr) {
        if (arr && arr.length > 0) {
            Carousel._arr = arr;
            Carousel._sequence = 0;
            Carousel._size = arr.length;
            Carousel.MostraAtual(); 
            Carousel._interval = setInterval(() => Carousel.Proximo(), 5000); 
        } else {
            throw "O método Start precisa receber um Array com pelo menos um item.";
        }
    }

    static MostraAtual() {
        const carouselDiv = document.getElementById("carousel");
        const titleDiv = document.getElementById("carousel-title");
        if (!carouselDiv || !titleDiv) return;

        
        const item = Carousel._arr[Carousel._sequence];

        
        carouselDiv.style.backgroundImage = `url('img/${item.image}')`;
        carouselDiv.style.backgroundSize = "cover";
        carouselDiv.style.backgroundPosition = "center";
        carouselDiv.style.height = "500px";
        carouselDiv.style.transition = "background-image 1s ease-in-out";

       
       titleDiv.innerHTML = `<a href="${item.url}" style="color:#1351d8; text-decoration:none; font-size:24px;">${item.title}</a>`;
        titleDiv.style.textAlign = "center";
        titleDiv.style.marginTop = "10px";
    }

    static Proximo() {
        
        Carousel.ResetaIntervalo();
        
        
        Carousel._sequence++;
        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }
        Carousel.MostraAtual();
    }

    static Previous() {
        
        Carousel.ResetaIntervalo();
        
        
        Carousel._sequence--;
        if (Carousel._sequence < 0) {
            Carousel._sequence = Carousel._size - 1;
        }
        Carousel.MostraAtual();
    }

    static ResetaIntervalo() {
        
        if (Carousel._interval) {
            clearInterval(Carousel._interval);
        }
        Carousel._interval = setInterval(() => Carousel.Proximo(), 5000);
    }
}