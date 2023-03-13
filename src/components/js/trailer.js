import React, {useState, useEffect, useRef} from "react";
import "../css/trailer.css";

const Trailer = (props) => {
  const [position, setPosition] = useState({x: 0, y: 0});

  const trailer = useRef(null);

  useEffect(() => {
    // setHover(props.hoverr);
    console.log(props.hoverr);
    const updateMousePosition = (e) => {
      setTimeout(() => {
        setPosition({
          x: e.pageX - trailer.current.offsetWidth / 2,
          y: e.pageY - trailer.current.offsetHeight / 2,
        });
      }, 0);
    };
    document.addEventListener("mousemove", updateMousePosition);
    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div>
      {/* trailer div */}
      <div
        style={{
          position: "relative",
          transform: `translate(${position.x}px,${position.y}px)`,
          zIndex: 5000,
        }}
      >
        <div
          ref={trailer}
          className={!props.hoverr ? "trailer" : "trailerHover"}
        >
          <div>
            <p>{props.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trailer;
