import React from 'react';

export function ClientSpace(props)
{
    const { username } = props;

    return (
        <div>
            <h1>Hi {username}!</h1>
            <p>You're logged in! This is your <b>Client Home Page</b>.</p>
        </div>
    );
}