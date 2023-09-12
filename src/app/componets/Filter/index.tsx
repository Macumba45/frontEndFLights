import React, { FC, useState } from 'react'
import TextField from '@mui/material/TextField'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { Daum, FlightData } from '@/app/types'
import { MainContainer } from './styles'

const SearchFilterComponent: FC<FlightData> = ({ data }) => {
    const [searchText, setSearchText] = useState('')
    console.log(searchText)

    const filteredData = data.filter(
        (item: Daum) =>
            // Comprueba si alguno de los campos contiene el texto de búsqueda
            item.arrival?.airport?.includes(searchText.toLowerCase()) ||
            item.flight?.number.includes(searchText.toLowerCase())
    )

    const handleSearchChange = (event: any) => {
        setSearchText(event.target.value)
    }

    return (
        <MainContainer>
            <TextField
                label="Search Flight Number or Airport"
                variant="outlined"
                fullWidth
                value={searchText}
                onChange={handleSearchChange}
            />
            <List>
                {filteredData.map((item, index) => (
                    <ListItem key={index}>
                        <ListItemText
                            primary={`Airport: ${item.arrival?.airport}, Flight Number: ${item.flight?.number}`}
                            // Agrega más campos aquí según tus necesidades
                        />
                    </ListItem>
                ))}
            </List>
        </MainContainer>
    )
}

export default SearchFilterComponent
