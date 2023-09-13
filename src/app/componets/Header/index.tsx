import { FC, memo } from 'react'
import { MainContainer } from './styles'
import logic from '@/app/logic'

const Header: FC = () => {
    const { data } = logic()

    return <MainContainer></MainContainer>
}

export default memo(Header)
