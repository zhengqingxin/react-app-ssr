import Menu from 'components/index/Menu'
import stylesheet from 'styles/index.less'

function withLayout(WrappedComponent) {
  return (props) => {
    return (
      <div>
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
      </div>
    )
  }
}

export default withLayout