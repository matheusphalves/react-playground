import React, { FormEvent, useState } from "react";
import { Container, ContentForm } from "./styles";


export function Search(){

    const [profileName, setProfileName] = useState('')


    function handleSearchProfileName(event: FormEvent){
        event.preventDefault();
        console.log(profileName)

    }

    return (
        <Container>
            <ContentForm onSubmit = {handleSearchProfileName}>
                <input type="text"
                    value={profileName}
                    onChange = {event => setProfileName(event.target.value)}
                    placeholder="Insert github username" 
                />

                <button type="submit">Search</button>
            </ContentForm>
        </Container>
    )
}