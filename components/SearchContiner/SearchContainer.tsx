import { Button, Col, DatePicker, Form, Select } from 'antd';
import styles from './SearchContainer.module.css';
import { useEffect, useState } from 'react';
import { axiosInstance } from '@/utils/axios.utils';
import { Place } from '@/inerfaces/Place.interface';
import { useRouter } from 'next/router';

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
                    limit: 50, // all places since these are limited in MVP
                    offset: 0
                });
                setDepartingPlaces(results.data);
            } catch (err) {
                console.log(err, 'error in fetching departing places');
            }
        }
        )();

    }, []);

    useEffect(() => {
        if (timer) clearTimeout(timer);
        if (destinationSearchValue.length < 3) return;
        timer = setTimeout(async () => {
            destinationSearch(destinationSearchValue);
        }, 1000);
    }, [destinationSearchValue])

    // the search currently does not have the scroll debounce option. TODO: Implement the scroll debounce option
    const destinationSearch = async (value: string) => {
        try {
            const results = await axiosInstance.post('/api/place/get-destination', {
                searchTerm: value,
                limit: 50,
                offset: 0
            });
            setDestinationPlaces(results.data);
        } catch (err) {
            console.log(err, 'error in fetching destination places');
        }

    }

    const handleDateSelection = (dates: any, dateStrings: [string, string]) => {
        setSelectedDates(dateStrings);
    }

    const handleSearchButtonClick = () => {
        const query = {
            departure: selectedDeparture,
            destination: selectedDestination,
            startDate: selectedDates[0],
            endDate: selectedDates[1]
        };
        const url = `/${selectedDeparture}-to-${selectedDestination}?start=${selectedDates[0]}&end=${selectedDates[1]}`;
        router.push(url);
    }

    return (
        <div className={styles.searchContainer}>
            <h1>Explore beautiful places in the world with Roameazy </h1>
            <Form layout='inline' className={styles.form}>
                <div className={styles.formComponents}>
                    <div className={styles.formComponent}>
                        <Select placeholder='Departure From' className={styles.input} options={departingPlaces.map((map) => {
                            return {
                                value: map.placeId,
                                label: map.name
                            }
                        })} showSearch filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        } onChange={(selected) => setSelectedDeparture(selected.value)} />
                    </div>
                    <div className={styles.formComponent}>
                        <Select placeholder='Arrive To' className={styles.input} options={destinationPlaces.map((place) => {
                            return {
                                value: place.placeId,
                                label: place.name
                            }
                        })} showSearch filterOption={false} onSearch={(value) => { setDestinationSearchValue(value) }} onChange={(selected) => setSelectedDestination(selected.value)} />
                    </div>
                    <div className={styles.formComponent}>
                        <RangePicker width={4} placeholder={["Start Date", "End Date"]} className={styles.input} format='DD/MM/YYYY' onChange={handleDateSelection} />
                    </div>
                    <div className={styles.formComponent}>
                        <Button className={styles.searchBtn} onClick={handleSearchButtonClick}>Lets Go</Button>
                    </div>
                </div>
            </Form>
        </div>
    )
};


export default SearchContainer;