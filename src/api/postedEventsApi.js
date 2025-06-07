export const myPostedEvents = email => {
    return fetch(`http://localhost:3000/created-events?email=${email}`).then(res => res.json())
}