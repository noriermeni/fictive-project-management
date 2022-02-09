import moment from 'moment';

const formatDate = (date: Date) => {
    return moment(date).format('MMMM Do YYYY');
}

export {
    formatDate
}