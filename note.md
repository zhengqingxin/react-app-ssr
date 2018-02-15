* 更改外部引入组件的样式,有没有更好的方法呢？
```
  <div className="btn-wrapper">
    <Button className="test">12134</Button>
  </div>

  <style jsx>{`
      .btn-wrapper > :global(.test){color:red;}
  `}</style>
```