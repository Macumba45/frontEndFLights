import { FC, memo } from 'react'
import { MainContainer } from './styles'
import DatePickerComp from '../DatePicker'
import SearchFilterComponent from '../Filter'
import logic from '@/app/logic'

const Header: FC = () => {
    const { data } = logic()

    return (
        <MainContainer>
            <DatePickerComp />
        </MainContainer>
    )
}

export default memo(Header)
