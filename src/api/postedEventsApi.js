export const myPostedEvents = (email, accessToken) => {
    return fetch(`${import.meta.env.VITE_API_URL}/created-events?email=${email}`, {
        credentials: 'include',
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }).then(res => res.json())
}