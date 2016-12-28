var ReactRouter=require('react-router');
var React=require('react');
var ReactDOM=require('react-dom');
console.log(ReactRouter);
var Router=ReactRouter.Router;
var Route=ReactRouter.Route;
var Link=ReactRouter.Link;
var IndexRoute=ReactRouter.IndexRoute;
var IndexLink=ReactRouter.IndexLink;
var hashHistory=ReactRouter.hashHistory;
class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <section className="container">
                {/*<span className="headline">超然说</span>*/}
                <nav className="nav">
                    <ul>
                        <li>
                            <IndexLink to="/" className="three-d" activeStyle={{color: 'red'}} activeClassName="active">
                                首页
                                <span className="three-d-box">
                                    <span className="front">首页</span>
                                    <span className="back">首页</span>
                                </span>
                            </IndexLink>
                        </li>
                        <li>
                            <Link to="/prod" className="three-d">
                                作品
                                <span className="three-d-box">
                                    <span className="front">作品</span>
                                    <span className="back">作品</span>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/note" className="three-d">笔记
                                <span className="three-d-box">
                                    <span className="front">笔记</span>
                                    <span className="back">笔记</span>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="three-d">简历
                                <span className="three-d-box">
                                    <span className="front">简历</span>
                                    <span className="back">简历</span>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="content">
                    {this.props.children}
                </div>
            </section>
        )
    }
}
class Product extends  React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="inner">
                <ul className="list">
                    <li>
                        {/*<Link to="/game">*/}
                        {/**/}
                        {/*</Link>*/}
                        <a href="work/game/index.html">
                            <div className="entry">跑酷游戏</div>
                        </a>
                    </li>
                    <li>
                        <a href="work/todo/index.html">
                            <div className="entry">ToDoList</div>
                        </a>
                    </li>
                    <li>
                        <a href="work/saolei/index.html">
                            <div className="entry">扫雷游戏</div>
                        </a>
                    </li>
                    <li>
                        <a href="work/linfen/index.html">
                            <div className="entry">移动端网页</div>
                        </a>
                    </li>
                    <li>
                        <a href="work/icloud/index.html">
                            <div className="entry">icloud提醒事项</div>
                        </a>
                    </li>
                    <li>
                        <a href="work/daily.zhihu/index.html">
                            <div className="entry">新闻类web</div>
                        </a>
                    </li>
                    <li>
                        <a href="work/pick/index.html">
                            <div className="entry">画板</div>
                        </a>
                    </li>
                    <li>
                        <a href="/work/hangteng/index.html">
                            <div className="entry">欢腾鞋业项目</div>
                        </a>
                    </li>
                    <li>
                        <a href="work/phpcms/index.html">
                            <div className="entry">千禧酒店项目</div>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}
class M extends  React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <section className="main">
                <div className="mainLeft">
                    <h2>我是<h1>杨超</h1></h2>
                    <h2>职业：前端攻城狮</h2>
                    <h3>写的更少，做的更多</h3>
                </div>
                <div className="mainRight">
                    <article>
                        前端，在整个星球是一种神奇的存在。他以各种技术加持，以一百多个键为武器，将不同尺寸的屏幕作为画板，用二进制衍生的代码将所有目光吸引。他们正在悄无声息的改变这个世界的审美。
                    </article>
                    <button>
                        <a href="work/resume/resume.html">了解更多</a>
                    </button>
                </div>
            </section>

        )
    }
}
class Note extends  React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <ul>
                <li>笔记一</li>
                <li>笔记一</li>
                <li>笔记一</li>
                <li>笔记一</li>

            </ul>
        )
    }
}
class About extends  React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
           <div id="about">
                <div className="contact">
                    <div className="pic"></div>
                    <h2>联系我</h2>
                    <h3>Contact Me</h3>
                </div>
               <div className="me">
                   <h2>联系方式：<span>18435705665</span></h2>
                   <h2>邮箱：     <span>yangchao3247@outlook.com</span></h2>
                   <h2>微信：     <span>335740780</span></h2>
               </div>
           </div>
        )
    }
}
class Index extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <section className="main">
                <h1>我是<mark>杨超</mark></h1>
                <span>职业：前端工程师</span>
                <span>写的更少，做的更多</span>
            </section>
        )
    }
}
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={M}>
                <Index>
                </Index>
            </IndexRoute>
            <Route path="prod" component={Product}>
            </Route>
            <Route path="note" component={Note}>
            </Route>
            <Route path="about" component={About}>
            </Route>
        </Route>
    </Router>
,document.querySelector("#box"))
console.log(<App />)