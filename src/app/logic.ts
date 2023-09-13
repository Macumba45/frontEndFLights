import axios from 'axios'
import { useState } from 'react'
import { Binance } from './types'

export const logic = () => {
    const API_URL = 'https://backend-flights.vercel.app/monedas'
    const LOCAL_URL = 'http://localhost:3000/monedas'

    const [data, setData] = useState<Binance[]>([])

    const getRealTimeFlightData = async (): Promise<void> => {
        try {
            const response = await axios.get(API_URL)
            const rawData = response.data // Datos recibidos de la API

            // Realizar la conversión de los datos a TokenData si es necesario
            const tokenDataArray = Object.keys(rawData).map(symbol => ({
                name: symbol,
                price: rawData[symbol].price,
                changePercent: rawData[symbol].changePercent,
                volumen24h: rawData[symbol].volume24h,
                marketCap: rawData[symbol].marketCap,
            }))

            setData(tokenDataArray.sort((a, b) => a.name.localeCompare(b.name)))
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
