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
import filter from "../../icons/filtericon.svg";
import cardlogo from "../../assets/images/Cardlogo.svg"
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

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
      images: [pkg5, pkg5, pkg6],
      departure: "New York",
      destination: "Istanbul"
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
      departure: "Los Angeles",
      destination: "Antalya"
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
      departure: "Chicago",
      destination: "Izmir"
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
      price: 999,
      twin: 1500,
      verified: true,
      images: [pkg4, pkg5, pkg6],
      departure: "San Francisco",
      destination: "Bodrum"
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
      images: [pkg5, pkg5, pkg6],
      departure: "Miami",
      destination: "Ankara"
    },
    {
      id: 6,
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
      images: [pkg5, pkg5, pkg6],
      departure: "Miami",
      destination: "Ankara"
    },
    {
      id: 7,
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
      images: [pkg5, pkg5, pkg6],
      departure: "Miami",
      destination: "Ankara"
    },
    {
      id: 8,
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
      images: [pkg5, pkg5, pkg6],
      departure: "Miami",
      destination: "Ankara"
    },
    {
      id: 9,
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
      images: [pkg5, pkg5, pkg6],
      departure: "Miami",
      destination: "Ankara"
    },
    {
      id: 10,
      title: "Aurkey Holiday Package",
      discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velttis.",
      details: [
        { name: "5 Nights", icon: nightIcon },
        { name: "Flight", icon: flight },
        { name: "Insurance", icon: insurance },
        { name: "Hotel", icon: hotel },
        { name: "Transportation", icon: transportation },
      ],
      price: 999,
      twin: 1500,
      verified: true,
      images: [pkg5, pkg5, pkg6],
      departure: "Miami",
      destination: "Ankara"
    },
    {
      id: 11,
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
      images: [pkg5, pkg5, pkg6],
      departure: "Miami",
      destination: "Ankara"
    },
    {
      id: 12,
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
      images: [pkg5, pkg5, pkg6],
      departure: "Miami",
      destination: "Ankara"
    },
    {
      id: 13,
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
      images: [pkg5, pkg5, pkg6],
      departure: "Miami",
      destination: "Ankara"
    },
  ];


  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 8;
  const [sortOption, setSortOption] = useState("default");
  const [sortedData, setSortedData] = useState([]);
  const [currentImages, setCurrentImages] = useState(dummyData.map(data => data.images[0]));
  const [activeButtons, setActiveButtons] = useState(dummyData.map(() => 1));
  const [filterDeparture, setFilterDeparture] = useState("");
  const [filterDestination, setFilterDestination] = useState("");
  const [filterFlight, setFilterFlight] = useState("");
  const [filterBudget, setFilterBudget] = useState([499, 99999]);
  const [filterNights, setFilterNights] = useState([1, 15]);
  const [showFilters, setShowFilters] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 999) {
        setIsMobile(true);
        setShowFilters(false); // Hide filters by default on mobile
      } else {
        setIsMobile(false);
        setShowFilters(true); // Show filters by default on desktop
      }
    };

    handleResize(); // Initialize

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const sortData = (data: any, sortOption: any) => {
      return data.sort((a: any, b: any) => {
        if (sortOption === "name") {
          return a.title.localeCompare(b.title);
        } else if (sortOption === "price") {
          return a.price - b.price;
        } else {
          return 0;
        }
      });
    };

    const filterData = (data: any, departure: any, destination: any, flight: any, budget: any, nights: any) => {
      return data.filter((item: any) => {
        const hasFlight = item.details.some((detail: any) => detail.name === "Flight");
        const packageNights = parseInt(item.details.find((detail: any) => detail.name.includes("Nights")).name.split(" ")[0]);
        return (
          (departure === "" || item.departure === departure) &&
          (destination === "" || item.destination === destination) &&
          (flight === "" || (flight === "withFlight" && hasFlight) || (flight === "withoutFlight" && !hasFlight)) &&
          (item.price >= budget[0] && item.price <= budget[1]) &&
          (packageNights >= nights[0] && packageNights <= nights[1])
        );
      });
    };

    let filteredData = filterData([...dummyData], filterDeparture, filterDestination, filterFlight, filterBudget, filterNights);
    setSortedData(sortData(filteredData, sortOption));
  }, [sortOption, filterDeparture, filterDestination, filterFlight, filterBudget, filterNights, sortedData]);

  const totalPages = Math.ceil(sortedData.length / rowsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleSortChange = (e: any) => {
    setSortOption(e.target.value);
  };

  const handleDepartureChange = (e: any) => {
    setFilterDeparture(e.target.value);
  };

  const handleDestinationChange = (e: any) => {
    setFilterDestination(e.target.value);
  };

  const handleFlightChange = (e: any) => {
    setFilterFlight(e.target.value);
  };

  const handleBudgetChange = (value: any) => {
    setFilterBudget(value);
  };

  const handleNightsChange = (value: any) => {
    setFilterNights(value);
  };

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = sortedData.slice(indexOfFirstRow, indexOfLastRow);
  const midpoint = Math.floor(currentRows.length / 2);

  const handleImageChange = (image: any, index: any, cardIndex: any) => {
    const newCurrentImages = [...currentImages];
    newCurrentImages[cardIndex] = image;
    setCurrentImages(newCurrentImages);

    const newActiveButtons = [...activeButtons];
    newActiveButtons[cardIndex] = index;
    setActiveButtons(newActiveButtons);
  };

  const toggleFilters = () => {
    setShowFilters(prev => !prev);
  };

  return (
    <div className={styles.container}>

      <h2 className={styles.mainheading}>Turkey Packages</h2>
      <div className={styles.cardDetailDiv}>
        {showFilters && (
          <div className={styles.cardDetail}>
            <div className={styles.filter}>
              <h1 className={styles.filterheading}>Filters</h1>

              <div className={styles.selectContainer}>
                <label htmlFor="departure" className={styles.label}>Departure From: </label>
                <select id="departure" value={filterDeparture} onChange={handleDepartureChange} className={styles.selectfilter}>
                  <option value="">All</option>
                  <option value="New York">New York</option>
                  <option value="Los Angeles">Los Angeles</option>
                  <option value="Chicago">Chicago</option>
                  <option value="San Francisco">San Francisco</option>
                  <option value="Miami">Miami</option>
                </select>
              </div>

              <div className={styles.selectContainer}>
                <label htmlFor="destination" className={styles.label}>Destination: </label>
                <select id="destination" value={filterDestination} onChange={handleDestinationChange} className={styles.selectfilter}>
                  <option value="">All</option>
                  <option value="Istanbul">Istanbul</option>
                  <option value="Antalya">Antalya</option>
                  <option value="Izmir">Izmir</option>
                  <option value="Bodrum">Bodrum</option>
                  <option value="Ankara">Ankara</option>
                </select>
              </div>

              <div className={styles.selectContainer}>
                <label htmlFor="budget" className={styles.label}>Budget: </label>
                <Slider
                  range
                  min={499}
                  max={99999}
                  defaultValue={filterBudget}
                  onChange={handleBudgetChange}
                  trackStyle={[{ backgroundColor: '#DF6951' }]}
                  handleStyle={[
                    { borderColor: '#DF6951' }, // Change the handle border color to red
                    { borderColor: '#DF6951' }, // Change the second handle border color to red
                  ]}
                />
                <div className={styles.rangeLabels}>
                  <span>{filterBudget[0]}</span>
                  <span>{filterBudget[1]}</span>
                </div>
              </div>

              <div className={styles.selectContainer}>
                <label htmlFor="nights" className={styles.label}>Package Nights: </label>
                <Slider
                  range
                  min={1}
                  max={15}
                  defaultValue={filterNights}
                  onChange={handleNightsChange}
                  trackStyle={[{ backgroundColor: '#DF6951' }]}
                  handleStyle={[
                    { borderColor: '#DF6951' }, // Change the handle border color to red
                    { borderColor: '#DF6951' }, // Change the second handle border color to red
                  ]}
                />
                <div className={styles.rangeLabels}>
                  <span>{filterNights[0]}</span>
                  <span>{filterNights[1]}</span>
                </div>
              </div>

              <div className={styles.selectContainer}>
                <label htmlFor="flight" className={styles.label}>Flight: </label>
                <select id="flight" value={filterFlight} onChange={handleFlightChange} className={styles.selectfilter}>
                  <option value="">All</option>
                  <option value="withFlight">With Flight</option>
                  <option value="withoutFlight">Without Flight</option>
                </select>
              </div>
            </div>
            <div className={styles.bgimageDivq}>
              <div >
                <h3 className={styles.heading}>Travel to Turkey</h3>
                <p className={styles.pra}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
                  eros tempus lacinia.
                  <br /><br />
                  Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. .
                </p>
                <button className={styles.button}>Call to action</button>
              </div>
            </div>




          </div>

        )}
        <div className={styles.cardDetail}>
            {/* Filter Button for Mobile */}
            {isMobile && (
                <div className={styles.filterOut}>
                <button onClick={toggleFilters} className={styles.filterButton}>
                  <Image src={filter} alt="card" /> Filters
                </button></div>
              )}
          {sortedData.length === 0 ? (
            <div className={styles.noResults}>No Results ......</div>
          ) : (
            <>
            
              <div className={styles.table}>
                <div>
                  <div className={styles.resultsDiv}>
                    <span className={styles.results}>
                      Showing {indexOfFirstRow + 1} -{" "}
                      {indexOfLastRow > sortedData.length ? sortedData.length : indexOfLastRow}{" "}
                      of {sortedData.length} results
                    </span>

                    <div className={styles.sortContainer}>

                      <select id="sort" value={sortOption} onChange={handleSortChange} className={styles.selectfilter}>
                        <option value="default" > Default Sorting</option>
                        <option value="name">Name</option>
                        <option value="price">Price</option>
                      </select>
                    </div>
                  </div>

                  {currentRows.map((data: any, cardIndex) => (
                    <div key={data.id}>
                      {/* Display heading after every 4 cards */}
                      {cardIndex === midpoint && (
                        <div className={styles.dynamicDiv}>

                          <h3 className={styles.dynamicheading}>TURKEY</h3>
                          <p className={styles.dynamicpra}>
                            Your ultimate holiday marketplace! we make finding your dream trip effortless  </p>


                        </div>
                      )}
                      <div className={styles.maincardDiv}>
                        <div className={styles.imageContainer}>
                          <Image
                            src={currentImages[cardIndex]}
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
                            <Image src={premium} alt="badge" className={styles.premium} />
                          </div>
                          <div className={styles.buttonContainer}>
                            {data.images.map((image: any, i: any) => (
                              <button
                                key={i}
                                onClick={() => handleImageChange(image, i + 1, cardIndex)}
                                className={activeButtons[cardIndex] === i + 1 ? styles.active : ""}
                              ></button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div>
                            <div className={styles.headingDiv}>
                               <h1 className={styles.heading}>{data.title}</h1>
                               <Image
                                    src={cardlogo} className={styles.cardlogoimage}  alt="card"   />
                            </div>
                           
                            <h4 className={styles.subtitle}>Discription:</h4>
                            <p className={styles.pragraph}>{data.discription}</p>
                          </div>
                          <div>
                            <p className={styles.subtitle}>Includes:</p>
                            <div className={styles.ul}>
                              {data.details.map((detail: any, i: any) => (
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
                                AED {data.twin} <span>Per person on Twin Sharing</span>
                              </div>
                            </div>

                            <a href={`/details/${data.id}`}>
                              <Button className={styles.seemore}>View Details</Button>
                            </a>
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
                  Page <span className={styles.currentPage}>{currentPage}</span> of{" "}
                  {totalPages}
                </span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                  <Image src={righticon} alt="card" />
                </button>
              </div>
            </>)}
        </div>
      </div>
    </div>
  );
}