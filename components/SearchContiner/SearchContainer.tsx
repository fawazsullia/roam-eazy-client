import { Button, Col, DatePicker, Form, Select } from 'antd';
import styles from './SearchContainer.module.css';
import { useEffect, useState } from 'react';
import { axiosInstance } from '@/utils/axios.utils';
import  Departing  from '../../icons/Departing.svg';
import  Traveling  from '../../icons/Traveling.svg';
import { useRouter } from 'next/router';
import Image from "next/image";
const { RangePicker } = DatePicker;

const SearchContainer = () => {
    let timer: NodeJS.Timeout | null = null;

    const router = useRouter();

    const [departingPlaces, setDepartingPlaces] = useState<Place[]>([]);
    const [destinationPlaces, setDestinationPlaces] = useState<Place[]>([]);
    const [destinationSearchValue, setDestinationSearchValue] = useState<string>('');
    const [selectedDeparture, setSelectedDeparture] = useState<string>('');
    const [selectedDestination, setSelectedDestination] = useState<string>('');
    const [selectedDates, setSelectedDates] = useState<[string, string]>(['', '']);

    useEffect(() => {
        console.log('Search Container Mounted');

        (async function () {
            try {
                const results = await axiosInstance.post('/api/place/get-departing', {
                    isDeparture: true,
                    limit: 50,
                    offset: 0
                });
                setDepartingPlaces(results.data);
            } catch (err) {
                console.error(err, 'Error in fetching departing places');
            }
        })();

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
                limit: 50,
                offset: 0
            });
            setDestinationPlaces(results.data);
        } catch (err) {
            console.error(err, 'Error in fetching destination places');
        }
    }

    const handleDateSelection = (dates: any, dateStrings: [string, string]) => {
        setSelectedDates(dateStrings);
    }

    const handleSearchButtonClick = () => {
        if (!selectedDeparture || !selectedDestination || !selectedDates[0] || !selectedDates[1]) {
            alert('Please select all fields');
            return;
        }
        const url = `/${selectedDeparture}-to-${selectedDestination}?start=${selectedDates[0]}&end=${selectedDates[1]}`;
        router.push(url);
    }

    return (
        <div className={styles.container}>
            <div className={styles.searchContainer}>
                <h1>Explore beautiful places in the world with Roameazy</h1>

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
                                    onChange={(selected) => setSelectedDeparture(selected.value)}
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
                                    onChange={(selected) => setSelectedDestination(selected.value)}
                                />
                            </div>

                        </div>
                        <div className={styles.fromButtonDiv}>
                            <div className={styles.formComponent}>
                                <RangePicker placeholder={["Start Date", "End Date"]} className={styles.input} format='DD/MM/YYYY' onChange={handleDateSelection} />
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