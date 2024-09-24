import React, { useEffect, useState } from 'react';
const cdnURL = process.env.NEXT_PUBLIC_CDN_URL;

const DynamicTable = ({ url }) => {
    const [abilities, setAbilities] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setAbilities(data.filter(el => el.enabled).sort((a,b) => (a.name.localeCompare(b.name))))
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [url]);

    // Helper function to determine the style based on the enabled status
    const getStyle = (enabled) => ({
        color: enabled ? 'green' : 'red',
        textAlign: 'center'
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
              const url = `${cdnURL}/abilities-icons/icons/${ability.name.replace(/\s+/g, '-').toLowerCase()}.png`;
              return (
                <tr key={index}>
                    <td style={{ textAlign: 'center' }}>{ability.name}</td>
                    <td style={getStyle(ability.enabled)}>
                        {ability.enabled ? 'Yes' : 'No'}
                    </td>
                    <td>
                        <img src={url} alt={ability.name} style={{ width: "75px", marginBottom: "10px" }} />
                    </td>
                    <td style={{ textAlign: 'center' }}>{ability.description}</td>
                </tr>
              );
            })}
          </tbody>
      </table>
    );
};

export default DynamicTable;
