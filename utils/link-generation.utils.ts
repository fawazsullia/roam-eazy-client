export const generateListingLink = (from: string, to: string, query?: string) => {
    let url = `/${from}-to-${to}`;
    if (query) {
        url += `?${query}`;
    }
    return url;
}