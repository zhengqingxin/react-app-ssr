* 更改外部引入组件的样式,有没有更好的方法呢？
```
  <div className="btn-wrapper">
    <Button className="test">12134</Button>
  </div>

  <style jsx>{`
      .btn-wrapper > :global(.test){color:red;}
  `}</style>
```
* ~~[首页样式闪烁的问题](https://github.com/zeit/styled-jsx/issues/396)~~
* ~~class 里 this 问题~~
* 全局 loading?
* ~~layout 问题~~
  * [_document中不可以处理](https://github.com/zeit/next.js/issues/1874)
  * 用 HOC + decorator 实现
* ~~analyze~~
