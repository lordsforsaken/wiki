import React, { useEffect, useState } from 'react';

const DynamicTable = ({ url }) => {
    const [abilities, setAbilities] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setAbilities(data.filter(el => !el.enabled).sort((a,b) => (a.name.localeCompare(b.name))))
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [url]);

    // Helper function to determine the style based on the enabled status
    const getStyle = (enabled) => ({
        color: enabled ? 'green' : 'red'
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Enabled</th>
                    <th>Icon</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {abilities.map((ability, index) => {
                    const url = `https://dvaiulh40vjp3.cloudfront.net/abilities-icons/${ability.name.replace(/\s+/g, '-').toLowerCase()}.webp`;
                    return (
                        <tr key={index}>
                            <td>{ability.name}</td>
                            <td style={getStyle(ability.enabled)}>
                                {ability.enabled ? 'Yes' : 'No'}
                            </td>
                            <td><img src={url} alt={ability.name} style={{ width: "100px" }} /></td>
                            <td>{ability.description}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
};

export default DynamicTable;
