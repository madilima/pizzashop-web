import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="h-screem flex  flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold"> Not Found</h1>
      <p className="items-center ">
        The page you are looking for does not exist.
        <p className="text-accent-foreground">
          Please check the URL or click on the link below to return to the
          homepage.{' '}
          <Link to="/" className="text-sky-600 dark:text-sky-400 ">
            Dashboar
          </Link>
        </p>
      </p>
    </div>
  )
}
