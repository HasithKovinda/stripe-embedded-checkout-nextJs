import Image from "next/image";
import styles from "./TourRating.module.css";

type TourRatingProp = {
  ratingNumber: number;
};

export default function Rating({ ratingNumber }: TourRatingProp) {
  const widthSize = Number(
    (ratingNumber - Math.floor(ratingNumber)).toFixed(1)
  );
  const applyWith = widthSize === 0 ? 30 : widthSize * 3 * 10;
  const gap = 1 - widthSize;
  return (
    <div className="section">
      {Array.from({ length: 5 }, (_, i) => {
        if (ratingNumber >= i + 1) {
          return (
            <div className="review-container" key={i}>
              <div className="progress" style={{ width: `30px` }}></div>
              <Image
                src="/download.png"
                className="icon"
                alt="rating"
                height={30}
                width={30}
              />
            </div>
          );
        } else {
          return (
            <div className="review-container" key={i}>
              <div
                className="progress"
                style={{
                  width:
                    ratingNumber + gap === i + 1 ? `${applyWith}px` : `0px`,
                }}
              ></div>
              <Image
                src="/download.png"
                className="icon"
                alt="rating"
                height={30}
                width={30}
              />
            </div>
          );
        }
      })}
    </div>
  );
}
