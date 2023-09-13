import axios from 'axios'
import { useState } from 'react'
import { Airline, FlightData, TokenData } from './types'

export const logic = () => {
    const API_URL = 'https://backend-flights.vercel.app/trades'

    const [data, setData] = useState<TokenData[]>([])

    const getRealTimeFlightData = async (): Promise<void> => {
        try {
            const response = await axios.get(API_URL)
            console.log(response)
            const rawData = response.data // Datos recibidos de la API
            console.log(rawData)

            // Realizar la conversión de los datos a TokenData si es necesario
            const tokenDataArray: TokenData[] = rawData.map((item: any) => ({
                uuid: item.uuid,
                symbol_id: item.symbol_id,
                price: item.price,
                time_exchange: item.time_exchange,
                size: item.size,
                taker_side: item.taker_side,
            }))

            setData(tokenDataArray)
        } catch (error) {
            console.error(error)
        }
    }

    return {
        getRealTimeFlightData,
        data,
    }
}

export default logic
