/* eslint-disable react/no-unknown-property */
import { useState, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./ImageCarousel.module.css";
import CSSModules from "react-css-modules";

interface ImageCarouselProps {
  images: {
    isPriority: boolean;
    src: string;
    alt: string;
  }[];
}

function ImageCarousel({ images }: ImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = useState(1);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();

    setSelectedIndex((prev) => prev - 1);
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();

    if (selectedIndex < images.length) {
      setSelectedIndex(selectedIndex + 1);
    }
  }, [emblaApi]);

  return (
    <div styleName="carousel">
      <div styleName="emlba">
        <div styleName="embla__viewport" ref={emblaRef}>
          <div styleName="embla__container">
            {images.map((image) => {
              return (
                <div styleName="embla__slide" key={image.src}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    style={{ width: "100%", height: "100%", boxShadow: "none" }}
                  ></img>
                </div>
              );
            })}
          </div>
          <button styleName="embla__prev" onClick={scrollPrev}>
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title />
              <g id="Complete">
                <g id="F-Chevron">
                  <polyline
                    fill="none"
                    id="Left"
                    points="15.5 5 8.5 12 15.5 19"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </g>
              </g>
            </svg>
          </button>
          <button styleName="embla__next" onClick={scrollNext}>
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title />
              <g id="Complete">
                <g id="F-Chevron">
                  <polyline
                    fill="none"
                    id="Right"
                    points="8.5 5 15.5 12 8.5 19"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </g>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CSSModules(ImageCarousel, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "ignore",
});
