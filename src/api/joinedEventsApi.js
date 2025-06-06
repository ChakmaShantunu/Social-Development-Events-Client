export const myJoinedEventsPromise = email => {
    return fetch(`http://localhost:3000/participants?email=${email}`).then(res => res.json())
}