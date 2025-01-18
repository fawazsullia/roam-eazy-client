import { axiosInstance } from "@/utils/axios.utils";
import { generateListingLink } from "@/utils/link-generation.utils";

//pages/sitemap.xml.js
const EXTERNAL_DATA_URL = 'https://roameazy.com';
const fetchAllData = async (endpoint: string, limit: number, type?: string) => {
    let offset = 0;
    let results: any[] = [];
    let hasMoreData = true;
    while (hasMoreData) {
        const queryObj: {
            limit: number;
            offset: number;
            type?: string;
        } = {
            limit,
            offset,
        };
        if (type) {
            queryObj['type'] = type;
        }
        const response = await axiosInstance.post(endpoint, queryObj);
        const data = response.data;

        if (data.length > 0) {
            results = results.concat(data);
            offset += limit;
        } else {
            hasMoreData = false;
        }
    }

    return results;
};

function generateSiteMap(paths: string[]) {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://roameazy.com</loc>
     </url>
     <url>
       <loc>https://roameazy.com/about-us</loc>
     </url>
     <url>
       <loc>https://roameazy.com/contact-us</loc>
     </url>
     <url>
       <loc>https://roameazy.com/packages/top-tour-packages</loc>
     </url>
     ${paths
            .map((path) => {
                return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${path}`}</loc>
       </url>
     `;
            })
            .join('')}
   </urlset>
 `;
}

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: { res: any }) {
    const departingsData = await fetchAllData('/api/place/get-departing', 200);
    const destinationsData = await fetchAllData('/api/place/get-destination', 200, "country");
    const paths: string[] = [];

    for (const departing of departingsData) {
        for (const destination of destinationsData) {
            if (departing?.placeId && destination?.placeId) {
                paths.push(
                    generateListingLink(departing.placeId, destination.placeId),
                );
            } else {
                console.log('placeId not found', departing, destination);
            }
        }
    }
    const sitemap = generateSiteMap(paths);

    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default SiteMap;