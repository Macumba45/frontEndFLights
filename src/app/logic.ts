import axios from 'axios'
import { useState } from 'react'
import { Airline, FlightData, TokenData } from './types'

export const logic = () => {
    const API_URL = 'https://backend-flights.vercel.app/trades'

    const [data, setData] = useState<TokenData[]>([])

    const getRealTimeFlightData = async (): Promise<void> => {
        try {
            const response = await axios.get(API_URL)
            const rawData = response.data // Datos recibidos de la API

            // Realizar la conversión de los datos a TokenData si es necesario
            const tokenDataArray: TokenData[] = rawData.map((item: any) => ({
                user: item.user,
                token: item.token,
                price: item.price,
                timeTrade: item.timeTrade,
                size: item.size,
                buysell: item.buysell,
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
