import { useContext, useState } from 'react';
import { AuthContext } from '../../../utils/AuthContext';
import { useQuery } from '@apollo/client';
import { GET_CLIMBS } from '../../../utils/queries';
import ClimbGradeBarChart from '../../../D3/climbGradeBarChart';
import ClimbGradePieChart from '../../../D3/climbGradePieChart';
import './ClimbStats.css';

function ClimbStats() {
    const [selectedChart, setSelectedChart] = useState('bar');
    const { user } = useContext(AuthContext);
    const { loading, error, data } = useQuery(GET_CLIMBS, {
        variables: { userId: user._id },
        skip: !user._id,
    });

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading workouts</div>;

    const climbs = data.getClimbs || [];
    const climbCount = climbs.length;

    const climbData = {};

    climbs.forEach(climb => {
        const grade = climb.grade;

        if (!climbData[grade]) {
            climbData[grade] = { count: 0 };
        }

        climbData[grade].count +=1;

    });

    const gradeData = Object.entries(climbData).map(([grade, { count }]) => ({ grade, count }));

    const handleBarButtonClick = () => {
        setSelectedChart('bar');
    };

    const handlePieButtonClick = () => {
        setSelectedChart('pie');
    };
    
    return (
        <>
            <div className='climbStatsBody'>
                CLIMBING STATS<br /><br />
                <div># of Climbs<hr />{climbCount}</div><br />
                <div>
                    Grades<hr /><br />
                    <ul>
                        {Object.entries(climbData).map(([grade, { count }]) => (
                            <li key={grade}>
                                {grade}: {count} times
                            </li>
                        ))}
                    </ul>
                </div><br />
                Grade Chart<hr />
                <button onClick={handleBarButtonClick}>BAR</button>
                <button onClick={handlePieButtonClick}>PIE</button>
                <div className='chartContainer'>
                    {selectedChart === 'bar' ? (
                        <div className='barChart'>
                            <ClimbGradeBarChart data={gradeData} />
                        </div>
                    ) : (
                        <div className='pieChart'>
                            <ClimbGradePieChart data={gradeData} />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ClimbStats;