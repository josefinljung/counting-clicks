import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const starIcon = <FontAwesomeIcon icon={faStar} />

const APIDataStyle = createUseStyles({
    loadingContainer: {
        
    },
    apiDataContainer: {
        color: 'rebeccapurple',
        marginTop: "50px",
    },
    stargazeContainer: {
        marginLeft: "10px",
        fontSize: "14px",
        verticalAlign: 'middle',
    },
    repoNameLink: {
        color: 'rebeccapurple',
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

const APIData = ({repositoryName}) => {
    const classes = APIDataStyle();
  
    const [repo, setRepo] = useState('');  
    const [hasError, setHasError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {

        async function fetchData() {
            setIsLoading(true);
            const timeout = setTimeout(() => {
                setIsLoading(false)
            }, 80000);

            setHasError(false);
            try {
                const response = await fetch(`https://api.github.com/repos/${repositoryName}`);
                const data = await response.json();
                setRepo(data);
 
                if (data.message) {
                    setHasError(true)
                    setErrorMessage(data.message)
                } else {
                    setHasError(false)
                }
            }

            catch (error) {
                setHasError(true);
            }
            setIsLoading(false);
            clearTimeout(timeout);
        }
        
        fetchData();
    }, [setRepo, repositoryName]);

    return (
        <React.Fragment>  
            <div className={classes.apiDataContainer}>
                {isLoading && <div className={classes.loadingContainer}><h2>Loading repository..</h2></div>}
                {hasError && repo ? (<div><h2>{errorMessage}</h2></div>) : ( 
                     <div>
                        <h2>
                            <a className={classes.repoNameLink} href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.full_name}</a>
                            <span className={classes.stargazeContainer}>
                                {starIcon} {repo.stargazers_count}
                            </span>
                        </h2>
                        <div>{repo.description}</div>
                    </div>
                )}
            </div>
        </React.Fragment>
    );
};
    
export default APIData;