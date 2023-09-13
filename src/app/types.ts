export interface FlightData {
    pagination: Pagination
    data: Daum[]
}

export interface Pagination {
    limit: number
    offset: number
    count: number
    total: number
}

export interface Daum {
    flight_date: string
    flight_status: string
    departure?: Departure
    arrival?: Arrival
    airline?: Airline
    flight?: Flight
    aircraft?: Aircraft
    live?: Live
}

export interface Departure {
    airport: string
    timezone: string
    iata: string
    icao: string
    terminal?: string
    gate?: string
    baggage?: string
    delay?: number
    scheduled?: string
    estimated?: string
    actual?: any
    estimated_runway?: any
    actual_runway?: any
}

export interface Arrival {
    airport: string
    timezone: string
    iata: string
    icao: string
    terminal?: string
    gate?: string
    baggage?: string
    delay?: number
    scheduled?: string
    estimated?: string
    actual?: any
    estimated_runway?: any
    actual_runway?: any
}

export interface Airline {
    name: string
    iata: string
    icao: string
}

export interface Flight {
    number: string
    iata: string
    icao: string
    codeshared?: any
}

export interface Aircraft {
    registration: string
    iata: string
    icao: string
    icao24: string
}

export interface Live {
    updated: string
    latitude: number
    longitude: number
    altitude: number
    direction: number
    speed_horizontal: number
    speed_vertical: number
    is_ground: boolean
}

export type TokenData = {
    uuid?: string
    symbol_id?: string
    price?: number
    time_exchange?: string
    size?: number
    taker_side?: string
}
