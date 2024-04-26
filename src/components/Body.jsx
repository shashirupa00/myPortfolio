import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";
import "../App.css";
import DownloadButton from "./DownloadButton";
import laptop from "../assets/laptop.png";

function Body() {
  useEffect(() => {
    // Disable scroll when the component mounts
    document.body.style.overflow = "hidden";

    // Re-enable scroll when the component unmounts
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount and componentWillUnmount

  return (
    <div>
      <div className="flex justify-around items-center mt-64">
        <Container fluid>
          <Container>
            <Row>
              <Col className="flex-row select-none">
                <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
                  Hi there! <span className="wave">👋🏻</span>
                </h1>
                <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
                  I am <span className="">Shashi Shirupa</span>
                </h1>
                <div className="flex w-fit p-3 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 rounded-xl">
                  <span className="md:text-4xl text-gray-100 font-bold ">
                    A&nbsp;
                  </span>
                  <Type />
                </div>
                <div className="mt-8">
                  <DownloadButton />
                </div>
              </Col>
            </Row>
          </Container>
        </Container>

        <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 rounded-full p-4">
          <img src={laptop} className="w-80 h-80 rounded-full" alt="Laptop" />
        </div>
      </div>
    </div>
  );
}

export default Body;
