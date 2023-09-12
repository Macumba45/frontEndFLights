import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Airline, Arrival, Daum, Departure, Flight } from '@/app/types'
import { Divider } from '@mui/material'
import { FC, memo } from 'react'
import { PropsFlight } from './type'

const BasicTable: FC<PropsFlight> = (props: PropsFlight) => {
    const rows = props.flightData

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell>Arrivals</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell>Departures</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableHead>
                    <TableRow>
                        <TableCell>Airline Name</TableCell>
                        <TableCell>IATA</TableCell>
                        <TableCell>ICAO</TableCell>
                        <TableCell>Flight Number</TableCell>
                        <TableCell>Flight IATA</TableCell>
                        <TableCell>Flight ICAO</TableCell>
                        <TableCell>Flight Date</TableCell>
                        <TableCell>Flight Status</TableCell>
                        <TableCell>Airport</TableCell>
                        <TableCell>Gate</TableCell>
                        <TableCell>Time Zone</TableCell>
                        <TableCell>IATA</TableCell>
                        <TableCell>ICAO</TableCell>
                        <TableCell>Scheduled</TableCell>
                        <TableCell>Estimated</TableCell>
                        <TableCell>Airport</TableCell>
                        <TableCell>Gate</TableCell>
                        <TableCell>Time Zone</TableCell>
                        <TableCell>IATA</TableCell>
                        <TableCell>ICAO</TableCell>
                        <TableCell>Scheduled</TableCell>
                        <TableCell>Estimated</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => {
                        return (
                            <TableRow
                                key={row.flight?.iata}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.airline?.name}
                                </TableCell>
                                <TableCell>{row.airline?.iata}</TableCell>
                                <TableCell>{row.airline?.icao}</TableCell>
                                <TableCell>{row.flight?.number}</TableCell>
                                <TableCell>{row.flight?.iata}</TableCell>
                                <TableCell>{row.flight?.icao}</TableCell>
                                <TableCell>{row.flight_date}</TableCell>
                                <TableCell>{row.flight_status}</TableCell>
                                <TableCell>{row.arrival?.airport}</TableCell>
                                <TableCell>{row.arrival?.gate}</TableCell>
                                <TableCell>{row.arrival?.timezone}</TableCell>
                                <TableCell>{row.arrival?.iata}</TableCell>
                                <TableCell>{row.arrival?.icao}</TableCell>
                                <TableCell>{row.arrival?.scheduled}</TableCell>
                                <TableCell>{row.arrival?.estimated}</TableCell>
                                <TableCell>{row.departure?.airport}</TableCell>
                                <TableCell>{row.departure?.gate}</TableCell>
                                <TableCell>{row.departure?.timezone}</TableCell>
                                <TableCell>{row.departure?.iata}</TableCell>
                                <TableCell>{row.departure?.icao}</TableCell>
                                <TableCell>
                                    {row.departure?.scheduled}
                                </TableCell>
                                <TableCell>
                                    {row.departure?.estimated}
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default memo(BasicTable)
