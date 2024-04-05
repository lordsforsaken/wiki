// components/DynamicTable.js
import React, { useEffect, useState } from 'react';

const DynamicTable = ({ url }) => {
    const [abilities, setAbilities] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setAbilities(data))
            .catch(error => console.error('Error fetching data:', error));
    }, [url]);

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Icon</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {abilities.map((ability, index) => (
                    <tr key={index}>
                        <td>{ability.name}</td>
                        <td><img src={`https://dvaiulh40vjp3.cloudfront.net/abilities-icons/${ability.name.replace(" ", "-").toLowerCase()}.webp`} alt={ability.name} style={{ width: "100px" }} /></td>
                        <td>{ability.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DynamicTable;
