
export const myJoinedEventsPromise = (email, accessToken) => {
    return fetch(`${import.meta.env.VITE_API_URL}/participants?email=${email}`, {
        credentials: 'include',
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }).then(res => res.json())
}


