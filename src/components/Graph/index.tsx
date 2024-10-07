import { Line } from 'react-chartjs-2';

interface HistoryProp {
    history: [
        { date: string, duration: string } 
    ]
}
const WorkoutHistory = ({ history }: HistoryProp) => {
    const data = {
        labels: history.map(h => h.date),
        datasets: [
            {
                label: 'Workout Duration',
                data: history.map(h => h.duration),
                fill: false,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    return <Line data={data} />;
};
