import axios from 'axios'
import { useState } from 'react'
import { Airline, FlightData } from './types'

export const logic = () => {
    const API_URL = 'https://backend-flights.vercel.app/flights'

    const [data, setData] = useState<FlightData>({
        pagination: {
            limit: 0,
        },
        data: [{}],
    } as FlightData)

    const getRealTimeFlightData = async (): Promise<FlightData> => {
        let flightData: FlightData = {} as FlightData
        try {
            const response = await axios.get(API_URL)
            flightData = response.data
            setData(flightData)
        } catch (error) {
            console.log
        }
        return flightData
    }
    return {
        getRealTimeFlightData,
        data,
    }
}

export default logic
