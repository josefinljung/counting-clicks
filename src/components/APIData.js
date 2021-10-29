import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faStar} />
// import axios from 'axios';


const APIDataStyle = createUseStyles({
    apiDataContainer: {
        color: 'rebeccapurple',
        fontFamily: 'arial',
    },
    stargazeContainer: {
        marginLeft: "10px",
        fontSize: "14px",
    },
    repoNameLink: {
        textDecoration: 'none',
        '&:hover': {
            color: 'hotpink',
            transition: "0.5s",
            textDecoration: 'underline',
        },
        '&:active': {
            color: 'hotpink',
            textDecoration: 'underline',
        },
    }
})

const APIData = () => {
    const classes = APIDataStyle();

    console.log()
    const [repo, setRepo] = useState('');  

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://api.github.com/repos/expressjs/express");

            //Dynamic API
            // const response = await fetch(`https://api.github.com/repos/${repositoryName})`;
            
            const data = await response.json();
            setRepo(data);
            // console.log(data.id)
 
        }
        fetchData();
    }, []);

    return (
        <React.Fragment>  

             <div className={classes.apiDataContainer}>
                 <h2>
                    <a className={classes.repoNameLink} href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.full_name}</a>
                    <span className={classes.stargazeContainer}>
                          {element} {repo.stargazers_count}
                    </span>
                 </h2>
                 <div>{repo.description}</div>

                {/* {repo && repo.map(function(thisRepo){
                    return(
                        <li key={thisRepo.id}>
                            {thisRepo.full_name}
                        </li>
                    )
                })} */}

            </div>

        </React.Fragment>
    );
};
    
export default APIData;