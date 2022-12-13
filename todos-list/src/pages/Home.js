import {Link} from 'react-router-dom';

export function Home() {
    return (
      <>
      <br/><br/><br/><br/>
      <section class="py-5 text-center container">
      <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">Welcome to Todos!</h1>
        <p class="lead text-muted">It's lists of tasks you need to complete or things that you want to do.</p>
        <Link to={'/sign-in'} type="button" class="btn btn-outline-primary">Log In</Link>
      </div>
      </div>
    </section>
  </>
    );
}