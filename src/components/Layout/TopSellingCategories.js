import SlCarousel from '@shoelace-style/shoelace/dist/react/carousel';
import SlCarouselItem from '@shoelace-style/shoelace/dist/react/carousel-item';
import Slide1 from "../../images/Slide1.jpg"
import Slide2 from "../../images/Slide2.jpg"
import Slide3 from "../../images/Slide3.jpg"



const TopSellingCategories = () => {
    return (
        <div>
            <div className="text-center p-6 text-2xl font-bold uppercase tracking-tight">
                <h1>shop by categories</h1>
            </div>
            <SlCarousel navigation loop slidesPerPage={3} slidesPerMove={1}>
                <SlCarouselItem style={{ background: 'var(--sl-color-red-200)', border: "6px solid yellow" }}>
                    <img src={Slide1} alt='slide' />
                </SlCarouselItem>
                <SlCarouselItem style={{ background: 'var(--sl-color-orange-200)', border: "6px solid yellow" }}>
                    <img src={Slide2} alt='slide' />
                </SlCarouselItem>
                <SlCarouselItem style={{ background: 'var(--sl-color-yellow-200)', border: "6px solid yellow" }}>
                    <img src={Slide3} alt='slide' />
                </SlCarouselItem>

            </SlCarousel>
        </div>

    );
}

export default TopSellingCategories;
