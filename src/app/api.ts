import axios from 'axios'
import { FlightData } from './types'

const API_URL = 'https://backend-flights.vercel.app/flights'

const getRealTimeFlightData = async (): Promise<FlightData> => {
    let flightData: FlightData = {} as FlightData
    try {
        const response = await axios.get(API_URL)
        console.log(response)
        flightData = response.data
    } catch (error) {
        console.log
    }

    return flightData
}

export default getRealTimeFlightData
