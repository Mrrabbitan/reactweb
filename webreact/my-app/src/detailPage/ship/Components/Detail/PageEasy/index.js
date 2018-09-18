import React, { Component ,Fragment} from 'react';
import $ from 'jquery'
import './index.css'

class PageInit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: props.total ? props.total : 0,
            current: props.current,
            position: props.position,
            renderPageNum: [],
        }
        this.timer = null;
        this.handlePrevPage = this.handlePrevPage.bind(this);
        this.handlePage = this.handlePage.bind(this);
        this.handleNextPage = this.handleNextPage.bind(this);
        this.inputPage = this.inputPage.bind(this);
    }
    //点击上n页
    handlePrevPage() {
        if (this.state.current - 5 > 0) {
            this.setState({ current: this.state.current - 5 })
        } else {
            this.setState({ current: 1 })
        }
    }
    //点击当前页数
    handlePage(e) {
        let current = Number($(e.currentTarget).html());
        this.setState({ current })
    }
    //点击下n页
    handleNextPage() {
        if (this.state.current + 5 <= this.state.total) {
            this.setState({ current: this.state.current + 5 })
        } else {
            this.setState({ current: this.state.total })
        }
    }
    //输入页数
    inputPage(e) {
        if ($(e.currentTarget).val() === '') return;
        if ($(e.currentTarget).val() <= this.state.total && $(e.currentTarget).val() > 0) {
            this.setState({ current: Number($(e.currentTarget).val()) })
        } else {
            if ($(e.currentTarget).val() < 0) {
                $(e.currentTarget).val(1);
                this.setState({ current: 1 })
            } else {
                $(e.currentTarget).val(Number(this.state.total));
                this.setState({ current: Number(this.state.total) })
            }

        }
    }
    //渲染页数起止逻辑算法
    renderPage() {
        var groupNum = this.state.current % 5 == 0 ? Math.floor(this.state.current / 5) - 1 : Math.floor(this.state.current / 5);
        if (this.state.total >= groupNum * 5) {
            return {
                start: groupNum * 5 + 1,
                end: groupNum * 5 + 5
            }
        } else {
            return {
                start: groupNum * 5 + 1,
                end: this.state.total
            }
        }
    }
    //页数不变
    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.current == this.state.current) {
            return false;
        }
        return true;
    }
    //回传页数
    componentDidUpdate() {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
            this.props.onPageChanged(this.state.current);
        }, 300)

    }
    render() {
        //渲染页数逻辑
        let pageItem = [];
        let groupIndex = this.renderPage();
        for (let num = groupIndex.start; num <= groupIndex.end; num++) {
            if (num > this.state.total || num < 1) continue;
            if (this.state.current == num) {
                pageItem.push(<div className="pageNum active" onClick={this.handlePage} key={num}>{num}</div>)
            } else {
                pageItem.push(<div className="pageNum" onClick={this.handlePage} key={num}>{num}</div>)
            }

        }
        return (
            <div className="page_easy">
                        <div className="prevPage" onClick={this.handlePrevPage}>&lt;&lt;</div>
                        {pageItem}
                        <div className="nextPage" onClick={this.handleNextPage}>&gt;&gt;</div>
                        <div className="page_input">
                            <span>转到 </span>
                            <input type="number" onChange={this.inputPage} ref="inputPage" />
                            <span> 页</span>
                        </div>
                        <div className="pageTotal">
                            <span>共</span>
                            <span>{this.state.total}</span>
                            <span>页</span>
                        </div>
                    </div>
            
        )
    }
}
const PageEasy = (props) =>{ 
    let { total } = props;
    if (total) {
        return <PageInit {...props} />
    } else { 
        return (
            <div className="page_easy">
                <div className="prevPage">&lt;&lt;</div>
                <div className="nextPage">&gt;&gt;</div>
                <div className="page_input">
                    <span>转到 </span>
                    <input type="number" />
                    <span> 页</span>
                </div>
                <div className="pageTotal">
                    <span>共</span>
                    <span>0</span>
                    <span>页</span>
                </div>
            </div>
        )
    }
    
}
export default PageEasy;