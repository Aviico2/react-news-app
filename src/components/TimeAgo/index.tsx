import React, { useEffect, useState } from 'react';

interface TimeAgoProps {
    timestamp: string;
}

const TimeAgoComponent: React.FC<TimeAgoProps> = ({ timestamp }) => {
    const [timeAgo, setTimeAgo] = useState<string>('');

    useEffect(() => {
        const calculateTimeAgo = () => {
            const now = new Date();
            const pastDate = new Date(timestamp);
            const timeDifference: number = now.getTime() - pastDate.getTime();

            const units = [
                { unit: 'year', divisor: 365 * 24 * 60 * 60 * 1000 },
                { unit: 'month', divisor: 30 * 24 * 60 * 60 * 1000 },
                { unit: 'day', divisor: 24 * 60 * 60 * 1000 },
                { unit: 'hour', divisor: 60 * 60 * 1000 },
                { unit: 'minute', divisor: 60 * 1000 },
            ];

            for (const { unit, divisor } of units) {
                const unitCount = Math.floor(timeDifference / divisor);

                if (unitCount > 0) {
                    setTimeAgo(`${unitCount} ${unitCount === 1 ? unit : `${unit}s`} ago`);
                    break;
                }
            }
        };

        calculateTimeAgo();
    }, [timestamp]);

    return <span>{timeAgo}</span>;
};

export default TimeAgoComponent;