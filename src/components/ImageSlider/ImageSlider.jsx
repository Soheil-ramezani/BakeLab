import { useEffect, useState } from "react";
import styles from './ImageSlider.module.css'
import PropTypes from 'prop-types';

// 
export default function ImageSlider({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [stage, setStage] = useState("show"); // "show" ->"leaving"->"entering"
    const WAIT_TIME = 10000;
    const ANIMATION_TIME = 600;
    useEffect(() => {
        let timer;

        if (stage === "show") {
            timer = setTimeout(() => {
                setStage("leaving");
            }, WAIT_TIME);
        }

        if (stage === "leaving") {
            timer = setTimeout(() => {
                setCurrentIndex(currentIndex => (currentIndex + 1) % images.length);
                setStage("entering");
            }, ANIMATION_TIME);
        }

        if (stage === "entering") {
            timer = setTimeout(() => {
                setStage("show");
            }, ANIMATION_TIME);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [stage]);
    function getSlideClassName(index) {
        const classes = [`${styles.slide}`];

        if (index === currentIndex) {
            classes.push(`${styles.active}`);
        }

        if (stage === "leaving" && index === currentIndex) {
            classes.push(`${styles.spin_out}`);
        }

        if (stage === "entering" && index === currentIndex) {
            classes.push(`${styles.spin_in }`);
        }

        return classes.join(" ");
    }
    return (
        <div className={`${styles.windmill_slider} w-full`}>
            {images.map((item, index) => {
                return (
                    <img
                        key={item.id}
                        src={item.src}
                        alt={item.alt}
                        className={getSlideClassName(index)}
                    />
                );
            })}
        </div>

    )
}
ImageSlider.propTypes = {
    images: PropTypes.array,

};

