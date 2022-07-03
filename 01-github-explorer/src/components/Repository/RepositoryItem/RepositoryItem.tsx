import { Container } from "components/Search/styles"
import React from "react"

interface RepositoryItemProps {
    repository: {
        name: string,
        description: string,
        html_url: string
    }
}


export function RepositoryItem(props: RepositoryItemProps){
    return (
        <Container>
            <strong>{props.repository?.name ?? 'Default'}</strong>
            <p>{props.repository?.description}</p>
            
            <a href={props.repository?.html_url ?? ''}>
                Check repository
            </a>
        </Container>
    )
}