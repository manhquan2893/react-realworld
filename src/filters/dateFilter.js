import moment from 'moment'
const dateFilter={
    toDMY(date){
        return moment(date).format('DD-MM-YYYY')
    }
}
export default dateFilter