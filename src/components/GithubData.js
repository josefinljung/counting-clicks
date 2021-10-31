import React from 'react';
import APIData from '../components/APIData';

const allRepos = [
    'eslint/eslint',
    'oakwood/front-end-questions',
    'babel/babel',
    'webpack/webpack',
    'storybooks/storybook',
    'facebook/react',
    'reactjs/redux',
    'expressjs/express'
];

const GithubData = ({number}) => {

    let repositoryName = ''; 

    allRepos.map(function(name, index){
   
        return (
            index === number ? (repositoryName = name) : ('no name')
            )
        })

    return (
        <React.Fragment>
            <APIData repositoryName={repositoryName}/>
        </React.Fragment>
    );
};
    
export default GithubData;