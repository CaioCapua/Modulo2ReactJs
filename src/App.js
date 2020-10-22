import React, { useState }from 'react';

import Header from './components/Header';



function App() {
    const [projects, setProjects] = useState(['Desenvolvimento de App', 'Fron-end Web']);
    
    function handleAddProject() {    
        setProjects([...projects, `Novo Projeto ${Date.now()}`]);
    
        console.log(projects);
    }
    return (
        <>
            <Header title='Projects'/>

            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar</button>
        </> 
    );
}

export default App;