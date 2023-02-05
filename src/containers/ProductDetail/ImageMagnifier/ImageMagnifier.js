

import { useEffect, useRef, useState } from "react";
import nextIcon from "../../../assets/images/next-icon.png";
import "../../../assets/style.css";
import './ImageMagnifier.css';
import MediaQuery from "react-responsive";
// import "./styles.css";

function ImageMagnifiers({
  src,
  width,
  height,
  magnifierHeight = 100,
  magnifieWidth = 100,
  zoomLevel = 1.5
}) {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);
  return (
    <div
      style={{
        position: "relative",
        height: height,
        width: width
      }}
    >
      <img
        src={src}
        style={{ height: height, width: width }}
        onMouseEnter={(e) => {
          // update image size and turn-on magnifier
          const elem = e.currentTarget;
          const { width, height } = elem.getBoundingClientRect();
          setSize([width, height]);
          setShowMagnifier(true);
        }}
        onMouseMove={(e) => {
          // update cursor position
          const elem = e.currentTarget;
          const { top, left } = elem.getBoundingClientRect();

          // calculate cursor position on the image
          const x = e.pageX - left - window.pageXOffset;
          const y = e.pageY - top - window.pageYOffset;
          setXY([x, y]);
        }}
        onMouseLeave={() => {
          // close magnifier
          setShowMagnifier(false);
        }}
        alt={"img"}
      />

      <div
        style={{
          display: showMagnifier ? "" : "none",
          position: "absolute",

          // prevent maginier blocks the mousemove event of img
          pointerEvents: "none",
          // set size of magnifier
          height: `${magnifierHeight}px`,
          width: `${magnifieWidth}px`,
          // move element center to cursor pos
          top: `${y - magnifierHeight / 2}px`,
          left: `${x - magnifieWidth / 2}px`,
          opacity: "1", // reduce opacity so you can verify position
          border: "1px solid lightgray",
          backgroundColor: "white",
          backgroundImage: `url('${src}')`,
          backgroundRepeat: "no-repeat",

          //calculate zoomed image size
          backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel
            }px`,

          //calculete position of zoomed image.
          backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
          backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`
        }}
      ></div>
    </div>
  );


}

const ImageMagnifier = (props) => {
  console.log(props.ImgSrcs)

  const base = process.env.REACT_APP_BASE_IMAGE_PATH
  const SmallImage = (image) => {
    setMainImage(base + image)

  }
  const [mainImage, setMainImage] = useState('')
  useEffect(() => {
    setMainImage(props.ImgSrcs)
  }, [props.ImgSrcs])

  return (

    <div className="App">
      {/*------ Brand Magnifier Image Carousel --------*/}
      <ImageMagnifiers
        maxWidth={"400px"}
        src={mainImage}
      />
      <div>
        {/*------Brand Magnifier Image Carousel--------*/}
        <MediaQuery minWidth={767}>
          <div class="small-img">
            <img src={nextIcon} class="icon-left" alt="" id="prev-img" />
            <div class="small-container">
              <div id="small-img-roll">
                {props.ImgCarousel.map((image) => (
                  <div>
                    <img
                      onClick={() => SmallImage(image.path)}
                      src={process.env.REACT_APP_BASE_IMAGE_PATH + image.path}
                      class="show-small-img"
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
            <img src={nextIcon} class="icon-right" alt="" id="next-img" />
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <div class="small-img">
            <img src={nextIcon} class="icon-left" alt="" id="prev-img" />
            <div class="small-container">
              <div id="small-img-roll">
                {props.ImgCarousel.map((image) => (
                  <div>
                    <img
                      onClick={() => SmallImage(image.path)}
                      src={process.env.REACT_APP_BASE_IMAGE_PATH + image.path}
                      class="show-small-img"
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
            <img src={nextIcon} class="icon-right" alt="" id="next-img" />
          </div>
        </MediaQuery>

      </div>
    </div>
  )

}
export default ImageMagnifier;














