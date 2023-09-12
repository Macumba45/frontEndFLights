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
    departure: Departure
    arrival: Arrival
    airline: Airline
    flight: Flight
    aircraft: any
    live: any
}

export interface Departure {
    airport?: string
    timezone?: string
    iata: string
    icao: string
    terminal?: string
    gate?: string
    delay?: number
    scheduled: string
    estimated: string
    actual?: string
    estimated_runway?: string
    actual_runway?: string
}

export interface Arrival {
    airport?: string
    timezone?: string
    iata: string
    icao: string
    terminal?: string
    gate?: string
    baggage?: string
    delay: any
    scheduled: string
    estimated: string
    actual: any
    estimated_runway: any
    actual_runway: any
}

export interface Airline {
    name?: string
    iata: string
    icao: string
}

export interface Flight {
    number: string
    iata: string
    icao: string
    codeshared?: Codeshared
}

export interface Codeshared {
    airline_name: string
    airline_iata: string
    airline_icao: string
    flight_number: string
    flight_iata: string
    flight_icao: string
}
