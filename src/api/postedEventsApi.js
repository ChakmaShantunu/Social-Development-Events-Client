export const myPostedEvents = email => {
    return fetch(`${import.meta.env.VITE_API_URL}/created-events?email=${email}`).then(res => res.json())
}