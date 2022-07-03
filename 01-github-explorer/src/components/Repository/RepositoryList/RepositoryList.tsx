import {RepositoryItem} from '../RepositoryItem/RepositoryItem'
import {useState, useEffect} from 'react';
import React from 'react';
import { Section } from './styles';


export interface Repository{
    name: string;
    description: string;
    html_url: string
}


export function RepositoryList(){

    const [repositories, setRepositories] = useState<Repository[]>([]);


    useEffect(() => {
        fetch('https://api.github.com/users/matheusphalves/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, []);

    return(
        <Section>
            <h1>Public repositories found</h1>

            <ul>
            {repositories.map(repository => {
                return <RepositoryItem key = {repository.name} repository = {repository} />
            })}

            </ul>
        </Section>
    )
}