import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { AuthContext } from '../providers/AuthContext';

export function Home() {

    const {userDeatils} = useContext(AuthContext);
  
    return (
      <>
      <br/><br/><br/><br/>
      <section class="py-5 text-center container">
      <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        {userDeatils && 
        <>
        <h1 class="fw-light">Hey {userDeatils.name}!</h1>
        <p class="lead text-muted">Welcome to Todos!</p>
        </>}
        {!userDeatils &&
        <>
         <h1 class="fw-light">Welcome to Todos!</h1>
        <p class="lead text-muted">It's a list of tasks you need to complete or things that you want to do.</p>
        <Link to={'/sign-in'} type="button" class="btn btn-outline-primary">Log In</Link>
         </>}
      </div>
      </div>
    </section>
  </>
    );
}