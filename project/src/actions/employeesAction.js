import Constants from '../constants/constants';

export const getEmployees = () => {
    return (dispatch, getState) => {
        setTimeout( () => {
            const emps = [
                {
                    id: 1,
                    name: 'Virat Kohli',
                    salary: 1000
                },
                {
                    id: 2,
                    name: 'Sachin Tendulkar',
                    salary: 2000
                },
                {
                    id: 3,
                    name: 'Yuvraj Singh',
                    salary: 3000
                },
                {
                    id: 4,
                    name: 'MSD',
                    salary: 4000
                }
            ];
        })
    }
} 