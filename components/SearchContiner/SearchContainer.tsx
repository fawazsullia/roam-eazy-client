import { Button, Col, DatePicker, Form, Select } from 'antd';

import { useEffect, useRef, useState } from 'react'
import { DateRange } from 'react-date-range'

import format from 'date-fns/format'
import { addDays, set } from 'date-fns'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import styles from './SearchContainer.module.css';

import { axiosInstance } from '@/utils/axios.utils';
import Departing from '../../icons/Departing.svg';
import Traveling from '../../icons/Traveling.svg';
import { useRouter } from 'next/router';
import Image from "next/image";
import { Place } from '@/inerfaces/Place.interface';
import { generateListingLink } from '@/utils/link-generation.utils';
const { RangePicker } = DatePicker;

const SearchContainer = () => {
    let timer: NodeJS.Timeout | null = null;

    const router = useRouter();

    const [departingPlaces, setDepartingPlaces] = useState<Place[]>([]);
    const [destinationPlaces, setDestinationPlaces] = useState<Place[]>([]);
    const [destinationSearchValue, setDestinationSearchValue] = useState<string>('');
    const [selectedDeparture, setSelectedDeparture] = useState<string>('');
    const [selectedDestination, setSelectedDestination] = useState<string>('');
    const [range, setRange] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ])

    useEffect(() => {
        console.log('Search Container Mounted');

        (async function () {
            try {
                // const results = await axiosInstance.post('/api/place/get-departing', {
                //     isDeparture: true,
                //     limit: 50,
                //     offset: 0
                // });
                setDepartingPlaces([{
                    placeId: "uae",
                    name: "UAE",
                    country: "uae",
                    type: "country",
                    images: [],
                    isDeparture: true,
                    isDestination: false,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    isActive: true
                }]);
            } catch (err) {
                console.error(err, 'Error in fetching departing places');
            }
        })();

        setDestinationPlaces([{
            placeId: "georgia",
            name: "Georgia",
            country: "georgia",
            type: "country",
            images: [],
            isDeparture: false,
            isDestination: true,
            createdAt: new Date(),
            updatedAt: new Date(),
            isActive: true
        },
        {
            placeId: "thailand",
            name: "Thailand",
            country: "thailand",
            type: "country",
            images: [],
            isDeparture: false,
            isDestination: true,
            createdAt: new Date(),
            updatedAt: new Date(),
            isActive: true
        },
        {
            placeId: "maldives",
            name: "Maldives",
            country: "maldives",
            type: "country",
            images: [],
            isDeparture: false,
            isDestination: true,
            createdAt: new Date(),
            updatedAt: new Date(),
            isActive: true
        },
        {
            placeId: "turkey",
            name: "Turkey",
            country: "turkey",
            type: "country",
            images: [],
            isDeparture: false,
            isDestination: true,
            createdAt: new Date(),
            updatedAt: new Date(),
            isActive: true
        },
        {
            placeId: "azerbaijan",
            name: "Azerbaijan",
            country: "azerbaijan",
            type: "country",
            images: [],
            isDeparture: false,
            isDestination: true,
            createdAt: new Date(),
            updatedAt: new Date(),
            isActive: true
        }
    ]);

    }, []);

    useEffect(() => {
        if (timer) clearTimeout(timer);
        if (destinationSearchValue.length < 3) return;
        timer = setTimeout(async () => {
            destinationSearch(destinationSearchValue);
        }, 1000);
        return () => clearTimeout(timer!); // Cleanup timeout on unmount
    }, [destinationSearchValue])

    const destinationSearch = async (value: string) => {
        try {
            const results = await axiosInstance.post('/api/place/get-destination', {
                searchTerm: value,
                type: "country",
                limit: 50,
                offset: 0
            });
            setDestinationPlaces(results.data);
        } catch (err) {
            console.error(err, 'Error in fetching destination places');
        }
    }

    const handleSearchButtonClick = () => {
        if (!selectedDeparture || !selectedDestination || !range[0]) {
            alert('Please select all fields');
            return;
        }
        const url = generateListingLink(selectedDeparture, selectedDestination, `start=${range[0].startDate}&end=${range[0].endDate}`);
        router.push(url);
    }

    // open close
    const [open, setOpen] = useState(false)

    // get the target element to toggle 
    const refOne = useRef(null)

    useEffect(() => {
        // event listeners
        document.addEventListener("click", hideOnClickOutside, true)
    }, [])



    // Hide on outside click
    const hideOnClickOutside = (e: any) => {
        // console.log(refOne.current)
        // console.log(e.target)
        if (refOne.current && !(refOne.current as any).contains(e.target)) {
            setOpen(false)
        }
    }
    const toggleOpen = () => {
        setOpen(!open);

    };
    return (
        <div className={styles.container}>
            <div className={styles.searchContainer}>
                <h1>Discover the Best Tour and Holiday Packages from UAE</h1>

                <Form layout='inline' className={styles.form}>
                    <div className={styles.formComponents}>

                        <div className={styles.fromSelectDiv}>
                            <div className={styles.selectWithIcon}>
                                <Image src={Departing} alt="slick-left" className={styles.icon} />

                                <Select
                                    placeholder="Departure From"
                                    className={styles.select}
                                    options={departingPlaces.map((place) => ({
                                        value: place.placeId,
                                        label: place.name
                                    }))}
                                    showSearch
                                    filterOption={(input, option) =>
                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                    onChange={(selected) => { setSelectedDeparture(selected) }}

                                />
                            </div>
                            <div className={styles.selectWithIcon}>
                                <Image src={Traveling} alt="slick-left" className={styles.icon} />
                                <Select
                                    placeholder="Arrive To"
                                    className={styles.select}
                                    options={destinationPlaces.map((place) => ({
                                        value: place.placeId,
                                        label: place.name
                                    }))}
                                    showSearch
                                    filterOption={false}
                                    onSearch={(value) => {
                                        setDestinationSearchValue(value);
                                    }}
                                    onChange={(selected) => setSelectedDestination(selected)}
                                />

                            </div>

                        </div>
                        <div className={styles.fromButtonDiv}>
                            <div className={styles.formComponent}>
                                <div className={styles.calendarWrap}>

                                    <input
                                        value={`${format(range[0].startDate, "MM/dd/yyyy")} --> ${format(range[0].endDate, "MM/dd/yyyy")}`}
                                        readOnly
                                        className={styles.inputBox}
                                        onClick={toggleOpen}  // Use the toggle function on click
                                    />
                                    <div ref={refOne} className={styles.outsideDiv}>
                                        {open &&
                                            <DateRange
                                                onChange={item => setRange([item.selection as any])}
                                                editableDateInputs={true}
                                                moveRangeOnFirstSelection={false}
                                                ranges={range}
                                                months={1}
                                                direction="vertical"
                                                className={styles.calendarElement}
                                            />
                                        }
                                    </div>

                                </div>

                                {/* <RangePicker placeholder={["Start Date", "End Date"]} className={styles.input} format='DD/MM/YYYY' onChange={handleDateSelection} /> */}
                            </div>
                            <div className={styles.formComponent}>
                                <Button className={styles.searchBtn} onClick={handleSearchButtonClick}>Let's Go</Button>
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    )
};

export default SearchContainer;
