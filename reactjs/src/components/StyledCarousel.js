import styled from 'styled-components';
import Slider from "react-slick";

export const CarouselContainer = styled.div`
    width: 100%;
    width: 1000px;
    margin: 0 auto;
    padding: 20px 0;
`;

export const SlideImage = styled.img`
    width: 100%;
    height: 600px;  /* Set a fixed height for all images */
    object-fit: cover;  /* This will ensure the image covers the area and maintains aspect ratio */
    border-radius: 10px;
`;

export const StyledSlider = styled(Slider)`
    .slick-slide {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .slick-dots li button:before {
        font-size: 12px;
        color: #000;
    }

    .slick-dots li.slick-active button:before {
        color: #007BFF;
    }
`;
