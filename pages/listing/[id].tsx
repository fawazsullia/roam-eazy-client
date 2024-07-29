import { IListing } from "@/inerfaces/IListing.interface";
import { axiosInstance } from "@/utils/axios.utils";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ListingPage = () => {

    const router = useRouter();
    const { id } = router.query;

    const [listingDetail, setListingDetail] = useState<IListing | null>(null)
    const [listingLoading, setListingLoading] = useState<boolean>(false)
    const [listingError, setListingError] = useState<string | null>(null)

    useEffect(() => {
        if (id) {
            (async function () {
                try {
                    setListingLoading(true)
                    const listing = await axiosInstance.get(`/api/listing/${id}`)
                    setListingDetail(listing.data);
                    setListingError(null)
                } catch (err) {
                    setListingError('Failed to load listing')
                } finally {
                    setListingLoading(false)
                }

            })()
        }
    }, [id])

    return <></>
}

export default ListingPage;