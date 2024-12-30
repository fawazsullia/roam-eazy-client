export const generateListingLink = (from: string, to: string, query?: string) => {
    let url = `holiday-packages-from-${from}-to-${to}`;
    if (query) {
        url += `?${query}`;
    }
    return url;
}