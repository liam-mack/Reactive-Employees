import React from 'react';
import EmployeeCard from '../EmployeeCard/EmployeeData';

export default function Directory({seeds}) {
    return (
        seeds.map(e => (
            <EmployeeCard
            key={e.id}
            name={e.name}
            image={e.image}
            department={e.department}
            email={e.email}
            phone={e.phone} />           
        ))
    )
}
