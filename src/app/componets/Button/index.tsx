import { Button } from '@mui/material'
import { FC, memo } from 'react'

interface Props {
    onClick: () => void
    title: string
}

const ButtonComponent: FC<Props> = ({ onClick, title }) => {
    return (
        <Button
            sx={{ mt: '2rem' }}
            onClick={onClick}
            variant="contained"
            color="primary"
        >
            {title}
        </Button>
    )
}

export default memo(ButtonComponent)
