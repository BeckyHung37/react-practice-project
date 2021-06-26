import React from "react";

class Homepage extends React.Component {
    constructor(props){
        super(props);
    }
    changePage(e){
        e.preventDefault();
        this.props.click();
    }
    render(){
        return <div>
            <h1 className="header">React 練習專案</h1>
            <div className="content">
                <p className="subTitle">歡迎光臨我的頁面，現在時間是{new Date().toLocaleTimeString()}</p>
                <button className="btnType1" onClick={this.changePage.bind(this)}>點此開始</button>
            </div>
        </div>;
    }
}

export default Homepage;
