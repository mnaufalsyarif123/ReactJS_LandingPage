import React from "react";
import { CarouselContainer, SlideImage, StyledSlider } from "./StyledCarousel";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <CarouselContainer>
            <StyledSlider {...settings}>
                <div>
                    <SlideImage src="https://indigospacesdk.semarangkota.go.id:443//uploads/slider/20240313085357-2024-03-13slider085351.jpeg" alt="Slide 1" />
                </div>
                <div>
                    <SlideImage src="https://indigospacesdk.semarangkota.go.id//uploads/slider/20240313085656-2024-03-13slider085643.jpg" alt="Slide 2" />
                </div>
                <div>
                    <SlideImage src="https://indigospacesdk.semarangkota.go.id//uploads/slider/20240313085543-2024-03-13slider085529.jpg" alt="Slide 3" />
                </div>
                <div>
                    <SlideImage src="https://indigospacesdk.semarangkota.go.id//uploads/slider/20240313085418-2024-03-13slider085415.jpeg" alt="Slide 4" />
                </div>
                <div>
                    <SlideImage src="https://indigospacesdk.semarangkota.go.id//uploads/slider/20240313085501-2024-03-13slider085449.jpeg" alt="Slide 5" />
                </div>
            </StyledSlider>
        </CarouselContainer>
    );
};

export default Carousel;
