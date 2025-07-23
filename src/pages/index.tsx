import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl font-bold">Welcome to My SaaS App</h1>
            <p className="mt-3 text-lg">This is the main landing page of the application.</p>
        </div>
    );
};

export default Home;