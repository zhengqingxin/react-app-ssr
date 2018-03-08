import ErrorBoundary from 'components/ErrorBoundary'
import Menu from './Menu'
import stylesheet from 'styles/index.less'
import NProgress from 'nprogress'
import Router from 'next/router'

Router.onRouteChangeStart = () => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

function withLayout(WrappedComponent) {
  return (props) => {
    return (
      <ErrorBoundary>
        <Menu />
        <main className="container">
          <WrappedComponent {...props} />
        </main>
        <style jsx global>{stylesheet}</style>
        <style jsx>{`
          .container{
            width:1150px;
            margin:0 auto;
          }
        `}
        </style>
      </ErrorBoundary>
    )
  }
}

export default withLayout