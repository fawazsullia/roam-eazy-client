import { useState, useEffect } from "react";
import styles from "./List.module.css";
import { Button, Empty, Spin } from "antd";
import Image from "next/image";
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
import { IListing } from "@/inerfaces/IListing.interface";
import { CapitalizeFirstLetters } from "@/utils/string.utils";
import { Config } from "@/config/base.config";

interface IProps {
  destination: string;
  listings: IListing[];
  totalListings: number;
  handleLoadMore: (offset: number) => void;
  handleSort: (sortKey: string, sortOrder: "ASC" | "DESC") => void;
  minBudget: number;
  maxBudget: number;
  setMinBudget: (value: number) => void;
  setMaxBudget: (value: number) => void;
  minNights: number;
  maxNights: number;
  setMinNights: (value: number) => void;
  setMaxNights: (value: number) => void;
  flightStatus: 'all' | 'included' | 'excluded';
  flightOptions: { value: string, label: string }[];
  setFlightStatus: (value: 'all' | 'included' | 'excluded') => void;
  loading: boolean;
  listingError: string | undefined;
}

export default function List(props: IProps) {
  const { destination, listings, totalListings, handleLoadMore, handleSort, minBudget, maxBudget, setMaxBudget, setMinBudget, minNights, maxNights,
    setMaxNights, setMinNights, flightOptions, flightStatus, setFlightStatus, loading, listingError } = props;

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 8;
  const [sortOption, setSortOption] = useState("default");
  const [activeButtons, setActiveButtons] = useState(listings.map(() => 1));
  // const [filterDeparture, setFilterDeparture] = useState("");
  // const [filterDestination, setFilterDestination] = useState("");
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

  const totalPages = Math.ceil(totalListings / rowsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleSortChange = (e: any) => {
    setSortOption(e.target.value);
  };

  // const handleDepartureChange = (e: any) => {
  //   setFilterDeparture(e.target.value);
  // };

  // const handleDestinationChange = (e: any) => {
  //   setFilterDestination(e.target.value);
  // };

  const handleFlightChange = (e: any) => {
    if (e.target.value !== flightStatus) setFlightStatus(e.target.value);
  };

  const handleBudgetChange = (value: any) => {
    if (value[0] !== minBudget) setMinBudget(value[0]);
    if (value[1] !== maxBudget) setMaxBudget(value[1]);
  };

  const handleNightsChange = (value: any) => {
    if (value[0] !== minNights) setMinNights(value[0]);
    if (value[1] !== maxNights) setMaxNights(value[1]);
  };

  const midpoint = Math.floor(totalListings / 2);

  const handleImageChange = (image: any, index: any, cardIndex: any) => {
    // const newCurrentImages = [...currentImages];
    // newCurrentImages[cardIndex] = image;
    // setCurrentImages(newCurrentImages);

    // const newActiveButtons = [...activeButtons];
    // newActiveButtons[cardIndex] = index;
    // setActiveButtons(newActiveButtons);
  };

  const toggleFilters = () => {
    setShowFilters(prev => !prev);
  };

  return (
    <div className={styles.container}>

      <h2 className={styles.mainheading}>{CapitalizeFirstLetters(destination)} Holiday Packages</h2>
      <div className={styles.cardDetailDiv}>
        {showFilters && (
          <div className={styles.cardDetail}>
            <div className={styles.filter}>
              <h1 className={styles.filterheading}>Filters</h1>

              {/* <div className={styles.selectContainer}>
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
              </div> */}

              <div className={styles.selectContainer}>
                <label htmlFor="budget" className={styles.label}>Budget: </label>
                <Slider
                  range
                  min={0}
                  max={25000}
                  defaultValue={[minBudget, maxBudget]}
                  onChange={handleBudgetChange}
                  trackStyle={[{ backgroundColor: '#DF6951' }]}
                  handleStyle={[
                    { borderColor: '#DF6951' }, // Change the handle border color to red
                    { borderColor: '#DF6951' }, // Change the second handle border color to red
                  ]}
                />
                <div className={styles.rangeLabels}>
                  <span>{minBudget}</span>
                  <span>{maxBudget}</span>
                </div>
              </div>

              <div className={styles.selectContainer}>
                <label htmlFor="nights" className={styles.label}>Package Nights: </label>
                <Slider
                  range
                  min={1}
                  max={15}
                  defaultValue={[minNights, maxNights]}
                  onChange={handleNightsChange}
                  trackStyle={[{ backgroundColor: '#DF6951' }]}
                  handleStyle={[
                    { borderColor: '#DF6951' }, // Change the handle border color to red
                    { borderColor: '#DF6951' }, // Change the second handle border color to red
                  ]}
                />
                <div className={styles.rangeLabels}>
                  <span>{minNights}</span>
                  <span>{maxNights}</span>
                </div>
              </div>

              <div className={styles.selectContainer}>
                <label htmlFor="flight" className={styles.label}>Flight: </label>
                <select id="flight" value={flightStatus} onChange={handleFlightChange} className={styles.selectfilter}>
                  {
                    flightOptions.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))
                  }
                </select>
              </div>
            </div>
            <div className={styles.bgimageDivq}>
              <div >
                <h3 className={styles.heading}>Travel to {destination}</h3>
                <p className={styles.pra}>Travel to {destination} with Roameazy and experience the best of {CapitalizeFirstLetters(destination)}.
                  We offer a wide range of holiday packages to suit every budget and preference. Whether you're looking for a relaxing beach holiday, a cultural city break, or an adventure-packed trip, we have something for everyone.
                  Our packages include flights, accommodation, transfers, and more, so all you have to do is sit back and enjoy your trip. Book your holiday to {destination} with Roameazy today and start planning your dream getaway!
                  <br /><br />
                </p>
                {/* <button className={styles.button}>Call to action</button> */}
              </div>
            </div>
          </div>

        )}
        {loading ? <Spin size="large" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "30vh" }} /> : <div className={styles.cardDetail}>
          {/* Filter Button for Mobile */}
          {isMobile && (
            <div className={styles.filterOut}>
              <button onClick={toggleFilters} className={styles.filterButton}>
                <Image src={filter} alt="card" /> Filters
              </button></div>
          )}
          {listings.length === 0 ? (
            <div className={styles.noResults}><Empty description="No Listings found" /></div>
          ) : (
            <>
              <div className={styles.table}>
                <div>
                  <div className={styles.resultsDiv}>
                    <span className={styles.results}>
                      Showing {listings.length} -{" "}
                      of {totalListings} results
                    </span>

                    <div className={styles.sortContainer}>

                      <select id="sort" value={sortOption} onChange={handleSortChange} className={styles.selectfilter}>
                        <option value="default" > Default Sorting</option>
                        <option value="name">Name</option>
                        <option value="price">Price</option>
                      </select>
                    </div>
                  </div>

                  {listings.map((data, cardIndex) => (
                    <div key={data._id}>
                      {/* Display heading after every 4 cards */}
                      {cardIndex === midpoint && listings.length > 4 && (
                        <div className={styles.dynamicDiv}>

                          <h3 className={styles.dynamicheading}>TURKEY</h3>
                          <p className={styles.dynamicpra}>
                            Your ultimate holiday marketplace! we make finding your dream trip effortless  </p>
                        </div>
                      )}
                      <div className={styles.maincardDiv}>
                        <div className={styles.imageContainer}>
                          <Image
                            src={`${Config.imageBaseUrl}?id=${data.images[0]}`}
                            className={styles.image}
                            alt="card"
                            width={400}
                            height={200}
                            sizes="100vw"
                            style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                          />
                          {/* <div className={styles.verifiedBadge}>
                            <p>Verified</p>
                            <Image src={badge} alt="badge" className={styles.badge} />
                          </div>
                          <div className={styles.PremiumBadge}>
                            <p> Premium </p>
                            <Image src={premium} alt="badge" className={styles.premium} />
                          </div> */}
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
                                src={`${Config.imageBaseUrl}?id=${data.logo}`}
                                className={styles.cardlogoimage} alt="card"
                                width={100}
                                height={100}
                              />
                            </div>

                            {data.overview && <><h4 className={styles.subtitle}>Overview:</h4>
                              <p className={styles.pragraph}>{data.overview.slice(0, 250)}...</p></>}
                          </div>
                          <div>
                            <p className={styles.subtitle}>Includes:</p>
                            <div className={styles.ul}>
                              {data.numberOfNights && <div className={styles.ulinnerDiv}>
                                <Image
                                  src={nightIcon}
                                  className={styles.iconimage}
                                  alt="card"
                                />
                                <li>{data.numberOfNights}</li>
                              </div>}
                              {data.airTickets && <div className={styles.ulinnerDiv}>
                                <Image
                                  src={flight}
                                  className={styles.iconimage}
                                  alt="card"
                                />
                                <li>Flight</li>
                              </div>}
                              {data.travelInsurance && <div className={styles.ulinnerDiv}>
                                <Image
                                  src={insurance}
                                  className={styles.iconimage}
                                  alt="card"
                                />
                                <li>Insurance</li>
                              </div>}
                              {data.hotels?.length && <div className={styles.ulinnerDiv}>
                                <Image
                                  src={hotel}
                                  className={styles.iconimage}
                                  alt="card"
                                />
                                <li>Hotel</li>
                              </div>}
                              {data.airPortTransfers && <div className={styles.ulinnerDiv}>
                                <Image
                                  src={transportation}
                                  className={styles.iconimage}
                                  alt="card"
                                />
                                <li>Transportation</li>
                              </div>}
                            </div>
                          </div>
                          <div className={styles.endContainer}>
                            <div>
                              <div className={styles.twin}>
                                AED {data.basePrice} <span>Per person on Twin Sharing</span>
                              </div>
                            </div>

                            <a href={`/details/${data.listingId}`}>
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
        </div>}
      </div>
    </div>
  );
}