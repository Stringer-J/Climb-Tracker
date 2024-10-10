import './ClimbsLogPast.css';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../utils/AuthContext';
import { useQuery } from '@apollo/client';
import { GET_CLIMBS } from '../../../../utils/queries';

function ClimbsLogPast() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const { loading, error, data } = useQuery(GET_CLIMBS, {
        variables: { userId: user._id },
        skip: !user,
    });

    console.log(data);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const handleClimbClick = (climb) => {
        navigate('/climbsLogDetails', { state: { climb }});
    };

    return (
        <>
            <div className='climbsLogPastBody'>
                LOGGED CLIMBS<br /><br />
                {data.getClimbs.length > 0 ? (
                    <ul>
                        {data.getClimbs.map((climb, index) => (
                            <li key={index}>
                                <button className='usedButton' onClick={() => handleClimbClick(climb)}>
                                    {climb.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No climbs logged</p>
                )}
            </div>
        </>
    );
};

export default ClimbsLogPast;