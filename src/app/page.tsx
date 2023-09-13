'use client'

import { FC, useEffect, memo, useState } from 'react'
import logic from './logic'
import BasicTable from './componets/TableFlights'
import * as React from 'react'
import { Daum, FlightData, TokenData } from '@/app/types'
import { List, ListItem, ListItemText, TextField } from '@mui/material'
import { MainContainer } from './componets/Header/styles'

// const SearchFilterComponent: FC<TokenData> = ({ token, user, price, size, timeTrade, buysell }) => {
//     const [searchText, setSearchText] = useState('')
//     console.log(searchText)

//     // Filtra los datos solo si searchText no está vacío
//     const filteredData =
//         searchText.trim() !== ''
//             ? data.filter(
//                 (item: Daum) =>
//                     // Comprueba si alguno de los campos contiene el texto de búsqueda
//                     item.arrival?.airport
//                         ?.toLowerCase()
//                         .includes(searchText.toLowerCase()) ||
//                     item.flight?.number
//                         .toLowerCase()
//                         .includes(searchText.toLowerCase()) ||
//                     item.airline?.name
//                         .toLowerCase()
//                         .includes(searchText.toLowerCase())
//             )
//             : []

//     const handleSearchChange = (event: any) => {
//         setSearchText(event.target.value)
//     }

//     return (
//         <div style={{ display: 'flex', flexDirection: 'column' }}>
//             <TextField
//                 label="Search your UserID to see your transactions"
//                 variant="outlined"
//                 fullWidth
//                 value={searchText}
//                 onChange={handleSearchChange}
//                 sx={{ width: '500px' }}
//             />
//             <List>
//                 {filteredData.map((item, index) => (
//                     <ListItem sx={{ width: '500px' }} key={index}>
//                         <ListItemText
//                             primary={`Airport: ${item.arrival?.airport}, Flight Number: ${item.flight?.number}, Flight Status: ${item.flight_status}, Gate: ${item.departure?.gate}, Time Zone: ${item.departure?.timezone}`}
//                         // Agrega más campos aquí según tus necesidades
//                         />
//                     </ListItem>
//                 ))}
//             </List>
//         </div>
//     )
// }

const Home: FC = () => {
    const { getRealTimeFlightData, data } = logic()
    console.log(data)

    useEffect(() => {
        getRealTimeFlightData()
    }, [])

    return (
        <div>
            <MainContainer>
                {/* <SearchFilterComponent
                    data={data.data}
                /> */}
            </MainContainer>
            <BasicTable tokenData={data} />
        </div>
    )
}

export default memo(Home)
