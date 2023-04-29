const { useState, useEffect } = require("react");

const ApiTest = () => {

    const [teamData, setTeamData] = useState([])

    const NBAPlayer = () => {
        const options = {
            method: 'GET',
            // url: 'https://free-nba.p.rapidapi.com/players/%7Bid%7D',
            headers: {
                'content-type': 'application/octet-stream',
                'X-RapidAPI-Key': 'f41206f6cemsh627a230ed06078ep100f32jsn8b01f0c821e3',
                'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
            }
        };

        fetch("https://free-nba.p.rapidapi.com/teams?page=0", options)
        .then(response => response.json())
        .then(response => {
            // console.log(response);
            setTeamData(response.data)
        })
        .catch(err => console.error(err));

    }

    useEffect (() => {
        NBAPlayer()
    }, [])

    console.log(teamData);

    return (
        <div>
            <button onClick={NBAPlayer}>Тест</button>
            {teamData.map((el, i) => {
                return <div key={el.id}>
                   {i + 1}. {el.city} {el.abbreviation}
                </div>
            })}
        </div>
        
    )


}

export default ApiTest;