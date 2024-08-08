import { useState, useEffect } from "react";
import styles from "./List.module.css";
import { Button } from "antd";
import Link from "next/link";
import Image from "next/image";
import pkg4 from "../../assets/images/pkg4.jpg";
import pkg5 from "../../assets/images/pkg5.jpg";
import pkg6 from "../../assets/images/pkg6.jpg";
import badge from "../../assets/images/badge.svg";
import premium from "../../assets/images/premium.svg";
import nightIcon from "../../assets/images/nights.svg";
import flight from "../../assets/images/flight.svg";
import insurance from "../../assets/images/Insurance.svg";
import hotel from "../../assets/images/Hotel.svg";
import transportation from "../../assets/images/Transportation.svg";
import righticon from "../../icons/rightArrow.svg";
import lefticon from "../../icons/leftArrow.svg";

export default function List() {
  const dummyData = [
    {
      id: 1,
      title: "Turkey Holiday Package",
      discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velttis.",
      details: [
        { name: "5 Nights", icon: nightIcon },
        { name: "Flight", icon: flight },
        { name: "Insurance", icon: insurance },
        { name: "Hotel", icon: hotel },
        { name: "Transportation", icon: transportation },
      ],
      price: 1999,
      twin: 1500,
      verified: true,
      images: [pkg4, pkg5, pkg6],
    },
    {
      id: 2,
      title: "Aurkey Holiday Package",
      discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velttis.",
      details: [
        { name: "5 Nights", icon: nightIcon },
        { name: "Flight", icon: flight },
        { name: "Insurance", icon: insurance },
        { name: "Hotel", icon: hotel },
        { name: "Transportation", icon: transportation },
      ],
      price: 1999,
      twin: 1500,
      verified: true,
      images: [pkg4, pkg5, pkg6],
    },
    {
      id: 3,
      title: "Turkey Holiday Package",
      discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velttis.",
      details: [
        { name: "5 Nights", icon: nightIcon },
        { name: "Flight", icon: flight },
        { name: "Insurance", icon: insurance },
        { name: "Hotel", icon: hotel },
        { name: "Transportation", icon: transportation },
      ],
      price: 9999,
      twin: 1500,
      verified: true,
      images: [pkg4, pkg5, pkg6],
    },
    {
      id: 4,
      title: "Durkey Holiday Package",
      discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velttis.",
      details: [
        { name: "5 Nights", icon: nightIcon },
        { name: "Flight", icon: flight },
        { name: "Insurance", icon: insurance },
        { name: "Hotel", icon: hotel },
        { name: "Transportation", icon: transportation },
      ],
      price: 99,
      twin: 1500,
      verified: true,
      images: [pkg4, pkg5, pkg6],
    },
    {
      id: 5,
      title: "Turkey Holiday Package",
      discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velttis.",
      details: [
        { name: "5 Nights", icon: nightIcon },
        { name: "Flight", icon: flight },
        { name: "Insurance", icon: insurance },
        { name: "Hotel", icon: hotel },
        { name: "Transportation", icon: transportation },
      ],
      price: 3999,
      twin: 1500,
      verified: true,
      images: [pkg4, pkg5, pkg6],
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 4;
  const totalPages = Math.ceil(dummyData.length / rowsPerPage);
  const [sortOption, setSortOption] = useState("default");
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    const sortData = (data, sortOption) => {
      return data.sort((a, b) => {
        if (sortOption === "name") {
          return a.title.localeCompare(b.title);
        } else if (sortOption === "price") {
          return a.price - b.price;
        }
        else{
            return dummyData
        }
        return 0;
      });
    };

    setSortedData(sortData([...dummyData], sortOption));
  }, [sortOption]);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = sortedData.slice(indexOfFirstRow, indexOfLastRow);
  const [currentImage, setCurrentImage] = useState(dummyData[0].images[0]);
  const [activeButton, setActiveButton] = useState(1);

  const handleImageChange = (image, index) => {
    setCurrentImage(image);
    setActiveButton(index);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.mainheading}>Turkey Packages</h2>
   
      <div className={styles.cardDetailDiv}>
        <div className={styles.cardDetail}>left</div>
        <div className={styles.cardDetail}>
          <div className={styles.table}>
            <div>
              <span className={styles.results}>
                Showing {indexOfFirstRow + 1} -{" "}
                {indexOfLastRow > dummyData.length
                  ? dummyData.length
                  : indexOfLastRow}{" "}
                of {dummyData.length} results
              </span>
              <div className={styles.sortContainer}>
        <label htmlFor="sort">Sort By: </label>
        <select id="sort" value={sortOption} onChange={handleSortChange}>
        <option value="default">default</option> 
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
      </div>
              {currentRows.map((data, index) => (
                <div key={index}>
                  <div>
                    <div className={styles.maincardDiv}>
                      <div className={styles.imageContainer}>
                        <Image
                          src={currentImage}
                          className={styles.image}
                          alt="card"
                          width={400}
                          height={200}
                          sizes="100vw"
                          style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                        />
                        <div className={styles.verifiedBadge}>
                          <p>Verified</p>
                          <Image src={badge} alt="badge" className={styles.badge} />
                        </div>
                        <div className={styles.PremiumBadge}>
                          <p> Premium </p>
                          <Image src={premium} alt="badge" className={styles.badge} />
                        </div>
                        <div className={styles.buttonContainer}>
                          {data.images.map((image, i) => (
                            <button
                              key={i}
                              onClick={() => handleImageChange(image, i + 1)}
                              className={activeButton === i + 1 ? styles.active : ""}
                            ></button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div>
                          <h1 className={styles.heading}>{data.title}</h1>
                          <h4 className={styles.subtitle}>Discription:</h4>
                          <p className={styles.pragraph}>{data.discription}</p>
                        </div>
                        <div>
                          <p className={styles.subtitle}>includes:</p>
                          <div className={styles.ul}>
                            {data.details.map((detail, i) => (
                              <div key={i} className={styles.ulinnerDiv}>
                                <Image
                                  src={detail.icon}
                                  className={styles.iconimage}
                                  alt="card"
                                />
                                <li>{detail.name}</li>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className={styles.endContainer}>
                          <div>
                            <div className={styles.price}>
                              AED {data.price} <span>Per person</span>
                            </div>
                            <div className={styles.twin}>
                              AED {data.twin}{" "}
                              <span>Per person on Twin Sharing</span>
                            </div>
                          </div>
                          <Button className={styles.seemore}>view Details</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.pagination}>
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
              <Image src={lefticon} alt="card" />
            </button>
            <span>
              Page <span className={styles.currentPage}>{currentPage} </span>of{" "}
              {totalPages}
            </span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
              <Image src={righticon} alt="card" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
