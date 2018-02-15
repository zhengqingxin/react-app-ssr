import Link from 'next/link'


export default () => {
  return (
    <div className="menu">
      <ul>
        <li><Link prefetch href='/b' as='/a'><a>首页</a></Link></li>
        <li><Link prefetch href='/a' as='/b'><a>菜单一</a></Link></li>
        <li><Link prefetch href='/a' as='/b'><a>菜单二</a></Link></li>
        <li><a href="https://www.baidu.com" target="_blank">菜单三</a></li>
      </ul>
      <style jsx>{`
          ul{
            display:flex;
            width:1150px;
            height:100%;
            margin:0 auto;
            align-items:center;
          }
          li{
            display:block;
            margin-right:26px;
          }
      `}</style>
    </div>
  )
}