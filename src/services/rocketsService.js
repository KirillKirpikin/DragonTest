import axios from 'axios';

const getRockets = async ()=>{
    const rockets = await axios.get('https://api.spacexdata.com/v4/dragons')
    return rockets.data
}
const getOneRocket = async (id)=>{
    const oneRocket = await axios.get(`https://api.spacexdata.com/v4/dragons/${id}`)
    return oneRocket.data
}

const rocketsService = {
    getRockets,
    getOneRocket
}

export default rocketsService;