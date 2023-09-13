import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { FC, memo, useEffect, useState } from 'react'
import { PropsToken } from './type'

const BasicTable: FC<PropsToken> = (props: PropsToken) => {
    const rows = props.tokenData
    const [currentTime, setCurrentTime] = useState<Date>(new Date())

    useEffect(() => {
        // Actualizar la hora actual cada segundo
        const interval = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    const calculateSecondsAgo = (time: string) => {
        const timeExchange = new Date(time)
        const secondsAgo = Math.floor(
            (currentTime.getTime() - timeExchange.getTime()) / 1000
        )
        return secondsAgo
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>User</TableCell>
                        <TableCell>Tokens</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Time Trade (Seconds Ago)</TableCell>
                        <TableCell>Size</TableCell>
                        <TableCell>Buy/Sell</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => {
                        return (
                            <TableRow
                                key={row.uuid}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.uuid}
                                </TableCell>
                                <TableCell>{row.symbol_id}</TableCell>
                                <TableCell>{row.price}</TableCell>
                                <TableCell>
                                    {calculateSecondsAgo(
                                        row.time_exchange as any
                                    )}{' '}
                                    secs ago
                                </TableCell>
                                <TableCell>{row.size}</TableCell>
                                <TableCell>{row.taker_side}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default memo(BasicTable)
