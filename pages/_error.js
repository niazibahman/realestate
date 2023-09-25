import Error404 from "../component/404/404"

function Error({ statusCode }) {
    return (
      <p>
        {statusCode
          ? statusCode === 404 ? <Error404/> : `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    )
  }
  
  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
  
  export default Error